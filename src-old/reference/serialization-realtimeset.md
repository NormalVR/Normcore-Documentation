---
title: Serialization::RealtimeSet
layout: Reference
category: API Reference
class_name: Serialization::RealtimeSet
class_description: ''
class_properties:
- name: Count
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1af533b24fe91da44361ca41776d2635bb
  brief_description: The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.
  detailed_description: ''
  description: "The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.\n\n"
  definition: int Normal.Realtime.Serialization.RealtimeSet< TValue >.Count
class_events:
- name: modelAdded
  type: ModelAdded
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a342179d236b08231a23eede98385f334
  brief_description: The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.
  detailed_description: ''
  description: "The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.\n\n"
  definition: ModelAdded Normal.Realtime.Serialization.RealtimeSet< TValue >.modelAdded
- name: modelRemoved
  type: ModelRemoved
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1ae1af9b7315ce967c2ec25fe3588c9941
  brief_description: An event that fires whenever an item is removed. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.
  detailed_description: ''
  description: "An event that fires whenever an item is removed. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.\n\n"
  definition: ModelRemoved Normal.Realtime.Serialization.RealtimeSet< TValue >.modelRemoved
class_methods:
- name: Add
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a8c04a1e016e89b6cd854ac9fc341f44b
  brief_description: Adds a model to the RealtimeSet. This method will immediately
    fire a modelAdded event. If the add operation is rejected by the server (due to
    this client not having permissions to edit this model), a modelRemoved event will
    fire when the server’s response is received.
  detailed_description: ''
  description: "Adds a model to the RealtimeSet. This method will immediately fire
    a modelAdded event. If the add operation is rejected by the server (due to this
    client not having permissions to edit this model), a modelRemoved event will fire
    when the server’s response is received.\n\n"
  definition: bool Normal.Realtime.Serialization.RealtimeSet< TValue >.Add
  return_type: bool
  args_string: "(TValue value)"
  arguments:
  - name: value
    type: TValue
- name: GetCollectionTypeID
  type: uint
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a2b1f32a4191a662ed43e689b4f48c465
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: uint Normal.Realtime.Serialization.RealtimeSet< TValue >.GetCollectionTypeID
  return_type: uint
  args_string: "()"
  arguments: []
- name: GetEnumerator
  type: IEnumerator<TValue>
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a713edf74da89a61508f4aebd3727faf5
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: IEnumerator<TValue> Normal.Realtime.Serialization.RealtimeSet< TValue
    >.GetEnumerator
  return_type: IEnumerator< TValue >
  args_string: "()"
  arguments: []
- name: ModelAdded
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a0ae8fe9fb9e777716fdf474b0a4b57b4
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Serialization.RealtimeSet< TValue >.ModelAdded
  return_type: delegate void
  args_string: "(RealtimeSet< TValue > set, TValue model, bool remote)"
  arguments:
  - name: set
    type: RealtimeSet< TValue >
  - name: model
    type: TValue
  - name: remote
    type: bool
- name: ModelRemoved
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1aafb173624f8cdf5cc294fa87ca46f257
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Serialization.RealtimeSet< TValue >.ModelRemoved
  return_type: delegate void
  args_string: "(RealtimeSet< TValue > set, TValue model, bool remote)"
  arguments:
  - name: set
    type: RealtimeSet< TValue >
  - name: model
    type: TValue
  - name: remote
    type: bool
- name: Read
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a48beae3ebb8526dedff9daa87815ede9
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeSet< TValue >.Read
  return_type: void
  args_string: "(ReadStream stream, StreamContext context)"
  arguments:
  - name: stream
    type: ReadStream
  - name: context
    type: StreamContext
- name: RealtimeSet
  type: ''
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a90c689dfcdf93d3bb86bce27ed872fb8
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Normal.Realtime.Serialization.RealtimeSet< TValue >.RealtimeSet
  return_type: ''
  args_string: "()"
  arguments: []
- name: Remove
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1ac749990b5f25b9bd3a0cb8f3f04d4c4e
  brief_description: Removes a model from the RealtimeSet. This method will immediately
    fire a modelRemoved event. If the remove operation is rejected by the server (due
    to this client not having permissions to edit this model), a modelAdded event
    will fire when the server’s response is received.
  detailed_description: ''
  description: "Removes a model from the RealtimeSet. This method will immediately
    fire a modelRemoved event. If the remove operation is rejected by the server (due
    to this client not having permissions to edit this model), a modelAdded event
    will fire when the server’s response is received.\n\n"
  definition: bool Normal.Realtime.Serialization.RealtimeSet< TValue >.Remove
  return_type: bool
  args_string: "(TValue value)"
  arguments:
  - name: value
    type: TValue
- name: Write
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1ad94f8aaadaabd1e701f6ac8950d7d93b
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeSet< TValue >.Write
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
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_set_1a4f6054157259d497ee5b4583c538b222
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: int Normal.Realtime.Serialization.RealtimeSet< TValue >.WriteLength
  return_type: int
  args_string: "(StreamContext context)"
  arguments:
  - name: context
    type: StreamContext
class_enums: []
---

# Serialization::RealtimeSet

RealtimeSet is a special model type that can be used in your own custom models. It represents an unordered collection of models. Internally this is used for things like keeping track of all RealtimeViews in the scene. If order is not important, this collection is the recommended collection to use for storing collections of models.

Adding or removing items sends the minimal amount of information to the server in order to perform the update on all clients. The whole collection is not sent every time.
