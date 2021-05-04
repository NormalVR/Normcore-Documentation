---
title: RealtimeModel
layout: Reference
category: API Reference
class_name: RealtimeModel
class_summary: A model that represents a set of data to store in a room datastore.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: isFreshModel
    definition: bool isFreshModel { get; }
    summary: True if this model was just locally created. This flag can be used to apply component settings or initial values to a newly instantiated model.
  - name: hasMetaModel
    definition: bool hasMetaModel { get; }
    summary: True if the model has a meta-model. A meta-model is required for a client to take ownership of a model. You can add a meta-model to a custom model with the `createMetaModel` flag on the `RealtimeModel` attribute.
  - name: preventOwnershipTakeover
    definition: bool preventOwnershipTakeover { get; set; }
    summary: If true, the model owner must clear ownership before another client can request it.
  - name: isPersistent
    definition: bool isPersistent { get; }
    summary: If true, the object will persist after all clients leave the room.
  - name: destroyWhenLastClientLeaves
    definition: bool destroyWhenLastClientLeaves { get; set; }
    summary: If true, the model is destroyed when the last client in the room leaves.
  - name: destroyWhenOwnerLeaves
    definition: bool destroyWhenOwnerLeaves { get; set; }
    summary: If true, the model is destroyed when the last client in the room leaves.
  - name: room
    definition: Room room { get; }
    summary: The room managing this model, or null if this model is disconnected.
  - name: isRoomConnected
    definition: bool isRoomConnected { get; }
    summary: True if a room is set on this model and the room is connected.
  - name: ownerIDSelf
    definition: int ownerIDSelf { get; }
    summary: The client ID of the model owner. If the model is unowned, this returns -1.
  - name: ownerIDInHierarchy
    definition: int ownerIDInHierarchy { get; }
    summary: The client ID of the model in its hierarchy. This is the furthest owned ancestor without owned ancestors. If the model and all of its ancestors are unowned, this returns -1.
  - name: isUnownedSelf
    definition: bool isUnownedSelf { get; }
    summary: True if this model is not owned by any client.
  - name: isUnownedInHierarchy
    definition: bool isUnownedInHierarchy { get; }
    summary: True if this model and all of its parent models are not owned by any client.
  - name: isOwnedRemotelySelf
    definition: bool isOwnedRemotelySelf { get; }
    summary: True if this model is owned by a remote client.
  - name: isOwnedRemotelyInHierarchy
    definition: bool isOwnedRemotelyInHierarchy { get; }
    summary: True if this model or any of its parents are owned remotely.
  - name: isOwnedLocallySelf
    definition: bool isOwnedLocallySelf { get; }
    summary: True if this model is owned by the local client.
  - name: isOwnedLocallyInHierarchy
    definition: bool isOwnedLocallyInHierarchy { get; }
    summary: True if this model or any of its parents are owned locally.
- name: Methods
  members:
  - name: RequestOwnership
    definition: void RequestOwnership(bool sendRedundantUpdates = false)
    summary: Request ownership of the model, if it is unowned. This has no effect if the model has no meta-model. This will throw an exception if the model is not part of a connected room, as it requires the local clientID.
    parameters:
    - name: sendRedundantUpdates
      description: If true, send the ownership update even if the model is already owned by the local client. This might send redundant updates but is useful if you expect contention. This does not circumvent the "Prevent Ownership Takeover" lifetime flag if it applies.
  - name: SetOwnership
    definition: void SetOwnership(int ownerID, bool sendRedundantUpdates = false)
    summary: Set ownership of the model to a specific client. This has no effect if the model has no meta-model.
    parameters:
    - name: ownerID
      description: The client ID of the new owner.
    - name: sendRedundantUpdates
      description: If true, send the ownership update even if the model is already owned by the specified ownerID. This might send redundant updates but is useful if you expect contention. This does not circumvent the "Prevent Ownership Takeover" lifetime flag if it applies.
  - name: ClearOwnership
    definition: void ClearOwnership(bool sendRedundantUpdates = false)
    summary: Clear ownership of the model, if it is owned by the local client.
    parameters:
    - name: sendRedundantUpdates
      description: If true, send the ownership update even if the model is already unowned. This might send redundant updates but is useful if you expect contention. This does not circumvent the "Prevent Ownership Takeover" lifetime flag if it applies.

---
