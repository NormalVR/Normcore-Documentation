---
layout: docs
title: RealtimeTransform
---
# RealtimeTransform

- You can't add/remove the Rigidbody at runtime
  - Grab the explanation from Discord on this one
- Don't reparent!! You're going to have a bad time.

RealtimeTransform is a built-in RealtimeComponent that can be used to synchronize the transform or rigidbody of a GameObject.

## How it works
When you add a RealtimeTransform component to a GameObject, it monitors the transform of the object and synchronizes it to a model in the datastore. However, given that all clients have their own copy of the transform, RealtimeTransform uses ownership of the component to designate one client as the source of truth. This means that in order to move an object with a RealtimeTransform component on it, you must be the owner of the *RealtimeTransform* component.

### Ownership
You can request ownership of a RealtimeTransform by calling `RequestOwnership()` or by using the Request Ownership button in the editor inspector.

A RealtimeTransform is available for immediate use after `RequestOwnership()` is called. Normcore will assume the call succeeds, and will roll back any state changes automatically if the call is rejected by the server. Typically this can only happen if the RealtimeView or a parent RealtimeView is owned by a different client.

## Transform vs Rigidbody mode
RealtimeTransform works differently when a Rigidbody is present.

### Transform mode
When using without a Rigidbody present, RealtimeTransform synchronizes the localPosition, localRotation, and localScale of a GameObject. You may be asking, why not synchronize the world values? Well, two reasons, precision and transform hierarchy.

The world position, rotation, and scale values used by Unity are lossy. The local position, rotation, and scale variants are the true values, while the world variants are calculated using the transform of the object and its parents.

// TODO: Should this be "first and second" or "precision and transform hierarchy" or what?

The second is transform hierarchy. If you have a parent transform and a child transform, each RealtimeTransform will update the position to match the value in the datastore in Update(). Unfortunately, Unity does not guarantee script execution order for the same component type, and so Normcore has no way to ensure whether the child or the parent is updated first.

When using localPosition / localRotation / localScale, the order that these values are set does not matter, however when using the world-space values, setting the child before the parent will result in the child being in the wrong location.

### Rigidbody mode
When using a RealtimeTransform with a Rigidbody present, the world position and rotation values are synchronized instead. This is because Unity's physics engine (PhysX) works entirely in world space. For this reason, Unity recommends you do not add parents to Rigidbody components, and we recommend the same to avoid the transform hierarchy issues that Transform mode avoids.

#### Ownership
Rigidbody mode also handles ownership differently. When a rigidbody RealtimeTransform collides with another rigidbody RealtimeTransform, it will attempt to request ownership of that object in order to allow the same client to simulate both objects in the colision. However, it will only do so if the other object has no owner.

In order to allow objects at rest to be automatically owned by colliding objects, RealtimeTransform will automatically clear ownership when it goes to sleep. If you would like to avoid this behavior, use the inspector to switch the Sleep option to "Maintain Ownership While Sleeping".

Note: When implementing logic like picking up an object, we recommend marking the rigidbody kinematic. While a rigidbody is kinematic, ownership will not be cleared automatically, and the default sleep settings can be used.


Tip: Check out the [Networked Physics](./networked-physics) guide for more detailed info on how RealtimeTransform works in Rigidbody mode.
