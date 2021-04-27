---
title: Serialization::RealtimeDictionary
layout: Reference
category: API Reference
class_name: Serialization::RealtimeDictionary
class_description: ''
class_properties:
- name: Count
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a3a41b60114feb6511b51cf364b5fe42a
  brief_description: The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.
  detailed_description: ''
  description: "The total number of items in the RealtimeSet, including the items
    that have been added locally and have yet to be confirmed by the server.\n\n"
  definition: int Normal.Realtime.Serialization.RealtimeDictionary< TValue >.Count
- name: this[uint key]
  type: TValue
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1ad55dba585ec2bcde29785d26d8660c5c
  brief_description: Used to retrieve the model for a specific key.
  detailed_description: ''
  description: "Used to retrieve the model for a specific key.\n\n"
  definition: TValue Normal.Realtime.Serialization.RealtimeDictionary< TValue >.this[uint
    key]
class_events:
- name: modelAdded
  type: ModelAdded
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a5d62fed79a1896107eca5b6737298596
  brief_description: An event that fires whenever an item is added. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.
  detailed_description: ''
  description: "An event that fires whenever an item is added. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.\n\n"
  definition: ModelAdded Normal.Realtime.Serialization.RealtimeDictionary< TValue
    >.modelAdded
- name: modelRemoved
  type: ModelRemoved
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a42fdb9d6f52aea53dadb5c44be034210
  brief_description: An event that fires whenever an item is removed. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.
  detailed_description: ''
  description: "An event that fires whenever an item is removed. This event includes
    a boolean to signal whether the model was added by the local client or a remote
    client.\n\n"
  definition: ModelRemoved Normal.Realtime.Serialization.RealtimeDictionary< TValue
    >.modelRemoved
- name: modelReplaced
  type: ModelReplaced
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a1a5f219cc943b235de043ec0e75f48a5
  brief_description: An event that fires whenever an item is replaced with a new model.
    This event includes a boolean to signal whether the model was replaced by the
    local client or a remote client.
  detailed_description: ''
  description: "An event that fires whenever an item is replaced with a new model.
    This event includes a boolean to signal whether the model was replaced by the
    local client or a remote client.\n\n"
  definition: ModelReplaced Normal.Realtime.Serialization.RealtimeDictionary< TValue
    >.modelReplaced
class_methods:
- name: Add
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1af2bdf4465ad08ddcb8239c5c8082b96f
  brief_description: Adds a model to the RealtimeSet. This method will immediately
    fire a modelAdded event. If the add operation is rejected by the server (due to
    this client not having permissions to edit this model), a modelRemoved event will
    fire when the server’s response is received.
  detailed_description: ''
  description: "Adds a model to the RealtimeSet. This method will immediately fire
    a modelAdded event. If the add operation is rejected by the server (due to this
    client not having permissions to edit this model), a modelRemoved event will fire
    when the server’s response is received.\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeDictionary< TValue >.Add
  return_type: void
  args_string: "(uint key, TValue value)"
  arguments:
  - name: key
    type: uint
  - name: value
    type: TValue
- name: GetCollectionTypeID
  type: uint
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a5403342bf36d6ec8e8b11d607f198197
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: uint Normal.Realtime.Serialization.RealtimeDictionary< TValue >.GetCollectionTypeID
  return_type: uint
  args_string: "()"
  arguments: []
- name: GetEnumerator
  type: IEnumerator<KeyValuePair<uint, TValue>>
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a68d012bd87c9a3ddeaf96148c82e9685
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: IEnumerator<KeyValuePair<uint, TValue> > Normal.Realtime.Serialization.RealtimeDictionary<
    TValue >.GetEnumerator
  return_type: IEnumerator< KeyValuePair< uint, TValue > >
  args_string: "()"
  arguments: []
- name: ModelAdded
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1ab148da78c9208ec671435990bde6017c
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Serialization.RealtimeDictionary< TValue
    >.ModelAdded
  return_type: delegate void
  args_string: "(RealtimeDictionary< TValue > dictionary, uint key, TValue model,
    bool remote)"
  arguments:
  - name: dictionary
    type: RealtimeDictionary< TValue >
  - name: key
    type: uint
  - name: model
    type: TValue
  - name: remote
    type: bool
- name: ModelRemoved
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a75a027598f318021b9576ab69fae4c0a
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Serialization.RealtimeDictionary< TValue
    >.ModelRemoved
  return_type: delegate void
  args_string: "(RealtimeDictionary< TValue > dictionary, uint key, TValue model,
    bool remote)"
  arguments:
  - name: dictionary
    type: RealtimeDictionary< TValue >
  - name: key
    type: uint
  - name: model
    type: TValue
  - name: remote
    type: bool
- name: ModelReplaced
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a687df00952e119a9293fd66744e51875
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Serialization.RealtimeDictionary< TValue
    >.ModelReplaced
  return_type: delegate void
  args_string: "(RealtimeDictionary< TValue > dictionary, uint key, TValue oldModel,
    TValue newModel, bool remote)"
  arguments:
  - name: dictionary
    type: RealtimeDictionary< TValue >
  - name: key
    type: uint
  - name: oldModel
    type: TValue
  - name: newModel
    type: TValue
  - name: remote
    type: bool
- name: Read
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a74011b7cf931af05cd5172d1da9ef9c5
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeDictionary< TValue >.Read
  return_type: void
  args_string: "(ReadStream stream, StreamContext context)"
  arguments:
  - name: stream
    type: ReadStream
  - name: context
    type: StreamContext
- name: RealtimeDictionary
  type: ''
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a4e0097173ed4cb54b8afec0344009fff
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Normal.Realtime.Serialization.RealtimeDictionary< TValue >.RealtimeDictionary
  return_type: ''
  args_string: "()"
  arguments: []
- name: Remove
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a250711286cc40b1297e27cae10825682
  brief_description: Removes a model from the RealtimeSet. This method will immediately
    fire a modelRemoved event. If the remove operation is rejected by the server (due
    to this client not having permissions to edit this model), a modelAdded event
    will fire when the server’s response is received.
  detailed_description: ''
  description: "Removes a model from the RealtimeSet. This method will immediately
    fire a modelRemoved event. If the remove operation is rejected by the server (due
    to this client not having permissions to edit this model), a modelAdded event
    will fire when the server’s response is received.\n\n"
  definition: bool Normal.Realtime.Serialization.RealtimeDictionary< TValue >.Remove
  return_type: bool
  args_string: "(uint key)"
  arguments:
  - name: key
    type: uint
- name: Write
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a79c2c165257caa850a75ffa45d6fb87d
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Serialization.RealtimeDictionary< TValue >.Write
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
  id: class_normal_1_1_realtime_1_1_serialization_1_1_realtime_dictionary_1a0fff14bad85ed356c57ee6359ae3c333
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: int Normal.Realtime.Serialization.RealtimeDictionary< TValue >.WriteLength
  return_type: int
  args_string: "(StreamContext context)"
  arguments:
  - name: context
    type: StreamContext
class_enums: []
---

# Serialization::RealtimeDictionary

