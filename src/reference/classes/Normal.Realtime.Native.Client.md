---
title: Client
layout: Reference
category: API Reference
class_name: Client
class_summary: ''
class_remarks: ''
class_members:
- name: Events
  members:
  - name: persistenceMessageReceived
    definition: persistenceMessageReceived
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
  - name: audioOutputStreamCreated
    definition: audioOutputStreamCreated
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: audioOutputStreamClosed
    definition: audioOutputStreamClosed
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
  - name: GetNetworkStatistics
    definition: NetworkInfo GetNetworkStatistics()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: StartConnection
    definition: string StartConnection()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: Connect
    definition: void Connect(string serverAnswer)
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
  - name: ReceiveIncomingMessages
    definition: void ReceiveIncomingMessages()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: BumpAutoDisconnectTime
    definition: void BumpAutoDisconnectTime()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: State
    definition: ClientState State()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientID
    definition: int ClientID()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: RoomTime
    definition: double RoomTime()
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
  - name: ReceiveAudioEventMessages
    definition: void ReceiveAudioEventMessages()
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
  - name: SendPersistenceMessage
    definition: bool SendPersistenceMessage(byte[] data, int dataLength, bool reliable)
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

---
