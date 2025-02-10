---
title: QuaternionLinearInterpolator
layout: Reference
category: API Reference
class_name: QuaternionLinearInterpolator
class_summary: Interpolates between two Quaternion linearly.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public QuaternionLinearInterpolator Instance
    summary: The singleton instance of the Quaternion linear interpolator.
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
