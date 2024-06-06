---
layout: docs
title: Network Profiler
---
import profilerSetUp            from './network-profiler/profiler-setup.mp4'
import profileReusedInstances   from './network-profiler/profile-reused-instances.mp4'


# Network Profiler

This guide will walk you through using the network profiler to debug and optimize the bandwidth consumption in your project. We will cover how to set up the profiler, interpret its data, and implement strategies to reduce the bandwidth consumed by numerous simulated rigidbodies.

## Setting up the Profiler

- Open Unity's Profiler window `Window > Analysis > Profiler`.
- In the Profiler window, click on the `Profiler Modules` dropdown.
- Select `Normcore` (or any of its variants) from the list of available profiler modules.

Once the Normcore profiler module is active, you'll see two key metrics in the Profiler window:
- **Sent**: The amount of data being sent from the client over time.
- **Received**: The amount of data being received by the client over time.

These metrics are visualized as graphs, allowing you to track spikes and trends in network traffic.
The profiler records a sample per frame. In order to get nice graphs, we recommend setting the target frame-rate to 60 or 30.

```csharp
void Start()
{
    Application.targetFrameRate = 60;
}
```

<video width="100%" controls><source src={profilerSetUp} /></video> 

In this example we instantiate multiple simulated rigidbodies. The profiler will show how the sent data increases over time for each new instance.

## Optimizing the Bandwidth

In scenarios where numerous rigidbody instances are frequently created, the network traffic can become substantial. One effective strategy to optimize bandwidth usage is to reuse rigidbody instances rather than creating new ones.

<video width="100%" controls><source src={profileReusedInstances} /></video> 

As we can appreciate in the profiler, reusing instances when possible will stop increasing the amount of sent data.

By utilizing the Normcore profiler module in Unity's Profiler window, you can effectively diagnose and resolve bandwith issues.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
