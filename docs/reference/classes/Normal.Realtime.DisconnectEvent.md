---
title: DisconnectEvent
layout: Reference
category: API Reference
class_name: DisconnectEvent
class_summary: Holds information about a disconnect event. All disconnect events inherit from this class. Child classes can contain more specific information about the event.
class_remarks: ''
class_members:
- name: Properties
  members:
  - name: roomName
    definition: string roomName { get; }
    summary: The name of the room where the event originated.
  - name: quickmatchRoom
    definition: bool quickmatchRoom { get; }
    summary: Whether the room was a Quickmatch room.
  - name: quickmatchRoomGroupName
    definition: string quickmatchRoomGroupName { get; }
    summary: The Quickmatch room group name, if applicable.
  - name: quickmatchRoomCode
    definition: string quickmatchRoomCode { get; }
    summary: The Quickmatch room code, if applicable.
  - name: quickmatchRoomCapacity
    definition: int? quickmatchRoomCapacity { get; }
    summary: The Quickmatch room capacity, if applicable.
  - name: connectOptions
    definition: ConnectOptions connectOptions { get; }
    summary: The connection options used to connect to the room.
  - name: didConnectToRoom
    definition: bool didConnectToRoom { get; }
    summary: Whether the room was successfully connected prior to being disconnected.
  - name: message
    definition: string message { get; }
    summary: A user-friendly description of the disconnect. It can be displayed to players in a GUI for example.
- name: Methods
  members:
  - name: ToString
    definition: string ToString()
    summary: A detailed description of the disconnect. This can be included in the logs.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
