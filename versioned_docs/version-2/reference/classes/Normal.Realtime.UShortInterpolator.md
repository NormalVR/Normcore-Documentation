---
title: UShortInterpolator
layout: Reference
category: API Reference
class_name: UShortInterpolator
class_summary: Interpolates between two ushorts.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public UShortInterpolator Instance
    summary: The singleton instance of the UShort interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: ushort Interpolate(UInt16& a, UInt16& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
