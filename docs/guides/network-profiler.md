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

## The Issue

When you have many frequently created rigidbody instances, the network traffic can get hefty. This increased traffic leads to higher bandwidth usage, potentially causing latency issues and impacting your app's performance. The profiler data often reveals each new instance contributes to a cumulative increase in sent and received data, leading to spikes in the network traffic graphs.

<video width="100%" controls><source src={networkSaturated} /></video> 

Additionally, rigidbody instances with low friction might take a while to sleep. These active rigidbodies continue generating data, even when no longer relevant, contributing to ongoing network traffic.

### Sample Project

To understand this issue, we provide a [sample project](</downloads/Profiler_Sample.zip>) illustrating the problem with rigidbody instances. It contains two scenes: **UnlimitedInstances** and **PooledInstances**. The issue video uses **UnlimitedInstances**.

In the Project window, open the **UnlimitedInstances** scene under **Profiler Sample**. This scene instantiates basketballs on mouse clicks, letting them bounce until the network saturates.

#### Important Tips:

* Run with a Friend: To better reproduce the issue, have a friend run the sample independently. Running locally on one machine might take longer.
* Observe Network Traffic: As the sample runs, watch the network traffic in Unity's Profiler window. You should see a big increase in sent and received data as basketball instances are created and bounce.

Following these steps will let you see how numerous rigidbody instances lead to substantial network traffic, helping address this in your own projects.

## Setting up the Profiler

To diagnose and optimize bandwidth in your project, set up Normcore's profiler module in Unity's Profiler window. This will visualize network traffic data, making bandwidth issues easier to identify and address. Follow these steps:

- Open Unity's Profiler window `Window > Analysis > Profiler`.
- In the Profiler window, click on the `Profiler Modules` dropdown.
- Select `Normcore` from the available profiler modules.

<video width="100%" controls><source src={profilerSetUp} /></video> 

### Understanding the Data

With the Normcore profiler active, you'll see two key metrics in the Profiler window:
- **Sent**: Data being sent from the client over time.
- **Received**: Data being received by the client over time.

## Identifying the Issue

Pay attention to the graphs for sent and received data. Look for spikes and trends correlating with specific events or actions. For instance, if you see a jump in data when new rigidbody instances are created, those instances are likely contributing heavily to traffic.

This video shows how sent data increases over time as new instances are created. The profiler reveals a pattern where each instance adds to the cumulative sent data, causing spikes.

<video width="100%" controls><source src={profileUnlimitedInstances} /></video> 

## Fixing the Issue

To optimize bandwidth, it's crucial to manage rigidbody instances effectively. Two strategies are reusing instances and destroying those far from the player or no longer contributing. Implementing these can significantly reduce transmitted data.

<video width="100%" controls><source src={profilePooledInstances} /></video> 

After reusing instances, you should see less sent data and a more stable traffic graph. The video above uses the **PooledInstances** scene from the [sample project](#sample-project).

By leveraging these techniques and Normcore's profiler in Unity's Profiler, you can effectively diagnose and resolve bandwidth issues for a more efficient, performant application.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
