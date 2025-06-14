---
layout: docs
title: Using AR as a Spectator View
description: This guide walks you through using mobile AR to spectate on XR applications.
---
import welcome                      from './using-ar-as-a-spectator-view/welcome.mp4'
import addARFoundationAndARKit      from './using-ar-as-a-spectator-view/add-ar-foundation-and-arkit.mp4'
import importNormcoreARUnitypackage from './using-ar-as-a-spectator-view/import-normcore-ar-unitypackage.mp4'
import copySceneDisableFloor        from './using-ar-as-a-spectator-view/copy-scene-disable-floor.mp4'
import addARCameraRig               from './using-ar-as-a-spectator-view/add-ar-camera-rig.mp4'
import connectCameraToAvatarManager from './using-ar-as-a-spectator-view/connect-camera-to-avatar-manager.mp4'
import testItOut                    from './using-ar-as-a-spectator-view/test-it-out.mp4'

# Using AR as a Spectator View for Your XR App

This is one of my favorite use cases for Normcore. Before diving into this guide, I recommend reading this [blog post](https://www.normalvr.com/blog/using-ar-to-see-into-the-vr-world/) about how this concept works at a high level.


## Create an app to spectate
Before we can start, we need an example VR project that we’ll use with our AR spectator app. I’m going to start with the “Realtime + VR Player” scene from the Normcore Examples folder. [Import Normcore](../essentials/getting-started#download-normcore), open up the VR Player example scene, and add your [App Key](https://dashboard.normcore.io/apps) to the Realtime component in the scene.

Hit Play in Unity and make sure the VR Player prefab spawns in our colored cube world.

<video width="100%" title="Hello, world!" controls><source src={welcome} /></video> 

## Create the mobile AR app

Awesome! Now that we’ve got that working, let’s get started on the mobile AR version. Use Package Manager to import AR Foundation and either the ARKit XR Plugin (iOS) or the ARCore XR Plugin (Android).

<video width="100%" title="Adding AR Foundation and ARKit via Package Manager." controls><source src={addARFoundationAndARKit} /></video> 

Next, we’re going to import the [AR Spectator Example](</downloads/Normcore%20AR%20Spectator.unitypackage>) unitypackage from Normal, which includes a few utilities and the scene you’ll end up with at the end of this guide.

<video width="100%" title="Importing the 'AR Foundation Example' Unity package." controls><source src={importNormcoreARUnitypackage} /></video> 

Perfect. Let’s save a copy of the Realtime + VR Player scene to use for our AR Spectator app. Here I’m going to call it “VR Player (AR Spectator)”.

In our new scene copy, let’s turn off the Floor. In the spectator app, we’ll want to see the colored cubes and VR player, but we’ve already got a floor in real life, so there’s no reason to render a virtual one on top.

<video width="100%" title="Disable the Floor object, and then save the scene." controls><source src={copySceneDisableFloor} /></video> 

Next, we’ll want to swap the Main Camera for one that supports AR. Drag the “AR Foundation Camera Rig” prefab from the Examples > VR Player (Spectator) > Prefabs folder into the scene. This prefab contains the scripts needed to position the AR Camera, display detected planes, and finally place the origin of the world on an AR plane. It also includes a Camera object, so we can go ahead and delete the Main Camera game object from the scene.

<video width="100%" title="Drag in the 'AR Foundation Camera Rig' prefab, and delete your existing Main Camera." controls><source src={addARCameraRig} /></video> 

The only thing left to do is connect RealtimeAvatarManager to our camera rig so the avatar uses the phone’s camera position in VR. We’ll do that by dragging the AR Camera into the Head slot on RealtimeAvatarManager.

<video width="100%" title="Drag the 'AR Camera' under the AR Foundation Camera Rig into the Head transform on Realtime Avatar Manager." controls><source src={connectCameraToAvatarManager} /></video> 

That’s it! Let’s give it a shot!

Export a build for your device. When it opens up, move your phone around to detect planes, then tap on one to place the world. You should see the colored cubes appear.

Now head back to Unity and open up the original “Realtime + VR Player” scene and hit Play. Your VR player will appear in the scene view, and also on your mobile device :)

<video width="100%" title="It works!" controls><source src={testItOut} /></video> 

Boooooom!! Easy.

Want to take this a step further? Try creating a custom avatar for your AR Spectator so they look different than the VR players in VR. Check out our other guides for synchronizing custom data too!

- [XR Avatars and Voice Chat](./xr-avatars-and-voice-chat.md)
- [Synchronizing custom data](../guides/synchronizing-custom-data.md)
- [Creating a multiplayer drawing app](./creating-a-multiplayer-drawing-app.md)

### FAQ

#### On iOS, the app opens and closes immediately.
Make sure to set your Camera Usage Description and Microphone Usage Description under Player Settings.
