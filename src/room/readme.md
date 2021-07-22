---
layout: docs
title: Room + Datastore API
---
# Room + Datastore API

*Make sure you're up to speed on the [Client Architecture](../architecture/client)documentation before diving into this section.*

The Room + Datastore API is the foundation upon which the Realtime API is built. This layer is the raw data layer that synchronizes all state between each client.

At a high level, Room manages the connection to the room server: it holds a single datastore instance that reflects the datastore on the room server and it manages all media streams for that room.

Datastore holds all models and ensures they are kept in sync with the server. If a change is made to the local datastore state, a delta update is sent to the server and all other clients to ensure they are kept in sync.

There is nothing Unity-specific about the Room + Datastore API. It deals with data only and is unaware of any Unity objects, such as GameObjects or MonoBehaviours. The Realtime API is what is responsible for synchronizing the state of a Unity scene to the state of the room and datastore.

IIt's very rare that you will need to work entirely through the Room + Datastore API. Still, pieces of it, such as  [RealtimeModel](./realtimemodel.md), are occasionally exposed, so it's useful to understand how the overall API works.

// TODO: Graphic of Room + Datastore + Media API + RealtimeModel + Transport all the way down so folks can get an idea of how it all fits together
