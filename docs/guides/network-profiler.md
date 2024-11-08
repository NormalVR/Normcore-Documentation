---
layout: docs
title: Profiling bandwidth with the Normcore profiler
---
import profilerSetUp                from './network-profiler/profiler-setup.mp4'
import profileUnlimitedInstances    from './network-profiler/profile-unlimited-instances.mp4'
import profilePooledInstances       from './network-profiler/profile-pooled-instances.mp4'
import networkSaturated             from './network-profiler/network-saturated.mp4'

# Profiling bandwidth with the Normcore profiler

This guide will show you how to use the network profiler tool to find and fix issues with your Normcore project sending too much data over the network.

## When to use the Normcore profiler

When you create a lot of RigidBodies your project is going to use a lot of bandwidth over the network. The profiler is a great way to figure out how to identify the issue and lower the bandwidth usage:

<video width="100%" controls><source src={networkSaturated} /></video> 

Additionally, rigidbody instances with low friction might take a while to sleep. These active rigidbodies continue generating data and contribute to ongoing network traffic even if they don't affect the player experience.

### Sample project

In this guide we're going to debug an application that spawns too many RigidBodies. We provide a project [here](</downloads/Profiler_Sample.zip>). It contains two scenes: **Unoptimized Scene** and **Optimized Scene**. The video above illustrating the issue uses the **Unoptimized Scene**.

In the Project window, open the **Unoptimized Scene** scene in the **Profiler Sample** folder. This scene spawns a basketball each time you click the mouse and lets them bounce until the network saturates.

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

* Ask a friend to run the sample project on their own device. Running the project on just one device will have perfect network conditions, making it harder to see the problem. You can also use a tool like [Clumsy](https://jagt.github.io/clumsy/) to create realistic network conditions for testing.
* Watch the network traffic in Unity's Profiler window as the sample runs. You should see a big increase in sent and received data as basketball instances are created and bounce around.

## Setting up the profiler

To diagnose and optimize bandwidth in your project, set up Normcore's profiler module in Unity's Profiler window:

- Open Unity's Profiler window `Window > Analysis > Profiler`.
- In the Profiler window, click on the `Profiler Modules` dropdown.
- Select `Normcore` from the available profiler modules.

<video width="100%" controls><source src={profilerSetUp} /></video> 

### Profiler data

With the Normcore profiler active, you'll see two key metrics in the Profiler window:
- **Sent**: Data sent from the client over time.
- **Received**: Data received by the client over time.

## Profiling

Look at the graphs showing sent and received data in the profiler. If you notice big jumps or patterns that match certain actions in your game, those actions might be causing a lot of data to be sent. For example, if data sent goes up whenever new rigidbody objects are made, those objects are likely using a lot of bandwidth.

<video width="100%" controls><source src={profileUnlimitedInstances} /></video>

The video above demonstrates how creating more objects increases the total data sent over time, causing spikes in the graph.

## Optimizing bandwidth

To optimize we're going to reuse basketballs. Once we've instantiated 50 basketballs we'll start re-using them by recycling the oldest basketball.

The optimized code looks like this:

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
        
        // Initialize the velocity
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

We drop that in and we can see in the profiler that the bandwidth usage stops increasing after we reach 50 basketballs.

This video uses the **Optimized Scene** scene from the [sample project](#sample-project) and shows the results of the optimized code:

<video width="100%" controls><source src={profilePooledInstances} /></video>

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
