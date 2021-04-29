---
title: StreamEventDispatcher
layout: Reference
category: API Reference
class_name: StreamEventDispatcher
class_summary: ''
class_remarks: ''
class_members:
- name: Methods
  members:
  - name: AddStreamCallback
    definition: void AddStreamCallback(uint updateID, StreamUpdateCallback callback)
    summary: Add a callback for future updates with a specific update ID. This can only be added once per update ID, and  will be automatically removed from the stream event dispatcher after it is invoked.
    remarks: ''
    returns: ''
    parameters: []
  - name: RemoveStreamCallback
    definition: void RemoveStreamCallback(StreamUpdateCallback callback)
    summary: Remove a callback from all update IDs.
    remarks: ''
    returns: ''
    parameters: []
  - name: InvokeCallbacksForUpdateID
    definition: void InvokeCallbacksForUpdateID(uint updateID)
    summary: Invoke all of the callbacks for a specific update ID. The callbacks will be removed after they invoked.
    remarks: ''
    returns: ''
    parameters: []

---
