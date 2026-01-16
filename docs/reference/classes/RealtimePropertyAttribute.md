---
title: RealtimePropertyAttribute
layout: Reference
category: API Reference
class_name: RealtimePropertyAttribute
class_members:
- name: Fields
  members:
  - name: propertyID
    definition: public uint propertyID
  - name: propertyType
    definition: public RealtimePropertyType propertyType
  - name: createDidChangeEvent
    definition: public bool createDidChangeEvent
  - name: didChangeEvent
    definition: public DidChangeEvent didChangeEvent
  - name: includeEqualityCheck
    definition: public bool includeEqualityCheck
    summary: When true, the model property setter will include an equality check that prevents dirtying the model data when the value is equal.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
