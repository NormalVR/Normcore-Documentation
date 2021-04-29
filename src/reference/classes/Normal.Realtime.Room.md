---
title: Room
layout: Reference
category: API Reference
class_name: Room
class_summary: ''
class_remarks: ''
class_members:
- name: Events
  members:
  - name: connectionStateChanged
    definition: connectionStateChanged
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: rpcMessageReceived
    definition: rpcMessageReceived
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: onWillWrite
    definition: onWillWrite
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: onWillRead
    definition: onWillRead
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: onDidWrite
    definition: onDidWrite
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: onDidRead
    definition: onDidRead
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Properties
  members:
  - name: name
    definition: name
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: clientID
    definition: clientID
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: time
    definition: time
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: connectionState
    definition: connectionState
    summary: The connection state of the room.
    remarks: ''
    returns: ''
    parameters: []
  - name: connecting
    definition: connecting
    summary: True if the room is connecting to the server.
    remarks: ''
    returns: ''
    parameters: []
  - name: connected
    definition: connected
    summary: True if the room is connected to the server.
    remarks: ''
    returns: ''
    parameters: []
  - name: disconnected
    definition: disconnected
    summary: True if the room is disconnected or in an error state.
    remarks: ''
    returns: ''
    parameters: []
  - name: datastoreFrameDuration
    definition: datastoreFrameDuration
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: debugLogging
    definition: debugLogging
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: realtime
    definition: realtime
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: datastore
    definition: datastore
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Methods
  members:
  - name: Finalize
    definition: void Finalize()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Dispose
    definition: void Dispose()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Connect
    definition: void Connect(string roomName, string appKey, string matcherURL = null, RealtimeModel roomModel = null)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Disconnect
    definition: void Disconnect()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Tick
    definition: void Tick(double deltaTime)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SendRPCMessage
    definition: bool SendRPCMessage(byte[] data, bool reliable)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SendRPCMessage
    definition: bool SendRPCMessage(byte[] data, int dataLength, bool reliable)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: CreateAudioInputStream
    definition: AudioInputStream CreateAudioInputStream(bool voice, int sampleRate, int channels)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: GetAudioOutputStream
    definition: AudioOutputStream GetAudioOutputStream(int clientID, int streamID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: GetNetworkStatistics
    definition: NetworkInfo GetNetworkStatistics()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
