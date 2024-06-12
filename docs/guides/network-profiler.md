---
layout: docs
title: Network Profiler
---
import profilerSetUp                from './network-profiler/profiler-setup.mp4'
import profileUnlimitedInstances    from './network-profiler/profile-unlimited-instances.mp4'
import profilePooledInstances       from './network-profiler/profile-pooled-instances.mp4'
import networkSaturated             from './network-profiler/network-saturated.mp4'


# Network Profiler

This guide will walk you through using the network profiler to debug and optimize the bandwidth consumption in your project. We will cover how to set up the profiler, interpret its data, and implement strategies to reduce the used bandwidth.

## The Issue

In scenarios where numerous rigidbody instances are frequently created, the network traffic can become substantial. This increase in network traffic can lead to higher bandwidth consumption, potentially causing latency issues and negatively impacting the overall performance of your application. The profiler data often reveals that each new instance contributes to a cumulative increase in the amount of data being sent and received, leading to noticeable spikes in the network traffic graphs.

Additionally, rigidbody instances with low friction might take a long time to enter the sleep state. This can further contribute to ongoing network traffic as these active rigidbodies continue to generate data, even when they are no longer relevant to the player's view.

### Sample Project

To help you understand and diagnose this issue, we provide a sample project that illustrates the problem with rigidbody instances. You can start by downloading and running the [sample project](</downloads/Profiler_Sample.zip>). The sample consists of multiple basketballs instantiated on mouse click, bouncing around until the network becomes saturated.
To reproduce the issue more effectively, you may need a friend to run the sample independently on their machine. Running it locally on a single machine might take longer for the issue to become apparent.

<video width="100%" controls><source src={networkSaturated} /></video> 

## Setting up the Profiler

To begin diagnosing and optimizing bandwidth usage in your project, you need to set up the Normcore profiler module within Unity's Profiler window. This module will help you visualize and analyze the network traffic data, making it easier to identify and address issues related to bandwidth consumption. Follow these steps to set up the profiler:

- Open Unity's Profiler window `Window > Analysis > Profiler`.
- In the Profiler window, click on the `Profiler Modules` dropdown.
- Select `Normcore` (or any of its variants) from the list of available profiler modules.

<video width="100%" controls><source src={profilerSetUp} /></video> 

### Understanding the Data

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

## Identifying the Issue

Pay close attention to the graphs for these metrics. Look for spikes and trends in the data that correlate with specific events or actions in your application. For instance, if you see a significant increase in data when new rigidbody instances are created, this indicates that these instances are contributing heavily to network traffic.

This video demonstrates how the sent data increases over time as new rigidbody instances are created. The profiler will reveal a pattern where each new instance adds to the cumulative amount of data being sent, leading to noticeable spikes.

<video width="100%" controls><source src={profileUnlimitedInstances} /></video> 

## Fixing the Issue

To optimize bandwidth usage, it is crucial to manage rigidbody instances effectively. Two effective strategies to achieve this are reusing rigidbody instances and destroying instances that are far away from the player or no longer contributing to the scene. By implementing these approaches, you can significantly reduce the amount of data transmitted over the network.

<video width="100%" controls><source src={profilePooledInstances} /></video> 

After implementing the reuse strategy, you should observe a reduction in the amount of data being sent and a more stable network traffic graph.

By employing these optimization techniques and leveraging the Normcore profiler module in Unity's Profiler window, you can effectively diagnose and resolve bandwidth issues, leading to a more efficient and performant application.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
