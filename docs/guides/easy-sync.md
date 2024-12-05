---
layout: docs
title: Synchronizing Component Properties with Normcore
---

# Synchronizing Component Properties with Normcore

Normcore now offers a powerful, zero-code way to synchronize properties across the network. This guide will walk you through setting up property synchronization using a UI Toggle as an example.

## Prerequisites

Before we begin, ensure you have:
- Normcore installed in your Unity project.
- A multiplayer scene set up with a Realtime component.
- A UI Toggle you want to synchronize across all connected clients.

## Step 1: Set Up Your Scene

Start by creating a simple scene with a UI Toggle. In your Hierarchy, right-click and select UI > Toggle to create one.

## Step 2: Add Realtime to Your Scene

If you haven't already, add a Realtime component to an empty GameObject in your scene. Make sure to set your App Key from the [Normcore Dashboard](https://dashboard.normcore.io/apps).

## Step 3: Synchronize the Toggle State

To enable Normcore's property synchronization, first add the EasySync component to your Toggle GameObject.
After adding the EasySync component, you'll notice a new "Normcore" foldout at the bottom of the Toggle component in the Inspector.
Expand the Normcore foldout for the Toggle component. Here, you'll see a list of available properties to synchronize. For a Toggle, you'll want to sync the "Is On" property.

1. Check the box next to "isOn" to enable synchronization.
2. Choose your sync method:
   - Reliable: Guarantees message delivery in order.
   - Unreliable: Faster, but might drop packets (good for frequent updates).

For a toggle state, we recommend using Reliable sync to ensure all clients see the same toggle state.

## Example Scene Setup

Here's a step-by-step walkthrough of what this looks like:

1. Create a new scene.
2. Add a Canvas to the Hierarchy.
3. Add a UI Toggle to the Canvas.
4. Add an empty GameObject and attach the Realtime component.
5. Select the Toggle in the Inspector.
6. Expand the Normcore foldout.
7. Enable sync for the "isOn" property.
8. Set sync method to Reliable.

## Testing Your Synchronized Toggle

Build and run your application on multiple devices or in multiple Unity Editor windows. When you click the toggle on one client, you should see the state change simultaneously on all connected clients.

## Advanced Tips

- This synchronization works with many component types.
- You can sync properties from custom scripts, Character Controllers, and more.
- The Normcore foldout appears on most components, making synchronization extremely straightforward.

### Potential Use Cases

- Synchronizing UI element states.
- Sharing character controller settings.
- Quickly prototyping multiplayer interactions.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../realtime/synchronizing-custom-data.md)
- [Networked Physics](../realtime/networked-physics.md)
