---
layout: docs
title: Using the Network Profiler
---
import profilerSetUp                from './network-profiler/profiler-setup.mp4'
import profileUnlimitedInstances    from './network-profiler/profile-unlimited-instances.mp4'
import profilePooledInstances       from './network-profiler/profile-pooled-instances.mp4'
import networkSaturated             from './network-profiler/network-saturated.mp4'

# Using the Normcore Network Profiler

This guide will show you how to use Normcore's network profiler tool to analyze bandwidth use in your application.

Whether you're trying to reduce your bandwidth use to improve performance or reduce your networking costs, the Network Profiler is a great way to see what your bandwidth usage is in real-time.


## Getting Started

We're going to start with a simple project that spawns a handful of basketballs every time the mouse is clicked. If you'd like to follow along, you can download the sample project [here](https://google.com).
TODO: Update link to samples repo


We're going to start by opening up the "Basketball Shooter (Unoptimized)" scene in the sample project.

<video width="100%" controls><source src={networkSaturated} /></video>

## Setting up the profiler

Normcore's network profiler is available as a module within the Unity Profiler window. You can add or remove modules based on what you plan to profile:

1. Open Unity's Profiler window `Window > Analysis > Profiler`.
2. In the Profiler window, click on the "Profiler Modules" dropdown.
3. Select "Normcore" to see the total bandwidth use across the whole app or modules like "Normcore Audio" to see bandwidth for voice chat only.

// TODO: Put a note that you may want to set the number of profiler frames in X > Y > Z in order to see enough historical data.

<video width="100%" controls><source src={profilerSetUp} /></video>

Every module has two metrics available:
- **Sent**: The total data sent per frame to the server.
- **Received**: The total data received per frame from the server.

## Profiling

With the profiler up, let's run our test scene. You'll see every time the mouse is clicked, the amount of data sent increases. There's a small spike when basketballs are instantiated, followed by a consistent stream of data sent as the basketballs move around.

<video width="100%" controls><source src={profileUnlimitedInstances} /></video>

:::tip
Run multiple instances of the app if you're trying to optimize receive bandwidth. If you're only running one instance, Normcore's servers will not have any data to send you.
:::

## Optimizing bandwidth

:::tip
When optimizing the bandwidth of your application, focus on data that's sent over long periods of time. Spikes during instantiation do not have a significant impact on your costs or network performance.
:::

Now that we can see our bandwidth usage, let's optimize it. From looking at the video above, it's clear that our bandwidth use grows whenever we spawn new basketballs. If we take a look at the code for this, it becomes pretty clear why:

```csharp
using Normal.Realtime;
using UnityEngine;
using UnityEngine.InputSystem;
using System.Collections.Generic;

public class ShooterUnoptimized : MonoBehaviour {
    private void Update() {
        // If the mouse was clicked, spawn 10 basketballs.
        if (Mouse.current.leftButton.wasPressedThisFrame) {
            ShootTenBasketballs();
        }
    }

    // Shoot 10 basketballs
    private void ShootTenBasketballs() {
        for (var i = 0; i < 10; i++) {
            Shoot();
        }
    }

    // Shoot a single basketball
    private void Shoot() {
        // Aim in a random direction
        var position = transform.position + transform.right * Random.Range(-4.0f, 4.0f);

        // Set ownedByClient to false so other clients can take over ownership on collision
        var instantiateOptions = new Realtime.InstantiateOptions() {
            ownedByClient = false,
        };

        // Spawn a basketball prefab
        var basketball = Realtime.Instantiate("Basketball", position, transform.rotation, instantiateOptions);

        // Set the velocity to a random forward/up velocity
        basketball.GetComponent<RealtimeTransform>().RequestOwnership();
        basketball.GetComponent<Rigidbody>().linearVelocity = transform.forward * 5.0f;
    }
}
```

Every time we shoot, we instantiate new basketball prefabs and each one has a RealtimeTransform that's consistently sending updates. A quick way to optimize this case is to reuse basketball instances. Once we've instantiated 50 basketballs, we'll start reusing existing instances, starting with the oldest one.

TODO: Redo this code sample to match the above sample as closely as possible
TODO: Highlight the lines of code that were changed to optimize it.
```csharp
using Normal.Realtime;
using UnityEngine;
using UnityEngine.InputSystem;
using System.Collections.Generic;

public class ShooterOptimized : MonoBehaviour {
    private void Update() {
        // If the mouse was clicked, spawn 10 basketballs.
        if (Mouse.current.leftButton.wasPressedThisFrame) {
            ShootTenBasketballs();
        }
    }

    // Shoot 10 basketballs
    private void ShootTenBasketballs() {
        for (var i = 0; i < 10; i++) {
            Shoot();
        }
    }

    // Shoot a single basketball
    private void Shoot() {
        // Aim in a random direction
        var position = transform.position + transform.right * Random.Range(-4.0f, 4.0f);

        // Spawn a basketball prefab
        var basketball = InstantiateBasketballFromPool(position, transform.rotation);

        // Set the velocity to a random forward/up velocity
        basketball.GetComponent<RealtimeTransform>().RequestOwnership();
        basketball.GetComponent<Rigidbody>().linearVelocity = transform.forward * 5.0f;
    }

    // Create a queue to reuse basketballs
    private Queue<GameObject> _basketballPool = new Queue<GameObject>();

    private GameObject InstantiateBasketballFromPool(Vector3 position, Quaternion rotation) {
        GameObject basketball;

        // Once we hit 50 basketballs, reuse the oldest one.
        if (_basketballPool.Count >= 50) {
            // Grab the oldest basketball
            basketball = _basketballPool.Dequeue();

            // Reset the basketball's position and rotation
            basketball.transform.position = position;
            basketball.transform.rotation = rotation;
        } else {
            // Instantiate a fresh basketball
            var instantiateOptions = new Realtime.InstantiateOptions() {
                ownedByClient = false,
            };
            basketball = Realtime.Instantiate("Basketball", position, rotation, instantiateOptions);
            basketball.GetComponent<RealtimeTransform>().RequestOwnership();
        }

        // Put the basketball at the end of the queue and return it
        _basketballPool.Enqueue(basketball);
        return basketball;
    }
}
```

Let's try out this new version. We've included a copy of it in the "Basketball Shooter (Optimized)" scene in the sample project.
// TODO: Link the sample project again

<video width="100%" controls><source src={profilePooledInstances} /></video>

This looks much better. As basketballs are instantiated, our bandwidth use grows, but once we hit 50 basketballs, our bandwidth stops increasing.

And that's all there is to it! The Network Profiler is a great way to see what's going on in your application and how to optimize it.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
