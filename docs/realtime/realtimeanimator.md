---
layout: docs
title: RealtimeAnimator
---
# RealtimeAnimator

RealtimeAnimator is a built-in RealtimeComponent that can be used to synchronize the Animator component's state-machine and humanoid IK.

## Overview

RealtimeAnimator ensures that animations and IK behaviors are synchronized for all players in the same multiplayer room. It handles synchronization of:

- Animator parameters (floats, integers, booleans, and triggers).
- Animator layers (weights, transitions, states, and normalized time).
- Humanoid Inverse Kinematics (IK) goals and hints.

TODO: Put a sweet video here. Show off a humanoid IK rig, but also show a non-IK animation that's in sync. Maybe using Multiplayer Play Mode?

TODO: Where did Sergi get the human IK rig he used in his demo?

Normcore is the only networking solution that supports Triggers out of the box without having to rewrite your code.

## Usage
Add a RealtimeAnimator component to any game object that has an Animator component and RealtimeAnimator will take care of the rest.

TODO: Does one client need to have ownership?

## Interpolation
RealtimeAnimator uses interpolation to smooth out changes in certain properties in order to provide a smooth experience for your players. This helps to avoid abrupt jumps or visual glitches that can occur due to network latency or jitter.

RealtimeAnimator automatically applies interpolation to the following properties:

- Animator Parameters (Float): Float parameters in the Animator Controller are interpolated. This assumes that float parameters, such as character speed, typically change smoothly.
- Animator Layers (Weight): The weight of Animator Controller layers is interpolated. This helps create smooth animation blends and transitions between layers.
- Avatar IK Goals and Hints: The humanoid Inverse Kinematics (IK) system's weights, positions, and rotations are all interpolated.

### Interpolation Delay
While interpolation improves the smoothness of networked animations, it also introduces a slight delay in the actual values being applied. This is generally acceptable for properties that are expected to change smoothly, but it may not be ideal for properties that need to react instantly.

## Triggers
Unlike other systems that require you to rewrite your code to call triggers through a proprietary API, Normcore uses the Playables API to detect triggers and synchronize them automatically.

Normcore does not require any special modifications to your code to support using triggers.

## IK Synchronization
RealtimeAnimator automatically synchronizes IK values. It uses Unity's `OnAnimatorIK()` method to ensure correct execution order. All components that are placed higher up in the component stack on the same game object will execute before RealtimeAnimator samples the latest IK values.

## Root Motion
RealtimeAnimator by default does not synchronize root motion. If you need to synchronize root motion, we recommend using the [RealtimeTransform](realtimetransform.md) component alongside RealtimeAnimator in combination with the `disableRootMotionWhenRemotelyOwned` property.
TODO: Final naming on the `disableRootMotionWhenRemotelyOwned` property. Update all spots in the guide.

### `disableRootMotionWhenRemotelyOwned`
RealtimeAnimator's `disableRootMotionWhenRemotelyOwned` property is handy when using root motion to drive the animation of your character. RealtimeAnimator will leave Root Motion enabled on the owning client so it can move the game object, and it will disable it on remote clients in order to let RealtimeTransform synchronize the position from the owning client.


