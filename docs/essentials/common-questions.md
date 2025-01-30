---
layout: docs
title: Common Questions
---
# Common Questions

### How is Normcore different from other networking plugins?
We get networking right.

Normcore provides some unique features for developers:

* **Keep objects in sync.** Normcore ensures state won't differ between clients.
* **Automatically scale.** Our backend infrastructure can scale to millions of users automatically.
* **Only pay for the servers you use.** Normcore lets you scale globally, while only paying for what you use.
* **Low latency.** Normcore ensures servers are physically located near your users to reduce latency. 
* **Encrypt** ***all\*** **of your data.** We encrypt all data to help with both privacy and eliminating DDoS packet replay attacks.
* **Up your value by supporting the web.** Normcore uses the powerful [WebRTC](../architecture/transport.md) protocol. This means you can support live spectating on the web, browser editions of your game, and more.

When it comes to multiplayer networking, these things matter. Learn more about how we solve these and other problems on our [Why Normcore](./why-normcore.md) page.

### Is Normcore only for VR / AR / XR games?
No, you can use Normcore for any multiplayer project. In fact, some of the features we developed with XR in mind can actually help with other kinds of applications. For instance, XR is highly sensitive to voice chat latency, so Normcore has outstanding low-latency audio built in. This can benefit all sorts of other kinds of applications.

### How many players can I fit in a single room?
It depends. We tend to see between 4 and 100 players per room. The headcount per room can vary based on how much bandwidth your application uses. For instance, VR applications typically use 10 times more bandwidth than a typical FPS or racing game. For extreme cases—such as MMORPGs, console games with 40+ players, or VR apps with 16+ players—there are still options: you can split large spaces across multiple Normcore [rooms](../architecture/client.md#rooms), or you can use [Normcore Private](https://normcore.io/normcore-private), which supports 40x higher CPU + bandwidth limits per room.

### How many rooms can Normcore host concurrently?
Normcore itself can host over a million rooms at the same time. Our backend automatically scales based on your usage patterns. It also supports bursting via cloud infrastructure. If we don't have enough servers of our own to host your game, we can seamlessly cloud burst into instances on Google Cloud, AWS, and DigitalOcean, so there are always enough rooms.

If you expect more than 20,000 concurrent users for the launch of your title, [contact us](https://normcore.io/contact) so we can reserve capacity for your launch.

### Can I connect to multiple rooms at the same time?
Normcore allows you to connect to multiple room servers simultaneously. You can use them to split large MMORPG spaces into smaller shards or to group traffic to host large events like concerts.

### Does Normcore support X, Y, Z?
 If the topic isn't covered on our docs, join our [Discord](https://normcore.io/discord) and ask us!
