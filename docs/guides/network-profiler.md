---
layout: docs
title: Using the Network Profiler
---
import openProject        from './network-profiler/open-project.mp4'
import openProfiler       from './network-profiler/open-profiler.mp4'
import profileUnoptimized from './network-profiler/profile-unoptimized.mp4'
import profileOptimized   from './network-profiler/profile-optimized.mp4'

# Using the Network Profiler

This guide will show you how to use Normcore's network profiler tool to analyze bandwidth use in your application.

Whether you're trying to reduce bandwidth usage to improve performance or lower networking costs, the network profiler is a great way to see your bandwidth usage in real-time.


## Getting Started

We'll start with a simple project that spawns a handful of basketballs every time the mouse is clicked. Download the [sample project](https://github.com/NormalVR/Normcore-Samples/releases/latest/download/Normcore-Network-Profiler.zip) if you'd like to follow along.

Open up the "Basketball Shooter (Unoptimized)" scene in the sample project.

<video width="100%" controls><source src={openProject} /></video>

Hit Play, and once you're connected to the room server, click the mouse to shoot 10 basketballs at a time.

## Setting up the profiler

Normcore's network profiler is available as a module within the Unity Profiler window. You can add or remove modules based on what you plan to profile:

1. Open Unity's Profiler window by going to Window > Analysis > Profiler.
2. In the Profiler window, click on the "Profiler Modules" dropdown.
3. Select "Normcore" to see the total bandwidth use across the whole app or modules like "Normcore Audio" to see bandwidth for voice chat only.

<video width="100%" controls><source src={openProfiler} /></video>

Every module has two metrics available:
- **Sent**: The total data sent per frame to the server.
- **Received**: The total data received per frame from the server.

:::tip
By default Unity's Profiler only stores 300 frames of data. We generally recommend setting this to 1000+ frames and disabling vsync in the editor to ensure framerate doesn't spike and spam profiler frames.
:::

## Profiling

Hit Play, wait to connect to the room, and then click the mouse to shoot 10 basketballs at a time. You'll notice every time the mouse is clicked, the amount of data sent increases. There's a spike when basketballs are instantiated, followed by a consistent stream of data as they move around.

<video width="100%" controls><source src={profileUnoptimized} /></video>

:::tip
Run multiple instances of the app if you're trying to optimize receive bandwidth. If you're only running one instance, Normcore's servers will not have any data to send to the profiling client.
:::

If we look at the code, it’s clear why we’re seeing this behavior. Every time we shoot, we instantiate a new basketball prefab and each one has a RealtimeTransform that's sending new updates every network frame:

```csharp {32}
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

## Optimizing bandwidth

A quick way to optimize this is to reuse basketball instances. Once we've instantiated 50 basketballs, we'll start reusing existing instances starting with the oldest one.

```csharp {27,34-60}
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
            basketball.GetComponent<Rigidbody>().position = position;
            basketball.GetComponent<Rigidbody>().rotation = rotation;
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

Let's try out this new version. We've included a copy of it in the "Basketball Shooter (Optimized)" scene in the [sample project](https://github.com/NormalVR/Normcore-Samples/releases/latest/download/Normcore-Network-Profiler.zip) if you'd like to try it out.

<video width="100%" controls><source src={profileOptimized} /></video>

:::tip
When optimizing the bandwidth of your application, focus on data that's sent over long periods of time. Spikes during instantiation do not have a significant impact on your costs or network performance.
:::

This looks much better. As basketballs are instantiated, the amount of data sent grows, but once we hit 50 basketballs, the data sent stops increasing.

That's all there is to it. The network profiler is a great way to see what's going on in your application. As you start optimizing, check out the other Profiler modules. They break down bandwidth by audio, datastore, RPCs, and reliable/unreliable channels.
