---
layout: docs
title: Creating a FinalIK Player Controller
---
# Creating a FinalIK Player Controller

This guide will demonstrate how to create a multiplayer third-person character controller that uses models and animations from the FinalIK package.

When you're finished, you'll end up with multiplayer characters that look like this:

![](./creating-a-finalik-player/completed-character-controller.mp4)

We will start by creating a single-player variant of the character controller, complete with a follow camera, and a FinalIK model with clean animation and controls.

## Creating a singleplayer player controller

We are going to need a scene to get started.  Create a copy of the Blank Scene Template scene included in the `Normal/Examples/Blank Scene Template` folder. Save it as "FinalIK Player Controller".

Create an empty game object in the scene named "Player". Reset the Transform to center the object.

Add a **Rigidbody** to the Player game object so that it can respond to physics. We'll always want our player to remain upright, so let's enable Freeze Rotation on every axis.

Last, we'll add a Capsule game object to represent the body of the player. Set the y-position at 1 so the bottom is lined up with the ground.

![](./creating-a-finalik-player/adding-player-object.mp4)

Looking good so far! If we enter Play mode, nothing will happen, so let's Add in some Player controls.

### Adding Player Controls

On the Player object, add the "Player" component.

With that added, we can now enter play mode, and test out the controls.  Using WASD, you should see the capsule move around and jump with Space.

![](./creating-a-finalik-player/adding-player-controls.mp4)

So far so good, but we don't just want to play as a capsule. Let's fix that.

### Using a FinalIK Model

With the FinalIK package added to our project, we have access to a handful of models that work great with our guide.

Navigate to the `Plugins/RootMotion/Shared Demo Assets/Characters` folder, and select a biped model that you would like to use.  Drag and drop the model as a child of your Player object.

Now we can hide the capsule that is blocking the model.  Select the capsule component, and disable the Mesh Renderer component.

![](./creating-a-finalik-player/adding-finalik-model.mp4)

Next, we need to change the animator controller reference that is on the FinalIK character to our animator controller called "FinalIKPlayerAnimatorController".

Drag in a reference to our new character into our Player script.

![](./creating-a-finalik-player/adding-character-reference.mp4)

With that reference set, we can now give it another test!

![](./creating-a-finalik-player/testing-finalik-model.mp4)

The new model and animations look good, but there are still a handful of FinalIK components that we can use to polish the animations further.

### Using FinalIK Components

FinalIK offers a variety of components that work together to polish up animations for specific needs within your game.  Many more components can be used to suit your specific needs, but for this guide, we will be using a few components to add inverse kinematics to the feet and tilt to the body.

On your FinalIK character add a new component called "Full Body Biped IK".

Add another component called "BodyTilt".  Make sure you drag in a reference to the Full Body Biped IK component, as well as the tilt poses that we have provided in the `Normal/Examples/FinalIK Player/ FinalIK Character` folder. You can adjust the values for Tilt Speed, and Tilt Sensitivity as you like, but we have found 5.0 for Tilt Speed and 0.2 for Tilt Sensitivity look great.

![](./creating-a-finalik-player/adding-body-tilt.mp4)

Let's add another component called "GrounderFullBodyBiped". Open up the Solver, and set the Layers to "Default".  This will be the layer that foot collisions will happen on, so make sure it matches the layer that any ground colliders will be on for your game.

![](./creating-a-finalik-player/adding-grounder.mp4)

With that last change, we are ready to test our new animations.

![](./creating-a-finalik-player/testing-finalik-animations.mp4)

When testing try standing still on top of the small blocks within the scene, you should see the feet rotate to match the ground below.

Now that the character looks great, we can address the camera.  Up to this point in the guide the camera has been stuck in one place, so let's fix that!

### Adding Follow Camera and Camera Controls

Add a new component to our Player object called "CameraManager".  This will handle all of the camera-related movement and controls for our third-person player.

Create an empty game object as a child of our Player object, named "Follow Target".  Then position this object at { 0, 1, 0 }.  This will be used to keep the rotation of our camera separate from the rotation of our character model.

Now we need to add the "Follow Target" object as a reference to our CameraManager script.

Add the CameraManager reference to our Player script.  

![](./creating-a-finalik-player/adding-camera-controls.mp4)

Now we can hit PLAY and test our new follow camera.

![](./creating-a-finalik-player/testing-camera-controls.mp4)

When testing you will see that the camera follows us around, and can be rotated using the mouse.  This feels great, but our player is still stuck in single-player, let's fix that by making this multiplayer!

### Making it Multiplayer

There are two parts to making our player multiplayer.  The first part is to track the transformation of our player and associated objects over the network.

Luckily Normcore has a few built-in components to make this step easy.  To track the transformation of an object over the network using Normcore, we just need to add a RealtimeTransfrom component to that object.

Add a "RealtimeTransformManager" component to our player object.  This will ensure that our player has ownership of all of the Realtime components we just added.

Go ahead and add a RealtimeTransform component to our Player object.  This will also add a RealtimeView component, which is used by Normcore to track the ownership of an object over the network.  Within the RealtimeTransfrom component, make sure that "Sleep" is set to "Maintain Ownership While Sleeping".

Add another RealtimeTransform component to our FinalIK character.

![](./creating-a-finalik-player/adding-realtime-components.mp4)

Now our Player is complete, and we can turn it into a prefab by dragging and dropping it into the "Resources" folder.  Then we can delete it from the scene.

![](./creating-a-finalik-player/creating-player-prefab.mp4)

Next, we need to create an empty game object called "Player Manager" and add the PlayerManager component to it.  This will allow us to connect and play with other players over the network.

Drag in our newly created Player prefab as a reference in our PlayerManager script.  This is the player that will be spawned for us.

Lastly, we need to add a "Realtime" component to our player manager object.  Set the "App Settings" and paste in the appID.

![](./creating-a-finalik-player/adding-player-manager.mp4)

If you want to test this quickly, you can go to `File/Build And Run` and create the first instance of the game.  Then use the Play button in the editor to connect as a second player.  Each of these players will be synced and playable in multiplayer!

![](./creating-a-finalik-player/final-test.mp4)