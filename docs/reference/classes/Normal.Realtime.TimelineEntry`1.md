---
title: TimelineEntry<T>
layout: Reference
category: API Reference
class_name: TimelineEntry<T>
class_members:
- name: Fields
  members:
  - name: time
    definition: public double time
    summary: The absolute time of this entry.
  - name: value
    definition: public T value
    summary: The timeline value in this entry.
- name: Properties
  members:
  - name: prev
    definition: TimelineEntry<T> prev { get; }
    summary: The previous timeline entry. If this is the oldest entry in the timeline, the previous entry is null.
  - name: next
    definition: TimelineEntry<T> next { get; }
    summary: The next timeline entry. If this is the newest entry in the timeline, the next entry is null.

---
