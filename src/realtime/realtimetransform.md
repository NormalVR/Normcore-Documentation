---
layout: docs
title: RealtimeTransform
---
# RealtimeTransform

- You can't add/remove these components at runtime
- You can't add/remove the Rigidbody at runtime
  - Grab the explanation from Discord on this one
- Don't reparent!! You're going to have a bad time.

RealtimeTransform is a built-in RealtimeComponent that can be used to synchronize the transform or rigidbody of a GameObject.

## How it works
- Section that describes how ownership plays into it and how its different than the typical model ownership.

### Differences between Transform and Rigidbody mode
RealtimeTransform behaves slightly differently when a Rigidbody is present.

#### Transform mode
When using in the default Transform mode (No rigidbody is present on the game object), RealtimeTransform synchronizes the localPosition, localRotation, and localScale of a GameObject. You may be asking, why it does this? Well, two reasons, precision and transform hierarchy.

The world position / rotation / scale values used by Unity are considered lossy. When you set them, they're multiplied from world space to local space and the local values are the ones that are actually set.

// TODO: Should this be "first & second" or what?
The second is transform hierarchy. If you have a parent transform and a child transform, RealtimeTransform will update their position to match the datastore in Update(). Unfortunately, Unity provides no guarantees on script execution order for the same component type, and so Normcore has no way to ensure whether the child or the parent is updated first.

When using localPosition / localRotation / localScale, the order that these values are set does not matter, however when using the world-space values, setting the child before the parent will result in the child being in the wrong location.

##### Ownership
The other difference is that RealtimeTransform will not change its own ownership. If you own a RealtimeTransform, you'll remain the owner until you call clear.

#### Rigidbody mode
- See Networked Physics guide

// TODO: Talk about how you can use a transform immediately after calling ownership. If it's approved the object will be moved in the same packet. If it's not, the ownership request will be rejected and the object will move back.

