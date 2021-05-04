---
title: RealtimeModelEvent
layout: Reference
category: API Reference
class_name: RealtimeModelEvent
class_summary: An enum that represents the type of event to subscribe to. Generally used with [RealtimeCallback]
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: OnWillWrite
    definition: public RealtimeModelEvent OnWillWrite
    summary: Dispatched before a serialization pass.
  - name: OnDidWrite
    definition: public RealtimeModelEvent OnDidWrite
    summary: Dispatched after a serialization pass.
  - name: OnWillRead
    definition: public RealtimeModelEvent OnWillRead
    summary: Dispatched before a deserialization pass.
  - name: OnDidRead
    definition: public RealtimeModelEvent OnDidRead
    summary: Dispatched after a deserialization pass.
  - name: OnDidReadProperties
    definition: public RealtimeModelEvent OnDidReadProperties
    summary: Dispatched after a model reads properties from a remote update.

---
