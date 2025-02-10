---
title: UIntInterpolator
layout: Reference
category: API Reference
class_name: UIntInterpolator
class_summary: Interpolates between two unsigned integers.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public UIntInterpolator Instance
    summary: The singleton instance of the UInt interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: uint Interpolate(UInt32& a, UInt32& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
