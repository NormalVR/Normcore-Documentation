---
layout: docs
title: Common Questions
---
# Common Questions

### How do I get a list of all rooms and how many players are in them?
This is something we’re working on, but for the time being, it's something you’ll need to manage yourself.

### How do I implement cheat prevention?
For most games, our ownership and lifetime flags APIs will give you control over which clients can modify data in your rooms. However, if you've hit the limits of those APIs, [Normcore Private](https://normcore.io/normcore-private) supports [authoritative game servers](../normcore-private/authoritative-servers). 

### What happens when a client crashes? How long does it take the server to disconnect?
The server pings connected clients every five seconds. If their connection is dropped suddenly, the server will disconnect them after five seconds and any models that they own that are tagged destroyWhenOwnerLeaves will be destroyed automatically.
Link to the lifetime flags / ownership stuff in Ownership page
