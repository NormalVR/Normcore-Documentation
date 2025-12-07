---
title: RealtimeModelEvent
layout: Reference
category: API Reference
class_name: RealtimeModelEvent
class_summary: An enum that represents the type of event to subscribe to. Generally used with [RealtimeCallback]
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: OnWillWrite
    definition: public RealtimeModelEvent OnWillWrite
    summary: Dispatched before a serialization pass.
  - name: OnDidWrite
    definition: public RealtimeModelEvent OnDidWrite
    summary: Dispatched after a serialization pass.
  - name: OnWillRead
    definition: public RealtimeModelEvent OnWillRead
    summary: Dispatched before a deserialization pass.
  - name: OnDidRead
    definition: public RealtimeModelEvent OnDidRead
    summary: Dispatched after a deserialization pass.
  - name: OnDidReadProperties
    definition: public RealtimeModelEvent OnDidReadProperties
    summary: Dispatched after a model reads property changes from a remote update.
    remarks: If no properties were changed by the update (meaning, it was redundant) this event is not dispatched.
  - name: OnDidReadModel
    definition: public RealtimeModelEvent OnDidReadModel
    summary: Dispatched after a model reads properties from a remote update.
    remarks: Unlike OnDidReadProperties, this event is dispatched for redundant updates.
  - name: DynamicOnDidRead
    definition: public RealtimeModelEvent DynamicOnDidRead
    summary: Dispatched after a deserialization pass if the model called [Normal.Realtime.RealtimeModel.SubscribeToDynamicOnDidReadCallback(Normal.Realtime.Serialization.StreamContext@)](Normal.Realtime.RealtimeModel.SubscribeToDynamicOnDidReadCallback(Normal.Realtime.Serialization#streamcontext@)) during the pass.
    remarks: Unlike the other OnDidRead variants, this variant adds zero overhead when the model isn't part of the deserialization pass.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
