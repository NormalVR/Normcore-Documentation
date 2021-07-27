---
layout: docs
title: Datastore
---
# Datastore

#### Note about Realtime vs Room API
If you're using the Realtime API, you should rarely need to interact with the Room + Datastore API directly. Realtime is designed to manage a room and datastore for you. If you're calling  `realtime.room.Connect()` you're making a mistake. Instead, call `realtime.Connect()` and use the Realtime API directly.

## Intro
Building on the Room + Datastore API overview, Datastore is a class designed to mirror the state of the datastore on the room server. It is responsible for detecting any changes to `RealtimeModel` objects within the datastore, serializing and sending their updates to the room server. When another client makes a change to its datastore, the change is sent to the room server, which may then perform validation or transformation of the data before relaying it to all clients.

## Models
The datastore is a collection of `RealtimeModel` objects. These objects make up all of the synchronized states of your application. The root-level model in the datastore is the `roomModel` that's passed to `Room.Connect()`. Any models not part of RealtimeComponents that you would like to store in the datastore need to be a child of this model.

Any state changes to this model are replicated to the roomModel on all clients. If you would like to dynamically add or remove models from the datastore at runtime, you'll want to use a (collection)[./collections], such as `RealtimeSet`.

## Instant updates and caching
// TODO: This will probably be clearer if the caching layer is explained.

Updates to `RealtimeModel` objects appear to take effect immediately for the local client. Change events also fire immediately for the local client. This is because, 99% of the time, the server accepts the update and applies it. So, for the most part, the datastore state does not need to change.

However, it is possible that the server will reject an update due to either ownership or Normcore Private plug-ins. When this happens, the server sends back the rejected update or a modified version of the state in the update. The datastore then rolls the data back or replaces it with the version transformed by the server. Change events then fire again to reflect the new values.

This system is achieved through an in-flight caching mechanism. The caching mechanism does two things:
1. It preserves an original value in case an update is rejected.
2. It helps determine if updates from other clients are older than any local updates waiting for confirmation.

When a property is updated by two clients simultaneously, the server applies them in the order it received them. In other words, the last client to reach the server "wins." For instance, say Client A changes a `teamName` property on a model to `Blue Team` at the same time that Client B changes it to `Red Team`:

1. Both clients send their values to the server. While waiting for confirmation, they reflect different values locally. Client A shows `Blue Team` and Client B shows `Red Team`.
2. The server receives Client A's packet first and changes the team name to `Blue Team`. It then receives Client B's packet and changes it to `Red Team`. Each update is sent to all clients so they can update their own datastore snapshots.
3. Client A receives its own update back as confirmed. It then receives Client B's update and sets the team name to `Red Team`.
4. Client B receives Client A's update; however, it hasn't received its own update back, so it knows its own update is newer than the change Client A has made. Client A's change is stored internally, but Client B’s model will still reflect `Red Team`. When Client B's update comes back, its state is now `Red Team`. Both clients now show the correct team name.

Normcore does this to prevent the team name from flipping to `Blue Team` only to immediately flip back to `Red Team`. We know that in absolute time, Client B made their change after Client A, and there's no reflect a stale value.

The implementation of the caching mechanism is outside of the scope of this documentation, but it's worth mentioning that the Datastore contains enough information to be able to handle a case in which Client B's update is rejected by the server. So if, in Step 4 above, Client B receives Client A's update and continues to show `Red Team` as expected, but then receives a message from the server that its own update was rejected, it would rewind its own update to make the datastore show a value of `Blue Team`.

## Delta updates
The datastore keeps track of all changes that have been applied by the local client. Periodically, `Room` will instruct the datastore to serialize all the outstanding changes to send in an update to the server. This ensures that only the smallest amount of data needs to be serialized and transmitted to the server.

The rate at which outstanding updates are serialized and sent out is set by the [`datastoreFrameDuration`](../reference/datastore#datastoreFrameDuration) property. The default value is 1/20 which sends updates at 20hz. Setting this value lower results in more frequent updates, but also higher bandwidth usage. If you're running a local installation, values up to your render framerate can be acceptable; however, you'll rarely want to send updates more often than 20hz. Typically, for non-XR applications, even 10hz is acceptable with Normcore.

## Persistence
Models within the datastore can persist between sessions. More information on this can be found in the [Ownership + Lifetime Flags](./ownership-and-lifetime-flags) documentation.

Any models that are marked persistent will be serialized to disk when the room server is shut down. Typically, room servers automatically shut down 30 seconds after the last client leaves. At that point, the datastore is saved and can be hosted by another room server instance. This has the benefit of allowing persistent room datastores to move between regions as your users join and leave a space.
