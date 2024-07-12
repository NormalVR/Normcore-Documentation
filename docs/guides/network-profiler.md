---
layout: docs
title: Profiling bandwidth with the Normcore profiler
---
import profilerSetUp                from './network-profiler/profiler-setup.mp4'
import profileUnlimitedInstances    from './network-profiler/profile-unlimited-instances.mp4'
import profilePooledInstances       from './network-profiler/profile-pooled-instances.mp4'
import networkSaturated             from './network-profiler/network-saturated.mp4'


# Profiling bandwidth with the Normcore profiler

In this guide, we'll walk through using the network profiler to debug and optimize bandwidth consumption in your Normcore project. We'll cover setting up the profiler, interpreting its data, and implementing strategies to reduce used bandwidth.

## Scenario

When you have many frequently created rigidbody instances, the network traffic can get hefty. This increased traffic leads to higher bandwidth usage, potentially causing latency issues and impacting your app's performance. The profiler data often reveals each new instance contributes to a cumulative increase in sent and received data, leading to spikes in the network traffic graphs. Here's what the view looks like for the player receiving the data:

<video width="100%" controls><source src={networkSaturated} /></video> 

Additionally, rigidbody instances with low friction might take a while to sleep. These active rigidbodies continue generating data, even when no longer relevant, contributing to ongoing network traffic.

### Sample project

To understand this issue, we provide a [sample project](</downloads/Profiler_Sample.zip>) illustrating the problem with rigidbody instances. It contains two scenes: **Unoptimized Scene** and **Optimized Scene**. The video above illustrating the issue uses **Unoptimized Scene**.

In the Project window, open the **Unoptimized Scene** scene in the **Profiler Sample** folder. This scene instantiates basketballs on mouse clicks, letting them bounce until the network saturates.

The unoptimized code looks like this:

```csharp
using Normal.Realtime;
using UnityEngine;
using UnityEngine.InputSystem;

public class ShooterUnoptimized : MonoBehaviour {
    // Called once per frame
    private void Update() {
        // Check if the left mouse button was pressed this frame
        if (Mouse.current.leftButton.wasPressedThisFrame) ShootTenBasketballs();
    }

    // Shoot 10 basketballs
    private void ShootTenBasketballs() {
        for (var i = 0; i < 10; i++) Shoot();
    }

    // Shoot method to spawn a basketball
    private void Shoot() {
        var position = transform.position + transform.right * Random.Range(-4f, 4f);
        var instantiateOptions = Realtime.InstantiateOptions.defaults;
        instantiateOptions.ownedByClient = false;

        // Spawn a basketball in the same location as the shooter component
        var basketball = Realtime.Instantiate("Basketball", position, transform.rotation, instantiateOptions);
        
        // Set the velocity to a random forward/up velocity
        basketball.GetComponent<Rigidbody>().velocity = transform.forward * 5f;
        basketball.GetComponent<RealtimeTransform>().RequestOwnership();
    }
}
```
#### Important Tips:

* Run with a Friend: To better reproduce the issue, have a friend run the sample independently. Running locally on one machine might take longer. Alternatively, use a tool like [Clumsy](https://jagt.github.io/clumsy/) to simulate realistic network conditions.
* Observe Network Traffic: As the sample runs, watch the network traffic in Unity's Profiler window. You should see a big increase in sent and received data as basketball instances are created and bounce around.

Following these steps will let you see how numerous rigidbody instances lead to substantial network traffic, helping address this in your own projects.

## Setting up the profiler

To diagnose and optimize bandwidth in your project, set up Normcore's profiler module in Unity's Profiler window. This will visualize network traffic data, making bandwidth issues easier to identify and address. Follow these steps:

- Open Unity's Profiler window `Window > Analysis > Profiler`.
- In the Profiler window, click on the `Profiler Modules` dropdown.
- Select `Normcore` from the available profiler modules.

<video width="100%" controls><source src={profilerSetUp} /></video> 

### Profiler data

With the Normcore profiler active, you'll see two key metrics in the Profiler window:
- **Sent**: Data being sent from the client over time.
- **Received**: Data being received by the client over time.

## Profiling

Pay attention to the graphs for sent and received data. Look for spikes and trends correlating with specific events or actions. For instance, if you see a jump in data when new rigidbody instances are created, those instances are likely contributing heavily to traffic.

This video shows how sent data increases over time as new instances are created. The profiler reveals a pattern where each instance adds to the cumulative sent data, causing spikes.

<video width="100%" controls><source src={profileUnlimitedInstances} /></video> 

## Solution

To optimize bandwidth, it's crucial to manage rigidbody instances effectively. Two common strategies are reusing instances and destroying those that are too far from the player or no longer contributing to the simulation. Implementing these strategies can significantly reduce transmitted data.

In our sample, we have implemented a pooling mechanism that will create instances up to a certain limit and reuse the oldest instance when the instance limit is reached.

```csharp
using System.Collections.Generic;
using Normal.Realtime;
using UnityEngine;
using UnityEngine.InputSystem;

public class ShooterOptimized : MonoBehaviour {
    // A queue to store basketballs
    private Queue<GameObject> _basketballPool = new Queue<GameObject>();

    // Called once per frame
    private void Update() {
        // Check if the left mouse button was pressed this frame
        if (Mouse.current.leftButton.wasPressedThisFrame) ShootTenBasketballs();
    }

    // Shoot 10 basketballs
    private void ShootTenBasketballs() {
        for (var i = 0; i < 10; i++) Shoot();
    }

    // Shoot method to get an instance from the pool
    private void Shoot() {
        var position = transform.position + transform.right * Random.Range(-4f, 4f);
        var rotation = transform.rotation;

        // Spawn a basketball in the same location as the shooter component
        var basketball = InstantiateBasketballFromPool(position, rotation);
        
        // Set the velocity to a random forward/up velocity
        basketball.GetComponent<Rigidbody>().velocity = transform.forward * 5f;
        basketball.GetComponent<RealtimeTransform>().RequestOwnership();
    }

    // Instantiate a basketball from the pool
    private GameObject InstantiateBasketballFromPool(Vector3 position, Quaternion rotation) {
        GameObject basketball;

        // Once we hit 50 balls, reuse the oldest one.
        if (_basketballPool.Count >= 50) {
            // Grab the oldest basketball
            basketball = _basketballPool.Dequeue();

            // Reset the basketball's position and rotation
            basketball.transform.position = position;
            basketball.transform.rotation = rotation;
        } else {
            // Instantiate a fresh basketball
            var instantiateOptions = Realtime.InstantiateOptions.defaults;
            instantiateOptions.ownedByClient = false;
            basketball = Realtime.Instantiate("Basketball", position, rotation, instantiateOptions);
            basketball.GetComponent<RealtimeTransform>().RequestOwnership();
        }

        // Put the basketball at the end of the queue and return it
        _basketballPool.Enqueue(basketball);
        return basketball;
    }
}
```
You can find the complete script in the sample project.

After reusing instances, you should see less data being sent and a more stable network traffic graph. The following video uses the **Optimized Scene** scene from the [sample project](#sample-project).

<video width="100%" controls><source src={profilePooledInstances} /></video> 

By leveraging Normcore's network profiler and techniques such as instance pooling, you can effectively diagnose and resolve bandwidth issues for a more efficient and performant application.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
