---
title: IntInterpolator
layout: Reference
category: API Reference
class_name: IntInterpolator
class_summary: Interpolates between two integers.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public IntInterpolator Instance
    summary: The singleton instance of the Int interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: int Interpolate(Int32& a, Int32& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
