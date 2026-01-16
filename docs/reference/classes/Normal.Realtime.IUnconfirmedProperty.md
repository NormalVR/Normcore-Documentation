---
title: IUnconfirmedProperty
layout: Reference
category: API Reference
class_name: IUnconfirmedProperty
class_summary: A property that sends values on the unreliable channel.
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: SetRedundantWritesEnabled
    definition: void SetRedundantWritesEnabled(bool value)
    summary: Activate or deactivate redundant writes for this property. If activated, the property will resend its value up to two times.
    remarks: Sometimes an unreliable packet being dropped can result in significant inconsistencies between clients, particularly when the property is only updated intermittently. Enabling this can help avoid consistency issues by increasing the likelihood that all clients receive the latest update.
    parameters:
    - name: value
      description: True to enable redundant writes, false to disable.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
