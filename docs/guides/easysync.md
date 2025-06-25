---
layout: docs
title: Using EasySync
---
import videoGuide from './network-profiler/profile-unoptimized.mp4'


# Using EasySync

EasySync is a component that allows you to sync objects in your Unity scene without writing any code. EasySync can synchronize public fields and properties, and when you need to drop down to code, it can be converted to a custom C# script for more advanced use cases.

## Video
This guide is also available as a video if you'd prefer to watch instead:
<video width="100%" controls><source src={videoGuide} /></video>

## Overview
In this gude, we're going to use EasySync to synchronize the color the Hoverbird player from our [Creating a player controller](../creating-a-player-controller.md) guide.

To start, let's open up the "Hoverbird Player" sample scene, program in our app key, and make sure everything is working correctly.

<video width="100%" controls><source src={videoGuide} /></video>

Now we're going to add EasySync to the "birdMesh" game object within the Hoverbird Player prefab:

<video width="100%" controls><source src={videoGuide} /></video>

You'll notice as soon as EasySync is added, we get a list of the public fields and properties that we can synchronize. Let's go ahead and select the Albedo color property of the Bird and Bird Belly materials on the MeshRenderer component:

<video width="100%" controls><source src={videoGuide} /></video>

Technically, that's all we need to do. Let's test this out, we're going to run the example using [Multiplayer Play Mode](https://google.com).
TODO: Fix the multiplayer play mode link.

Both instances will connect to the same room, and we can see a hoverbird player for each instance. Let's use the inspector to change the colors of one of the players. You'll notice the color updates immediately in the other instance.

TODO: add note about requiring ownership for interpolation to work.

Once thing you may notice is that the color updates are not smooth. This is because Normcore synchronizes updates at 20Hz by default. Rather than increasing the send rate, we can enable interpolation on the EasySync component:

<video width="100%" controls><source src={videoGuide} /></video>

Now let's re-enter play mode and try this out:

<video width="100%" controls><source src={videoGuide} /></video>

Now the color updates are nice and smooth regardless of what value we pick. And that's all there is to it.

TODO: Add a note about interpolation delay.

## Converting to a custom script

Occasionally, you may want to add more advanced synchronization logic, such as updating other components when these values change. EasySync supports being converted to a pre-written [RealtimeComponent](./synchronizing-custom-data.md) script. By opening the context menu on the EasySync component, we can select "Convert to RealtimeComponent":

<video width="100%" controls><source src={videoGuide} /></video>

This will create a new script with the same synchronization functionality as our EasySync component, and then will replace our EasySync component with it automatically.

<video width="100%" controls><source src={videoGuide} /></video>

TODO: Stop saying, that's all there is to it.

And that's all there is to it. We believe EasySync will greatly improve how fast you can synchronize objects in your multiplayer game. And for the more advanced use cases, it can save you time by automatically generating the code needed for your RealtimeComponents.

## What can by synchronized
TODO: Clean up the language around fields vs properties and make sure it's accurate.
TODO: Clean up Components / GameObjects capitalization.
Public fields and properties of Components and the GameObject. Public and internal component types are supported with the exception of Component types living in precompiled DLLs, where only public fields or properties are supported.

## Supported types
EasySync supports the following types out of the box. If you have a custom type that you would like to synchronize with EasySync, Normcore supports writing a custom type serializer that will allow it to be used by EasySync.
- Primitive types: `bool`, `byte`, `sbyte`, `ushort`, `short`, `uint`, `int`, `ulong`, `long`, `float`, `double`.
- Unity types: `Vector2`, `Vector3`, `Vector4`, `Quaternion`, `Color`.

## Advanced Settings

<video width="100%" controls><source src={videoGuide} /></video>

TODO: Actually enable advanced settings and write up what you use it for. It's not clear from Sergi's docs.

TODO:
- Anything else missing from Sergi's docs? (Supported types, etc): https://docs.google.com/document/d/1KHa6qCYPiSb_xBLSYDOg3RpJgyUfkhfPZguDNitlDMI/edit?tab=t.0





