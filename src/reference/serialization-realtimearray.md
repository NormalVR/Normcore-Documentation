---
title: Serialization::RealtimeArray
layout: Reference
category: API Reference
class_name: Serialization::RealtimeArray
class_description: ''
class_properties:
- name: Count
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1ab129980dfbda0e045f3735743b2a2b66
  brief_description: The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.
  detailed_description: ''
  description: "The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.\n\n"
  definition: int Normal.Realtime.Serialization.RealtimeArray< TValue >.Count
- name: this[int index]
  type: TValue
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1ac1338d7523e96d6e4f41c5ed4814b8cb
  brief_description: Used to retrieve the model at a specific index.
  detailed_description: ''
  description: "Used to retrieve the model at a specific index.\n\n"
  definition: TValue Normal.Realtime.Serialization.RealtimeArray< TValue >.this[int
    index]
class_events:
- name: modelAdded
  type: ModelAdded
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1a8a0a547be3b3b3e94e1cb37433590f37
  brief_description: An event that fires whenever an item is added. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.
  detailed_description: ''
  description: "An event that fires whenever an item is added. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.\n\n"
  definition: ModelAdded Normal.Realtime.Serialization.RealtimeArray< TValue >.modelAdded
class_methods:
- name: Add
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1a349021a8ac7b61a9c3a6bfa40f8f1630
  brief_description: Adds a model to the RealtimeArray. This method will immediately
    fire a modelAdded event.
  detailed_description: ''
  description: "Adds a model to the RealtimeArray. This method will immediately fire
    a modelAdded event.\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeArray< TValue >.Add
  return_type: void
  args_string: "(TValue value)"
  arguments:
  - name: value
    type: TValue
- name: GetCollectionTypeID
  type: uint
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1aa7371e6d0e23366850a288cb72678c71
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: uint Normal.Realtime.Serialization.RealtimeArray< TValue >.GetCollectionTypeID
  return_type: uint
  args_string: "()"
  arguments: []
- name: GetEnumerator
  type: IEnumerator<TValue>
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1ad69b245ac89e399805c4b099145d388a
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: IEnumerator<TValue> Normal.Realtime.Serialization.RealtimeArray< TValue
    >.GetEnumerator
  return_type: IEnumerator< TValue >
  args_string: "()"
  arguments: []
- name: ModelAdded
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1aa7a3b5bd44983ad77ae99fb0df5d49f1
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Serialization.RealtimeArray< TValue >.ModelAdded
  return_type: delegate void
  args_string: "(RealtimeArray< TValue > array, TValue model, bool remote)"
  arguments:
  - name: array
    type: RealtimeArray< TValue >
  - name: model
    type: TValue
  - name: remote
    type: bool
- name: Read
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1a2c33ef67e503d01f9d856b164c87d5be
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeArray< TValue >.Read
  return_type: void
  args_string: "(ReadStream stream, StreamContext context)"
  arguments:
  - name: stream
    type: ReadStream
  - name: context
    type: StreamContext
- name: RealtimeArray
  type: ''
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1a3f1ad4bb80c0521304ba89e28113d324
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Normal.Realtime.Serialization.RealtimeArray< TValue >.RealtimeArray
  return_type: ''
  args_string: "()"
  arguments: []
- name: Write
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1a2f6d4c553373f387796efc1bff49b590
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeArray< TValue >.Write
  return_type: void
  args_string: "(WriteStream stream, StreamContext context)"
  arguments:
  - name: stream
    type: WriteStream
  - name: context
    type: StreamContext
- name: WriteLength
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_array_1abbba2378072bc2dd38f4911d7dfad35f
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: int Normal.Realtime.Serialization.RealtimeArray< TValue >.WriteLength
  return_type: int
  args_string: "(StreamContext context)"
  arguments:
  - name: context
    type: StreamContext
class_enums: []
---

# Serialization::RealtimeArray

RealtimeArray is a special model type that can be used in your own custom models. It is designed to be a sequential list of models that can be modified at runtime.

Modifying the array sends the minimal amount of information necessary for other clients to replicate the change. The whole collection is not sent every time.
