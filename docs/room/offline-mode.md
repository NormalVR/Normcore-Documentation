---
layout: docs
title: Offline Mode
---
# Offline Mode

Normcore supports connecting to an offline room which can be useful for singleplayer games, tutorials, and other experiences that don't require a connection to the internet.

RealtimeComponents and other scripts that were developed for online Normcore use will continue to function in this mode with no additional changes. This allows content and scripts to be re-used across online and offline experiences.

## Using offline mode
When using `Connect()` on **Realtime** or **Room**, you can pass an optional `ConnectOptions` struct, This struct supports an optional `offlineMode` boolean:


:::tip
Remember to uncheck "Join Room on Start" on the **Realtime** component if you're going to manually call `Connect()` !
:::
```csharp
class OfflineModeExample {
    [SerializeField]
    private Realtime _realtime;

    private void Start() {
        // Notify us when Realtime successfully connects to the room
        _realtime.didConnectToRoom += DidConnectToRoom;

        // Connect to "My Room" in offline mode
        _realtime.Connect("My Room", new Room.ConnectOptions {
            offlineMode = true
        });
    }
    
    private void DidConnectToRoom(Realtime realtime) {
        if (realtime.room.offlineMode) {
            Debug.Log($"Connected to room in offline mode!");
        }
    }
}
```

## Things to know

For the most part, all features in Normcore operate the same way as online mode. However, there are a few details that are different:

`Realtime.clientID` and `Room.clientID` will always return `0`.

`Realtime.roomTime` and `Room.time` will always return `0`.

### Limitations

It's not possible to have two local clients connect to the same offline room. If two instances of **Realtime** or **Room** connect to the same offline mode room name, they will have separate instances that do not share any data or state.

### Datastore

The datastore state of an offline room is cleared upon calling `Disconnect()`. Any data that needs to persist between sessions will need to be developed on top of the existing Normcore API.

### Serialization

The serialization and deserialization mechanisms are skipped in offline mode. Change events will still fire, but serialization events like `RealtimeModelEvent.OnWillWrite` will not be invoked. User scripts may be affected in the rare case where they rely on serialization events to drive local simulation.
