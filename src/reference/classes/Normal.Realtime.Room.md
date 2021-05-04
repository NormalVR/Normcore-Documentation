---
title: Room
layout: Reference
category: API Reference
class_name: Room
class_summary: Represents a room on the server. Manages the connection to the server and the datastore.
class_remarks: If you're using Realtime this class should rarely be used directly. Realtime will manage the Room object and it exposes equivalent methods for all Room operations.
class_members:
- name: Events
  members:
  - name: connectionStateChanged
    definition: event ConnectionStateChanged connectionStateChanged
  - name: rpcMessageReceived
    definition: event RPCMessageReceived rpcMessageReceived
  - name: onWillWrite
    definition: event RoomEventHandler onWillWrite
  - name: onWillRead
    definition: event RoomEventHandler onWillRead
  - name: onDidWrite
    definition: event RoomEventHandler onDidWrite
  - name: onDidRead
    definition: event RoomEventHandler onDidRead
- name: Properties
  members:
  - name: name
    definition: string name { get; }
  - name: clientID
    definition: int clientID { get; }
  - name: time
    definition: double time { get; }
  - name: connectionState
    definition: ConnectionState connectionState { get; }
    summary: The connection state of the room.
  - name: connecting
    definition: bool connecting { get; }
    summary: True if the room is connecting to the server.
  - name: connected
    definition: bool connected { get; }
    summary: True if the room is connected to the server.
  - name: disconnected
    definition: bool disconnected { get; }
    summary: True if the room is disconnected or in an error state.
  - name: datastoreFrameDuration
    definition: double datastoreFrameDuration { get; set; }
  - name: debugLogging
    definition: bool debugLogging { get; set; }
  - name: realtime
    definition: Component realtime { get; set; }
  - name: datastore
    definition: Datastore datastore { get; }
- name: Methods
  members:
  - name: Dispose
    definition: void Dispose()
  - name: Connect
    definition: void Connect(string roomName, string appKey, string matcherURL = null, RealtimeModel roomModel = null)
  - name: Disconnect
    definition: void Disconnect()
  - name: Tick
    definition: void Tick(double deltaTime)
  - name: SendRPCMessage
    definition: bool SendRPCMessage(byte[] data, bool reliable)
  - name: SendRPCMessage
    definition: bool SendRPCMessage(byte[] data, int dataLength, bool reliable)
  - name: CreateAudioInputStream
    definition: AudioInputStream CreateAudioInputStream(bool voice, int sampleRate, int channels)
  - name: GetAudioOutputStream
    definition: AudioOutputStream GetAudioOutputStream(int clientID, int streamID)
  - name: GetNetworkStatistics
    definition: NetworkInfo GetNetworkStatistics()

---
