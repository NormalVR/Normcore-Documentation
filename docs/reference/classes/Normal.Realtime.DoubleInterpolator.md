---
title: DoubleInterpolator
layout: Reference
category: API Reference
class_name: DoubleInterpolator
class_summary: Interpolates between two doubles.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Instance
    definition: public DoubleInterpolator Instance
    summary: The singleton instance of the Double interpolator.
- name: Properties
  members:
  - name: valueType
    definition: Type valueType { get; }
    summary: The value type that this interpolator can interpolate.
- name: Methods
  members:
  - name: Interpolate
    definition: double Interpolate(Double& a, Double& b, float t)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
