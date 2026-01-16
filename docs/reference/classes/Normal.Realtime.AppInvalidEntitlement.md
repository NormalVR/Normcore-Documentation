---
title: AppInvalidEntitlement
layout: Reference
category: API Reference
class_name: AppInvalidEntitlement
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: appKey
    definition: string appKey { get; }
    summary: The app key.
  - name: feature
    definition: string feature { get; }
    summary: The feature that has invalid entitlement.
  - name: reason
    definition: string reason { get; }
    summary: The reason specified by the Normcore backend.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
