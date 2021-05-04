---
title: PropertyChangeSet
layout: Reference
category: API Reference
class_name: PropertyChangeSet
class_summary: A PropertyChangeSet is used to store which properties were changed during a read or write operation.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: anyPropertiesChanged
    definition: bool anyPropertiesChanged { get; }
    summary: True if any of the properties have changed.
  - name: Item
    definition: bool Item { get; }
    summary: True if the indexed property has changed.
- name: Methods
  members:
  - name: Clear
    definition: void Clear()
    summary: Internal. Do not use.
    remarks: This is used by auto-generated RealtimeModel serialization code and is required to be public, but is not a public API.
  - name: SetPropertyChanged
    definition: void SetPropertyChanged(uint propertyID)
    summary: Internal. Do not use.
    remarks: This is used by auto-generated RealtimeModel serialization code and is required to be public, but is not a public API.

---
