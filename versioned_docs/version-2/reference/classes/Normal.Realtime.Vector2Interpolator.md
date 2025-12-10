---
title: Vector2Interpolator
layout: Reference
category: API Reference
class_name: Vector2Interpolator
class_summary: Interpolates between two Vector2.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public Vector2Interpolator Instance
    summary: The singleton instance of the Vector2 interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: Vector2 Interpolate(Vector2& a, Vector2& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
