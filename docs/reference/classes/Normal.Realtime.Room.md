---
title: Room
layout: Reference
category: API Reference
class_name: Room
class_summary: Represents a room on the server. Manages the connection to the server and the datastore.
class_remarks: If you're using Realtime this class should rarely be used directly. Realtime will manage the Room object and it exposes equivalent methods for all Room operations.
class_members:
- name: Static Methods
  members:
  - name: GetRegionsListAsync
    definition: Task<GetRegionsListResponse> GetRegionsListAsync(GetRegionsListOptions options, CancellationToken cancellationToken = null)
    summary: Gets the server regions available to host rooms for a Normcore app.
    returns: A task that represents the asynchronous operation. The task result contains the regions returned by the matcher.
    parameters:
    - name: options
      description: The parameters used to configure the request.
    - name: cancellationToken
      description: A cancellation token that can be used to cancel the asynchronous operation.
- name: Events
  members:
  - name: connectionStateChanged
    definition: event ConnectionStateChanged connectionStateChanged
    summary: Invoked when the connection state changes. When the state changes to the [Normal.Realtime.Room.ConnectionState.Error](Normal.Realtime.Room.ConnectionState#error) and [Normal.Realtime.Room.ConnectionState.Disconnected](Normal.Realtime.Room.ConnectionState#disconnected) states the subscriber can access the [Normal.Realtime.Room.disconnectEvent](Normal.Realtime.Room#disconnectevent) property to determine the reason.
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
    summary: The name of the room.
  - name: quickmatchRoom
    definition: bool quickmatchRoom { get; }
    summary: Whether the room was created using the Quickmatch backend.
  - name: quickmatchRoomGroupName
    definition: string quickmatchRoomGroupName { get; }
    summary: The name of the room group this room belongs to, if it is a Quickmatch room.
  - name: quickmatchRoomCode
    definition: string quickmatchRoomCode { get; }
    summary: A short code which identifies the room in the room group, if it is a Quickmatch room.
  - name: quickmatchRoomCapacity
    definition: int? quickmatchRoomCapacity { get; }
    summary: The number of clients that can be simultaneously connected to the room, if it is a Quickmatch room.
  - name: region
    definition: RegionMetadata? region { get; }
    summary: The server region the room is hosted in.
    remarks: This will be null until connected to the server.
  - name: clientID
    definition: int clientID { get; }
    summary: The ID of the local client on the server.
    remarks: This will be -1 until connected to the server.
  - name: time
    definition: double time { get; }
    summary: The server time on this frame in unix epoch time format (seconds since 00:00:00 UTC on January 1, 1970).
    remarks: This value can be used to drive animations and is backed by a monotonic clock with sub-millisecond precision. This value has latency from the server removed.
  - name: dateTime
    definition: DateTime? dateTime { get; }
    summary: The server date and time on this frame (UTC).
    remarks: This value can be used to drive day/night cycles, for example. It is directly derived from . Will be null when the room is not yet in the state.
  - name: ping
    definition: float ping { get; }
    summary: The local client's last known ping with the server in milliseconds.
  - name: connectionState
    definition: ConnectionState connectionState { get; }
    summary: The connection state of the room.
  - name: disconnectEvent
    definition: DisconnectEvent disconnectEvent { get; }
    summary: The disconnect data for the last disconnect event. Access only within the [Normal.Realtime.Room.connectionStateChanged](Normal.Realtime.Room#connectionstatechanged) callback for [Normal.Realtime.Room.ConnectionState.Error](Normal.Realtime.Room.ConnectionState#error) and [Normal.Realtime.Room.ConnectionState.Disconnected](Normal.Realtime.Room.ConnectionState#disconnected).
  - name: connecting
    definition: bool connecting { get; }
    summary: True if the room is connecting to the server.
  - name: connected
    definition: bool connected { get; }
    summary: True if the room is connected to the server.
  - name: disconnected
    definition: bool disconnected { get; }
    summary: True if the room is disconnected or in an error state.
  - name: offlineMode
    definition: bool offlineMode { get; }
    summary: True if the client was started in offline mode with no networking capabilities.
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
    definition: void Connect(string roomName, ConnectOptions connectOptions)
    summary: Connect to a room.
    parameters:
    - name: roomName
      description: The name of the room to connect to. All clients that connect to the same room name will end up on the same room server. Must be less than 512 characters in length.
    - name: connectOptions
      description: An optional  struct that can be used to set the appKey, matcherURL, roomModel, and more.
  - name: ConnectDirectlyToQuickmatchRoom
    definition: void ConnectDirectlyToQuickmatchRoom(string roomGroupName, string roomCode, ConnectOptions connectOptions)
    summary: Connect to an existing Quickmatch room.
    parameters:
    - name: roomGroupName
      description: The room group the room belongs to.
    - name: roomCode
      description: The short code identifying which room in the room group to connect to.
    - name: connectOptions
      description: An optional  struct that can be used to set the appKey, matcherURL, roomModel, and more.
  - name: ConnectToNextAvailableQuickmatchRoom
    definition: void ConnectToNextAvailableQuickmatchRoom(string roomGroupName, int capacity, ConnectOptions connectOptions)
    summary: Connect to a room using Quickmatch.
    remarks: The client will connect to a room in the Quickmatch room group that has remaining capacity. If all rooms in the room group are full, the client connects to a new room added to the room group. When searching for remaining capacity, the capacity specified when each room was originally added is used. Therefore, if the client is connected to an existing room, the capacity of the room may be different from the requested capacity. To reconnect to a Quickmatch room, store the  after the room is first connected and use ConnectDirectlyToQuickmatchRoom() with that room code later. However, reconnecting is not guaranteed, as the room may be filled with new clients before the reconnect is initiated.
    parameters:
    - name: roomGroupName
      description: The room group to search for rooms in. Must be 1-32 characters in length, start with a letter, and end with an alphanumeric character. Hyphens and underscores are permitted.
    - name: capacity
      description: If all existing Quickmatch rooms in the room group are full, or none exist yet, this specifies the number of clients that can be simultaneously connected to the new room. Must be larger than 1 and no greater than 500.
    - name: connectOptions
      description: An optional  struct that can be used to set the appKey, matcherURL, roomModel, and more.
  - name: Disconnect
    definition: void Disconnect()
    summary: Disconnect from the room.
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
  - name: GetConnectionStatistics
    definition: ConnectionStatistics? GetConnectionStatistics(ChannelFlags channels = All)
    summary: Gets the connection statistics for the room.
    remarks: This can be used to monitor the quality of the connection to the server. Connection statistics are not available in WebGL builds.
    returns: The connection statistics for the specified channels. Will be  until connected and the first batch of statistics is collected, or when in a WebGL build.
    parameters:
    - name: channels
      description: The channel(s) to get the statistics for. The resulting channel statistics will be the total across all the selected channels.

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
