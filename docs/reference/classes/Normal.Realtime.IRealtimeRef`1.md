---
title: IRealtimeRef<T>
layout: Reference
category: API Reference
class_name: IRealtimeRef<T>
class_summary: Manages a networked reference to a component, and is aware of the referenced component's network lifecycle.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: didChange
    definition: event OnRealtimeRefDidChange<T> didChange
    summary: Invoked when the [Normal.Realtime.IRealtimeRef`1.value](Normal.Realtime.IRealtimeRef`1#value) or [Normal.Realtime.IRealtimeRef`1.state](Normal.Realtime.IRealtimeRef`1#state) changes.
  - name: valueDidChange
    definition: event OnRealtimeRefValueDidChange<T> valueDidChange
    summary: Invoked when the [Normal.Realtime.IRealtimeRef`1.value](Normal.Realtime.IRealtimeRef`1#value) changes.
- name: Properties
  members:
  - name: value
    definition: T value { get; set; }
    summary: The referenced component, or null if it couldn't be resolved.
    remarks: Use  to be notified whenever this changes.
  - name: state
    definition: RefState state { get; }
    summary: The current state of this reference.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
