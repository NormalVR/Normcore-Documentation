---
title: RealtimeTransform
layout: Reference
category: API Reference
class_name: RealtimeTransform
class_description: ''
class_properties:
- name: extrapolation
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1a70b42cfe0863c1233275b29574e51122
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.RealtimeTransform.extrapolation
- name: isOwnedByWorld
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1a748fc4ca2cde2e3509c500b4eaf71204
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.RealtimeTransform.isOwnedByWorld
- name: isOwnedLocally
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1af0db949f6ed808f079e7b00579d2fe83
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.RealtimeTransform.isOwnedLocally
- name: model
  type: RealtimeTransformModel
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1aa35f5b9e48e1c0a2fbc7bc18164531c2
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: RealtimeTransformModel Normal.Realtime.RealtimeTransform.model
- name: ownerID
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1ad10ad35b04865aa294e4793f41240bd0
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: int Normal.Realtime.RealtimeTransform.ownerID
class_events: []
class_methods:
- name: ClearOwnership
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1a35cde2604d9fd4d314c0015de4815fc5
  brief_description: Clears ownership of the RealtimeView (if it’s owned by the local
    client, or preventOwnershipTransfer is false).
  detailed_description: ''
  description: "Clears ownership of the RealtimeView (if it’s owned by the local client,
    or preventOwnershipTransfer is false).\n\n"
  definition: void Normal.Realtime.RealtimeTransform.ClearOwnership
  return_type: void
  args_string: "()"
  arguments: []
- name: RequestOwnership
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_realtime_transform_1ac3f0f7a3583a59dc3e947640c6bce352
  brief_description: Requests ownership of the RealtimeView.
  detailed_description: ''
  description: "Requests ownership of the RealtimeView.\n\n"
  definition: void Normal.Realtime.RealtimeTransform.RequestOwnership
  return_type: void
  args_string: "()"
  arguments: []
class_enums: []
---

# RealtimeTransform

RealtimeTransform is a built-in RealtimeComponent that can be used to synchronize the transform or rigidbody of a GameObject.

## Editor Interface

![](./assets/realtimetransform.png "The RealtimeTransform inspector in Unity.")

**Sync Position, Rotation, and Scale:** Each toggle will determine whether RealtimeTransform should synchronize the position, rotation, and scale of the game object.

Note: When there is no rigidbody present, RealtimeTransform will synchronize the localPosition, localRotation, and localScale properties. However, if a rigidbody is present, it will synchronize the position, and rotation properties of the rigidbody which are in world space.

**Extrapolation:** A boolean that represents whether RealtimeTransform will use extrapolation to make up for latency incurred by the network. This property can be turned on/off at runtime.

### Ownership

If a RealtimeTransform is owned by the local client, it will synchronize the current transform position to the datastore so other clients can update their corresponding game object.

**This means that to move a RealtimeTransform, you need to call RequestOwnership() first! If a RealtimeTransform is not owned by the local client, you will be unable to move it.**

There are two buttons for Requesting and Clearing ownership that will enable in play mode. There is also an API (described below) that allows you to request ownership at runtime.

