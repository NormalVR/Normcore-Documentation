---
layout: docs
title: Room
---
# Room

#### Note about Realtime vs Room API
If you're using the [Realtime API](../realtime),you should rarely need to interact with the Room + Datastore API directly. Realtime is designed to manage a room and datastore for you. If you're calling `realtime.room.Connect()` you're making a mistake. Instead, call `realtime.Connect()` and use the Realtime API directly.

## Intro
Building on the [Room + Datastore API](./) overview, Room is the class that manages everything related to a room, including the connection to the room server, the local datastore snapshot, audio streams, and any RPC messages.

If you're using Realtime, you should rarely need to interact with the Room class directly. If you're planning on writing your own high-level synchronization, however, Room is how you'll connect to a room server instance and send messages to other clients.

## Run-loop
Room is not a MonoBehaviour or Unity object that receives events from Unity like `Update()`. This means you will need to manually call `Tick()` every frame. When you call `Tick()`, any work that Room needs to do for that frame will take place, including: 

* Checking for connection timeouts
* Sending datastore updates to the server
* Triggering any network events that were received over the network since the last `Tick()` call

## Connecting to a room server
Once you have Room set up to receive a `Tick()` call each frame, you will be ready to connect to a room server. The process is simple: if you want to connect to a room, call `Connect()`along with the room name and app key. All clients that connect to the same room name with the same app key will connect to the same room server.

### Using a custom roomModel
When writing your own synchronization layer (rather than using the Realtime API), if you plan to use Normcore's datastore, your entry point is the optional `roomModel` field on the `Connect()`. This is a freshly initialized model that represents the root of your datastore. Any state changes to this model are replicated to the roomModel instance on all clients. If you would like to dynamically add or remove models from the datastore at runtime, you'll want to use a (collection)[./collections], such as`RealtimeSet`.

### Normcore Private
If you are working with Normcore Private, make sure to set the `matcherURL` parameter to your Normcore Private matcher URL. 

Another feature that is unique to Normcore Private is the `webhookContext` field. This is the context string passed to the Normcore matcher service, which in turn is passed to the webhook URL configured for your Normcore Private instance. More information can be found in the [Webhooks](../normcore-private/webhooks) documentation.

## Working with the datastore
Once a room is in a connected state, the datastore is synchronized with the room server and ready for use via the [`datastore`](../reference/room#datastore) property.

Check out the [Datastore](./datastore) and [RealtimeModel](./realtimemodel) reference for more information on working with the Datastore directly.

## Media streams
Normcore provides high-quality, low-latency audio streams via [`CreateAudioInputStream()`](../reference/room#createaudioinputstream). Calling this API returns an `AudioInputStream`  that can be used to send audio data to all clients. Once called, all clients will be able to retrieve a corresponding [`AudioOutputStream`](../reference/audiooutputstream) object. To do so, they should use [`GetAudioOutputStream()`](../reference/room#getaudiooutputstream) along with the `clientID` and `streamID` from the `AudioInputStream` object.

Normcore's new MediaStream API is now available in private preview for Normcore Private customers. If you would like to use video streaming in your Normcore Private app, get in touch with your account manager for more information.

## RPC
// TODO: Find the other doc where we say don't use RPC messages and link to that here (or maybe it was copy written in google docs?)

RPC messages in Normcore are available as a last resort. If you have players that can join a room late, RPC messages make consistent synchronization difficult. Any state modified in response to an RPC message will need to be manually synchronized by your own code.

If you are looking for information about how to fire one-shot events, take a look at our [Firing Events](../guides/firing-events) recipe. It demonstrates how to use the Normcore Datastore to trigger one-shot events on all clients.
