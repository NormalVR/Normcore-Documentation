---
layout: docs
title: Room + Datastore API
---
# Room + Datastore API

// TODO: Make sure the Client Architecture doc describes the Realtime/Room relationship
Make sure you're up to speed on the [Client Architecture](../architecture/client) documentation before diving in this section.

The Room and Datastore API are the foundation that the [Realtime API](../realtime) is built upon. This layer is the raw data layer that synchronizes all state between each client.

At a high level, the Room manages the connection to the room server, it holds a single datastore instance that reflects the datastore in the room server, and it manages all media streams for that room.

The datastore API holds all models, and ensures they're kept in sync with the server. If a change is made to the local datastore state, a delta update is sent to the server, (and all other clients) to ensure they are in sync.

There is nothing Unity-specific about the Room + Datastore API. It deals with data only and is unaware of any Unity objects like GameObjects or MonoBehaviours. The Realtime API is what is responsible for synchronizing the state of a Unity scene to the state of the Room and Datastore.

It's very rare you will need to work entirely through the Room + Datastore API, but pieces of it (such as [RealtimeModel](./realtimemodel.md)) are occasionally exposed and so it's useful to understand how the overall API works.

// TODO: Graphic of Room + Datastore + Media API + RealtimeModel + Transport all the way down so folks can get an idea of how it all fits together
