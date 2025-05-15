---
layout: docs
title: Prefab Pooling
---
# Prefab Pooling
RealtimePool is a component that manages object pooling for prefabs used with Normcore. Object pooling recycles GameObjects instead of destroying and recreating them, which improves performance and avoids frame drops by reducing instantiation and memory garbage collection costs.

## Getting started
1. Add the RealtimePool component to the same GameObject as your Realtime component.
2. That's it! The RealtimePool will automatically handle prefab pooling.

## How it works
When a prefab instance is requested by Realtime:
* If available instances exist in the pool: The oldest instance is reactivated and returned.
* If the pool is empty: A new instance is created automatically.

When a prefab instance is destroyed by Realtime:
* The instance is deactivated rather than truly destroyed.
* The instance is returned to its pool for future reuse.

Technical implementation:
* Each prefab type maintains its own separate pool.
* Object activation/deactivation uses Unity's standard `GameObject.SetActive()` method.
* This triggers the typical `OnEnable()`/`OnDisable()` component lifecycle events, which is an excellent place to initialize or clear component state.

## Preloading
By default the pool for each prefab is empty, and grows to accommodate the current instance count. For optimal results it’s recommended to feed the pool an educated guess of the maximum instance count you might encounter in a game session:

```csharp
// Preload 10 instances of a prefab using its name
realtimePool.PreloadPrefab("PlayerPrefab", 10);

// Preload 10 instances using a prefab reference
realtimePool.PreloadPrefab(playerPrefab, 10);

// Connect to room
// Note: pools should be preloaded before connecting to a room, not after (as this would defeat the purpose)
realtime.Connect("My Room");
```

## Advanced usage
### Lifecycle callbacks
Implement the `IRealtimePoolCallbacks` interface on your components to receive notifications when objects enter or exit the pool:

```csharp
public class MyComponent : MonoBehaviour, IRealtimePoolCallbacks {
    public void PrefabWillReuseFromPool() {
        // Called before this object is reused from the pool
    }

    public void PrefabWillReturnToPool() {
        // Called before this object is returned to the pool
    }
}
```

:::warning
Only `IRealtimePoolCallbacks` components directly attached to the prefab's root GameObject will receive pool callbacks. Components on child GameObjects implementing this interface won't be notified. This design choice prioritizes performance by using `GetComponents()` rather than the more expensive `GetComponentsInChildren()` method, which would traverse the entire prefab hierarchy.
:::

### Clearing
When you need to reclaim memory or prepare for different game states, you can clear specific pools or all pools at once:

```csharp
// Clear a specific prefab's pool
realtimePool.Clear(playerPrefab);

// Clear all pools
realtimePool.Clear();
```

These methods destroy all inactive pooled objects, freeing memory while preserving active instances still in use.

### Asynchronous preloading
In Unity 6 and later it’s possible to preload the pool asynchronously to avoid frame drops during instantiation. This is useful when expecting a very large number of instances:

```csharp
// Preload 10,000 bullet instances without blocking the main thread
AsyncInstantiateOperation<GameObject> operation = realtimePool.PreloadPrefabAsync(bulletPrefab, 10000);

// Connect to room after preloading completes
operation.completed += op => {
    Debug.Log("Preloading complete - connecting to room");
    realtime.Connect("My Room");
};
```

:::info
Preload pools before connecting to a room, but not after. Preloading after the connection defeats the purpose of avoiding hitches during gameplay when objects are spawned for the first time.
:::

## Low-level API
RealtimePool is implemented using Normcore's [IRealtimePrefabInstantiateDelegate](../reference/classes/Normal.Realtime.IRealtimePrefabInstantiateDelegate.md) interface, which allows for complete control over prefab instantiation and destruction. Advanced users can create their own custom pooling systems by implementing this interface with different strategies for object reuse, memory management, or specialized behaviors.

## Modifying RealtimePool
RealtimePool supports most cases out of the box, but if you would like to make changes, the source code to RealtimePool is included.