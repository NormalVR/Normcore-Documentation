---
title: IRealtimeComponent
layout: Reference
category: API Reference
class_name: IRealtimeComponent
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: realtimeView
    definition: realtimeView
    summary: The RealtimeView that owns this component. Accessing this property before Start is unreliable.
    remarks: ''
    returns: ''
    parameters: []
  - name: realtime
    definition: realtime
    summary: The Realtime instance that is managing this component. On prefab views, this property is available after  Awake. On scene views or their children, this is not available until Start.
    remarks: ''
    returns: ''
    parameters: []
  - name: room
    definition: room
    summary: The current room of the Realtime instance that is managing this component. This might be null if  the Realtime instance hasn't connected yet. Accessing this property before Start is unreliable.
    remarks: ''
    returns: ''
    parameters: []
  - name: ownerIDSelf
    definition: ownerIDSelf
    summary: The client ID of the component owner.
    remarks: ''
    returns: ''
    parameters: []
  - name: ownerIDInHierarchy
    definition: ownerIDInHierarchy
    summary: The client ID of the component's hierarchy owner (the root owner of the component).
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnownedSelf
    definition: isUnownedSelf
    summary: True if the component is not owned by any client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isUnownedInHierarchy
    definition: isUnownedInHierarchy
    summary: True if the component and all of its parent views are not owned by any client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedLocallySelf
    definition: isOwnedLocallySelf
    summary: True if the component is owned by the local client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedLocallyInHierarchy
    definition: isOwnedLocallyInHierarchy
    summary: True if the component and all of its parent views are owned by the local client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedRemotelySelf
    definition: isOwnedRemotelySelf
    summary: True if the component is owned by a remote client.
    remarks: ''
    returns: ''
    parameters: []
  - name: isOwnedRemotelyInHierarchy
    definition: isOwnedRemotelyInHierarchy
    summary: True if this component and all of its parent views are owned by a remote client.
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: RequestOwnership
    definition: void RequestOwnership()
    summary: Request ownership of the component, if it is unowned.
    remarks: ''
    returns: ''
    parameters: []
  - name: SetOwnership
    definition: void SetOwnership(int clientID)
    summary: Set ownership of the component, if it is unowned.
    remarks: ''
    returns: ''
    parameters: []
  - name: ClearOwnership
    definition: void ClearOwnership()
    summary: Clear ownership of the component, if it is owned by the local client.
    remarks: ''
    returns: ''
    parameters: []

---
