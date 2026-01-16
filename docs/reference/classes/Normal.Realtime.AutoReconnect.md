---
title: AutoReconnect
layout: Reference
category: API Reference
class_name: AutoReconnect
class_summary: Component that automatically reconnects to the last room after being forcefully disconnected due to a networking error.
class_remarks: ''
class_members:
- name: Events
  members:
  - name: willConnect
    definition: event Action<AutoReconnect, WillConnectArgs> willConnect
    summary: Event triggered before attempting to reconnect to the room.
  - name: willConnectAsync
    definition: event Func<AutoReconnect, WillConnectArgs, Task> willConnectAsync
    summary: Event triggered before attempting to reconnect to the room.
    remarks: This event is asynchronous and is awaited. It allows for custom logic to be executed before the reconnection attempt, such as updating a room name to connect to a different lobby.
  - name: didConnect
    definition: event Action<AutoReconnect> didConnect
    summary: Event triggered after a successful connection to the room.
  - name: didDisconnect
    definition: event Action<AutoReconnect, DidDisconnectArgs> didDisconnect
    summary: Event triggered after being disconnected from the room.
  - name: didCancel
    definition: event Action<AutoReconnect> didCancel
    summary: Event triggered when the user cancels the reconnect attempt.
  - name: reconnectTimerDidUpdate
    definition: event Action<AutoReconnect, int> reconnectTimerDidUpdate
    summary: Event triggered when the reconnect timer updates, providing the remaining time before the next connection attempt in seconds.
- name: Properties
  members:
  - name: realtime
    definition: Realtime realtime { get; }
    summary: The Realtime component used for connecting to the room.
  - name: isReconnecting
    definition: bool isReconnecting { get; }
    summary: Whether an auto-reconnect is currently in progress.
  - name: waitTime
    definition: float waitTime { get; }
    summary: The time in seconds before the next connection attempt.
  - name: remainingTime
    definition: float remainingTime { get; }
    summary: The time remaining in seconds before the next connection attempt.
  - name: retryCount
    definition: int retryCount { get; }
    summary: The number of reconnect attempts made since the last successful connection.
  - name: maxRetries
    definition: int maxRetries { get; }
    summary: The maximum number of reconnect attempts before giving up.
  - name: roomName
    definition: string roomName { get; set; }
    summary: The room name used to connect.
  - name: quickmatchRoomGroupName
    definition: string quickmatchRoomGroupName { get; set; }
    summary: The room group name used when connecting with Quickmatch.
  - name: quickmatchRoomCapacity
    definition: int? quickmatchRoomCapacity { get; set; }
    summary: The room capacity used when connecting with Quickmatch.
  - name: connectOptions
    definition: ConnectOptions connectOptions { get; set; }
    summary: The connection options used to connect.
  - name: reconnectMode
    definition: ReconnectMode reconnectMode { get; set; }
    summary: How the next reconnect attempt will try to join a room.
- name: Methods
  members:
  - name: Reconnect
    definition: void Reconnect()
    summary: Reconnect using the last known room name and connection options.
  - name: CancelReconnect
    definition: void CancelReconnect()
    summary: Cancel any pending reconnect attempts.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
