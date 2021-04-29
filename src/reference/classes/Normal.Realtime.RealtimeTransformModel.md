---
title: RealtimeTransformModel
layout: Reference
category: API Reference
class_name: RealtimeTransformModel
class_summary: ''
class_remarks: ''
class_members:
- name: Events
  members:
  - name: onWillWrite
    definition: onWillWrite
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: onDidRead
    definition: onDidRead
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Properties
  members:
  - name: useGravity
    definition: useGravity
    summary: True if the rigidbody on this transform is using gravity on the simulating client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isKinematic
    definition: isKinematic
    summary: True if the rigidbody on this transform is kinematic on the simulating client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isSleeping
    definition: isSleeping
    summary: True if the rigidbody on this transform is sleeping on the simulating client.
    remarks: ''
    returns: ''
    parameters: []
  - name: maintainOwnershipWhileSleeping
    definition: maintainOwnershipWhileSleeping
    summary: True if the rigidbody on this transform shouldn't clear ownership when it sleeps. This is useful for  rigidbodies that should never be simulated on different clients, like player objects.
    remarks: ''
    returns: ''
    parameters: []
  - name: timestamp
    definition: timestamp
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: hasTransformChanges
    definition: hasTransformChanges
    summary: True if the model has any pending transform changes it needs to send to the datastore.
    remarks: ''
    returns: ''
    parameters: []
  - name: hasPhysicsBodyChanges
    definition: hasPhysicsBodyChanges
    summary: True if the model has any pending physics body changes it needs to send to the datastore.
    remarks: ''
    returns: ''
    parameters: []
  - name: hasPhysicsStateChanges
    definition: hasPhysicsStateChanges
    summary: True if the model has any pending physics state changes it needs to send to the datastore.
    remarks: ''
    returns: ''
    parameters: []
  - name: position
    definition: position
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: rotation
    definition: rotation
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: scale
    definition: scale
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: velocity
    definition: velocity
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: angularVelocity
    definition: angularVelocity
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: physicsBodyTimeOffset
    definition: physicsBodyTimeOffset
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: physicsState
    definition: physicsState
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: physicsStateTimeOffset
    definition: physicsStateTimeOffset
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: SetSafePosition
    definition: void SetSafePosition(Vector3 p)
    summary: Set the position, while checking for NaN and custom epsilon.
    remarks: ''
    returns: ''
    parameters: []
  - name: SetSafeRotation
    definition: void SetSafeRotation(Quaternion r)
    summary: Set the rotation, while checking for NaN and custom epsilon.
    remarks: ''
    returns: ''
    parameters: []
  - name: SetSafeScale
    definition: void SetSafeScale(Vector3 s)
    summary: Set the scale, while checking for NaN and custom epsilon.
    remarks: ''
    returns: ''
    parameters: []
  - name: SetSafeVelocity
    definition: void SetSafeVelocity(Vector3 v)
    summary: Set the velocity, while checking for NaN and custom epsilon.
    remarks: ''
    returns: ''
    parameters: []
  - name: SetSafeAngularVelocity
    definition: void SetSafeAngularVelocity(Vector3 v)
    summary: Set the angular velocity, while checking for NaN and custom epsilon.
    remarks: ''
    returns: ''
    parameters: []
  - name: OnParentReplaced
    definition: void OnParentReplaced(RealtimeModel previousParent, RealtimeModel currentParent)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Write
    definition: void Write(WriteStream stream, StreamContext context)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Read
    definition: void Read(ReadStream stream, StreamContext context)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
