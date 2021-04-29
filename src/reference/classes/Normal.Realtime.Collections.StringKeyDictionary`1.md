---
title: StringKeyDictionary<TValue>
layout: Reference
category: API Reference
class_name: StringKeyDictionary<TValue>
class_summary: ''
class_remarks: ''
class_members:
- name: Events
  members:
  - name: didInsertModelForKey
    definition: didInsertModelForKey
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: didRemoveModelForKey
    definition: didRemoveModelForKey
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: didClearAllModels
    definition: didClearAllModels
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
  - name: Insert
    definition: void Insert(string key, TValue value, Action<bool> completionHandler)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Remove
    definition: void Remove(string key, Action<bool> completionHandler)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Clear
    definition: void Clear(Action<bool> completionHandler)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: TryGetValue
    definition: bool TryGetValue(string key, TValue& value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ContainsKey
    definition: bool ContainsKey(string key)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ContainsValue
    definition: bool ContainsValue(TValue value)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: GetEnumerator
    definition: IEnumerator<KeyValuePair<string, TValue>> GetEnumerator()
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
