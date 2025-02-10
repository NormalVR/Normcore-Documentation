---
title: InterpolationDelay
layout: Reference
category: API Reference
class_name: InterpolationDelay
class_summary: A utility class that computes the time delay to use during property interpolation.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: delay
    definition: float delay { get; }
    summary: The current delay, in seconds.
  - name: basis
    definition: double basis { get; }
    summary: The last timestamp used to adjust the interpolation delay.
- name: Methods
  members:
  - name: Reset
    definition: void Reset()
    summary: Reset the delay to the default delay.
  - name: Adjust
    definition: void Adjust(double sent, double arrived, double sendrate)
    summary: Adjust the interpolation delay towards the ideal delay, accounting for jitter.
    parameters:
    - name: sent
      description: The Realtime room time when the packet was sent.
    - name: arrived
      description: The Realtime room time when the packet was received.
    - name: sendrate
      description: The Realtime room datastore frame duration.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
