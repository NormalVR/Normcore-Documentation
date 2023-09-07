---
title: RealtimeComponent<TModel>
layout: Reference
category: API Reference
class_name: RealtimeComponent<TModel>
class_summary: A component that synchronizes the state of a RealtimeModel to/from an object in the scene.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: ownerIDSelfDidChange
    definition: event Action<RealtimeComponent<TModel>, int> ownerIDSelfDidChange
    summary: Dispatched when the ownerIDSelf value changes.
- name: Properties
  members:
  - name: realtimeView
    definition: RealtimeView realtimeView { get; }
    summary: The RealtimeView that owns this component. Accessing this property before Start is unreliable.
  - name: realtime
    definition: Realtime realtime { get; }
    summary: The Realtime instance that is managing this component. On prefab views, this property is available after Awake. On scene views or their children, this is not available until Start.
  - name: room
    definition: Room room { get; }
    summary: The current room of the Realtime instance that is managing this component. This might be null if the Realtime instance hasn't connected yet. Accessing this property before Start is unreliable.
  - name: ownerIDSelf
    definition: int ownerIDSelf { get; }
    summary: The client ID of the component owner.
  - name: ownerIDInHierarchy
    definition: int ownerIDInHierarchy { get; }
    summary: The client ID of the component's hierarchy owner (the root owner of the component).
  - name: isUnownedSelf
    definition: bool isUnownedSelf { get; }
    summary: True if the component is not owned by any client.
  - name: isUnownedInHierarchy
    definition: bool isUnownedInHierarchy { get; }
    summary: True if the component and all of its parent views are not owned by any client.
  - name: isOwnedLocallySelf
    definition: bool isOwnedLocallySelf { get; }
    summary: True if the component is owned by the local client.
  - name: isOwnedLocallyInHierarchy
    definition: bool isOwnedLocallyInHierarchy { get; }
    summary: True if the component and all of its parent views are owned by the local client.
  - name: isOwnedRemotelySelf
    definition: bool isOwnedRemotelySelf { get; }
    summary: True if the component is owned by a remote client.
  - name: isOwnedRemotelyInHierarchy
    definition: bool isOwnedRemotelyInHierarchy { get; }
    summary: True if this component and all of its parent views are owned by a remote client.
- name: Methods
  members:
  - name: RequestOwnership
    definition: void RequestOwnership()
    summary: Request ownership of the component.
  - name: SetOwnership
    definition: void SetOwnership(int clientID)
    summary: Set ownership of the component.
  - name: ClearOwnership
    definition: void ClearOwnership()
    summary: Clear ownership of the component.

---
