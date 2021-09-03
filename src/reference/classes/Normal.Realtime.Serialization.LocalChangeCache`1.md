---
title: LocalChangeCache<T>
layout: Reference
category: API Reference
class_name: LocalChangeCache<T>
class_members:
- name: Properties
  members:
  - name: localCache
    definition: T localCache { get; }
- name: Methods
  members:
  - name: PushLocalCacheToInflight
    definition: T PushLocalCacheToInflight(uint updateID)
  - name: RemoveUpdateFromInflight
    definition: T RemoveUpdateFromInflight(uint updateID)
  - name: Clear
    definition: void Clear()
  - name: UpdateLocalCache
    definition: void UpdateLocalCache(Func<T, T> lambda)
  - name: LookForValueInCache
    definition: bool LookForValueInCache(Func<T, bool> checkIfValueSet, Func<T, TValue> getValue, TValue& value, bool inflightOnly = false)
  - name: LookForValueInCache
    definition: TValue LookForValueInCache(TValue defaultValue, Func<T, bool> checkIfValueSet, Func<T, TValue> getValue)
  - name: ValueExistsInCache
    definition: bool ValueExistsInCache(Func<T, bool> checkIfValueSet, bool inflightOnly = false)
  - name: IterateThroughCacheOldestFirst
    definition: void IterateThroughCacheOldestFirst(Func<T, bool> operateOnEntry, bool inflightOnly = false)
  - name: IterateThroughCacheNewestFirst
    definition: void IterateThroughCacheNewestFirst(Func<T, bool> operateOnEntry, bool inflightOnly = false)

---
