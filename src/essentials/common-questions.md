---
layout: docs
title: Common Questions
---
# Common Questions

## How is Normcore different than X?

On the surface most networking plugins will look the same. However, it's the details that matter. We recommend evaluating a few questions before starting any project:

1. How will you keep objects in sync? How do you ensure state doesn't differ between clients?
2. How do individual room servers scale? Can they handle all of the players you want in a single match?
3. Is all data encrypted? This is huge for privacy, but it also eliminates many DDoS packet replay attacks.
4. Do you ever want to support the web? If so, you'll need to ensure your plugin supports the webrtc protocol. (WebSockets suck ass)
5. How do you plan to scale? Are you going to host your own game servers on AWS or Google Cloud? Did you know their bandwidth costs are 10X more expensive than baremetal or even Digital Ocean?
6. How will you ensure your servers are physically located near your users? There's no point in optimizing serialization time if you spend twice as long getting the data to and from your servers.

We're proud to say Normcore has implemented the /best/ solutions available in the industry to these problems, and just about every other common networking problem. Check out our [Why Normcore](https://normcore.io/why-normcore) page.

## Is Normcore only for VR / AR / Games?
Far from it! We have some nice scripts that make VR / AR / XR easier, and our voice chat is designed to be incredibly low-latency, but nothing in Normcore requires you to build a VR / AR / XR project.

## How many players can I fit in a single room?
It depends! but we typically see 4-100 players per room. However, it really depends on how much bandwidth your application uses. VR applications typically use 10x more bandwidth than a typical FPS or racing game. If you're making an MMORPG or a title where you expect more than 100 players per room, we recommend splitting large spaces across multiple Normcore [rooms](../architecture/client#rooms), or using [Normcore Private](https://normcore.io/normcore-private) with custom room CPU/bandwidth limits.

## How many rooms can Normcore host concurrently?
Over 1,000,000. Normcore's backend autoscales based on current usage patterns, and supports bursting into cloud instances. If we don't have enough servers of our own to host your game, we can seamlessly start bursting into cloud instances on Google Cloud, AWS, and Digital Ocean.

If you expect more than 20,000 concurrent users for the launch of your title, [contact us](https://normcore.io/contact) so we can reserve capacity for your launch.

## Can I connect to multiple rooms at the same time?
Yes! Normcore lets you connect to multiple room servers simultaneously. Use them to split large MMORPG spaces up, or group traffic to host large events.

## Does Normcore support X, Y, Z?
Good question! If the topic isn't covered on our docs, join our [discord](https://normcore.io/discord) and ask us!
