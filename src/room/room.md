---
layout: docs
title: Room
---
# Room

#### A note about Realtime vs Room API
NOTE: If you're using the (Realtime API)[../realtime], you should rarely need to interact with the Room + Datastore API directly. Realtime is designed to manage a Room and Datastore for you. If you're calling something like `realtime.room.Connect()` you're making a mistake. Call `realtime.Connect()` and use the Realtime API directly instead.

## Intro
Building on the (Room + Datastore API)[./] overview, Room is the class that manages everything related to a room including the connection to the room server, the local datastore snapshot, audio streams, and any RPC messages.

If you're using Realtime, you should rarely need to interact with the Room class directly. If you're planning on writing your own high-level synchronization, Room is how you'll connect to a room server instance and send messages to other clients.

## Run-loop
Room is not a MonoBehaviour or Unity object that receives events from Unity like `Update()`. This means you need to manually call `Tick()` every frame. When you call `Tick()` all work that Room needs to do for that frame will take place. That includes checking for connection timeouts, sending datastore updates to the server, and triggering any network events that were received over the network since the last `Tick()` call.

## Connecting to a room server
Once you have Room set up to receive a `Tick()` call each frame, you're ready to connect to a room server. The process is simple, if you want to connect to a room, call `Connect()` along with the room name, and a [`ConnectOptions`](../reference/connectoptions.md) struct. The only required field is the `appKey` this will be used to look up the application and track usage in your account.

### Using a custom roomModel
When writing your own synchronization layer (rather than using Realtime), if you plan to use Normcore's datastore, your entry point is the `roomModel` field on the `ConnectOptions` struct. This is a freshly initialized model that represents the root of your datastore. Any state changes to this model will be replicated to the roomModel on all clients. If you would like to dynamically add or remove models from the datastore at runtime, you'll want to use a (collection)[./collections] such as `RealtimeSet` to allow you to add / remove models.

### Normcore Private
If you're working with Normcore Private, you'll want to make sure to set the `matcherURL` parameter to your Normcore Private matcher URL.

Another feature that's unique to Normcore Private is the `webhookContext` field. This is the context string that will be passed to the Normcore matcher service which will then be passed to the webhook URL that has been configured for your Normcore Private instance. More information can be found in the [webhooks](../normcore-private/webhooks) documentation.

## Working with the Datastore
Once Room is in a **connected** state, the datastore is synchronized with the room server and ready for use via the [`datastore`](../reference/room#datastore) property.

Check out the [Datastore](./datastore) and [RealtimeModel](./realtimemodel) reference for more information on working with the Datastore directly.

## Media Streams
Normcore 2.0 provides high-quality low-latency audio streams via [`CreateAudioInputStream()`](../reference/room#createaudioinputstream). Calling this API will return an `AudioInputStream` object that can be used to send audio data to all clients. Once called, all clients will be able to retrieve a corresponding [`AudioOutputStream`](../reference/audiooutputstream) object by using [`GetAudioOutputStream()`](../reference/room#getaudiooutputstream) along with the `clientID` and `streamID` from the `AudioInputStream` object.

Normcore's new MediaStream API is now available in private preview for Normcore Private customers. If you would like to use video streaming in your Normcore Private app, get in touch with your account manager for more info.

## RPC
// TODO: Find the other doc where we say don't use RPC messages and link to that here (or maybe it was copy written in google docs?)
RPC messages in Normcore are available as a last-resort. When using RPC messages, consistent synchronization becomes harder if you have players that can join a room late. Any state that is modified in response to an RPC message will need to be manually synchronized by you.

If you're looking to fire one-shot events, take a look at our [Firing Events](../guides/firing-events) recipe. It demonstrates how to use the Normcore datastore to trigger one-shot events on all clients.
