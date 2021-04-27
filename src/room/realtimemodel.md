---
layout: docs
title: RealtimeModel
---
# RealtimeModel

A RealtimeModel represents a collection of state to synchronize. A typical RealtimeModel looks like this:

```csharp
[RealtimeModel]
public class MyModel {
    [RealtimeProperty(1, true )] private stirng _name;

    [RealtimeProperty(2, true )] private Color _avatarPrimaryColor;
    [RealtimeProperty(3, true )] private Color _avatarAlternateColor;

    [RealtimeProperty(4, false)] private Vector3 _movementVelocity;
}
```

Each field is required to be a primitive component. Models are designed to synchronize data that can be easily serialized and transmitted to other clients. It is not possible to store a complex component such as a Material or Texture in a model. You'll need to pick out the pieces of data you would like to synchronize and use a RealtimeModel to synchronize them. Attempting to synchronize every public property of such an object would require too much bandwidth to do correctly and in most cases rarely are any of the values changed very often.

Tip: If you're new to RealtimeModel, check out the [Synchronizing Custom Data](../realtime/synchronizing-custom-data) guide, it provides an excellent overview of how to use a RealtimeModel in practice.

## RealtimeModel / RealtimeProperty attributes
The RealtimeModel attribute is used to signal to Normcore that this is a model class and that it should be available for model compilation. The RealtimeProperty attribute notates how the field should be synchronized.

### PropertyID
The first is the property ID. This is a unique ID that is used by Normcore to identify this property among others when sending data to and from the server. The property ID needs to be unique, but only to this model. It does not have to be unique to the whole project. It's generally a good idea to always start at 1 for each model that you create.

If you need to change the type of this property, you'll want to create a new property with a new property ID, and deprecate the existing one. This will ensure that newer versions of your application can still communicate with older versions. If you would like to delete this field altogether, make sure to retire its property ID so it is not reused for something else. Comment out the field and leave it in your source code so you can see previously used property IDs.

### Reliable / Unreliable
This marks whether the property should be synced reliably or unreliably. In general, if you plan to change a property very often (such as animating a color, or moving a transform), you should use an unreliable property. Unreliable updates are not resent if they’re dropped in transit because it’s expected that another update is following shortly after.

Reliable properties are good for things that you update once, but that should be resent if the packet is dropped in transit. This is great for state such as whether your game has started or not. When you change it, Normcore will ensure this value is synchronized between all clients and will make sure it is in sync before any newer reliable updates to are applied to the datastore.

### Change Event
The last option is an optional argument that specifies if you would like a change event added to the model. When this is set to true, a C# event is added that will fire when a property is changed locally or remotely. This is a useful signal to update your scene to match the model.


## Compiling a model
Once a model is written, it can be compiled in the Unity editor by highlighting the class and clicking "Compile Model". It's worth noting that if your project does not compile, Normcore's model compiler will be unable to load any of the state of your model. This will be fixed in a future Normcore update.

### Tip: Removing / renaming a property without breaking compilation
// TODO: Bring over copy from google doc for this.
