---
layout: docs
title: Meta Avatars
---
import metaPlatform from './meta-avatars/install-meta-platform.mp4'

# Meta Avatars
Meta / Oculus come with rich prebuilt avatars that work out of the box with Normcore. This guide will demonstrate how to use the built-in **MetaAvatar** component to set up networked Meta Avatars with voice chat in a few minutes.

TODO (Stephen): I'd love a video here of two avatars waving to the camera in the space. If you send me a Quest build, I can hop in and wave while you screen record the editor window. We'll want to make sure the Game view is full screen so the resolution is crisp.

## Install the Normcore Meta package
Before we start, make sure you've [set up Normcore](../../essentials/getting-started.md) and have configured all of [Meta's platform prerequisites](./meta-platform-prerequisites.md).

Once Normcore is set up in your project, you'll be able to install the Normcore Meta UPM package. Open up Package Manager, switch to **My Registries**, and install **Normcore Meta Platform** from the Normal package registry.

<video width="100%" controls><source src={metaPlatform} /></video> 

## Set up Meta Avatars
Import the VR examples (TODO: Are we including this in VR Examples or does the Normcore Meta package have its own samples?). Drag the "Realtime + Meta Avatar Player" into your scene.

TODO (Stephen): A quick video of importing the example and dragging in the prefab will be helpful here. I find it's such a pain in the ass to find these assets and explaining it with text is really tough.

Add your App Key to the Realtime component and hit Play. The example "Meta Avatar Player" will spawn and it should look something like this:

TODO (Stephen): A video of the avatar waving at the camera. This video should match the one in XR Avatars and Voice Chat perfectly if possible. It should start in Play mode so we don't have to wait for domain reloads / connecting and it should show the avatar large on screen like that one does.

That’s it! You can send this build to anyone you’d like and Normcore will automatically connect you to the same room and instantiate an avatar for each person.

## Custom Meta Avatars
For most developers, the built-in "Meta Avatar Player" prefab will work and is a great starting point if you'd like to customize your avatar. However, if you have an existing avatar prefab and would like to add Meta Avatars functionality to it, this section of the guide outlines how to build the included "Meta Avatar Player" prefab from scratch.

Create an empty Game Object in the scene with a **MetaAvatar** component on it. Let's call it "Custom Meta Avatar"

TODO (Stephen): A video of creating an empty game object, naming it, adding the component. This video should match the one in XR Avatars and Voice Chat perfectly if possible.

**MetaAvatar** includes a button that will create all of the components we need by the Meta Avatar SDK. Click the “Set Up Meta Avatar” on **MetaAvatar** to configure our avatar prefab.

TODO (Stephen): Rename the set up button to match this guide.

TODO (Stephen): A video of clicking the button on MetaAvatar. This video should match the one in XR Avatars and Voice Chat perfectly if possible.

**MetaAvatar** will reset the transform on the root Game Object, perform the **RealtimeAvatar** prefab setup if necessary, and add a **MetaAvatarLipSync** component that references **RealtimeAvatarVoice**.

In addition, it will configure the **Local Avatar** and **Remove Avatar** prefabs. These prefabs are provided as part of the Normcore Meta Platform package. If you'd like to change any of the default settings, copy them into your project and wire them up to **MetaAvatar**.

Let’s try the avatar out. Drag it into your project to make a prefab. Make sure it’s in a Resources folder so it can be instantiated at runtime. Delete it from the scene and connect the prefab to the RealtimeAvatarManager component under “Local Avatar Prefab”. Then hit Play to test it out.

TODO (Stephen): A video dragging the prefab into the project, wiring it up, and hitting play. It's important to show the null UUID app key here, and to edit out periods where we're waiting for things like domain reloading and connecting to the server. This video should match the one in XR Avatars and Voice Chat perfectly if possible.

That's it! You should now have a Meta Avatar player prefab that works in Normcore.

## Switching to a Meta Avatar prefab on Meta Platforms

TODO (Stephen): Will you write up how to create a component that lives next to RealtimeAvatarManager that can detect if this platform is a meta platform. And if so it switches from the "VR Player" prefab to the Meta avatar one.

TODO (Stephen): We also need instructions how you configure the Meta Avatars SDK so avatars can render on non-Meta devices for remote players. If I'm on Quest and I join a room with my Meta Avatar, someone on Pico needs to be able to show my Avatar. iirc the prefabs don't need to change, but we need to show how they initialize the meta platform in the scene (or maybe we just need to configure the OculusPlatformSettings object accordingly?)
