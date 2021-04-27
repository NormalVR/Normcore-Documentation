---
layout: docs
title: Realtime API
---
# Realtime API

// TODO: Put architecture image here that shows the relationship. Maybe link to the Architecture page too?
// TODO: Make sure the Client Architecture doc describes the Realtime/Room relationship
Make sure you're up to speed on the [Client Architecture](../architecture/client) documentation before diving in this section.

The Realtime API is the Normcore API used for all real-time synchronization in Unity. It's the layer that synchronizes all objects in your scene to the Normcore datastore.

The lower-level [Room + Datastore API](../room) manages the connection to the room server and the datastore. Realtime is a layer built on top of that. Realtime manages the Room + Datastore API for you and makes it easier to synchronize the state of your scene with the datastore.

// TODO: Maybe some copy about how this is the Unity-specific layer? I do think a nice graphic at the top of this section will really help the copy on this page make more sense.

// TODO: Talk about how the Realtime component manages the connection. And RealtimeView and RealtimeComponents synchronize data (just talk about it at a high level and link to the relevant sections)

// TODO: Write about what a RealtimePrefab is and how to put one together. Introduce it by saying Realtime components in the scene are wired to the datastore automatically, but prefabs need to be wired up at runtime. Realtime.Instantiate() does this.

## Connecting to a room server
In order to connect to a room, call `Connect()` along with the room name, and a [`ConnectOptions`](../reference/connectoptions.md) struct. All clients the connect to the same room name will end up connected to the same room server. The only required field is the `appKey` this will be used to look up the application and track usage in your account.

## Synchronizing a GameObject
1. Put a RealtimeTransform + RealtimeView on a game object in the scene.
2. Export a build. Use the editor to RequestOwnership and move the object.

- Explain what RealtimeComponents are
- Link to RealtimeTransform to talk about the ownership stuff

## Prefabs
Any prefab can be used with Normcore as long as it has a RealtimeView on the root of the game object. In our documentation, a "Realtime Prefab" refers to a prefab that's synchronized via the Realtime API using RealtimeViews and components.

### Creaing a prefab
Works the same way as creating a regular ol' prefab except you need to make sure it has a RealtimeView on the root and it's in a Resources folder. Why a Resources folder? Well because Unity will strip prefabs that are not in a Resources folder and remote clients won't be able to instantiate the prefab.
- We should maybe have a terminology page that defines what Local Client vs Remote Client is.

### Instantiating a prefab
Once you've created a Realtime Prefab, you can instantiate it at runtime by using [`Realtime.Instantiate()`](../reference/realtime#instantiate). This will create models for all RealtimeComponents on the prefab and insert it into the datastore along with the metadata needed for other clients to instantiate the same prefab and link up all of the models and components.

// TODO: Do we need anything else here? Look at the Room overview docs and also look at the intro guides.
