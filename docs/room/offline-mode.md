---
layout: docs
title: Offline Mode
---
# Offline Mode

A Realtime or Room can be started in offline mode without connecting to a server or any networking capabilities.

It's useful for offline experiences like:
* Tutorial
* Practice against AI
* Interactive main menu

RealtimeComponents and other scripts that were developed for regular Normcore usage will function in this mode with no additional changes. This allows content and scripts to be re-used across online and offline experiences.

## Usage
When you connect using `Connect()` on either Realtime or Room, you can pass an optional `ConnectOptions` struct. This struct supports an optional `offlineMode` flag that will start an offline mode session when enabled:

```csharp
class ConnectionManager {
    [SerializeField]
    private Realtime _realtime;

    private void Start() {
        // Connect to "My Room" in offline mode
        _realtime.Connect("My Room", new Room.ConnectOptions {
            offlineMode = true
        });
    }
    
    private void Update {
        // Check if running in offline mode, ex for offline-specific logic
        if (_realtime.connected && _realtime.room.offlineMode) {
            Debug.Log($"Running in offline mode");
        }
    }
}
```

:::warning
Uncheck `Join Room on Start` on the `Realtime` component if you're going to manually call `Connect()` instead.
:::

## Details

All views and components are locally owned.

`Room.clientID` always returns `0`.

`Room.time` uses the system clock.

## Limitations

Connecting another client to the same room is not supported. Even when the same room name is specified no data is shared between the rooms/datastores.

## Lifetime

When an offline mode client disconnects the `Room` and `Datastore` are destroyed.

Custom persistence mechanisms (in-process or on disk) can be developed on top of existing Normcore API but do not come with offline mode out of the box.

## Serialization

:::warning
The serialization and deserialization mechanisms are skipped in offline mode. So related events (ex `RealtimeModelEvent.OnWillWrite`) will not be invoked.

User scripts may be affected in the rare case where they rely on serialization events to drive local simulation.
:::
