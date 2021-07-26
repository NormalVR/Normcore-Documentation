---
layout: docs
title: Common Questions
---
# Common Questions

## RealtimeModel
***
### I made changes to my properties, but when I recompile, the freshly compiled model isn’t updated. Why?
Make sure your project has no compilation errors. If your project has any errors, any changes you make to the model will not be visible to the model editor.

### Sometimes, when I log the values on my model from inside of valueDidChange, not all the values that I set on another client update. When are updates sent out, and how are they applied?
Normcore serializes all updates once per network frame (~20hz) and groups them into the same packet. When model updates are applied, they’re applied one at a time, and a change event fires for that value. However, it’s possible the other values from that packet hadn’t yet been applied. In order to get an event that fires once all updates have been applied to a model, use RealtimeCallback: 

// TODO: Create RealtimeCallback example

## Datastore

### When I try to sync a specific object to the Datastore, I get an error that says it cannot be serialized. What’s the issue?
Only primitives (int, float, vector3, string, etc.) can be serialized, so if you need to sync a specific kind of object like a TextMesh Pro object, you should create a field for each property on the object that you’d like to sync.

### Why can’t I just sync a Dictionary<> or List<>?
These collections don’t let Normcore know when their contents have changed. This means there’s no way for Normcore to detect and sync their contents automatically. Also, we can’t easily do delta updates without comparing the contents against the previous version sent. It would get really expensive. 

Normcore provides collections that work similarly—namely, StringKeyDictionary and RealtimeSet/RealtimeArray—and can store collections of RealtimeModel objects.

### Is there a size limit?
Datastores are limited to 10mb, and a single datastore update is limited to 125kb. The Normcore datastore is designed to hold data that changes in real time. If you need to store textures or large blobs, write them to S3 or Google Cloud Storage and store the key in the Normcore datastore.

### I’m getting “Server attempted to delete value from set for key that doesn’t exist in storage. This is a bug!” How do I fix this?
This error generally happens when multiple clients attempt to delete the same model from a RealtimeSet at the same time. If you’re not using RealtimeSet directly in your project, this can happen if multiple clients call Realtime.Destroy() on the same object at the same time. In order to prevent this, we generally recommend having the client that owns the object destroy it: if (realtimeView.isOwnedLocally) Realtime.Destroy(gameObject);

## Ownership
***
### How can I check who is holding an object?
We recommend using the owner of the RealtimeTransform component to do this. When you grab an object, you’ll need to call Re**QuestOwnership() on the RealtimeTransform in order for others to see your updates to to that object. Other clients can then use the ownerID property on RealtimeTransform to see who is holding it. 

One exception is if you’re using a rigidbody with RealtimeTransform. When you throw an object, you’ll want to remain the owner so you can simulate it flying through the air. RealtimeTransform clears the owner when the object comes to rest. In this case, we recommend checking if it’s kinematic (being held) and then who the owner of the RealtimeTransform component is.

## RPCs

### How do I use RPC messages with Normcore?
We do have an RPC API, but it’s quite basic and generally not recommended. We don't really support making an RPC-like method call on all clients. The main issue with RPC messages is that if you use them to change state and someone joins late, they won't get those RPCs. They will be out of sync with the rest of the people in the room. This is why Normcore is datastore-based. For something like a one-shot effect (say, an explosion), you should instantiate a prefab instead. 

Normcore instantiates all prefabs on all clients and synchronizes their state automatically. If someone joins late, they will see the prefab in the datastore and will be in sync from the very beginning.

Another option is to create a model with an int property that you increment whenever you want to "fire" an event. If you choose this option, be sure that the data you'd pass to the method exists in other fields on the model.

### How should I replace my RPC methods, then?
Use an event + RealtimeCallback.

// TODO: Example

### Are model change events more expensive than RPCs?
Nope, bandwidth- and cpu-wise, they are not heavier than RPCs.
