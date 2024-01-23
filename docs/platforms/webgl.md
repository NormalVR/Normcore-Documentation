---
layout: docs
title: WebGL
---
:::note
This feature is currently in alpha. If you would like access, please [contact us](https://normcore.io/contact).
:::

# WebGL
Normcore WebGL support is designed to allow any Normcore project to be compiled for WebGL with no modifications to the source project. WebGL applications are treated as a first-class citizen and given the same network performance as native Normcore applications.

## Getting started

The following steps will create a build of the Player Controller sample for the web along with voice chat.

#### Import the Normcore WebGL preview package

1. Create a fresh Unity project (preferably 2019 LTS or 2020 LTS), and import the Normcore unitypackage.
2. Wait for Unity to compile and import the Normcore UPM Package. This process is complete once "Normcore" appears in the Package Manager list of installed packages.
3. Open up `Packages/manifest.json` and change the `com.normalvr.normcore` package version to `3.0.0-webgl-alpha.X` Switch back to Unity and wait for the plugin to be updated. Upon successful import, you may be prompted to upgrade to Normcore 2.0.x; you can safely ignore this message.

At this point, your project will support Normcore WebGL export, but let's create a quick sample project to demonstrate this.

### WebGL Example + Voice Chat

Start by opening up the Realtime + Hoverbird Player scene. We'll use this scene as a starting point.

1. Open up your NormcoreAppSettings asset and make sure you have a valid app key and valid matcher URL set. This URL needs to be the URL of a cluster running a version that supports the WebGL preview audio channels.
2. Open up the "Hoverbird Player" prefab and add a RealtimeAvatarVoice component to the root of the prefab.
3. Export a WebGL build and open it in two browser windows. You should see two hoverbirds, be able to control them both in multiplayer, and hear voice chat between both windows.

Although the hoverbird controls don't work on mobile, try opening the scene on iOS or Android. Multiplayer and voice chat work between mobile and desktop platforms as well.

## Known Issues

#### SendRPCMessage does not work
This feature is intentionally disabled in the WebGL alpha. We plan to deprecate this API in Normcore 3 in order to replace it with a more feature-rich version. If you need this functionality in your project, let us know and we can provide a version with the legacy RPC API enabled.

#### Voice chat spatialization does not work on the web
Unfortunately, Unity's audio engine, FMOD, [does not run on the web](https://docs.unity3d.com/Manual/webgl-audio.html). All voice-chat audio is played directly through the browser rather than through Unity.
