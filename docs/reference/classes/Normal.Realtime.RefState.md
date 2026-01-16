---
title: RefState
layout: Reference
category: API Reference
class_name: RefState
class_summary: The state of an [Normal.Realtime.IRealtimeRef`1](Normal.Realtime#irealtimeref`1) and of the component it's pointing to.
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: Unassigned
    definition: public RefState Unassigned
    summary: The reference is explicitly unassigned.
  - name: Unresolved
    definition: public RefState Unresolved
    summary: The referenced component is not registered locally (either not yet replicated to this client, not yet deserialized on this client, or has been despawned).
  - name: Resolved
    definition: public RefState Resolved
    summary: The referenced component is accessible.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
