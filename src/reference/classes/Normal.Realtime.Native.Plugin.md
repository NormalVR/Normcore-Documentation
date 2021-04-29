---
title: Plugin
layout: Reference
category: API Reference
class_name: Plugin
class_summary: ''
class_remarks: ''
class_members:
- name: Static Fields
  members:
  - name: logLevel
    definition: logLevel
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
- name: Static Methods
  members:
  - name: AudioOutputStreamSetSampleRate
    definition: void AudioOutputStreamSetSampleRate(IntPtr audioOutputStream, int sampleRate)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioOutputStreamGetChannels
    definition: int AudioOutputStreamGetChannels(IntPtr audioOutputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioOutputStreamGetIsOpen
    definition: int AudioOutputStreamGetIsOpen(IntPtr audioOutputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioOutputStreamGetAudioData
    definition: int AudioOutputStreamGetAudioData(IntPtr audioOutputStream, float[] audioData, int audioDataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioPreprocessorCreate
    definition: IntPtr AudioPreprocessorCreate(int recordSampleRate, int recordFrameSize, bool automaticGainControl, bool noiseSuppression, bool reverbSuppression, bool echoCancellation, int playbackSampleRate, int playbackChannels, float tail)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioPreprocessorDelete
    definition: void AudioPreprocessorDelete(IntPtr audioPreprocessor)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioPreprocessorProcessRecordFrame
    definition: bool AudioPreprocessorProcessRecordFrame(IntPtr audioPreprocessor, float[] audioData, int audioDataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioPreprocessorProcessPlaybackFrame
    definition: bool AudioPreprocessorProcessPlaybackFrame(IntPtr audioPreprocessor, float[] audioData, int audioDataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophonePlatformSupported
    definition: bool MicrophonePlatformSupported()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneCreate
    definition: IntPtr MicrophoneCreate()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneDelete
    definition: void MicrophoneDelete(IntPtr microphone)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneStart
    definition: bool MicrophoneStart(IntPtr microphone)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneStop
    definition: void MicrophoneStop(IntPtr microphone)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneGetSampleRate
    definition: int MicrophoneGetSampleRate(IntPtr microphone)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneGetChannels
    definition: int MicrophoneGetChannels(IntPtr microphone)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MicrophoneGetAudioData
    definition: bool MicrophoneGetAudioData(IntPtr microphone, float[] audioData, int audioDataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientDisconnect
    definition: void ClientDisconnect(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientBumpAutoDisconnectTime
    definition: void ClientBumpAutoDisconnectTime(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientGetState
    definition: int ClientGetState(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientGetClientID
    definition: int ClientGetClientID(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientGetRoomTime
    definition: double ClientGetRoomTime(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientSendPersistenceMessage
    definition: bool ClientSendPersistenceMessage(IntPtr client, byte[] data, int dataLength, bool reliable)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientReceiveIncomingPersistenceMessage
    definition: bool ClientReceiveIncomingPersistenceMessage(IntPtr client, PersistenceMessageEvent& persistenceMessageEvent)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientReceiveIncomingPersistenceMessageData
    definition: bool ClientReceiveIncomingPersistenceMessageData(IntPtr client, byte[] data, int dataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientSendRPCMessage
    definition: bool ClientSendRPCMessage(IntPtr client, byte[] data, int dataLength, bool reliable)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientReceiveIncomingRPCMessage
    definition: bool ClientReceiveIncomingRPCMessage(IntPtr client, RPCMessageEvent& persistenceMessageEvent)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientReceiveIncomingRPCMessageData
    definition: bool ClientReceiveIncomingRPCMessageData(IntPtr client, byte[] data, int dataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientCreateAudioInputStream
    definition: IntPtr ClientCreateAudioInputStream(IntPtr client, bool voice, int sampleRate, int channels)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientDeleteAudioInputStream
    definition: void ClientDeleteAudioInputStream(IntPtr audioInputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientDeleteAudioOutputStream
    definition: void ClientDeleteAudioOutputStream(IntPtr audioOutputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientReceiveIncomingAudioStreamEvent
    definition: bool ClientReceiveIncomingAudioStreamEvent(IntPtr client, AudioStreamEvent& audioStreamEvent)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioInputStreamGetClientID
    definition: int AudioInputStreamGetClientID(IntPtr audioInputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioInputStreamGetStreamID
    definition: int AudioInputStreamGetStreamID(IntPtr audioInputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioInputStreamClose
    definition: void AudioInputStreamClose(IntPtr audioInputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioInputStreamSendRawAudioData
    definition: bool AudioInputStreamSendRawAudioData(IntPtr audioInputStream, float[] audioData, int audioDataLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioInputStreamSendQueuedMessages
    definition: void AudioInputStreamSendQueuedMessages(IntPtr audioInputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioOutputStreamGetClientID
    definition: int AudioOutputStreamGetClientID(IntPtr audioOutputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioOutputStreamGetStreamID
    definition: int AudioOutputStreamGetStreamID(IntPtr audioOutputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: AudioOutputStreamGetSampleRate
    definition: int AudioOutputStreamGetSampleRate(IntPtr audioOutputStream)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: SetLogFunction
    definition: void SetLogFunction(IntPtr logFunction)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherCreate
    definition: IntPtr MatcherCreate(string matcherURL)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherDelete
    definition: void MatcherDelete(IntPtr matcher)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherConnect
    definition: void MatcherConnect(IntPtr matcher)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherDisconnect
    definition: void MatcherDisconnect(IntPtr matcher)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherTick
    definition: void MatcherTick(IntPtr matcher)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetRequestState
    definition: int MatcherGetRequestState(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetRequestErrorMessage
    definition: string MatcherGetRequestErrorMessage(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetRequestFailMessage
    definition: string MatcherGetRequestFailMessage(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherClearRequest
    definition: void MatcherClearRequest(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherConnectToRoom
    definition: string MatcherConnectToRoom(IntPtr matcher, string appKey, string roomName, string clientOffer, Cluster[] clusterPingResults, int clusterPingResultsLength, Region[] preferredRegions, int preferredRegionsLength)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetConnectToRoomRequestResponseType
    definition: string MatcherGetConnectToRoomRequestResponseType(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetConnectToRoomRequestClustersToPingCount
    definition: int MatcherGetConnectToRoomRequestClustersToPingCount(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetConnectToRoomRequestClustersToPingNameAtIndex
    definition: string MatcherGetConnectToRoomRequestClustersToPingNameAtIndex(IntPtr matcher, string requestGUID, int index)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex
    definition: string MatcherGetConnectToRoomRequestClustersToPingAddressAtIndex(IntPtr matcher, string requestGUID, int index)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: MatcherGetConnectToRoomRequestServerAnswer
    definition: string MatcherGetConnectToRoomRequestServerAnswer(IntPtr matcher, string requestGUID)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientSetUpNetworkStack
    definition: bool ClientSetUpNetworkStack()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientTearDownNetworkStack
    definition: bool ClientTearDownNetworkStack()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientCreate
    definition: IntPtr ClientCreate()
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientDelete
    definition: void ClientDelete(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientStartConnection
    definition: string ClientStartConnection(IntPtr client)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 
  - name: ClientConnect
    definition: void ClientConnect(IntPtr client, string serverAnswer)
    summary: ''
    remarks: ''
    returns: ''
    parameters: 

---
