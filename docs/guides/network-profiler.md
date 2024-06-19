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

To understand this issue, we provide a [sample project](</downloads/Profiler_Sample.zip>) illustrating the problem with rigidbody instances. It contains two scenes: **Unoptimized Scene** and **Optimized Scene**. The issue video uses **Unoptimized Scene**.

In the Project window, open the **Unoptimized Scene** scene under **Profiler Sample**. This scene instantiates basketballs on mouse clicks, letting them bounce until the network saturates.

The unoptimized code looks like this:
```csharp
using Normal.Realtime;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerUnoptimized : MonoBehaviour {
    // Number of instances to create per click
    public int instancesPerClick = 10;

    // Called when a value is changed in the inspector
    private void OnValidate() {
        // Ensure instancesPerClick is always at least 1
        instancesPerClick = Mathf.Max(1, instancesPerClick);
    }

    // Called once per frame
    private void Update() {
        // Check if the left mouse button was pressed this frame
        if (Mouse.current.leftButton.wasPressedThisFrame) {
            // Create the specified number of instances per click
            for (var i = 0; i < instancesPerClick; i++) {
                Shoot();
            }
        }
    }

    // Shoot method to create and initialize an instance
    private void Shoot() {
        // Get the initial position and rotation
        var pose = GetInitialPose();
        // Instantiate the "Sphere" prefab at the specified position and rotation
        var instance = Realtime.Instantiate("Sphere", pose.position, pose.rotation, Realtime.InstantiateOptions.defaults);

        // If instantiation failed, return early
        if (instance == null) return;

        // If the instance has a Rigidbody component
        if (instance.TryGetComponent<Rigidbody>(out var rigidbody)) {
            // Calculate the force direction with random variations
            var up = Vector3.up * Mathf.Lerp(0.2f, 1f, Random.value);
            var right = Vector3.right * Mathf.Lerp(-0.5f, 0.5f, Random.value);
            var direction = transform.TransformDirection((Vector3.forward + up + right).normalized);
            var speed = 5f;

            // Apply the calculated force to the Rigidbody
            rigidbody.AddForce(direction * speed, ForceMode.VelocityChange);
        }

        // If the instance has a RealtimeTransform component
        if (instance.TryGetComponent<RealtimeTransform>(out var realtimeTransform)) {
            // Request ownership of the RealtimeTransform
            realtimeTransform.RequestOwnership();
        }
    }

    // Get the initial pose for the instance
    private static Pose GetInitialPose() {
        // Get the main camera's transform
        var transform = Camera.main.transform;

        // Return a new Pose with position and rotation set
        return new Pose() {
            position = transform.position + Vector3.up + Vector3.right * Random.Range(-4f, 4f),
            rotation = Quaternion.identity
        };
    }
}
```
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

In our sample, we have implemented the following **PrefabPool**, that will instantiate up to a certain limit and reuse the oldest instance when the instance limit is reached.
```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

// A pool for managing a set number of prefab instances
public class PrefabPool : IDisposable {
    // List to hold the prefab instances
    private List<GameObject> _instances = new List<GameObject>();

    // Index to keep track of the next instance to reuse
    private int _index;

    // Size of the pool (maximum number of instances)
    private readonly int _size;

    // Name of the prefab to instantiate
    private readonly string _prefabName;

    // Delegate for the instantiate method
    private readonly Func<string, GameObject> _instantiate;

    // Delegate for the initialize method
    private readonly Action<GameObject> _initialize;

    // Constructor to initialize the pool
    public PrefabPool(string prefabName, int size, Func<string, GameObject> instantiate, Action<GameObject> initialize) {
        // Validate parameters
        if (string.IsNullOrEmpty(prefabName))
            throw new ArgumentException(nameof(prefabName));
        if (size <= 0)
            throw new ArgumentOutOfRangeException(nameof(size));
        if (instantiate == null)
            throw new ArgumentNullException(nameof(instantiate));
        if (initialize == null)
            throw new ArgumentNullException(nameof(initialize));

        // Set the pool properties
        _size = size;
        _prefabName = prefabName;
        _instantiate = instantiate;
        _initialize = initialize;
    }

    // Method to dispose of the pool and destroy all instances
    public void Dispose() {
        // Destroy each instance in the pool
        foreach (var instance in _instances)
            GameObject.Destroy(instance);
    }

    // Try to get an instance from the pool
    public bool TryGetInstance(out GameObject instance) {
        instance = null;

        // If the pool is not full, instantiate a new instance
        if (_instances.Count < _size) {
            if (TryInstantiate(_prefabName, out instance)) {
                // Add the new instance to the pool
                _instances.Add(instance);
                // Initialize the new instance
                _initialize.Invoke(instance);
            }
        } else if (_index < _instances.Count) {
            // Reuse an existing instance from the pool
            instance = _instances[_index++];
            // Initialize the reused instance
            _initialize.Invoke(instance);
            // Reset the index if it exceeds the count
            _index %= _instances.Count;
        }

        // Return whether an instance was successfully obtained
        return instance != null;
    }

    // Try to instantiate a new prefab instance
    private bool TryInstantiate(string prefab, out GameObject instance) {
        // Use the delegate to instantiate the prefab
        instance = _instantiate.Invoke(prefab);
        // Return whether instantiation was successful
        return instance != null;
    }
}
```
Our **PlayerOptimized** code then looks like this:

```csharp
using Normal.Realtime;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerOptimized : MonoBehaviour {
    // Number of instances to create per click
    public int instancesPerClick = 10;

    // Create a prefab pool with a pool size of 100, using the custom Instantiate and Initialize methods
    private PrefabPool _pool = new PrefabPool("Sphere", 100, Instantiate, Initialize);

    // Called when the object is destroyed
    private void OnDestroy() {
        // Dispose of the pool to clean up resources
        _pool.Dispose();
    }

    // Called when a value is changed in the inspector
    private void OnValidate() {
        // Ensure instancesPerClick is always at least 1
        instancesPerClick = Mathf.Max(1, instancesPerClick);
    }

    // Called once per frame
    private void Update() {
        // Check if the left mouse button was pressed this frame
        if (Mouse.current.leftButton.wasPressedThisFrame) {
            // Create the specified number of instances per click
            for (var i = 0; i < instancesPerClick; i++) {
                Shoot();
            }
        }
    }

    // Shoot method to get an instance from the pool
    private void Shoot() {
        _pool.TryGetInstance(out _);
    }

    // Custom Instantiate method for the pool
    private static GameObject Instantiate(string prefab) {
        // Get the initial position and rotation
        var pose = GetInitialPose();
        // Instantiate the prefab at the specified position and rotation
        return Realtime.Instantiate(prefab, pose.position, pose.rotation, Realtime.InstantiateOptions.defaults);
    }

    // Custom Initialize method for the pool
    private static void Initialize(GameObject instance) {
        // Get the main camera's transform
        var transform = Camera.main.transform;

        // Set the instance position relative to the camera with random horizontal offset
        instance.transform.position = transform.position + Vector3.up + Vector3.right * Random.Range(-4f, 4f);

        // If the instance has a Rigidbody component
        if (instance.TryGetComponent<Rigidbody>(out var rigidbody)) {
            // Calculate the force direction with random variations
            var up = Vector3.up * Mathf.Lerp(0.2f, 1f, Random.value);
            var right = Vector3.right * Mathf.Lerp(-0.5f, 0.5f, Random.value);
            var direction = transform.TransformDirection((Vector3.forward + up + right).normalized);
            var speed = 5f;

            // Reset the velocity and apply the calculated force
            rigidbody.velocity = Vector3.zero;
            rigidbody.AddForce(direction * speed, ForceMode.VelocityChange);
        }

        // If the instance has a RealtimeTransform component
        if (instance.TryGetComponent<RealtimeTransform>(out var realtimeTransform)) {
            // Request ownership of the RealtimeTransform
            realtimeTransform.RequestOwnership();
        }
    }

    // Get the initial pose for the instance
    private static Pose GetInitialPose() {
        // Get the main camera's transform
        var transform = Camera.main.transform;

        // Return a new Pose with position and rotation set
        return new Pose() {
            position = transform.position + Vector3.up + Vector3.right * Random.Range(-4f, 4f),
            rotation = Quaternion.identity
        };
    }
}
```

After reusing instances, you should see less sent data and a more stable traffic graph. The following video uses the **Optimized Scene** scene from the [sample project](#sample-project).

<video width="100%" controls><source src={profilePooledInstances} /></video> 

By leveraging these techniques and Normcore's profiler in Unity's Profiler, you can effectively diagnose and resolve bandwidth issues for a more efficient, performant application.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
