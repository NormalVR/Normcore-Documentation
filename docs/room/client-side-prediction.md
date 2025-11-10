---
layout: docs
title: Client-Side Prediction
---
# Client-Side Prediction

:::note
This is an advanced topic! Normcore is designed to be used without having to learn anything at all about this system, but it is helpful to know about.
:::

Network messages have **network latency** (also called **network lag**), which is the time messages spend in transit between the client and the room server. For example, a delay of 100 milliseconds to send a message to the server and receive a response is not unusual. This round-trip delay is known as the **ping**.

Since the server can accept or reject changes to network properties based on factors like ownership, when a client makes a change a property, the client can't know what the property value will be until the server responds. There are two common approaches to this problem:

1. Use the previous property value until the client knows if the change was accepted. This makes variable changes by this client appear delayed (usually by the ping), and leads to a bad user experience, especially for things like player controllers, where players expect low latency for responsive-feeling controls.

2. Use the changed property value, optimistically expecting it is likely the server will accept the change. This is known as **client-side prediction** or **anticipation**. This makes variable changes by the client appear instant, hiding the network latency and helping to make the game feel responsive. However, the case where the server rejects the change must be handled.

Normcore implements client-side prediction for you, making your game more responsive. In this page we outline the details of Normcore's client-side prediction system.

## Mispredictions and rollback
When we optimistically change a network property on the local client and send that to the server, but the server rejects it (rejections are rare but possible in a few scenarios explored below), we have predicted the wrong outcome on the local client. This is called a **misprediction**.

Normcore resolves a misprediction by setting the network property's value on the local client to the one provided by the server, therefore resolving the conflict (in favor of the server, always). This operation is called a **rollback**.

:::note
Rollbacks happen instantly, without smoothing. This can be jarring, depending on the visual representation of the property.

That's why some properties could use a smoothing layer or delay on top of the raw value before they're displayed to the player.

This filtering is left up to the user because it's very situational. In fact, most properties in a typical game will have a fixed owner that doesn't change throughout, and won't risk running into any mispredictions at all.
:::

## Sources of mispredictions

### Contention
If two clients modify a property on an unowned property, the updates are applied as soon as they arrive on the server. In other words, the last client wins.

So an optimistic change might lead to a mispredicion if a different client changed the value just after the local client did.

### Ownership change
A different client might have claimed ownership on the target. The server might have already processed their claim, but this information hasn't yet reached our local client. So our local client, until it receives that information, might still attempt to change the property optimistically.

## Details
Client-side prediction varies depending on the type of network property. The differences are explored below.

### Time coherency
It's important to note that due to network latency, the updates that the local client receives from the server are in the past relative to the current local optimistic predictions.

This is why a rollback not only implies a value change, but also a jump in time.

### Unreliable properties
Changes are applied optimistically.

Other clients' changes are applied unconditionally, which implicitly performs a rollback.

### Reliable properties
Changes are applied optimistically.

The optimistic prediction is sustained until the server rejects it (triggering a rollback). Other clients' changes are ignored while waiting on the server's response (since they're in the past relative to the local prediction). This behavior is different from unreliable properties.

:::note
Modifying this property continuously will continuously await for server confirmation, so it won't have the opportunity to resolve mispredictions until local modifications cease.
:::

### Collections
Transactional collections don't apply changes optimistically, they always wait for server confirmation instead.

Non-transactional collections apply changes optimistically and resolve mispredictions in a manner tailored to each type of collection.

You can read more about this topic in the [Collections](collections.md) documentation.

### Other
The `ownerIDSelf` property (in `RealtimeView`, `RealtimeComponent`, and `RealtimeModel`) is internally implemented by a reliable network property.
