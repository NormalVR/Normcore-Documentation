---
layout: docs
title: Final IK Player Controller
---
# Creating a Final IK player controller

Final IK is the most popular Unity asset for adding realistic IK to player controllers in your game. This guide will demonstrate how to create a multiplayer player controller in Normcore using Final IK.

When you're finished, you'll end up with a multiplayer game that looks like this:

![](./creating-a-final-ik-player-controller/completed-character-controller.mp4)

We'll start by creating a singleplayer player controller from scratch with Final IK. We'll get the character rig working and then we'll make it multiplayer. If you're only interested in the multiplayer part, skip to [Making it multiplayer](#making-it-multiplayer).

## Creating the player controller

Before we can utilize Final IK, we'll need a player controller that allows us to move the player with WASD keys. Create a copy of the Blank Scene Template scene included in the `Normal/Examples` folder. Save it as "Final IK Player Controller".

Let's start by creating a game object to represent the player. Create an empty game object in the scene named "Player", reset the transform to zero, and add Normcore's built-in **Player** component.

Add a **Rigidbody** to the "Player" game object so that it can respond to physics. Our player should always remain upright, so let's enable **Freeze Rotation** on every axis.

Last, we'll add a **Capsule Collider** game object to represent the body of the player. Set the capsule's **y-position** to `1.0` so the bottom is lined up with the ground.

![](./creating-a-final-ik-player-controller/adding-player-object.mp4)

Looking good so far! Let's test it out. Enter Play mode and use the WASD keys to move the player around.

![](./creating-a-final-ik-player-controller/testing-player-controls.mp4)

It's not the most impressive yet, but now we're ready to integrate a character from Final IK.

## Integrating a Final IK character

Now that we have a player controller that we can move around, it's time to bring in a Final IK character. First, if you haven't already, import Final IK from the asset store.

Let's hide the **MeshRenderer** for the capsule collider. It's important to keep the collider itself enabled so our player doesn't fall through the ground.

Grab a Final IK character from the `Plugins/RootMotion/Shared Demo Assets/Characters` folder and drag it into the scene as a child of the "Player" game object. In this example, we'll be using the Pilot. Make sure to grab the relevant materials too from the `Materials` folder.

![](./creating-a-final-ik-player-controller/adding-finalik-character.mp4)

As we can see, our character is there, but there's no animation at all. In order for our character to animate correctly, we'll need to set up an animation controller.

Normcore comes with a built-in animation controller for Final IK. Drag the **PlayerAnimatorController** component from the Unity project into the **Controller** field on the **Animator** component. And to ensure that the **Player** component can drive this animator controller, drag a reference from the "Pilot" game object into the **Character** slot.

![](./creating-a-final-ik-player-controller/adding-animations.mp4)

Much better! This looks good, but our camera should follow the player. Let's add a few components to manage the camera.

## Camera controls

Normcore comes with a built-in component called **PlayerCameraManager**. This component handles all of the logic for moving the camera with your player. It also supplies metadata about where the camera is looking so the **Player** component can correctly handle things like strafing.

Add the **PlayerCameraManager** component to the "Player" game object and create a child game object called "Follow Target". This will represent the point on the player that the camera should follow, so let's position it around `1.0` on the y-axis. Wire it up to the **Follow Target** slot and we're good to go.

![](./creating-a-final-ik-player-controller/adding-camera-controls.mp4)

Let's test it out! Our camera should now smoothly follow the player and we can use the mouse to adjust the look direction and our player will follow too!

![](./creating-a-final-ik-player-controller/testing-camera-controls.mp4)

Nice! This looks pretty good, but our character feels pretty rigid. Let's fix that in the next section.

## Using Final IK components

Our character works well, but doesn't lean when running in a circle, and if we add a ramp to the scene that our character can walk up, you can see the character's feet don't line up with the ground.

![](./creating-a-final-ik-player-controller/testing-before-grounder.mp4)

Luckily, Final IK comes with a variety of components that can be used to refine the animation of our character.

On the "Pilot" game object, add a **FullBodyBipedIK** component, and a **BodyTilt** component.

Populate the **BodyTilt** component **IK** field by dragging in a reference to the **FullBodyBipedIK** component. We'll also need to provide a left and right pose. Normcore includes a "Pose Left" and "Pose Right" preset that can be found in the `Normal/Examples/Final IK Player Controller/Character` folder.

You can adjust the values for **Tilt Speed**, and **Tilt Sensitivity** as you like, but we have found `5.0` for **Tilt Speed** and `0.2` for **Tilt Sensitivity** look great.

![](./creating-a-final-ik-player-controller/adding-body-tilt.mp4)

Last, let's add the **GrounderFullBodyBiped** component. Open up the Solver, and set *Layers* to "Default". This is the collision layer used for the solver. As your game grows, you may want to create a dedicated layer for the ground and surfaces you would like your player to land on.

![](./creating-a-final-ik-player-controller/adding-grounder.mp4)

Now that both of those components are set up. Let's test it out! Have the player run in a circle and walk up the ramp.

![](./creating-a-final-ik-player-controller/testing-after-grounder.mp4)

Much better! Our character now behaves much more naturally in the environment.

## Making it multiplayer

At this point, we've got a Final IK player controller that looks great, and a camera that follows our player. Now we'll use Normcore to make it multiplayer.

First we need to network the position of the player. To do that, we'll add a RealtimeTransform component to the root of our Player prefab. Because this RealtimeTransform is controlling a rigidbody that we want to maintain ownership of, configure the **Sleep** setting to use **Maintain Ownership While Sleeping**.

We'll also want to network the rotation of the Final IK character, so we'll also add a RealtimeTransform to the "Pilot" game object itself. This will synchronize things like look direction and body tilt over the network.

![](./creating-a-final-ik-player-controller/adding-realtime-components.mp4)

At this point, our Final IK Player prefab is complete, but we need a way to spawn a copy for each player. Convert it to a prefab by dragging it into a Resources folder.

Next, we'll create an empty game object and add a **Realtime** component and a **PlayerManager** component. Make sure you're **Realtime** component is configured with an app key. If you're unsure how to do that, check out our [Getting Started](../essentials/getting-started) guide.

_It's worth noting, typically, we'd need to call `RequestOwnershipOfSelfAndChildren()` on the root **RealtimeView** to request ownership of the **RealtimeTransform** components added here, but **PlayerManager** will do that for us. If you're curious how it works, the source code for both **PlayerManager** and **Player** are included with Normcore. Feel free to modify them to your liking!_

Last, wire up a reference from the "Player" prefab to the **PlayerManager** component, and we're done!

![](./creating-a-final-ik-player-controller/creating-player-manager.mp4)

If we export a build, and enter play mode, we'll see two copies of our player prefab with everything perfectly in sync!

![](./creating-a-final-ik-player-controller/creating-final-build.mp4)

And that's it! Now we've got a great looking character controller working with Final IK over the network!

Until next time : )
