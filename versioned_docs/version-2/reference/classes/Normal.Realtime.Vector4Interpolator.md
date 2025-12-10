---
title: Vector4Interpolator
layout: Reference
category: API Reference
class_name: Vector4Interpolator
class_summary: Interpolates between two Vector4.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public Vector4Interpolator Instance
    summary: The singleton instance of the Vector4 interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: Vector4 Interpolate(Vector4& a, Vector4& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
