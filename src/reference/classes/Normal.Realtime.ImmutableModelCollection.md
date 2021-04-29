---
title: ImmutableModelCollection
layout: Reference
category: API Reference
class_name: ImmutableModelCollection
class_summary: An immutable map of models indexed by unique property IDs.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: Item
    definition: Item
    summary: Get the RealtimeModel associated with a property ID.
    remarks: ''
    returns: ''
    parameters:
    - name: id
      description: The property ID of the model.
- name: Methods
  members:
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
  - name: GetEnumerator
    definition: IEnumerator<KeyValuePair<uint, RealtimeModel>> GetEnumerator()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
