---
title: Datastore
layout: Reference
category: API Reference
class_name: Datastore
class_summary: The datastore for a Normcore Room. This class holds all models that belong to a room's datastore.
class_remarks: This class should never need to be used directly and will be marked internal in the next major version.
class_members:
- name: Events
  members:
  - name: prefabRealtimeViewModelAdded
    definition: event PrefabViewModelAdded prefabRealtimeViewModelAdded
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
  - name: prefabRealtimeViewModelRemoved
    definition: event PrefabViewModelRemoved prefabRealtimeViewModelRemoved
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
- name: Properties
  members:
  - name: roomModel
    definition: RealtimeModel roomModel { get; }
    summary: The room model that was supplied to Realtime.Connect or Room.Connect.
    remarks: This will switch from public to internal in the next major version.
  - name: sceneViewModels
    definition: StringKeyDictionary<RealtimeViewModel> sceneViewModels { get; }
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
  - name: prefabViewModels
    definition: RealtimeSet<RealtimeViewModel> prefabViewModels { get; }
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
  - name: writeBuffer
    definition: WriteBuffer writeBuffer { get; }
- name: Methods
  members:
  - name: Reset
    definition: void Reset(Room room, RealtimeModel roomModel = null)
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
  - name: GetSceneRealtimeViewModelForUUID
    definition: RealtimeViewModel GetSceneRealtimeViewModelForUUID(byte[] sceneViewUUID)
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
  - name: ConnectSceneRealtimeViewModel
    definition: void ConnectSceneRealtimeViewModel(string sceneViewUUID, RealtimeViewModel sceneViewViewModel, Action<bool, RealtimeViewModel> completionHandler)
    summary: Internal. Do not use.
    remarks: This will switch from public to internal in the next major version.
  - name: AddPrefabRealtimeViewModel
    definition: void AddPrefabRealtimeViewModel(RealtimeViewModel prefabViewModel)
  - name: RemovePrefabRealtimeViewModel
    definition: bool RemovePrefabRealtimeViewModel(RealtimeViewModel model)
  - name: Deserialize
    definition: void Deserialize(byte[] buffer, StreamContext& context)
  - name: SerializeDeltaUpdates
    definition: void SerializeDeltaUpdates(bool reliable, uint updateID, double roomTime)
  - name: GetNextDeserializationContextID
    definition: uint GetNextDeserializationContextID()
  - name: DeserializeDeltaUpdates
    definition: uint DeserializeDeltaUpdates(byte[] buffer, bool reliable, bool updateIsFromUs, double currentRoomTime, StreamContext& context)
  - name: WriteLength
    definition: int WriteLength(StreamContext context)
  - name: Write
    definition: void Write(WriteStream stream, StreamContext context)
  - name: Read
    definition: void Read(ReadStream stream, StreamContext context)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
