---
title: Room
layout: Reference
category: API Reference
class_name: Room
class_description: ''
class_properties:
- name: clientID
  type: int
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a0a4f2eae03fec7b2158aa0bd23125a6b
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: int? Normal.Realtime.Room.clientID
- name: connected
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a681f4f6596723ee973ec2b09505703cd
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Room.connected
- name: connecting
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1ae05d4d9e29e18abb0e8657a5d332eef6
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Room.connecting
- name: connectionState
  type: ConnectionState
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1adccd7205601cb7c5bf80281481c77e9d
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: ConnectionState Normal.Realtime.Room.connectionState
- name: datastore
  type: Datastore
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a588b1e2737139e69a85976653296460e
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Datastore Normal.Realtime.Room.datastore
- name: datastoreFrameDuration
  type: double
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1acfbc4a9a625179ca26d3318027cdf856
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: double Normal.Realtime.Room.datastoreFrameDuration
- name: debugLogging
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1aebccc14cdf4d43f6fe62286bdb5bbc97
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool? Normal.Realtime.Room.debugLogging
- name: disconnected
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a3264b6193b2ef7ff432431242dcaf45c
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Room.disconnected
- name: realtime
  type: Realtime
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1ae3887a7f319c3747eee23f7f50ae0cef
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Realtime Normal.Realtime.Room.realtime
- name: time
  type: double
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1add4fa69184ee08a2b4e02ad25c101561
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: double Normal.Realtime.Room.time
class_events:
- name: connectionStateChanged
  type: ConnectionStateChanged
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a6c0d68bb9c55cbb7b3d3a4bae4f2b6f3
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: ConnectionStateChanged Normal.Realtime.Room.connectionStateChanged
- name: rpcMessageReceived
  type: RPCMessageReceived
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a1e2e78a981328e88df621e8f5954451d
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: RPCMessageReceived Normal.Realtime.Room.rpcMessageReceived
class_methods:
- name: Connect
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a5e79da38a329a16fba94512138c7337f
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Room.Connect
  return_type: void
  args_string: "(string roomName, string appKey, IModel roomModel=null)"
  arguments:
  - name: roomName
    type: string
  - name: appKey
    type: string
  - name: roomModel
    type: IModel
    default: 'null'
- name: ConnectionStateChanged
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1ae77ecfe613159ae061de38c4f63183fc
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Room.ConnectionStateChanged
  return_type: delegate void
  args_string: "(Room room, ConnectionState previousConnectionState, ConnectionState
    connectionState)"
  arguments:
  - name: room
    type: Room
  - name: previousConnectionState
    type: ConnectionState
  - name: connectionState
    type: ConnectionState
- name: CreateAudioInputStream
  type: AudioInputStream
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a6643ad5f79d27049350bb0bda7aa2196
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: AudioInputStream Normal.Realtime.Room.CreateAudioInputStream
  return_type: AudioInputStream
  args_string: "(bool voice, int sampleRate, int channels)"
  arguments:
  - name: voice
    type: bool
  - name: sampleRate
    type: int
  - name: channels
    type: int
- name: Disconnect
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a0219571dadd7a58979fe07db75c26654
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Room.Disconnect
  return_type: void
  args_string: "()"
  arguments: []
- name: GetAudioOutputStream
  type: AudioOutputStream
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a5d2cea487a40ca1e6e968716bb53230f
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: AudioOutputStream Normal.Realtime.Room.GetAudioOutputStream
  return_type: AudioOutputStream
  args_string: "(int clientID, int streamID)"
  arguments:
  - name: clientID
    type: int
  - name: streamID
    type: int
- name: GetNetworkStatistics
  type: NetworkInfo
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a68bc8187e80300b0c5f5814f7bad3261
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: NetworkInfo Normal.Realtime.Room.GetNetworkStatistics
  return_type: NetworkInfo
  args_string: "()"
  arguments: []
- name: Room
  type: ''
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a6cf428bd29151594758e4013d13982a7
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Normal.Realtime.Room.Room
  return_type: ''
  args_string: "()"
  arguments: []
- name: Room
  type: ''
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1afd0c461ad795d689375c2be393948ae1
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: Normal.Realtime.Room.Room
  return_type: ''
  args_string: "(SessionCapture sessionCapture)"
  arguments:
  - name: sessionCapture
    type: SessionCapture
- name: RPCMessageReceived
  type: delegate void
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1aa862bd9b915cd325e781a184980018e3
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: delegate void Normal.Realtime.Room.RPCMessageReceived
  return_type: delegate void
  args_string: "(Room room, byte[] data, bool reliable)"
  arguments:
  - name: room
    type: Room
  - name: data
    type: byte[]
  - name: reliable
    type: bool
- name: SendRPCMessage
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a05d6434260db7c95f979d544aff0160b
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Room.SendRPCMessage
  return_type: bool
  args_string: "(byte[] data, bool reliable)"
  arguments:
  - name: data
    type: byte[]
  - name: reliable
    type: bool
- name: SendRPCMessage
  type: bool
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a97cd147c745d99c4b41ee9eeb7b95400
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: bool Normal.Realtime.Room.SendRPCMessage
  return_type: bool
  args_string: "(byte[] data, int dataLength, bool reliable)"
  arguments:
  - name: data
    type: byte[]
  - name: dataLength
    type: int
  - name: reliable
    type: bool
- name: Tick
  type: void
  protection: public
  id: class_normal_1_1_realtime_1_1_room_1a8aacb733e109a08d851abe5e9ab4feb9
  brief_description: ''
  detailed_description: ''
  description: "\n\n"
  definition: void Normal.Realtime.Room.Tick
  return_type: void
  args_string: "(double deltaTime)"
  arguments:
  - name: deltaTime
    type: double
class_enums: []
---

# Room
