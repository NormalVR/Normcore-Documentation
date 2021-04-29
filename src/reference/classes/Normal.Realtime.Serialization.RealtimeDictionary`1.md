---
title: RealtimeDictionary<TValue>
layout: Reference
category: API Reference
class_name: RealtimeDictionary<TValue>
class_summary: ''
class_remarks: ''
class_members:
- name: Events
  members:
  - name: modelAdded
    definition: modelAdded
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: modelReplaced
    definition: modelReplaced
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: modelRemoved
    definition: modelRemoved
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Properties
  members:
  - name: Item
    definition: Item
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Count
    definition: Count
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: Add
    definition: void Add(uint key, TValue value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Remove
    definition: bool Remove(uint key)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: GetEnumerator
    definition: IEnumerator<KeyValuePair<uint, TValue>> GetEnumerator()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: TryGetValue
    definition: bool TryGetValue(uint key, TValue& value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ContainsKey
    definition: bool ContainsKey(uint key)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Contains
    definition: bool Contains(TValue value)
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
  - name: GetCollectionTypeID
    definition: uint GetCollectionTypeID()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
