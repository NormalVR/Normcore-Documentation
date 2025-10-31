---
layout: docs
title: Using EasySync
---
import videoGuide from './network-profiler/profile-unoptimized.mp4'


# Using EasySync

EasySync is a component that allows you to sync objects in your Unity scene without writing any code. EasySync can synchronize public fields and properties, and when you need to drop down to code, it can be converted in-place to a custom C# [RealtimeComponent](./synchronizing-custom-data.md) subclass that you can customize for more advanced use cases.

## Overview
In this gude, we're going to use EasySync to synchronize the color of the Hoverbird player from our [Creating a player controller](./creating-a-player-controller.md) guide.

Open up the "Realtime + Hoverbird Player" scene (or the URP variant if you're on Unity 6+ using URP), locate the "Hoverbird Player" prefab and open it up, and let's add the EasySync component to the "birdMesh" game object:

<video width="100%" controls><source src={videoGuide} /></video>

You'll notice as soon as EasySync is added, we get a list of the public fields and properties that we can synchronize. If we open up the **Bird** material we can find the new Normcore section and check the box for "Base Color".

<video width="100%" controls><source src={videoGuide} /></video>

Technically, that's all we need to do. Let's test this out, we're going to run the example using [Multiplayer Play Mode](https://google.com).

Both instances will connect to the same room and we can see a hoverbird player for each instance. Let's use the inspector to change the colors of of the local player (Make sure the RealtimeView shows that it's owned by the local client). You'll notice the color updates immediately in the other instance:

<video width="100%" controls><source src={videoGuide} /></video>

One thing you may notice is that the color updates are not smooth. This is because Normcore synchronizes updates at 20Hz by default. Rather than increasing the send rate, we can enable interpolation on the EasySync component to smooth out these updates:

<video width="100%" controls><source src={videoGuide} /></video>

Now the color updates are nice and smooth regardless of what value we pick. And that's all there is to it.

TODO: Add a note about interpolation delay.

## Converting to a custom script

Occasionally, you may want to add more advanced synchronization logic, such as updating other components when these values change. EasySync supports being converted to a pre-written [RealtimeComponent](./synchronizing-custom-data.md) script. By opening the context menu on the EasySync component, we can select "Convert to RealtimeComponent":

<video width="100%" controls><source src={videoGuide} /></video>

This will create a new script with the same synchronization functionality as our EasySync component, and then will replace our EasySync component with it automatically.

<video width="100%" controls><source src={videoGuide} /></video>

This script functions the exact same way as if you had written a RealtimeComponent and RealtimeModel subclass by hand.

And that's all there is to it. We believe EasySync will greatly improve how fast you can synchronize objects in your multiplayer game. And for the more advanced use cases, it can save you time by automatically generating the code needed for your RealtimeComponents.

TODO: Stop saying, that's all there is to it.

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



TODO: There are tons of spelling and grammar issues. Make sure to fix!!

