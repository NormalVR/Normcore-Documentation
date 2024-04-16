---
layout: docs
title: Meta Avatars Setup
---
import doubleAvatarWave from './meta-avatars/double-avatar-wave.mp4'
import metaPlatform from './meta-avatars/install-meta-platform.mp4'
import metaExample from './meta-avatars/install-meta-example.mp4'
import avatarWave from './meta-avatars/avatar-wave.mp4'

# Meta Avatars
<video width="100%" controls><source src={doubleAvatarWave} /></video>
**Normal** and **Meta** have worked together to provide rich prebuilt avatars that work with Normcore out of the box. This guide will demonstrate how to use the built-in **MetaAvatar** component to set up networked meta avatars with voice chat in a few minutes.

## Install the Normcore Meta package
Before we start, make sure you've [installed Normcore](../../essentials/getting-started.md) and have configured all of [Meta's platform prerequisites](./meta-platform-prerequisites.md).

Once Normcore is set up in your project, you'll be able to install the **Normcore Meta Platform** UPM package. Open up Package Manager, switch to **My Registries**, and install **Normcore Meta Platform** from the Normal package registry.

<video width="100%" controls><source src={metaPlatform} /></video> 

## Set up Meta Avatars
Import the "Meta Avatars" sample that comes with the **Normcore Meta Platform** UPM package. Make sure you've initialized the Oculus Platform SDK directly or by using the [Entitlement Check](./meta-platform-prerequisites#initialize-the-oculus-platform-at-runtime) sample.

Drag the "AvatarSDKManagerMeta" prefab into the scene along with the "Realtime + Meta Avatar Player" prefab.

<video width="100%" controls><source src={metaExample} /></video> 

Add your App Key to the Realtime component and hit Play. The included "Meta Avatar Player" will spawn and it should look something like this:

<video width="100%" controls><source src={avatarWave} /></video> 

That’s it! You can send this build to anyone you’d like and Normcore will automatically connect you to the same room and instantiate an avatar for each person.

All avatar customization settings are automatically imported from the user's system preferences. Head tracking, hand tracking, finger tracking, lip sync, and voice chat using Normcore's **RealtimeAvatarVoice** all work automatically.
