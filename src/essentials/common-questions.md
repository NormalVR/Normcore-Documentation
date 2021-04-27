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

## Does Normcore support X, Y, Z?

Good question! Hop on our [discord](https://normcore.io/discord) and ask!
