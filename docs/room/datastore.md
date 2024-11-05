---
layout: docs
title: Datastore
---
# Datastore

*If you're using the [Realtime API](../realtime/readme.md), you should rarely need to interact with the Room + Datastore API directly. Realtime is designed to manage a room and datastore for you. If you're calling `realtime.room.Connect()`, you're making a mistake. Instead, call `realtime.Connect()` and use the Realtime API directly.*

## Intro
Building on the [Room + Datastore API overview](./readme.md), **Datastore** is a class designed to mirror the state of the datastore on the room server. It is responsible for detecting any changes to **RealtimeModel** objects within the datastore, serializing and sending their updates to the room server. When another client makes a change to its datastore, the change is sent to the room server, which will perform validation or transformation of the data before relaying it to all clients.

## Models
The datastore is a collection of RealtimeModel objects. These objects make up all of the synchronized states of your application. The root-level model in the datastore is the `roomModel` that's passed to `Room.Connect()`. Any models that are not part of realtime components that you would like to store in the datastore need to be a child of this model.

Any state changes to this model are replicated to the room model on all clients. If you would like to dynamically add or remove models from the datastore at runtime, you'll want to use a [collection](./collections.md) such as RealtimeSet.

## Instant updates
Updates to RealtimeModel objects appear to take effect immediately for the local client. Change events also fire immediately for the local client. This is because, 99% of the time, the server accepts the update and applies it. So, for the most part, the datastore state does not need to wait for confirmation.

However, it is possible that the server will reject an update due to either ownership or Normcore Private plug-ins. When this happens, the server sends back the rejected update or a modified version of the state in the update. The datastore then rolls the data back or replaces it with the version transformed by the server. Change events then fire again to reflect the new values.

Normcore is also able to detect simultaneous updates from multiple clients and respond appropriately. If Client A makes a change and then receives an update from Client B that occurred before Client A made the change locally, Normcore will continue to reflect Client A's value locally as it knows that the value is more recent. If Client A's value is rejected by the server, the datastore will roll back to Client B's value and will fire a change event to notify that the value was updated.

You can read more about this system in the [Client-Side prediction](client-side-prediction.md) documentation.

## Delta updates
The datastore keeps track of all changes that have been applied by the local client. Periodically, Room will instruct the datastore to serialize all the outstanding changes to send in an update to the server. This ensures that only the smallest amount of data needs to be serialized and transmitted to the server.

The rate at which outstanding updates are serialized and sent out is set by the [`datastoreFrameDuration`](../reference/classes/Normal.Realtime.Room.md) property. The default value is `1.0/20.0` which sends updates at 20hz. Setting this value lower results in more frequent updates, but also higher bandwidth usage. If you're running a local installation, values up to your render framerate can be acceptable; however, you'll rarely want to send updates more often than 20hz. Typically, even 10hz works well with Normcore.

## Persistence
Models within the datastore can persist between sessions. More information on this can be found in the [Ownership + Lifetime Flags](./ownership-and-lifetime-flags.md) documentation.

Any models that are marked persistent will be serialized to disk when the room server is shut down. Typically, room servers automatically shut down 30 seconds after the last client leaves. At that point, the datastore is saved and can be hosted by another room server instance. This has the benefit of allowing persistent room datastores to move between regions as your users join and leave a space.
