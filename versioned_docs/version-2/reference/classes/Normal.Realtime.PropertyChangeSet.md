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
  - name: anyPropertiesRead
    definition: bool anyPropertiesRead { get; }
    summary: True if any of the properties were read.
  - name: anyPropertiesChanged
    definition: bool anyPropertiesChanged { get; }
    summary: True if any of the properties were changed.
- name: Methods
  members:
  - name: Clear
    definition: void Clear()
    summary: Internal. Do not use.
    remarks: This is used by auto-generated RealtimeModel serialization code and is required to be public, but is not a public API.
  - name: Include
    definition: void Include(uint propertyID, bool changed)
    summary: Internal. Do not use.
    remarks: This is used by auto-generated RealtimeModel serialization code and is required to be public, but is not a public API.
  - name: Contains
    definition: bool Contains(uint propertyID)
    summary: Returns true if the property was read.
  - name: Contains
    definition: bool Contains(uint propertyID, Boolean& changed)
    summary: Returns true if the property was read.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
