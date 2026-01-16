---
title: RealtimeRefController<T>
layout: Reference
category: API Reference
class_name: RealtimeRefController<T>
class_summary: Default implementation of [Normal.Realtime.IRealtimeRef`1](Normal.Realtime#irealtimeref`1).
class_remarks: ''
class_members:
- name: Events
  members:
  - name: didChange
    definition: event OnRealtimeRefDidChange<T> didChange
  - name: valueDidChange
    definition: event OnRealtimeRefValueDidChange<T> valueDidChange
- name: Properties
  members:
  - name: state
    definition: RefState state { get; }
  - name: value
    definition: T value { get; set; }
- name: Methods
  members:
  - name: OnRefRegistered
    definition: void OnRefRegistered(RealtimeRefManager manager)
  - name: OnRefUnregistered
    definition: void OnRefUnregistered(RealtimeRefManager manager)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
