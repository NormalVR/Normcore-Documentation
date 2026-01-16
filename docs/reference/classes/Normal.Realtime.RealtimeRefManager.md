---
title: RealtimeRefManager
layout: Reference
category: API Reference
class_name: RealtimeRefManager
class_summary: <para> Implements an event mechanism for notifying <see cref="T:Normal.Realtime.RealtimeRefController`1">networked references</see> about the network lifecycle of the views that they're referencing. </para> <para> For example if a reference was pointing to a view that hadn't been registered yet, we want to notify that reference when we register the view. </para>
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: Clear
    definition: void Clear()

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
