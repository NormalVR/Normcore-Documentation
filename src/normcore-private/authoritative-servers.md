---
layout: docs
title: Authoritative Servers
---
# Authoritative Servers
Traditionally, Normcore uses [Ownership + Lifetime Flags](../room/ownership-and-lifetime-flags) to provide server authority. While this covers most applications, there are cases where you may want to run an authoritative game server.

Normcore Private includes the ability to run a headless linux Unity game server next to each room server. When a room server is started, a copy of your game server is started in a container that runs next to the room server itself.

Normcore Authoritative Servers work very similarly to architecting your application as having a main client that runs the state of the room. However, they include a few extra features. They're guaranteed to be the first client to join the room and they have the ability to modify any state in the datastore, including ownership of any model or object.

This allows developers to prototype their authoritative game server by running a build locally on their dev machine, and once you're ready to deploy, you can export a headless linux build and deploy it to your Normcore Private cluster.

TODO: Maybe we make a graphic showing the architecture for this?



