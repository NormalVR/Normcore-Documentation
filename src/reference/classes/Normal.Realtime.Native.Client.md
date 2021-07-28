---
title: Client
layout: Reference
category: API Reference
class_name: Client
class_members:
- name: Events
  members:
  - name: persistenceMessageReceived
    definition: event PersistenceMessageReceived persistenceMessageReceived
  - name: rpcMessageReceived
    definition: event RPCMessageReceived rpcMessageReceived
  - name: audioOutputStreamCreated
    definition: event AudioOutputStreamCreated audioOutputStreamCreated
  - name: audioOutputStreamClosed
    definition: event AudioOutputStreamClosed audioOutputStreamClosed
- name: Methods
  members:
  - name: Dispose
    definition: void Dispose()
  - name: GetNetworkStatistics
    definition: NetworkInfo GetNetworkStatistics()
  - name: StartConnection
    definition: string StartConnection()
  - name: Connect
    definition: void Connect(string serverAnswer)
  - name: Disconnect
    definition: void Disconnect()
  - name: ReceiveIncomingMessages
    definition: void ReceiveIncomingMessages()
  - name: BumpAutoDisconnectTime
    definition: void BumpAutoDisconnectTime()
  - name: State
    definition: ClientState State()
  - name: ClientID
    definition: int ClientID()
  - name: RoomTime
    definition: double RoomTime()
  - name: CreateAudioInputStream
    definition: AudioInputStream CreateAudioInputStream(bool voice, int sampleRate, int channels)
  - name: ReceiveAudioEventMessages
    definition: void ReceiveAudioEventMessages()
  - name: GetAudioOutputStream
    definition: AudioOutputStream GetAudioOutputStream(int clientID, int streamID)
  - name: SendPersistenceMessage
    definition: bool SendPersistenceMessage(byte[] data, int dataLength, bool reliable)
  - name: SendRPCMessage
    definition: bool SendRPCMessage(byte[] data, int dataLength, bool reliable)

---
