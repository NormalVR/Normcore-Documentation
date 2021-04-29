---
title: RealtimeModel
layout: Reference
category: API Reference
class_name: RealtimeModel
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: isFreshModel
    definition: isFreshModel
    summary: True if this model was just locally created. This flag can be used to apply component settings or initial  values to a newly instantiated model.
    remarks: ''
    returns: ''
    parameters: []
  - name: hasMetaModel
    definition: hasMetaModel
    summary: True if the model has a meta-model. A meta-model is required for a client to take ownership of a model. You  can add a meta-model to a custom model with the `createMetaModel` flag on the `RealtimeModel` attribute.
    remarks: ''
    returns: ''
    parameters: []
  - name: preventOwnershipTakeover
    definition: preventOwnershipTakeover
    summary: If true, the model owner must clear ownership before another client can request it.
    remarks: ''
    returns: ''
    parameters: []
  - name: isPersistent
    definition: isPersistent
    summary: If true, the object will persist after all clients leave the room.
    remarks: ''
    returns: ''
    parameters: []
  - name: destroyWhenLastClientLeaves
    definition: destroyWhenLastClientLeaves
    summary: If true, the model is destroyed when the last client in the room leaves.
    remarks: ''
    returns: ''
    parameters: []
  - name: destroyWhenOwnerLeaves
    definition: destroyWhenOwnerLeaves
    summary: If true, the model is destroyed when the last client in the room leaves.
    remarks: ''
    returns: ''
    parameters: []
  - name: parent
    definition: parent
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: room
    definition: room
    summary: The room managing this model, or null if this model is disconnected.
    remarks: ''
    returns: ''
    parameters: []
  - name: isRoomConnected
    definition: isRoomConnected
    summary: True if a room is set on this model and the room is connected.
    remarks: ''
    returns: ''
    parameters: []
  - name: ownerIDSelf
    definition: ownerIDSelf
    summary: The client ID of the model owner. If the model is unowned, this returns -1.
    remarks: ''
    returns: ''
    parameters: []
  - name: ownerIDInHierarchy
    definition: ownerIDInHierarchy
    summary: The client ID of the model in its hierarchy. This is the furthest owned ancestor without owned ancestors.  If the model and all of its ancestors are unowned, this returns -1.
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnownedSelf
    definition: isUnownedSelf
    summary: True if this model is not owned by any client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnownedInHierarchy
    definition: isUnownedInHierarchy
    summary: True if this model and all of its parent models are not owned by any client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedRemotelySelf
    definition: isOwnedRemotelySelf
    summary: True if this model is owned by a remote client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedRemotelyInHierarchy
    definition: isOwnedRemotelyInHierarchy
    summary: True if this model or any of its parents are owned remotely.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedLocallySelf
    definition: isOwnedLocallySelf
    summary: True if this model is owned by the local client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedLocallyInHierarchy
    definition: isOwnedLocallyInHierarchy
    summary: True if this model or any of its parents are owned locally.
    remarks: ''
    returns: ''
    parameters: []
  - name: isCachedLengthDirty
    definition: isCachedLengthDirty
    summary: True if the reliable and unreliable lengths are dirty and need to be recalculated.
    remarks: ''
    returns: ''
    parameters: []
  - name: isReliableLengthDirty
    definition: isReliableLengthDirty
    summary: True if the reliable length is dirty and needs to be recalculated.
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnreliableLengthDirty
    definition: isUnreliableLengthDirty
    summary: True if the unreliable length is dirty and needs to be recalculated.
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: SetMetaModel
    definition: void SetMetaModel(MetaModel metaModel)
    summary: Replace the meta-model on this model.
    remarks: ''
    returns: ''
    parameters: []
  - name: WriteMetaModel
    definition: void WriteMetaModel(WriteStream stream, StreamContext context)
    summary: Write the meta-model to the write stream, if one exists.
    remarks: ''
    returns: ''
    parameters: []
  - name: ReadMetaModel
    definition: void ReadMetaModel(ReadStream stream, StreamContext context)
    summary: Read the meta-model from the read stream, or skip the property if this model doesn't have a meta-model.
    remarks: ''
    returns: ''
    parameters: []
  - name: MetaModelWriteLength
    definition: int MetaModelWriteLength(StreamContext context)
    summary: Get the meta-model write length, or 0 if this model doesn't have a meta-model.
    remarks: ''
    returns: ''
    parameters: []
  - name: SetParent
    definition: void SetParent(RealtimeModel parent)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SetChildren
    definition: void SetChildren(IEnumerable<RealtimeModel> children)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: OnParentReplaced
    definition: void OnParentReplaced(RealtimeModel previousParent, RealtimeModel currentParent)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SetRoom
    definition: void SetRoom(Room room)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SubscribeEventCallback
    definition: void SubscribeEventCallback(RealtimeModelEvent event, Action handler)
    summary: Subscribe an action to a model event. Only one action can be subscribed at a time; any multicasting  should happen in the callback. The best way to subscribe to callbacks is with a [RealtimeCallback] in  your model layout.
    remarks: ''
    returns: ''
    parameters: []
  - name: UnsubscribeEventCallback
    definition: void UnsubscribeEventCallback(RealtimeModelEvent event)
    summary: Unsubscribe the associated action from a model event.
    remarks: ''
    returns: ''
    parameters: []
  - name: RequestOwnership
    definition: void RequestOwnership(bool sendRedundantUpdates = false)
    summary: Request ownership of the model, if it is unowned. This has no effect if the model has no meta-model. This  will throw an exception if the model is not part of a connected room, as it requires the local clientID.
    remarks: ''
    returns: ''
    parameters:
    - name: sendRedundantUpdates
      description: If true, send the ownership update even if the model is already owned by the local client. This might send redundant updates but is useful if you expect contention. This does not circumvent the "Prevent Ownership Takeover" lifetime flag if it applies.
  - name: SetOwnership
    definition: void SetOwnership(int ownerID, bool sendRedundantUpdates = false)
    summary: Set ownership of the model to a specific client. This has no effect if the model has no meta-model.
    remarks: ''
    returns: ''
    parameters:
    - name: ownerID
      description: The client ID of the new owner.
    - name: sendRedundantUpdates
      description: If true, send the ownership update even if the model is already owned by the specified ownerID. This might send redundant updates but is useful if you expect contention. This does not circumvent the "Prevent Ownership Takeover" lifetime flag if it applies.
  - name: ClearOwnership
    definition: void ClearOwnership(bool sendRedundantUpdates = false)
    summary: Clear ownership of the model, if it is owned by the local client.
    remarks: ''
    returns: ''
    parameters:
    - name: sendRedundantUpdates
      description: If true, send the ownership update even if the model is already unowned. This might send redundant updates but is useful if you expect contention. This does not circumvent the "Prevent Ownership Takeover" lifetime flag if it applies.
  - name: InvalidateCachedLength
    definition: void InvalidateCachedLength()
    summary: Invalidate both the reliable and unreliable cached length.
    remarks: ''
    returns: ''
    parameters: []
  - name: InvalidateReliableLength
    definition: void InvalidateReliableLength()
    summary: Invalidate the reliable cached length.
    remarks: ''
    returns: ''
    parameters: []
  - name: InvalidateUnreliableLength
    definition: void InvalidateUnreliableLength()
    summary: Invalidate the unreliable cached length.
    remarks: ''
    returns: ''
    parameters: []
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
    summary: Recalculate a fresh model length for a given stream context. The result will be cached for future writes.
    remarks: ''
    returns: ''
    parameters: []
  - name: Write
    definition: void Write(WriteStream stream, StreamContext context)
    summary: Write the model to the stream.
    remarks: ''
    returns: ''
    parameters: []
  - name: Read
    definition: void Read(ReadStream stream, StreamContext context)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
