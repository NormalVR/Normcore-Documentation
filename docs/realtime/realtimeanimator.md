---
layout: docs
title: RealtimeAnimator
---
import realtimeTransformAndAnimator from './assets/realtime-transform-and-animator.mp4'

# RealtimeAnimator

<video width="100%" autoPlay playsInline loop muted><source src={realtimeTransformAndAnimator} /></video>

**RealtimeAnimator** is a built-in RealtimeComponent that synchronizes the built-in **Animator** component. It supports timeline animations, state machines (with triggers), and humanoid IK.

Normcore is the only networking solution that supports triggers out of the box without having to rewrite your code.

### Usage
1. Add a RealtimeAnimator component to any game object that has an Animator component and RealtimeAnimator will take care of the rest.

2. Make sure the RealtimeView on the same game object is owned by the client you would like to drive the animation by using `realtimeView.RequestOwnership()`.

:::tip
If you have scripts on the game object that drive the Animator, make sure to disable them when the game object is owned by a remote client. This will ensure that your scripts and RealtimeAnimator do not fight to drive the Animator component.
:::

### Interpolation
RealtimeAnimator uses interpolation to smooth out changes in certain properties to provide a smooth experience for your players. This helps to avoid abrupt jumps or visual glitches that can occur due to network latency or jitter.

RealtimeAnimator automatically applies interpolation to the following properties:

- **Animator Parameters (Float)**: Float parameters in the Animator Controller are interpolated. This assumes that float parameters, such as character speed, typically change smoothly.
- **Animator Layers (Weight)**: The weight of Animator Controller layers is interpolated. This helps create smooth animation blends and transitions between layers.
- **Avatar IK Goals and Hints**: The humanoid Inverse Kinematics (IK) system's weights, positions, and rotations are all interpolated.

#### Interpolation Delay
While interpolation improves the smoothness of networked animations, it also introduces a slight delay in the actual values being applied. This is generally acceptable for properties that are expected to change smoothly, but it may not be ideal for properties that need to react instantly.

### Triggers
Unlike other systems that require you to rewrite your code to call triggers through a proprietary API, Normcore uses the Playables API to detect triggers and synchronize them automatically.

Normcore does not require any special modifications to your code to support triggers.

### IK Synchronization
RealtimeAnimator automatically synchronizes IK values. It uses Unity's `OnAnimatorIK()` method to ensure correct execution order. All components that are placed higher up in the component stack on the same game object will execute before RealtimeAnimator samples the latest IK values.

### Root Motion
RealtimeAnimator by default does not synchronize root motion. If you need to synchronize root motion, we recommend using the [RealtimeTransform](realtimetransform.md) component alongside RealtimeAnimator in combination with the `disableRootMotionWhenOwnedRemotely` property.

#### Disabling root motion on remote clients

RealtimeAnimator's `disableRootMotionWhenOwnedRemotely` property is handy when using root motion to drive the animation of your character. RealtimeAnimator will leave Root Motion enabled on the owning client so it can move the game object, and will disable it on remote clients so they can receive the correct position from RealtimeTransform.
