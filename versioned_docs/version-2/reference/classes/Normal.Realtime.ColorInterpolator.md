---
title: ColorInterpolator
layout: Reference
category: API Reference
class_name: ColorInterpolator
class_summary: Interpolates between two Color.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public ColorInterpolator Instance
    summary: The singleton instance of the Color interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: Color Interpolate(Color& a, Color& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
