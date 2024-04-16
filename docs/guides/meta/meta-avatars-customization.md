---
layout: docs
title: Meta Avatars Customization
---
import customMetaAvatar from './meta-avatars/custom-meta-avatar.mp4'
import metaAvatarButton from './meta-avatars/meta-avatar-button.mp4'
import metaAvatarRun from './meta-avatars/meta-avatar-run.mp4'

# Meta Avatars Customization
For most developers, the built-in "Meta Avatar Player" prefab will work and is a great starting point if you'd like to create a custom avatar prefab.

However, if you have an existing avatar prefab and would like to add Meta Avatars functionality to it, this section of the guide outlines how to build the included "Meta Avatar Player" prefab from scratch.

Create an empty Game Object in the scene with a **MetaAvatar** component on it. Let's call it "Custom Meta Avatar"

<video width="100%" controls><source src={customMetaAvatar} /></video> 

**MetaAvatar** includes a button that will create all of the components we need by the Meta Avatar SDK. Click the “Set Up Meta Avatar” on **MetaAvatar** to configure our avatar prefab.

<video width="100%" controls><source src={metaAvatarButton} /></video> 

**MetaAvatar** will reset the transform on the root Game Object, perform the **RealtimeAvatar** prefab setup if necessary, and add a **MetaAvatarLipSync** component that references **RealtimeAvatarVoice**.

In addition, it will configure the **Local Avatar** and **Remove Avatar** prefabs. These prefabs are provided as part of the **Normcore Meta Platform** package. If you'd like to change any of the default settings, copy them into your project and wire update the references on the **MetaAvatar** component.

Let’s try it out. Drag it into your project to make a prefab. Make sure it’s in a Resources folder so it can be instantiated at runtime. Delete it from the scene and connect the prefab to the **RealtimeAvatarManager** component under “Local Avatar Prefab”. Then hit Play to test it out.

<video width="100%" controls><source src={metaAvatarRun} /></video> 

That's it! You now have a Meta Avatar player prefab that works with Normcore.
