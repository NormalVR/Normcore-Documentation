---
layout: docs
title: Quickmatch
---
import quickmatchOverview from './quickmatch/quickmatch-overview.mp4'

# Quickmatch

<video width="100%" autoPlay playsInline loop muted><source src={quickmatchOverview} /></video>

Quickmatch lets you automatically connect players to the next available room. Quickmatch scans available rooms and if all rooms are full, it creates a new one.

## How it works

When a player connects using Quickmatch, **Normcore places them in a room with the most players that still has space available.** If all rooms are full (or none exist), Normcore creates a new room.

Quickmatch uses a **room group** to organize rooms. A room group is a named collection of rooms, like "lobby" or "game-2v2". 

Quickmatch prioritizes filling rooms to capacity before creating new ones. When multiple rooms have space, Quickmatch joins the room with the most players. If multiple rooms match, it picks the one that was created most recently. This means your players always encounter lobbies with as many players as possible, rooms fill up efficiently, and older empty rooms cycle out after peak hours.

## Join Room On Start

![](./quickmatch/quickmatch-inspector.png)

The Realtime component's "Join Room On Start" setting now includes a **Next Available Room (Quickmatch)** mode:

Configure the **Room Group Name** and **Room Capacity**, and Normcore will automatically send players to the next available room when the scene loads.

## Using the API

### Join Next Available Room

Similar to `Connect()`, **Realtime** now ships with a `ConnectToNextAvailableQuickmatchRoom()` method:

```csharp
using UnityEngine;
using Normal.Realtime;

public class QuickmatchExample : MonoBehaviour {
    [SerializeField] private Realtime _realtime;

    public void JoinSocialLobby() {
        // Join the next available room in the "lobby" room group.
        // If no room is available, create one with a capacity of 8 players.
        _realtime.ConnectToNextAvailableQuickmatchRoom(roomGroupName: "lobby", capacity: 8);
    }
}
```

The `ConnectToNextAvailableQuickmatchRoom` method has two required fields:

- **`roomGroupName`**: The name of the room group. Must be 1-32 characters, start with a letter, and contain only letters, numbers, hyphens, and underscores.
- **`capacity`**: The maximum number of players per room (1-500). Used when creating new rooms.

### Direct Join

Quickmatch rooms function as regular Normcore rooms. After connecting, the room name is available via `Realtime.roomName`. Players can share this name with friends, who can join directly using the standard `Connect()` method:

```csharp
// Player A joins via Quickmatch
_realtime.ConnectToNextAvailableQuickmatchRoom(options);

// Later, get the room name to share with friends
string roomName = _realtime.roomName;

// Player B joins directly using the room name
_realtime.Connect(roomName);
```

As long as the room has capacity, anyone can join. However, if the room is full, or all players have left and the room no longer exists, you'll want to use the corresponding Quickmatch event to handle that edge case:

```csharp
_realtime.didDisconnectFromRoomWithEvent += (realtime, disconnectEvent) => {
    if (disconnectEvent is QuickmatchRoomFull) {
        Debug.Log("Quickmatch room is full.");
    } else if (disconnectEvent is QuickmatchRoomNotFound) {
        Debug.Log("Quickmatch room not found.");
    }
};
```
