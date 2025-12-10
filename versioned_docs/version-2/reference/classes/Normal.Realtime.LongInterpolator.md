---
title: LongInterpolator
layout: Reference
category: API Reference
class_name: LongInterpolator
class_summary: Interpolates between two longs.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public LongInterpolator Instance
    summary: The singleton instance of the Long interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: long Interpolate(Int64& a, Int64& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
