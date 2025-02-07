---
layout: docs
title: Getting Started
---

import hoverbirdCompleted from './getting-started/hoverbird-completed.mp4'
import importNormcore from './getting-started/import-normcore.mp4'
import openHoverbirdExample from './getting-started/open-hoverbird-example.mp4'
import createAppKey from './getting-started/create-app-key-and-add-to-project.mp4'
import multiplayerBuild from './getting-started/multiplayer-build.mp4'

# Getting Started

Welcome to Normcore! This guide will show you how to get Normcore working in your project in just a few minutes.

<video width="100%" autoPlay loop muted><source src={hoverbirdCompleted} /></video>

## Download Normcore

You’ll need to grab a copy of the latest Normcore plugin. You can download it [here](https://dashboard.normcore.io/download) after [creating a Normcore account](https://dashboard.normcore.io/register).

Import Normcore by dragging the **Normcore.unitypackage** file into the **Project** tab in the Unity editor.

<video width="100%" title="Importing the Normcore unitypackage file." controls><source src={importNormcore} /></video>

Upon import, Normcore will automatically add the [Normal scoped registry](../architecture/normal-scoped-registry) to your project. Once you have the plugin imported and Unity has had a chance to recompile successfully, you should see a Normal folder in your project and Normcore in the Unity Package Manager window.

## Create a Normcore app

Let's open one of the example scenes. Browse to `Normal/Examples/Hoverbird Player` and open the `Realtime + Hoverbird Player` scene.

<video width="100%" title="Open the hoverbird example scene" controls><source src={openHoverbirdExample} /></video>

You'll notice that in the **Realtime** inspector, there's a field for an "App key." Before we can hit play, we’ll need an app key to connect to Normal’s servers.

### Create an app key

Log into [dashboard.normcore.io](https://dashboard.normcore.io) and go to the **Apps** tab. Click on "Create new application", give it a name, and click "Create".

<video width="100%" title="Create an app key and add it to your Unity project" controls><source src={createAppKey} /></video>

Copy and paste the app key into the "App Key" field on the **Realtime** component, and hit Play. Normcore will automatically spin up a game server, connect to it, and spawn a player.

Use the WASD keys to move around and the spacebar to jump. If the player isn't moving, be sure to click inside of the Game window in Unity. Now let’s test it in multiplayer.

### Export a multiplayer build

Export a standalone build to run next to the Unity Editor. Open the standalone build, hit Play in the editor and a second player should appear. Use the WASD keys to move around; you should see your Hoverbird player update in real time in both windows.

<video width="100%" title="Test out a multiplayer build" controls><source src={multiplayerBuild} /></video>

That’s it! You’re now up and running with Normcore. Want to learn how to create this example from scratch? Check out our [Creating a player controller](../guides/creating-a-player-controller.md) guide.

If you're ready to dive into more, check out some of our other guides on Normcore:
- [XR Avatars and Voice Chat](../guides/xr-avatars-and-voice-chat.md)
- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)

Until next time  :)
