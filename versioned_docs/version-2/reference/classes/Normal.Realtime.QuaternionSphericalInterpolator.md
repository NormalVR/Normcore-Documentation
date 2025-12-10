---
title: QuaternionSphericalInterpolator
layout: Reference
category: API Reference
class_name: QuaternionSphericalInterpolator
class_summary: Interpolates between two Quaternion spherically.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public QuaternionSphericalInterpolator Instance
    summary: The singleton instance of the Quaternion spherical interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: Quaternion Interpolate(Quaternion& a, Quaternion& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
