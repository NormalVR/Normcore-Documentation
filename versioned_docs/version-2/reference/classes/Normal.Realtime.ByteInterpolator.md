---
title: ByteInterpolator
layout: Reference
category: API Reference
class_name: ByteInterpolator
class_summary: Interpolates between two bytes.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public ByteInterpolator Instance
    summary: The singleton instance of the Byte interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: byte Interpolate(Byte& a, Byte& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
