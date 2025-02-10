---
title: RealtimeTransformModel
layout: Reference
category: API Reference
class_name: RealtimeTransformModel
class_members:
- name: Properties
  members:
  - name: useGravity
    definition: bool useGravity { get; set; }
    summary: True if the rigidbody on this transform is using gravity on the simulating client.
  - name: isKinematic
    definition: bool isKinematic { get; set; }
    summary: True if the rigidbody on this transform is kinematic on the simulating client.
  - name: isSleeping
    definition: bool isSleeping { get; set; }
    summary: True if the rigidbody on this transform is sleeping on the simulating client.
  - name: maintainOwnershipWhileSleeping
    definition: bool maintainOwnershipWhileSleeping { get; set; }
    summary: True if the rigidbody on this transform shouldn't clear ownership when it sleeps. This is useful for rigidbodies that should never be simulated on different clients, like player objects.
  - name: timestamp
    definition: double timestamp { get; }
  - name: hasTransformChanges
    definition: bool hasTransformChanges { get; }
    summary: True if the model has any pending transform changes it needs to send to the datastore.
  - name: hasPhysicsBodyChanges
    definition: bool hasPhysicsBodyChanges { get; }
    summary: True if the model has any pending physics body changes it needs to send to the datastore.
  - name: hasPhysicsStateChanges
    definition: bool hasPhysicsStateChanges { get; }
    summary: True if the model has any pending physics state changes it needs to send to the datastore.
  - name: position
    definition: Vector3 position { get; set; }
  - name: rotation
    definition: Quaternion rotation { get; set; }
  - name: scale
    definition: Vector3 scale { get; set; }
  - name: velocity
    definition: Vector3 velocity { get; set; }
  - name: angularVelocity
    definition: Vector3 angularVelocity { get; set; }
  - name: rotation2D
    definition: float rotation2D { get; set; }
  - name: velocity2D
    definition: Vector2 velocity2D { get; set; }
  - name: angularVelocity2D
    definition: float angularVelocity2D { get; set; }
  - name: physicsBodyTimeOffset
    definition: float physicsBodyTimeOffset { get; set; }
  - name: physicsState
    definition: PhysicsState physicsState { get; set; }
  - name: physicsStateTimeOffset
    definition: float physicsStateTimeOffset { get; set; }
  - name: syncPosition
    definition: bool syncPosition { get; set; }
  - name: syncRotation
    definition: bool syncRotation { get; set; }
  - name: syncScale
    definition: bool syncScale { get; set; }
  - name: skipInterpolation
    definition: bool skipInterpolation { get; set; }
- name: Methods
  members:
  - name: SetSafePosition
    definition: void SetSafePosition(Vector3 p)
    summary: Set the position, while checking for NaN and custom epsilon.
  - name: SetSafeRotation
    definition: void SetSafeRotation(Quaternion r)
    summary: Set the rotation, while checking for NaN and custom epsilon.
  - name: SetSafeRotation2D
    definition: void SetSafeRotation2D(float r)
    summary: Set the 2D rotation, while checking for NaN.
  - name: SetSafeScale
    definition: void SetSafeScale(Vector3 s)
    summary: Set the scale, while checking for NaN and custom epsilon.
  - name: SetSafeVelocity
    definition: void SetSafeVelocity(Vector3 v)
    summary: Set the velocity, while checking for NaN and custom epsilon.
  - name: SetSafeVelocity2D
    definition: void SetSafeVelocity2D(Vector2 v)
    summary: Set the 2D velocity, while checking for NaN.
  - name: SetSafeAngularVelocity
    definition: void SetSafeAngularVelocity(Vector3 v)
    summary: Set the angular velocity, while checking for NaN and custom epsilon.
  - name: SetSafeAngularVelocity2D
    definition: void SetSafeAngularVelocity2D(float v)
    summary: Set the angular velocity, while checking for NaN.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
