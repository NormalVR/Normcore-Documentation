---
layout: docs
title: Using Final IK
---
# Using Final IK

Final IK is the most popular Unity asset for adding realistic IK to player controllers in your game. This guide will demonstrate how to create a multiplayer player controller in Normcore using Final IK.

When you're finished, you'll end up with a multiplayer game that looks like this:

<video src="./creating-a-finalik-player/completed-character-controller.mp4" width="100%" controls></video>

We'll start by creating a singleplayer player controller from scratch with Final IK. (TODO: Rewrite the next sentence once the guide is complete) We'll get the controls to feel nice, and then we'll make it multiplayer. If you're only interested in the multiplayer part, skip to [making it multiplayer](#making-it-multiplayer).

## Creating a player controller

Before we can utilize Final IK, we'll need a player controller that allows us to move the player with WASD keys. Create a copy of the Blank Scene Template scene included in the `Normal/Examples` folder. Save it as "Final IK Player Controller".

Let's start by creating a game object to represent the player. Create an empty game object in the scene named "Player" and add Normcore's built-in **Player** component.

Add a **Rigidbody** to the "Player" game object so that it can respond to physics. We'll always want our player to remain upright, so let's enable Freeze Rotation on every axis.

Last, we'll add a Capsule game object to represent the body of the player. Set the y-position at 1 so the bottom is lined up with the ground.

<video src="./creating-a-finalik-player/adding-player-and-controls.mp4" width="100%" controls></video>

Looking good so far! If we enter Play mode, we can use the WASD keys to move our capsule player around.

<video src="./creating-a-finalik-player/testing-player-controls.mp4" width="100%" controls></video>

## Integrating a Final IK character

Now that we have a player controller that we can move around, it's time to bring in a Final IK character. First, if you haven't already, import Final IK from the asset store.

Grab a Final IK character from the `Plugins/RootMotion/Shared Demo Assets/Characters` folder and drag it into the scene as a child of the "Player" game object. In this example, we'll be using the Pilot.

Last but not least, let's hide the **MeshRenderer** for the capsule collider. It's important to keep the collider itself enabled so our player doesn't fall through the ground.

Let's enter play mode and try this out.

<video src="./creating-a-finalik-player/adding-finalik-character.mp4" width="100%" controls></video>

As we can see, our character is there, but (TODO: how does it fail?). In order for our character to animate correctly, we'll need to set up an animation controller.

Normcore comes with a built-in animation controller for Final IK. Drag the **PlayerAnimatorController** component from the Unity project into the **Controller** field on the **Animator** component. And to ensure that the **Player** component can drive this animator controller, drag a reference from the "Pilot" game object into the **Character** slot.

<video src="./creating-a-finalik-player/updating-animator.mp4" width="100%" controls></video>

Much better! This looks good, but Final IK provides a handful of built-in components that we can use to polish this animation even further.

## Using Final IK components

Our character works well, but there are a few places where it falls short. Our character doesn't lean when running in a circle, and if we add a ramp to the scene that our character can walk up, you can see the character's feet don't line up with the ground.

<video src="./creating-a-finalik-player/testing-before-grounder.mp4" width="100%" controls></video>

Luckily, Final IK comes with a variety of components that can be used to refine the animation of our character.

On the "Pilot" game object, add a **FullBodyBipedIK** component, a **BodyTilt** component.

Populate the **BodyTilt** component **IK** field by dragging in a reference to the **FullBodyBipedIK** component. We'll also need to provide a left and right pose. Normcore includes a "Pose Left" and "Pose Right" preset that can be found in the `Normal/Examples/Final IK Player Controller/Character` folder.

You can adjust the values for **Tilt Speed**, and **Tilt Sensitivity** as you like, but we have found 5.0 for Tilt Speed and 0.2 for Tilt Sensitivity look great.

<video src="./creating-a-finalik-player/adding-body-tilt.mp4" width="100%" controls></video>

Last, let's add the **GrounderFullBodyBiped** component. Open up the Solver, and set *Layers* to "Default". This is the collision layer used for the solver. As your game grows, you may want to create a dedicated layer for the ground and surfaces you would like your player to land on.

<video src="./creating-a-finalik-player/adding-grounder.mp4" width="100%" controls></video>

Now that both of those components are set up. Let's test it out! Have the player run in a circle and walk up the ramp.

<video src="./creating-a-finalik-player/testing-after-grounder.mp4" width="100%" controls></video>

Much better! Our character now runs around and looks great doing it, but our camera is left behind. Let's fix that!

## Camera controls

Normcore comes with a built-in component called **PlayerCameraManager**. This component handles all of the logic for moving the camera with your player. It also supplies metadata about where the camera is looking so the **Player** component can correctly handle things like strafing.

Add the **PlayerCameraManager** component to the "Player" game object and create a child game object called "Follow Target". This will represent the point on the player that the camera should follow. Wire it up to the **Follow Target** slot and we're good to go. (TODO: Player should automatically find the **PlayerCameraManager** component if the're on the same game object)

<video src="./creating-a-finalik-player/adding-camera-controls.mp4" width="100%" controls></video>

Let's test it out! Our camera should now smoothly follow the player and we can use the mouse to adjust the look direction and our player will follow suit!

<video src="./creating-a-finalik-player/testing-camera-controls.mp4" width="100%" controls></video>


### Making it Multiplayer

At this point, we've got a Final IK player controller that looks great, and a camera that follows our player. Now we'll use Normcore to make it work in multiplayer.

TODO: We need to implement the RequestOwnershipAllComponentsAndChildViews()
TODO: Have PlayerManager call RequestOwnershipAllComponentsAndChildViews() after it spawns the Player prefab.

First we need to synchronize the position of the player. To do that, we'll add a RealtimeTransform component to the root of our Player prefab. Because this RealtimeTransform is controlling a rigidbody that we want to maintain ownership of, configure the **Sleep* setting to use **Maintain Ownership While Sleeping**.

We'll also want to synchronize the rotation of the Final IK character, so we'll also add a RealtimeTransform to the "Pilot" game object.

(Video of those steps)

At this point, our Final IK Player prefab is complete, but we need a way to spawn a copy for each player. Convert it to a prefab by dragging it into a Resources folder.

Next, we'll create an empty game object and add a **Realtime** component and a **PlayerManager** component. Make sure you're **Realtime** component is configured with an app key. If you're unsure how to do that, check out our Getting Started (TODO: Link the guide) guide.

Last, wire up a reference from the "Player" prefab to the **PlayerManager** component, and we're done!

(Video of those steps)

If we export a build, and enter play mode, we'll see two copies of our player prefab with everything perfectly in sync!

(Final video)

TODO: Outro copy
