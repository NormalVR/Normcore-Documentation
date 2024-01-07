---
title: StreamContext
layout: Reference
category: API Reference
class_name: StreamContext
class_members:
- name: Fields
  members:
  - name: dispatcher
    definition: public StreamEventDispatcher dispatcher
  - name: inflightUpdateNotifier
    definition: public InflightUpdateNotifier inflightUpdateNotifier
  - name: fullModel
    definition: public bool fullModel
  - name: reliableChannel
    definition: public bool reliableChannel
  - name: updateID
    definition: public uint updateID
  - name: packetRoomTime
    definition: public double packetRoomTime
- name: Properties
  members:
  - name: deltaUpdatesOnly
    definition: bool deltaUpdatesOnly { get; }
  - name: unreliableChannel
    definition: bool unreliableChannel { get; }
- name: Methods
  members:
  - name: AsFullModel
    definition: StreamContext AsFullModel()
    summary: Copy the stream context, with full model set to true.
  - name: Equals
    definition: bool Equals(object obj)

---
