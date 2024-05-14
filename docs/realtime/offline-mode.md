---
layout: docs
title: Offline Mode
---
# Offline Mode

A [Realtime](../realtime/realtime) instance can be started in offline mode without connecting to a server or any networking capabilities.

It's useful for offline experiences like:
* Tutorial
* Practice against AI
* Interactive main menu

RealtimeComponents and other scripts that were developed for regular Normcore usage will function in this mode with no additional changes. This allows content and scripts to be re-used across online and offline experiences.

## Usage
When you connect to a room server using either `Connect()` on Realtime or Room, you can pass an optional `ConnectOptions` struct. This struct supports an optional `offlineMode` flag that will start an offline mode session when enabled:

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
}
```

`realtime.room.offlineMode` can be later queried to run offline-specific logic.

:::warning
Uncheck `Join Room on Start` on the `Realtime` component if you're going to manually call `Connect()` instead.
:::

## Details

All views and components are locally owned.

`Room.clientID` always returns `0`.

`Room.time` uses the system clock.

## Limitations

A new room and datastore pair are created for each offline mode client.

Connecting another client to the same room is not supported. A separate room/datastore is created even if the same room name is specified.

## Lifetime

When an offline mode client disconnects the `Room` and `Datastore` are destroyed. Custom persistence mechanisms (in-process or on disk) can be developed on top of existing Normcore API but do not come with offline mode out of the box.

## Serialization

:::warning
The serialization and deserialization mechanisms are skipped in offline mode. So related events (ex `RealtimeModelEvent.OnWillWrite`) will not be invoked.

User scripts may be affected in the rare case where they rely on serialization events to drive local simulation.
:::
