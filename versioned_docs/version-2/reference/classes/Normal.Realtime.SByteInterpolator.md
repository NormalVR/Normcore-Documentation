---
title: SByteInterpolator
layout: Reference
category: API Reference
class_name: SByteInterpolator
class_summary: Interpolates between two sbytes.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public SByteInterpolator Instance
    summary: The singleton instance of the SByte interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: sbyte Interpolate(SByte& a, SByte& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
