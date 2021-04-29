---
title: Realtime
layout: Reference
category: API Reference
class_name: Realtime
class_summary: Realtime manages a Room object and connects RealtimeComponents and their models to the datastore.
class_remarks: ''
class_members:
- name: Static Properties
  members:
  - name: instances
    definition: instances
    summary: All of the Realtime instances currently loaded in scenes.
    remarks: ''
    returns: ''
    parameters: []
- name: Static Methods
  members:
  - name: Instantiate
    definition: GameObject Instantiate(string prefabName, InstantiateOptions? options)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Instantiate
    definition: GameObject Instantiate(string prefabName, Vector3 position, Quaternion rotation, InstantiateOptions? options)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Destroy
    definition: void Destroy(GameObject gameObject)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Destroy
    definition: void Destroy(RealtimeView realtimeView)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Events
  members:
  - name: didConnectToRoom
    definition: didConnectToRoom
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: didDisconnectFromRoom
    definition: didDisconnectFromRoom
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Properties
  members:
  - name: normcoreAppSettings
    definition: normcoreAppSettings
    summary: The app settings object reference used when Realtime connects. Changing this while the Realtime instance is  connected will not have any effect until the next time it connects.
    remarks: ''
    returns: ''
    parameters: []
  - name: room
    definition: room
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: connecting
    definition: connecting
    summary: True if this Realtime instance is in the process of connecting or initializing its views.
    remarks: ''
    returns: ''
    parameters: []
  - name: connected
    definition: connected
    summary: True if this Realtime instance is connected and its views are initialized.
    remarks: ''
    returns: ''
    parameters: []
  - name: disconnected
    definition: disconnected
    summary: True if this Realtime instance is not connected or in an error state.
    remarks: ''
    returns: ''
    parameters: []
  - name: clientID
    definition: clientID
    summary: The local clientID of this Realtime instance.
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: Connect
    definition: void Connect(string roomName, RealtimeModel roomModel = null)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Disconnect
    definition: void Disconnect()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: RegisterSceneRealtimeView
    definition: void RegisterSceneRealtimeView(RealtimeView view)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: UnregisterSceneRealtimeView
    definition: void UnregisterSceneRealtimeView(RealtimeView view, bool isViewDestroyed = false)
    summary: Remove a scene view binding from this Realtime datastore.
    remarks: ''
    returns: ''
    parameters:
    - name: view
      description: The view to unregister.
    - name: isViewDestroyed
      description: If true, the view model will not be replaced. Use this when the scene view is being destroyed. Make sure the model is not used after being unregistered.

---
