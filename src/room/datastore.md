---
layout: docs
title: Datastore
---
# Datastore

#### A note about Realtime vs Room API
NOTE: If you're using the (Realtime API)[../realtime], you should rarely need to interact with the Room + Datastore API directly. Realtime is designed to manage a Room and Datastore for you. If you're calling something like `realtime.room.Connect()` you're making a mistake. Call `realtime.Connect()` and use the Realtime API directly instead.

## Intro
Building on the (Room + Datastore API)[./] overview, Datastore is a class that is designed to mirror the state of the datastore on the room server. It is responsible for detecting any changes to `RealtimeModel` objects within the datastore, serializing, and sending their updates to the room server. When another client makes a change to their datastore, the change is sent to the room server, which may perform validation or transformation of the data before relaying it to all clients.

## Models
The datastore is a collection of [`RealtimeModel`](./realtimemodel) objects. These objects make up all of the synchronized state of your application. The root level model in the datastore is the `roomModel` that's passed to `Room.Connect()`. Any models that you would like to store in the datastore (that are not part of RealtimeComponents) need to be a child of this model.

Any state changes to this model will be replicated to the roomModel on all clients. If you would like to dynamically add or remove models from the datastore at runtime, you'll want to use a (collection)[./collections] such as `RealtimeSet` to allow you to add / remove models.

## Instant updates and caching
// TODO: This will probably be clearer if the caching layer is explained.

Updates to `RealtimeModel` objects appear to take effect immediately for the local client. Change events will also fire immediately for the local client. This is because 99% of the time, we expect the server to accept the update and apply it. When this happens, the datastore state does not need to change.

However, it's possible the server will reject an update (due to ownership or Normcore Private plug-ins). When this happens, the server will send back the rejected update or a modified version of the state in the update. When this happens, the datastore rolls the data back, or rolls it to the version transformed by the server. In this case, change events will fire again to reflect the new values.

This system is achieved through an in-flight caching mechanism that does two things:
1. It preserves the original value in case an update is rejected
2. It is used to determine if updates from other clients are older than local updates that are waiting for confirmation.

When a property is updated by two clients simultaneously, the server applies them in the order it received them, which means the last client to reach the server "wins". Here is a common scenario:

Client A changes a `teamName` property on a model to `Blue Team` and Client B changes it to `Red Team` at the same time:

1. Both clients send their values to the server, while waiting for confirmation, they show different values. Client A shows `Blue Team` and Client B shows `Red Team`.
2. The server receives Client A's packet first and changes the team name to `Blue Team`, it then receives Client B's value and changes it to `Red Team`. Each update is sent to all clients so they can update their own datastore snapshots.
3. Client A receives its own update back as confirmed. It then receives Client B's update and sets the team name to `Red Team`.
4. Client B receives Client A's update, however, it hasn't received its own update back, so it knows its own update is newer than the change Client A has made. Client A's change is applied to the datastore, but Client B will still claim the `teamName` field is `Red Team`. When Client B's update comes back, its state is now `Red Team`. Both clients now show the correct team name.

Normcore does this to prevent the team name from flipping to `Blue Team` only to immediately flip back to `Red Team`. We know that in absolute time, Client B made their change after Client A and so there's no reason to show a stale value.

The implemenation is out of the scope of this documentation, but it's worth mentioning that the Datastore contains enough information to be able to handle the case where Client B's update was rejected by the server.

Let's say in Step 4 Client B receives Client A's update, it will still show `Red Team` however, if it then receives a message from the Server that it's own update was rejected, it will rewind its own update to make the datastore show a value of `Blue Team`.

## Delta Updates
The datastore keeps track of all changes that have been applied by the local client. Periodically the `Room` will instruct the datastore to serialize all outstanding changes to send in an update to the server. This ensures only the smallest amount of data needs to be serialized and transmitted to the server.

The rate at which outstanding updates are serialized and send out is set by [`datastoreFrameDuration`](../reference/datastore#datastoreFrameDuration). The default value is 20hz. Setting this value lower will result in more frequent updates, but also higher bandwidth usage. If you're running a local installation, values up to your render framerate can be acceptable, however you'll rarely want to send updates more often than 20hz. Typically for non-XR applications even 10hz is acceptable.

## Persistence
Models within the datastore can persist between sessions. More information on this can be found on the [Ownership + Lifetime Flags](./ownership-and-lifetime-flags) documentation.

Any models that are marked persistent will be serialized to disk with the room server is shut down. Typically room servers automatically shut down 30 seconds after the last client leaves. At this point the datastore is saved and can be hosted by another room server instance. This has the added benefit of allowing persistent room datastores to move between regions as your users join and leave a space.
