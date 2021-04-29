---
title: Extensions
layout: Reference
category: API Reference
class_name: Extensions
class_summary: ''
class_remarks: ''
class_members:
- name: Static Methods
  members:
  - name: AddComponentIfNeeded
    definition: T AddComponentIfNeeded(this GameObject gameObject)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: GetComponentInParent
    definition: T GetComponentInParent(this Component obj, bool includeInactive)
    summary: Returns the first component of type T in this GameObject or any of its parents.
    remarks: ''
    returns: A component of the matching type, if found.
    parameters:
    - name: includeInactive
      description: If true, include inactive parents.

---
