---
title: RealtimeComponent<TModel>
layout: Reference
category: API Reference
class_name: RealtimeComponent<TModel>
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: model
    definition: model
    summary: The model associated with this component, or null if it hasn't been set yet. This reference is replaced  automatically when Realtime connects or disconnects. Override `OnRealtimeModelReplaced` in your  custom component to know when the model is replaced.
    remarks: ''
    returns: ''
    parameters: []
  - name: realtimeView
    definition: realtimeView
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: realtime
    definition: realtime
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: room
    definition: room
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: ownerIDSelf
    definition: ownerIDSelf
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: ownerIDInHierarchy
    definition: ownerIDInHierarchy
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnownedSelf
    definition: isUnownedSelf
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnownedInHierarchy
    definition: isUnownedInHierarchy
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedLocallySelf
    definition: isOwnedLocallySelf
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedLocallyInHierarchy
    definition: isOwnedLocallyInHierarchy
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedRemotelySelf
    definition: isOwnedRemotelySelf
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedRemotelyInHierarchy
    definition: isOwnedRemotelyInHierarchy
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: CreateModel
    definition: TModel CreateModel()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: OnRealtimeModelReplaced
    definition: void OnRealtimeModelReplaced(TModel previousModel, TModel currentModel)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: RequestOwnership
    definition: void RequestOwnership()
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: SetOwnership
    definition: void SetOwnership(int clientID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: []
  - name: ClearOwnership
    definition: void ClearOwnership()
    summary: ''
    remarks: ''
    returns: ''
    parameters: []

---
