---
title: LocalChangeCache<T>
layout: Reference
category: API Reference
class_name: LocalChangeCache<T>
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: localCache
    definition: localCache
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: PushLocalCacheToInflight
    definition: T PushLocalCacheToInflight(uint updateID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: RemoveUpdateFromInflight
    definition: T RemoveUpdateFromInflight(uint updateID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Clear
    definition: void Clear()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: UpdateLocalCache
    definition: void UpdateLocalCache(Func<T, T> lambda)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: LookForValueInCache
    definition: bool LookForValueInCache(Func<T, bool> checkIfValueSet, Func<T, TValue> getValue, TValue& value, bool inflightOnly = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: LookForValueInCache
    definition: TValue LookForValueInCache(TValue defaultValue, Func<T, bool> checkIfValueSet, Func<T, TValue> getValue)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ValueExistsInCache
    definition: bool ValueExistsInCache(Func<T, bool> checkIfValueSet, bool inflightOnly = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: IterateThroughCacheOldestFirst
    definition: void IterateThroughCacheOldestFirst(Func<T, bool> operateOnEntry, bool inflightOnly = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: IterateThroughCacheNewestFirst
    definition: void IterateThroughCacheNewestFirst(Func<T, bool> operateOnEntry, bool inflightOnly = false)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
