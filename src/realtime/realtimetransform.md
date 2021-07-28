---
layout: docs
title: RealtimeTransform
---
# RealtimeTransform

RealtimeTransform is a built-in [RealtimeComponent](./realtimecomponent) that can be used to synchronize the transform or rigidbody of a GameObject.

## How it works
To use RealtimeTransform, all you need to do is add it to a GameObject and make sure one client owns it.

RealtimeTransform will monitor the GameObject and synchronize the transform or rigidbody state to a model in the datastore.

### Ownership
**In order to move an object with a RealtimeTransform component, your client needs to be the owner of the *RealtimeTransform* component.**

In a multiplayer environment, a game object and it's transform can exist on multiple clients. This means that there are multiple copies that all claim to know the position of this object, but only one of them can be considered the sourth of truth. This is where ownership comes in.

RealtimeTransform treats the client that owns the object as the source of truth. All other clients follow along with the owner's copy of the transform or rigidbody. This means that in order to move an object with a RealtimeTransform component on it, you must be the owner of the RealtimeTransform component.

You can request ownership of a RealtimeTransform component by calling `RequestOwnership()` or by using the Request Ownership button in the editor inspector.

A RealtimeTransform is available for immediate use after `RequestOwnership()` is called. Normcore will assume the call is going to succeed, and will roll back any state changes automatically if the call is rejected by the server.

A `RequestOwnership()` call is only rejected if the RealtimeView or a parent RealtimeView is owned by a different client.

## Transform mode vs. Rigidbody mode
RealtimeTransform works differently when a Rigidbody is present, and it's important to understand how it differs, and *why* it differs.

If RealtimeTransform detects a **Rigidbody** component it is created in Rigidbody mode, otherwise, it runs in Transform mode.

### Transform mode
When operating in **Transform mode**, RealtimeTransform synchronizes the **localPosition**, **localRotation**, and **localScale** of a GameObject. 

Transform mode does not synchronize the world values for two reasons: **precision** and **transform hierarchy**.

1. **Precision.** The world position, rotation, and scale values used by Unity are lossy. The local position, rotation, and scale variants are the true values, while the world variants are calculated using the transform of the object and its parents. Synchronizing the world values will introduce error over time.

2. **Transform hierarchy.** If you have a parent transform and a child transform, each RealtimeTransform will update the position to match the value in the datastore in `Update()`. Unfortunately, Normcore has no control over the execution order of `Update()` calls (*Script Execution Order only applies to different class types*). If Normcore used world-space values, setting the child before the parent would result in an incorrect transform position for the child. However, **localPosition**, **localRotation**, and **localScale** can be set in any order without issue.

### Rigidbody mode
When operating in **Rigidbody mode**, RealtimeTransform synchronizes the world position and rotation values in addition to all Rigidbody settings. This is because Unity's physics engine (PhysX) works entirely in world space. For this reason, Unity recommends you do not add parents to Rigidbody components; we recommend the same. This way, you can avoid the transform hierarchy issues mentioned above.

#### Ownership
Rigidbody mode also handles ownership differently. When a Rigidbody RealtimeTransform collides with a second Rigidbody RealtimeTransform, it will attempt to request ownership of this second object as well, so the same client can simulate both of the objects in the collision. (It will only do so if the other object has no owner.) When the same client simulates both objects, it prevents the appearance of delays during those objects’ interactions.

In order to allow objects at rest to be automatically owned by colliding objects, RealtimeTransform will automatically clear ownership when the Rigidbody goes to sleep. If you would like to avoid this behavior, use the inspector to switch the sleep option to "Maintain Ownership While Sleeping.”

*Note: When implementing logic like picking up an object, we recommend marking the rigidbody kinematic. While a rigidbody is kinematic, ownership will not be cleared automatically, and the default sleep settings can be used.*

*Tip: Check out the [Networked Physics](./networked-physics) guide for more detailed info on how RealtimeTransform works in Rigidbody mode.*
