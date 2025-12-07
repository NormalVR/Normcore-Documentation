---
title: IInterpolator<T>
layout: Reference
category: API Reference
class_name: IInterpolator<T>
class_summary: Implements an interpolation algorithm for a given value type.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: Interpolate
    definition: T Interpolate(T& a, T& b, float t)
    summary: Interpolate between two values.
    returns: The interpolated value.
    parameters:
    - name: a
      description: The starting interpolation value.
    - name: b
      description: The ending interpolation value.
    - name: t
      description: The normalized (between 0 and 1) time between the two values.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
