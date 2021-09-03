---
title: Plugin
layout: Reference
category: API Reference
class_name: Plugin
class_members:
- name: Static Fields
  members:
  - name: logLevel
    definition: public LogLevel logLevel
- name: Static Methods
  members:
  - name: AudioOutputStreamSetSampleRate
    definition: void AudioOutputStreamSetSampleRate(IntPtr audioOutputStream, int sampleRate)
  - name: AudioOutputStreamGetChannels
    definition: int AudioOutputStreamGetChannels(IntPtr audioOutputStream)
  - name: AudioOutputStreamGetIsOpen
    definition: int AudioOutputStreamGetIsOpen(IntPtr audioOutputStream)
  - name: AudioOutputStreamGetAudioData
    definition: int AudioOutputStreamGetAudioData(IntPtr audioOutputStream, float[] audioData, int audioDataLength)
  - name: AudioPreprocessorCreate
    definition: IntPtr AudioPreprocessorCreate(int recordSampleRate, int recordFrameSize, bool automaticGainControl, bool noiseSuppression, bool reverbSuppression, bool echoCancellation, int playbackSampleRate, int playbackChannels, float tail)
  - name: AudioPreprocessorDelete
    definition: void AudioPreprocessorDelete(IntPtr audioPreprocessor)
  - name: AudioPreprocessorProcessRecordFrame
    definition: bool AudioPreprocessorProcessRecordFrame(IntPtr audioPreprocessor, float[] audioData, int audioDataLength)
  - name: AudioPreprocessorProcessPlaybackFrame
    definition: bool AudioPreprocessorProcessPlaybackFrame(IntPtr audioPreprocessor, float[] audioData, int audioDataLength)
  - name: MicrophonePlatformSupported
    definition: bool MicrophonePlatformSupported()
  - name: MicrophoneCreate
    definition: IntPtr MicrophoneCreate()
  - name: MicrophoneDelete
    definition: void MicrophoneDelete(IntPtr microphone)
  - name: MicrophoneStart
    definition: bool MicrophoneStart(IntPtr microphone)
  - name: MicrophoneStop
    definition: void MicrophoneStop(IntPtr microphone)
  - name: MicrophoneGetSampleRate
    definition: int MicrophoneGetSampleRate(IntPtr microphone)
  - name: MicrophoneGetChannels
    definition: int MicrophoneGetChannels(IntPtr microphone)
  - name: MicrophoneGetAudioData
    definition: bool MicrophoneGetAudioData(IntPtr microphone, float[] audioData, int audioDataLength)
  - name: ClientDisconnect
    definition: void ClientDisconnect(IntPtr client)
  - name: ClientBumpAutoDisconnectTime
    definition: void ClientBumpAutoDisconnectTime(IntPtr client)
  - name: ClientGetState
    definition: int ClientGetState(IntPtr client)
  - name: ClientGetClientID
    definition: int ClientGetClientID(IntPtr client)
  - name: ClientGetRoomTime
    definition: double ClientGetRoomTime(IntPtr client)
  - name: ClientSendPersistenceMessage
    definition: bool ClientSendPersistenceMessage(IntPtr client, byte[] data, int dataLength, bool reliable)
  - name: ClientReceiveIncomingPersistenceMessage
    definition: bool ClientReceiveIncomingPersistenceMessage(IntPtr client, PersistenceMessageEvent& persistenceMessageEvent)
  - name: ClientReceiveIncomingPersistenceMessageData
    definition: bool ClientReceiveIncomingPersistenceMessageData(IntPtr client, byte[] data, int dataLength)
  - name: ClientSendRPCMessage
    definition: bool ClientSendRPCMessage(IntPtr client, byte[] data, int dataLength, bool reliable)
  - name: ClientReceiveIncomingRPCMessage
    definition: bool ClientReceiveIncomingRPCMessage(IntPtr client, RPCMessageEvent& persistenceMessageEvent)
  - name: ClientReceiveIncomingRPCMessageData
    definition: bool ClientReceiveIncomingRPCMessageData(IntPtr client, byte[] data, int dataLength)
  - name: ClientCreateAudioInputStream
    definition: IntPtr ClientCreateAudioInputStream(IntPtr client, bool voice, int sampleRate, int channels)
  - name: ClientDeleteAudioInputStream
    definition: void ClientDeleteAudioInputStream(IntPtr audioInputStream)
  - name: ClientDeleteAudioOutputStream
    definition: void ClientDeleteAudioOutputStream(IntPtr audioOutputStream)
  - name: ClientReceiveIncomingAudioStreamEvent
    definition: bool ClientReceiveIncomingAudioStreamEvent(IntPtr client, AudioStreamEvent& audioStreamEvent)
  - name: AudioInputStreamGetClientID
    definition: int AudioInputStreamGetClientID(IntPtr audioInputStream)
  - name: AudioInputStreamGetStreamID
    definition: int AudioInputStreamGetStreamID(IntPtr audioInputStream)
  - name: AudioInputStreamClose
    definition: void AudioInputStreamClose(IntPtr audioInputStream)
  - name: AudioInputStreamSendRawAudioData
    definition: bool AudioInputStreamSendRawAudioData(IntPtr audioInputStream, float[] audioData, int audioDataLength)
  - name: AudioInputStreamSendQueuedMessages
    definition: void AudioInputStreamSendQueuedMessages(IntPtr audioInputStream)
  - name: AudioOutputStreamGetClientID
    definition: int AudioOutputStreamGetClientID(IntPtr audioOutputStream)
  - name: AudioOutputStreamGetStreamID
    definition: int AudioOutputStreamGetStreamID(IntPtr audioOutputStream)
  - name: AudioOutputStreamGetSampleRate
    definition: int AudioOutputStreamGetSampleRate(IntPtr audioOutputStream)
  - name: SetLogFunction
    definition: void SetLogFunction(IntPtr logFunction)
  - name: MatcherCreate
    definition: IntPtr MatcherCreate(string matcherURL)
  - name: MatcherDelete
    definition: void MatcherDelete(IntPtr matcher)
  - name: MatcherConnect
    definition: void MatcherConnect(IntPtr matcher)
  - name: MatcherDisconnect
    definition: void MatcherDisconnect(IntPtr matcher)
  - name: MatcherTick
    definition: void MatcherTick(IntPtr matcher)
  - name: MatcherGetRequestState
    definition: int MatcherGetRequestState(IntPtr matcher, string requestGUID)
  - name: MatcherGetRequestErrorMessage
    definition: string MatcherGetRequestErrorMessage(IntPtr matcher, string requestGUID)
  - name: MatcherGetRequestFailMessage
    definition: string MatcherGetRequestFailMessage(IntPtr matcher, string requestGUID)
  - name: MatcherClearRequest
    definition: void MatcherClearRequest(IntPtr matcher, string requestGUID)
  - name: MatcherConnectToRoom
    definition: string MatcherConnectToRoom(IntPtr matcher, string appKey, string roomName, string clientOffer, Cluster[] clusterPingResults, int clusterPingResultsLength, Region[] preferredRegions, int preferredRegionsLength)
  - name: MatcherGetConnectToRoomRequestResponseType
    definition: string MatcherGetConnectToRoomRequestResponseType(IntPtr matcher, string requestGUID)
  - name: MatcherGetConnectToRoomRequestClustersToPingCount
    definition: int MatcherGetConnectToRoomRequestClustersToPingCount(IntPtr matcher, string requestGUID)
  - name: MatcherGetConnectToRoomRequestClustersToPingNameAtIndex
    definition: string MatcherGetConnectToRoomRequestClustersToPingNameAtIndex(IntPtr matcher, string requestGUID, int index)
  - name: MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex
    definition: string MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex(IntPtr matcher, string requestGUID, int index)
  - name: MatcherGetConnectToRoomRequestServerAnswer
    definition: string MatcherGetConnectToRoomRequestServerAnswer(IntPtr matcher, string requestGUID)
  - name: ClientSetUpNetworkStack
    definition: bool ClientSetUpNetworkStack()
  - name: ClientTearDownNetworkStack
    definition: bool ClientTearDownNetworkStack()
  - name: ClientCreate
    definition: IntPtr ClientCreate()
  - name: ClientDelete
    definition: void ClientDelete(IntPtr client)
  - name: ClientStartConnection
    definition: string ClientStartConnection(IntPtr client)
  - name: ClientConnect
    definition: void ClientConnect(IntPtr client, string serverAnswer)

---
