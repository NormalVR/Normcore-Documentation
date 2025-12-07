---
layout: docs
title: RealtimeRef
---
# RealtimeRef

**RealtimeRef** lets you synchronize references to RealtimeViews and RealtimeComponents across the network. This is useful when you need to point to another networked object, like a player targeting another player, or an object being held by a specific hand.

Previously, referencing another networked object required manually tracking object IDs or other workarounds. RealtimeRef provides a first-class way to store and sync references to any RealtimeView or RealtimeComponent.

## Declaring a reference

In your RealtimeModel, declare a property with a **RealtimeView** or **RealtimeComponent** type:

```csharp
[RealtimeModel]
public partial class TargetingModel {
    [RealtimeProperty(1, true, true)]
    private RealtimeView _target;
}
```

You can also reference a specific component type as long as it's a **RealtimeComponent** subclass:

```csharp
[RealtimeModel]
public partial class ControllerModel {
    [RealtimeProperty(1, true, true)]
    private GrabbableObject _grabbedObject;
}
```

## Generated properties

The model compiler generates three members for each reference property:

- **`target`**: The resolved view or component. Returns `null` if the reference is unassigned or unresolved.
- **`targetDidChange`**: An event that fires when the resolved value changes.
- **`targetRef`**: A `RealtimeRef<T>` with state information and more detailed change events.

```csharp
public class RealtimeRefExample : RealtimeComponent<RealtimeRefExampleModel> {
    public RealtimeView target {
        get => model.target;
        set => model.target = value;
    }

    protected override void OnRealtimeModelReplaced(TargetingModel previousModel, TargetingModel currentModel) {
        if (previousModel != null) {
            previousModel.targetDidChange -= OnTargetChanged;
        }

        if (currentModel != null) {
            currentModel.targetDidChange += OnTargetChanged;
        }
    }

    private void OnTargetChanged(TargetingModel model, RealtimeView value) {
        Debug.Log($"Target changed to: {value}");
    }
}
```

## Reference state

A reference can be in one of three states, accessed via `targetRef.state`:

- **`Unassigned`**: The reference is explicitly set to null.
- **`Unresolved`**: The reference points to an object that isn't available locally yet. It may not be replicated, not yet deserialized, or already despawned.
- **`Resolved`**: The referenced view or component is accessible.

The `Unresolved` state handles timing issues that occur when a reference is set before the referenced object has been replicated to all clients. Once the object arrives, the state transitions to `Resolved` and the value becomes accessible.

## Change events

// TODO: Outline all of the change events / public properties on the RealtimeRef&lt;T&gt; object.

## Cleanup

When a referenced object is destroyed, the reference automatically transitions to `Unresolved` (TODO: Is this what we landed on?). The `didChange` event fires with the new state, allowing you to react appropriately. For example, you might clear UI elements or release resources associated with the reference.
