---
title: ShortInterpolator
layout: Reference
category: API Reference
class_name: ShortInterpolator
class_summary: Interpolates between two shorts.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public ShortInterpolator Instance
    summary: The singleton instance of the Short interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: short Interpolate(Int16& a, Int16& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
