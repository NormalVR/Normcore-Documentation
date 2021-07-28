---
title: RealtimeTransform
layout: Reference
category: API Reference
class_name: RealtimeTransform
class_summary: A RealtimeComponent that synchronizes a Transform
class_remarks: RealtimeTransform uses the owner to signal which client's Transform should be considered the state of truth to write to the datastore. If the local client is not the owner of the RealtimeTransform component, it will treat the datastore as the source of truth.
class_members:
- name: Properties
  members:
  - name: isSyncingPosition
    definition: bool isSyncingPosition { get; }
    summary: True if this transform is syncing its position with the model.
  - name: isSyncingRotation
    definition: bool isSyncingRotation { get; }
    summary: True if this transform is syncing its rotation with the model.
  - name: isSyncingScale
    definition: bool isSyncingScale { get; }
    summary: True if this transform is syncing its scale with the model.
  - name: isSyncingVelocity
    definition: bool isSyncingVelocity { get; }
    summary: True if the rigidbody on this transform is syncing its velocity with the model. If this is false, the velocity will be derived on remote clients from the position updates. Deriving the velocity saves bandwidth but is less accurate.
  - name: isSyncingAngularVelocity
    definition: bool isSyncingAngularVelocity { get; }
    summary: True if the rigidbody on this transform is syncing its angular velocity with the model. If this is false, the angular velocity will be derived on remote clients from the rotation updates. Deriving the angular velocity saves bandwidth but is less accurate.
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
