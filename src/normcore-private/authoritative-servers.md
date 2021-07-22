---
layout: docs
title: Authoritative Servers
---
# Authoritative Servers
Traditionally, Normcore uses [Ownership + Lifetime Flags](../room/ownership-and-lifetime-flags) to provide server authority. While this covers most applications, there are cases in which you may want to run your own authoritative game server.

Normcore Private includes the ability to run a headless Linux Unity game server next to each room server. When a room server is started, a copy of your game server is started in a container that runs next to the room server itself.

A custom authoritative server works just like any other Unity client in the room except that it has a few extra features: it is guaranteed to be the first client to join the room, and it has the ability to modify any state in the datastore, including ownership of any model or object.

This allows you as a developer to prototype an authoritative game server by running a build locally. Once you're ready to deploy, you can export a headless Linux build and deploy it to your Normcore Private cluster.

// TODO: Maybe we make a graphic showing the architecture for this?
