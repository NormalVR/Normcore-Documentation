---
title: BoolInterpolator
layout: Reference
category: API Reference
class_name: BoolInterpolator
class_summary: Interpolates between two booleans.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public BoolInterpolator Instance
    summary: The singleton instance of the Bool interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: bool Interpolate(Boolean& a, Boolean& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
