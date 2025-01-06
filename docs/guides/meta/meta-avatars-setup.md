---
layout: docs
title: Meta Avatars Setup
---
import avatarWaveGroup from './meta-avatars/avatar-wave-group.mp4'
import metaXR from './meta-avatars/install-meta-xr.mp4'
import packageDependencies from './meta-avatars/install-package-dependencies.mp4'
import sceneSetup from './meta-avatars/scene-setup.mp4'
import avatarThumbsUp from './meta-avatars/avatar-thumbs-up.mp4'

# Meta Avatars
<video width="100%" autoPlay loop muted><source src={avatarWaveGroup} /></video>

**Normal** and **Meta** have worked together to provide rich prebuilt avatars that work with Normcore out of the box. This guide will demonstrate how to use the built-in **MetaAvatar** component to set up networked meta avatars with voice chat in a few minutes.

## Install the Normcore Meta XR package
Before we start, make sure you've [installed Normcore](../../essentials/getting-started.md) and have configured all of [Meta's platform prerequisites](./meta-platform-prerequisites.md).

Once Normcore is set up in your project, you'll be able to install the **Normcore Meta XR** UPM package. Open up Package Manager, switch to **My Registries**, and install **Normcore Meta XR** from the Normal package registry.

<video width="100%" controls><source src={metaXR} /></video> 

## Install the Meta Avatars SDK sample
**Normcore Meta XR** depends on scripts and assets that we include in a user sample.

Import this dependency automatically using the pop-up dialog. You can always bring up the dialog again using the menu bar: `MetaAvatarsSDK/Normcore/Check Package Dependencies`.

## Set up Meta Avatars
Make sure you've initialized the Oculus Platform SDK directly or by using the [Entitlement Check](./meta-platform-prerequisites#initialize-the-oculus-platform-at-runtime) sample.

Add the "AvatarSDKManagerMeta" prefab to the scene using the `MetaAvatarsSDK > Normal > Create AvatarSDKManager` menu item. Then drag the "Realtime + Meta Avatar Player" prefab into the scene.

<video width="100%" controls><source src={sceneSetup} /></video> 

Add your App Key to the Realtime component and hit Play. The included "Meta Avatar Player" will spawn and it should look something like this:

<video width="100%" controls><source src={avatarThumbsUp} /></video>

:::danger
If your app quits immediately on launch, it's most likely due to the entitlement check failing! Check your logs and make sure the Meta account used by your Quest has been added to the release channel for your Oculus App ID.
:::

That’s it! You can send this build to anyone you’d like and Normcore will automatically connect you to the same room and instantiate an avatar for each person.

All avatar customization settings are automatically imported from the user's system preferences. Head tracking, hand tracking, finger tracking, lip sync, and voice chat using Normcore's **RealtimeAvatarVoice** all work automatically.
