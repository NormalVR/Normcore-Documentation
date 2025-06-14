---
layout: docs
title: RealtimeModel
---
# RealtimeModel

A RealtimeModel represents a collection of states to synchronize. A typical RealtimeModel looks like this:

```csharp
[RealtimeModel]
public partial class MyModel {
    [RealtimeProperty(1, true )] private string _name;

    [RealtimeProperty(2, true )] private Color _avatarPrimaryColor;
    [RealtimeProperty(3, true )] private Color _avatarAlternateColor;

    [RealtimeProperty(4, false)] private Vector3 _movementVelocity;
}
```

Models shouldn't be a subclass of any other class. Models also need to be `partial` classes so that Normcore can supplement the class with the networking code.

Each field is required to be a [primitive type](./supported-primitives.md). Models are designed to synchronize data that can be easily serialized and transmitted to other clients. It is not possible to store a complex object, such as a Material or Texture, in a model. You'll need to pick out the pieces of data you would like to synchronize and use a RealtimeModel to synchronize them. Attempting to synchronize every public property of such an object would require too much bandwidth, and in most cases is not necessary.

*Tip: If you're new to RealtimeModel, check out the [Synchronizing custom data](../guides/synchronizing-custom-data.md) guide, it provides an excellent overview of how to use a RealtimeModel in practice.*

## `[RealtimeModel]` and `[RealtimeProperty]`
The `[RealtimeModel]` attribute is used to signal to Normcore that this is a model class and that it should be available for model compilation. The `[RealtimeProperty]` attribute notates how the field should be synchronized.

### PropertyID
The first field is the property ID. This is an identifier used by Normcore to distinguish this property from others when sending data to and from the server. The property ID needs to be unique, but only to this model. **It does not have to be unique to the whole project.** It's generally a good idea to start numbering property IDs with 1 for each model you create.

If you need to change the type of this property, you can create a new property with a new property ID and deprecate the existing one. This ensures that newer versions of your application can still communicate with older versions. If you would like to delete this field altogether, make sure to retire its property ID so it is not reused for something else. Comment out the field, and leave it in your source code so you can see previously used property IDs.

### Reliable / unreliable
The next option marks whether the property should be synced reliably or unreliably. In general, if you plan to change a property frequently—for instance, when animating a color or moving a transform—you should use an unreliable property. Unreliable updates are not resent if they’re dropped in transit because it’s expected that another update will follow shortly after.

Reliable properties are good for things that you update once and that should therefore be resent if the packet is dropped in transit. This is great for state updates, such as whether your game has started or not. When you change the value, Normcore ensures this value is received by all clients and applied to the datastore in order.

### Change event
The last option is an optional argument that specifies whether you would like a change event added to the model. When this is set to true, a C# event that will fire when a property is changed locally or remotely is added to the model by the model compiler. This is a useful signal to update your scene to match the model.

## `[Interpolate]`
By default, Normcore synchronizes model properties at 20 Hz (see [Datastore](../room/datastore.md#delta-updates)). For properties that are updated frequently, you can use the `[Interpolate]` attribute to smoothly animate the property:

```csharp
using UnityEngine;

[RealtimeModel]
public partial class ColorSyncModel {
    [RealtimeProperty(1, true, true), Interpolate]
    private Color _color;
}
```

In addition to creating the `color` property, the `[Interpolate]` attribute will create a `colorInterpolated` property:

```csharp {10}
using UnityEngine;
using Normal.Realtime;

public class ColorSync : RealtimeComponent<ColorSyncModel> {

    // ...

    private void UpdateMeshRendererColor() {
        // Get the interpolated color from the model and set it on the mesh renderer.
        _meshRenderer.material.color = model.colorInterpolated;
    }
}
```

This property uses the same timeline algorithm that Normcore uses for components like RealtimeTransform. As model updates are received, they're placed on a timeline, and whenever the `colorInterpolated` property is accessed, it will use the timeline to provide a smooth interpolation between the last two values.

:::tip
Interpolated attributes require that the model is owned by a client. The owning client is used as the source of truth and that client will send the timing information needed to interpolate the property.
:::
