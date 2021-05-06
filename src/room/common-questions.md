---
layout: docs
title: Common Questions
---
# Common Questions

## RealtimeModel
### I made changes to my properties, but when I recompile, the freshly compiled model isn’t updated
Make sure your project has no compilation errors. If your project has any errors, any changes you make to the model will not be visible to the model editor.

### How do I easily remove or rename a [RealtimeProperty] without introducing compilation errors
To remove a property, first remove the [RealtimeProperty] tag, and then recompile.
To rename a property, introduce a new property that has the new name, then use the steps above to remove the old one. Update the propertyID at the very end to be the same
To change the type of a property, comment out the [RealtimeProperty] line, compile, then change the type and add it back.

### When I log the values on my model from inside of valueDidChange, sometimes not all values I had set on another client have updated, when are updates sent out and how are they applied?
Normcore serializes all updates once per network frame (~20hz) and groups them into the same packet.
When model updates are applied, they’re applied one at a time, and a change event fires for that value, however it’s possible the other values from that packet haven’t been applied yet.
In order to get an event that fires once all updates have been applied to a model. Use RealtimeCallback:
<TODO: RealtimeCallback example>.

## Datastore

### When I try to sync a specific object to the Datastore, I get an error that says it 
cannot be serialized.
A: Only primitives can be serialized (int, float, vector3, string, etc.) so if you need to sync a specific kind of object like a TextMesh Pro object, you’d want to create a field for each property on the object that you’d like to sync.

### Why can’t I just sync a Dictionary<> or List<>?
These collections don’t let Normcore know when their contents have changed. Which means there’s no way for Normcore to detect and sync their contents automatically. Also, we can’t easily do delta updates without comparing the contents against the previous version sent. It would get really expensive.
Normcore provides collections that work similarly (namely StringKeyDictionary, and RealtimeSet/RealtimeArray) that can store collections of RealtimeModel objects.

### Is there a size limit?
Datastores are limited to 10mb, and a single datastore update is limited to 125kb.
The Normcore datastore is designed to hold data that changes in real time. If you need to store textures or large blobs, write them to S3 or Google Cloud Storage and store the key in the Normcore datastore.

### I’m getting “Server attempted to delete value from set for key that doesn’t exist in storage. This is a bug!”
This error generally happens when multiple clients attempt to delete the same model from a RealtimeSet at the same time. If you’re not using RealtimeSet directly in your project, this can happen if multiple clients call Realtime.Destroy() on the same object at the same time.
In order to prevent this, we generally recommend having the client that owns the object destroy it:
`if (realtimeView.isOwnedLocally) Realtime.Destroy(gameObject);`

## Ownership
### How can I check who is holding an object?
We recommend using the owner of the RealtimeTransform component to do this. When you grab an object, you’ll need to call Re**QuestOwnership() on the RealtimeTransform in order for others to see your updates to it. Other clients can then use the ownerID property on RealtimeTransform to see who is holding it.
One exception is if you’re using a rigidbody with RealtimeTransform. When you throw an object, you’ll want to remain the owner so you can simulate it flying through the air. RealtimeTransform will clear the owner when the object comes to rest. In this case, we recommend checking if it’s kinematic (being held) and then who the owner of the RealtimeTransform component is.

## RPCs

### How do I use RPC messages with Normcore?
We do have an RPC API, but it’s really basic and generally not recommended.
so we don't really support making an RPC-like method call on all clients
the main issue being that if you use that to change state, then if someone joins late, they won't get those RPCs and will be out of sync with the rest of the people in the room
which is why everything is datastore based
for something like a bullet, I would imagine instantiating a prefab for the bullet. Normcore takes care of instantiating it on all clients and synchronizing the state.
if someone joins late, then they'll see the prefab in the datastore and will be in sync
the other option is to create a model with an int property that you increment whenever you want to "fire" an event
and the data you'd pass to the method exists in other fields on the model

### How should I replace my RPC methods then?
Use an event + RealtimeCallback
TODO: Example

### Are model change events more expensive than RPCs?
Nope, bandwidth / cpu-wise it’s not heavier than RPCs.
