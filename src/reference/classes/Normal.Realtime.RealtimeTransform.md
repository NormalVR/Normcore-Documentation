---
title: RealtimeTransform
layout: Reference
category: API Reference
class_name: RealtimeTransform
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: isSyncingPosition
    definition: isSyncingPosition
    summary: True if this transform is syncing its position with the model.
    remarks: ''
    returns: ''
    parameters: []
  - name: isSyncingRotation
    definition: isSyncingRotation
    summary: True if this transform is syncing its rotation with the model.
    remarks: ''
    returns: ''
    parameters: []
  - name: isSyncingScale
    definition: isSyncingScale
    summary: True if this transform is syncing its scale with the model.
    remarks: ''
    returns: ''
    parameters: []
  - name: isSyncingVelocity
    definition: isSyncingVelocity
    summary: True if the rigidbody on this transform is syncing its velocity with the model. If this is false, the  velocity will be derived on remote clients from the position updates. Deriving the velocity saves bandwidth  but is less accurate.
    remarks: ''
    returns: ''
    parameters: []
  - name: isSyncingAngularVelocity
    definition: isSyncingAngularVelocity
    summary: True if the rigidbody on this transform is syncing its angular velocity with the model. If this is false,  the angular velocity will be derived on remote clients from the rotation updates. Deriving the angular  velocity saves bandwidth but is less accurate.
    remarks: ''
    returns: ''
    parameters: []
  - name: maintainOwnershipWhileSleeping
    definition: maintainOwnershipWhileSleeping
    summary: If true, the RealtimeTransform will continue to be owned by the local client when the attached rigidbody  it goes to sleep. This will prevent other clients from taking over the simulation for this object; only  set it to true for objects that should always be simulated locally, like a player character.
    remarks: ''
    returns: ''
    parameters: []
  - name: isPhysicsOwnershipAvailable
    definition: isPhysicsOwnershipAvailable
    summary: True if this transform can be taken over a remote client for physics simulation.
    remarks: ''
    returns: ''
    parameters: []
  - name: isInterpolationWarmedUp
    definition: isInterpolationWarmedUp
    summary: True if the transform has caught up to the interpolation delay.
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: OnRealtimeModelReplaced
    definition: void OnRealtimeModelReplaced(RealtimeTransformModel previousModel, RealtimeTransformModel currentModel)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SetTransformValues
    definition: void SetTransformValues(Vector3 position, Quaternion rotation, Vector3 scale)
    summary: Set the transform position, rotation, and scale (filtered by the component settings).
    remarks: ''
    returns: ''
    parameters: []
  - name: SetTransformFromModel
    definition: void SetTransformFromModel()
    summary: Set the transform position, rotation, and scale using the model (filtered by the component settings).
    remarks: ''
    returns: ''
    parameters: []
  - name: SetModelValues
    definition: void SetModelValues(Vector3 position, Quaternion rotation, Vector3 scale)
    summary: Set the model position, rotation, and scale (filtered by the component settings).
    remarks: ''
    returns: ''
    parameters: []
  - name: SetModelFromTransform
    definition: void SetModelFromTransform()
    summary: Set the model position, rotation, and scale using the local transform (filtered by the component settings).
    remarks: ''
    returns: ''
    parameters: []

---
