---
title: ULongInterpolator
layout: Reference
category: API Reference
class_name: ULongInterpolator
class_summary: Interpolates between two unsigned longs.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public ULongInterpolator Instance
    summary: The singleton instance of the ULong interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: ulong Interpolate(UInt64& a, UInt64& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
