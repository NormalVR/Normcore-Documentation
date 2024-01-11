---
title: RealtimeTransform
layout: Reference
category: API Reference
class_name: RealtimeTransform
class_summary: A RealtimeComponent that synchronizes a Transform
class_remarks: RealtimeTransform uses the owner to signal which client's Transform should be considered the state of truth to write to the datastore. If the local client is not the owner of the RealtimeTransform component, it will treat the datastore as the source of truth.
class_members:
- name: Static Fields
  members:
  - name: ExecutionOrder
    definition: public int ExecutionOrder
- name: Properties
  members:
  - name: syncTransform
    definition: bool syncTransform { get; set; }
    summary: If true, this transform will sync its position, rotation, and scale with the model.
  - name: syncPosition
    definition: bool syncPosition { get; set; }
    summary: If true, this transform will sync its position with the model.
  - name: syncRotation
    definition: bool syncRotation { get; set; }
    summary: If true, this transform will sync its rotation with the model.
  - name: syncScale
    definition: bool syncScale { get; set; }
    summary: If true, this transform will sync its rotation with the model.
  - name: syncVelocity
    definition: bool syncVelocity { get; }
    summary: If true, the rigidbody on this transform will sync its velocity with the model. If false, the velocity will be derived on remote clients from the position updates. Deriving the velocity saves bandwidth but is less accurate.
  - name: syncAngularVelocity
    definition: bool syncAngularVelocity { get; }
    summary: If true, the rigidbody on this transform will sync its angular velocity with the model. If false, the angular velocity will be derived on remote clients from the rotation updates. Deriving the angular velocity saves bandwidth but is less accurate.
  - name: maintainOwnershipWhileSleeping
    definition: bool maintainOwnershipWhileSleeping { get; set; }
    summary: If true, the RealtimeTransform will continue to be owned by the local client when the attached rigidbody it goes to sleep. This will prevent other clients from taking over the simulation for this object; only set it to true for objects that should always be simulated locally, like a player character.
  - name: isPhysicsOwnershipAvailable
    definition: bool isPhysicsOwnershipAvailable { get; }
    summary: True if this transform can be taken over a remote client for physics simulation.
  - name: isInterpolationWarmedUp
    definition: bool isInterpolationWarmedUp { get; }
    summary: True if the transform has caught up to the interpolation delay.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
