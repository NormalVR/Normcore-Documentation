---
title: Datastore
layout: Reference
category: API Reference
class_name: Datastore
class_summary: ''
class_remarks: ''
class_members:
- name: Events
  members:
  - name: prefabRealtimeViewModelAdded
    definition: prefabRealtimeViewModelAdded
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: prefabRealtimeViewModelRemoved
    definition: prefabRealtimeViewModelRemoved
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Properties
  members:
  - name: roomModel
    definition: roomModel
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: sceneViewModels
    definition: sceneViewModels
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: prefabViewModels
    definition: prefabViewModels
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: writeBuffer
    definition: writeBuffer
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: Reset
    definition: void Reset(Room room, RealtimeModel roomModel = null)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: GetSceneRealtimeViewModelForUUID
    definition: RealtimeViewModel GetSceneRealtimeViewModelForUUID(byte[] sceneViewUUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ConnectSceneRealtimeViewModel
    definition: void ConnectSceneRealtimeViewModel(string sceneViewUUID, RealtimeViewModel sceneViewViewModel, Action<bool, RealtimeViewModel> completionHandler)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AddPrefabRealtimeViewModel
    definition: void AddPrefabRealtimeViewModel(RealtimeViewModel prefabViewModel)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: RemovePrefabRealtimeViewModel
    definition: bool RemovePrefabRealtimeViewModel(RealtimeViewModel model)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Deserialize
    definition: void Deserialize(byte[] buffer)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SerializeDeltaUpdates
    definition: void SerializeDeltaUpdates(bool reliable, uint updateID, double roomTime)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: DeserializeDeltaUpdates
    definition: uint DeserializeDeltaUpdates(byte[] buffer, bool reliable, bool updateIsFromUs, double currentRoomTime)
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
