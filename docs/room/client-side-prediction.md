---
layout: docs
title: Client-Side Prediction
---
# Client-Side Prediction

:::note
This is an advanced topic! Normcore is designed to be used without having to learn anything at all about this system. But it can be interesting.
:::

Network messages to and from a room server carry **network latency** (also called **network lag**). A total delay of 100 milliseconds for example to send a message to the server and receive its response is not unusual.

This is why it makes sense (for the vast majority of situations) to optimistically change a network property on the client instantly instead of waiting for the server to confirm it, which is exactly what Normcore does.

This concept is called **client-side prediction** or **anticipation**. It ensures that the game feels responsive to the user by hiding the network latency from them.

In this page we outline the details of Normcore's client-side prediction system.

## Mis-predictions and rollback
When we optimistically change a network property on the local client and send that to the server, but the server rejects it (rejections are rare but possible in a few scenarios explored below), we have predicted the wrong outcome on the local client. This is called a **mis-prediction**.

Normcore resolve a mis-prediction by setting the network property's value on the local client to the one provided by the server, therefore resolving the conflict (in favor of the server, always). This operation is called a **rollback**.

:::note
Rollback happens instantly. This can be jarring, depending on the visual representation of the property.

That's why some properties could use a smoothing layer or delay on top of the raw value before they're displayed to the player.

This filtering is left up to the user because it's very situational. In fact most properties in a typical game will have a fixed owner that doesn't change throughout, and won't risk running into any mis-predictions at all.
:::

## Sources of mis-predictions

### Contention
If two clients modify a property on an unowned property, the updates are applied as soon as they arrive on the server. In other words, the last client wins.

So an optimistic change might lead to a mis-predicion if a different client changed the value just after the local client did.

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
Modifying this property continuously will continuously await for server confirmation. So it won't have the opportunity to resolve mis-predictions until local modifications cease.
:::

### Collections
Transactional collections don't apply changes optimistically, they always wait for server confirmation instead.

Non-transactional collections apply changes optimistically and resolve mis-predictions in a manner tailored to each type of collection.

You can read more about this topic in the [Collections](collections.md) documentation.

### Other
The `ownerIDSelf` property (in `RealtimeView`, `RealtimeComponent`, and `RealtimeModel`) is internally implemented by a reliable network property.
