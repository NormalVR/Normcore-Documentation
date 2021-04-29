---
title: Timeline<T>
layout: Reference
category: API Reference
class_name: Timeline<T>
class_summary: ''
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: isEmpty
    definition: isEmpty
    summary: True if the timeline is empty.
    remarks: ''
    returns: ''
    parameters: []
  - name: isNotEmpty
    definition: isNotEmpty
    summary: True if the timeline has values.
    remarks: ''
    returns: ''
    parameters: []
- name: Methods
  members:
  - name: Clear
    definition: void Clear()
    summary: Clear the timeline.
    remarks: ''
    returns: ''
    parameters: []
  - name: IsTimeInsideTimeline
    definition: bool IsTimeInsideTimeline(double time)
    summary: True if the time is inside the span of the timeline and can be interpolated.
    remarks: ''
    returns: ''
    parameters: []
  - name: IsTimeAheadTimeline
    definition: bool IsTimeAheadTimeline(double time)
    summary: True if the time is newer than the newer frame in the timeline (or the timeline is empty).
    remarks: ''
    returns: ''
    parameters: []
  - name: IsTimeBehindTimeline
    definition: bool IsTimeBehindTimeline(double time)
    summary: True if the time is older than the oldest frame in the timeline (or the timeline is empty).
    remarks: ''
    returns: ''
    parameters: []
  - name: GetNewestTime
    definition: double GetNewestTime()
    summary: Get the newest timestamp in the timeline. This value is cached for quick access.
    remarks: ''
    returns: ''
    parameters: []
  - name: GetNewestValue
    definition: T GetNewestValue()
    summary: Get the newest value in the timeline.
    remarks: ''
    returns: ''
    parameters: []
  - name: GetValueAtIndex
    definition: T GetValueAtIndex(int index)
    summary: Get a value by index. The newest value is indexed at 0, the oldest value is indexed at `count - 1`.
    remarks: ''
    returns: ''
    parameters: []
  - name: GetOldestTime
    definition: double GetOldestTime()
    summary: Get the oldest timestamp in the timeline. This value is cached for quick access.
    remarks: ''
    returns: ''
    parameters: []
  - name: GetOldestValue
    definition: T GetOldestValue()
    summary: Get the oldest value in the timeline.
    remarks: ''
    returns: ''
    parameters: []
  - name: Add
    definition: void Add(double time, T value)
    summary: Add a snapshot to the front of the timeline.
    remarks: ''
    returns: ''
    parameters: []
  - name: Get
    definition: T Get(double time)
    summary: Get an interpolated position/rotation/scale within the timeline. If the input time is outside the timeline,  this returns the snapshot closest to the timestamp.
    remarks: ''
    returns: ''
    parameters: []

---
