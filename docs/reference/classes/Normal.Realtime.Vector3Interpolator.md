---
title: Vector3Interpolator
layout: Reference
category: API Reference
class_name: Vector3Interpolator
class_summary: Interpolates between two Vector3.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public Vector3Interpolator Instance
    summary: The singleton instance of the Vector3 interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: Vector3 Interpolate(Vector3& a, Vector3& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
