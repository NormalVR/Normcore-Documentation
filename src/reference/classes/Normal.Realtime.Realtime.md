---
title: Realtime
layout: Reference
category: API Reference
class_name: Realtime
class_summary: Realtime manages a Room object and synchronizes its datastore to RealtimeViews and RealtimeComponents in the scene.
class_remarks: Each Realtime instance represents a single room connection. If you would like to connect to multiple rooms simultaneously, use multiple instances of Realtime on different GameObjects.
class_members:
- name: Static Properties
  members:
  - name: instances
    definition: IReadOnlyCollection<Realtime> instances { get; }
    summary: All of the Realtime instances currently loaded in scenes.
- name: Static Methods
  members:
  - name: Instantiate
    definition: GameObject Instantiate(string prefabName, InstantiateOptions? options)
    summary: Instantiates a realtime prefab in the scene on all clients.
    returns: The fully instantiated game object. All RealtimeViews and RealtimeComponents, along with their models will be initialized and ready for use immediately.
    parameters:
    - name: prefabName
      description: The name of the prefab to instantiate. The prefab must contain a RealtimeView on the root and it must live within a Resources folder or Unity will not be able to locate it on other clients.
    - name: options
      description: Used to override the default ownership / lifetime settings for the object or to use a specific instance of Realtime when multiple instances are available in the scene.
  - name: Instantiate
    definition: GameObject Instantiate(string prefabName, Vector3 position, Quaternion rotation, InstantiateOptions? options)
    summary: Instantiates a realtime prefab in the scene on all clients.
    returns: The fully instantiated game object. All RealtimeViews and RealtimeComponents, along with their models will be initialized and ready for use immediately.
    parameters:
    - name: prefabName
      description: The name of the prefab to instantiate. The prefab must contain a RealtimeView on the root and it must live within a Resources folder or Unity will not be able to locate it on other clients.
    - name: options
      description: Used to override the default ownership / lifetime settings for the object or to use a specific instance of Realtime when multiple instances are available in the scene.
  - name: Destroy
    definition: void Destroy(GameObject gameObject)
    summary: Destroys a realtime prefab on all clients.
    remarks: This method must be used instead of GameObject.Destroy(). It can only be used with GameObjects that were instantiated with Realtime.Instantiate().
    parameters:
    - name: gameObject
      description: The game object to destroy.
  - name: Destroy
    definition: void Destroy(RealtimeView realtimeView)
    summary: Destroys a realtime prefab on all clients.
    remarks: This method must be used instead of GameObject.Destroy(). It can only be used with GameObjects that were instantiated with Realtime.Instantiate().
    parameters:
    - name: gameObject
      description: The game object to destroy.
- name: Events
  members:
  - name: didConnectToRoom
    definition: event RealtimeEvent didConnectToRoom
    summary: An event that is fired when Realtime is connected to a room and all realtime prefabs and realtime views in the scene have been successfully connected to the datastore.
  - name: didDisconnectFromRoom
    definition: event RealtimeEvent didDisconnectFromRoom
    summary: An event that is fired when Realtime is disconnected from a room.
- name: Properties
  members:
  - name: roomToJoinOnStart
    definition: string roomToJoinOnStart { get; }
    summary: The name of the room to join on start if one was configured in the inspector.
    remarks: This setting can only be configured in the editor inspector. If you'd like to change this name at runtime, disable join room on start, and use the Connect() method on Realtime instead.
  - name: joinRoomOnStart
    definition: bool joinRoomOnStart { get; }
    summary: A boolean indicating whether Realtime will try to automatically connect on Start().
    remarks: This setting can only be configured in the editor inspector. If you'd like to change this name at runtime, disable join room on start, and use the Connect() method on Realtime instead.
  - name: normcoreAppSettings
    definition: NormcoreAppSettings normcoreAppSettings { get; set; }
    summary: The app settings object reference used when Realtime connects. Changing this while the Realtime instance is connected will not have any effect until the next time it connects.
  - name: room
    definition: Room room { get; set; }
  - name: connecting
    definition: bool connecting { get; }
    summary: True if this Realtime instance is in the process of connecting or initializing its views.
  - name: connected
    definition: bool connected { get; }
    summary: True if this Realtime instance is connected and its views are initialized.
  - name: disconnected
    definition: bool disconnected { get; }
    summary: True if this Realtime instance is not connected or in an error state.
  - name: clientID
    definition: int clientID { get; }
    summary: The local clientID of this Realtime instance.
- name: Methods
  members:
  - name: Connect
    definition: void Connect(string roomName, RealtimeModel roomModel = null)
    summary: Connect to a room.
    parameters:
    - name: roomName
      description: The name of the room to connect to. All clients that connect to the same room name will end up on the same room server.
    - name: roomModel
      description: An optional RealtimeModel to use as the root model in the datastore.
  - name: Disconnect
    definition: void Disconnect()
    summary: Disconnect from a room.

---
