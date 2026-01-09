---
layout: docs
title: Common Questions
---
# Common Questions

### How do I get a list of all rooms and how many players are in them?
This is something we’re working on, but for the time being, it's something you’ll need to manage yourself.

### How do I implement cheat prevention?
First and foremost, we highly recommend using an Anti-Cheat API like [Easy Anti-Cheat](https://www.easy.ac/) or [Meta's Attestation API](https://developers.meta.com/horizon/documentation/unity/ps-attestation-api/). These will allow you to ensure only unmodified copies of your game can connect to Normcore servers.

On top of this, we recommend using Normcore's ownership and lifetime flags APIs to control which clients can modify data in your rooms. However, if you've hit the limits of those APIs, [Normcore Private](https://normcore.io/private) supports [authoritative game servers](../normcore-private/authoritative-servers.md).
