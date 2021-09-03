---
layout: docs
title: Realtime API Overview
---
# Realtime API

*Make sure you're up to speed on the [Client Architecture](../architecture/client) documentation before diving in this section.*

The Realtime API is the API that Normcore uses for all real-time synchronization in Unity. It's the layer that synchronizes all objects in your scene to the Normcore datastore.

The lower-level [Room + Datastore API](../room) manages the connection to the room server and the datastore. Realtime is a layer built on top of that. Realtime manages the Room + Datastore API for you and makes it easier to synchronize the state of your scene with the datastore.

## Connecting to a room
Realtime will automatically connect to a room when your application starts if "Join Room On Start" is enabled. It's also possible to join a room by calling the [`Connect()`](../reference/classes/Normal.Realtime.Realtime#Connect) method along with the name of the room you would like to join. All clients that connect to the same room name will end up connected to the same room server.

## Synchronizing a GameObject
Normcore uses [realtime components](./realtimecomponent) to synchronize objects in a scene. It includes a few pre-built components and also includes a rich API for creating your own.

To synchronize the position of a game object using the [RealtimeTransform](./realtimetransform) component:

1. Create an empty scene. Add a **Realtime** component to an empty game object and configure the appKey so it can connect.
2. Create a Cube game object in the scene and add a **RealtimeTransform** component to it.
3. Export a build, and open it next to the editor. Hit Play in Unity.
4. Click the **"Request Ownership"** button on the RealtimeTransform inspector (not the RealtimeView inspector).
5. Drag the cube around in the scene and watch how it updates on the build automatically.

![](./assets/realtime-transform.mp4)

It's worth noting that RealtimeTransform uses ownership in a unique way. For more information, check out the guide on [RealtimeTransform](./RealtimeTransform).

## Prefabs
Any prefab can be used with Normcore as long as it has a [RealtimeView](./realtimeview) on the root of the game object. In our documentation, a "realtime prefab" refers to a prefab that's synchronized via the Realtime API using realtime views and realtime components.

### Creating a prefab
Realtime prefabs work the same way as regular prefabs in Unity except for a few minor differences:

1. A realtime prefab must be instantiated with [`Realtime.Instantiate()`](../reference/classes/Normal.Realtime.Realtime#Instantiate) to ensure it is instantiated on all clients.
2. A realtime prefab must have a **RealtimeView** component on the root GameObject.
3. A realtime prefab must live in a **Resources** folder to ensure it can be loaded at runtime.

*Note: If you would like to avoid using Resources, it is possible to use the Addressables API or a custom loader by implementing a [RealtimePrefabLoadDelegate](../guides/recipes/using-addressables)*

//TODO: update link to RealtimePrefabLoadDelegate

### Instantiating a prefab
Once you've created a realtime prefab, you can instantiate it at runtime using  [`Realtime.Instantiate()`](../reference/classes/Normal.Realtime.Realtime#Instantiate). This will create a fresh instance of the prefab on all clients and connect all RealtimeComponents together so that any state they synchronize will automatically be replicated to all clients.

// TODO: I do think a nice graphic at the top of this section will really help the copy on this page make more sense.
// TODO: Put architecture image here that shows the relationship. Maybe link to the Architecture page too?
// TODO: Make sure the Client Architecture doc describes the Realtime/Room relationship
