---
title: FloatInterpolator
layout: Reference
category: API Reference
class_name: FloatInterpolator
class_summary: Interpolates between two floats.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public FloatInterpolator Instance
    summary: The singleton instance of the Float interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: float Interpolate(Single& a, Single& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
