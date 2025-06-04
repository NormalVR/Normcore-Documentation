---
layout: docs
title: Disconnect Events
---
# Disconnect Events

When your client fails to connect to a room or gets disconnected, it can be useful to know why. Starting in Normcore v2.16.0, **Realtime** has a new C# event called `didDisconnectFromRoomWithEvent(Realtime realtime, DisconnectEvent disconnectEvent)`, and **Room** has a `disconnectEvent` property that stores the last disconnect event.

Whenever Normcore fails to connect or an active connection is disconnected, the `didDisconnectFromRoomWithEvent` event fires. This event includes a DisconnectEvent object with information about the disconnection.

All events are subclasses of the DisconnectEvent class. The DisconnectEvent class guarantees that all events will have basic properties like a human-readable message, while the subclasses provide more specific metadata for each type of disconnect.

## Handling Disconnect Events

When your client is disconnected from a room, you can use the `didDisconnectFromRoomWithEvent` event to be notified and use C# pattern matching to determine the specific type of disconnect event:

```csharp
public class DisconnectHandler : MonoBehaviour {
    private Realtime _realtime;

    void Awake() {
        _realtime = GetComponent<Realtime>();
    }

    void OnEnable() {
        _realtime.didDisconnectFromRoomWithEvent += DidDisconnect;
    }

    void OnDisable() {
        _realtime.didDisconnectFromRoomWithEvent -= DidDisconnect;
    }

    void DidDisconnect(Realtime realtime, DisconnectEvent disconnectEvent) {
        // Display an error using the human readable message
        DisplayError("Disconnected", disconnectEvent.message);

        // Log the full event for debugging
        Debug.Log(disconnectEvent.ToString());

        // Narrow down the type and handle the specific disconnect event
        if (disconnectEvent is DeviceIdleTimeout deviceIdleTimeout) {
            // The app was backgrounded until the connection timed out. Let's reconnect.
            _realtime.Connect(disconnectEvent.roomName, disconnectEvent.connectOptions);
        }
    }
}
```

## DisconnectEvent class

All events are subclasses of the **DisconnectEvent** class. The DisconnectEvent class guarantees that all events will have basic properties like a human-readable message, while the subclasses provide more specific metadata for each type of disconnect.

The **DisconnectEvent** class contains the following properties and methods:

- **roomName**: The name of the room from which the client was disconnected. You can use this to reconnect to the same room.
- **connectOptions**: A copy of the ConnectOptions struct that was used to connect to the room.
- **message**: A human-readable message that can be safely displayed to your users.
- **ToString()**: A non-human-readable representation of the event, useful for debugging or for getting support from the Normcore team.

## DisconnectEvent subclasses

Here is a list of all DisconnectEvent subclasses, along with a brief description of each and any properties specific to that subclass:

### NativePluginVersionMismatch
Occurs when the Normcore native plugin version doesn't match the Unity package version.

### RoomNameEmpty
Triggered when attempting to connect to a room with an empty room name.

### RoomNameInvalidLength
Occurs when a room name exceeds 512 characters.

- **length**: The length of the room name supplied.

### AppKeyEmpty
Triggered when attempting to connect with an empty app key.

### FailedToConnectToServer
Occurs when the client fails to connect to the server for various reasons during the initial connection. This class serves as a base class for all events that occur during the initial connection process.

### InitialDatastoreDeserializationFailed
Occurs when the client fails to deserialize the initial room state data.

- **analysis**: A string containing a detailed analysis of the datastore buffer that failed to deserialize.

### DisconnectCalledByLocalClient
Triggered when the local client explicitly calls disconnect.

### DeviceIdleTimeout
Occurs when the client hasn't processed incoming packets for more than 60 seconds.

### ConnectionFailedWithNetworkError
Network failure error that occurs during an active connection.

### DatastoreDeserializationFailed
Occurs when the client fails to deserialize an incoming room state update.

- **analysis**: A string containing a detailed analysis of the datastore buffer that failed to deserialize.

### AppDisabled
Triggered when attempting to connect with an app key that has been disabled.

- **reason**: A string containing the reason the app was disabled. Most commonly, this occurs when the app has hit its monthly usage limit.

### AppPaused
Occurs when attempting to connect with an app key that has been paused in the dashboard.

### AppInvalidEntitlement
Triggered when attempting to use a feature (like WebGL or custom room configurations) without the required plan.

- **appKey**: The app key that was used to connect.
- **feature**: The feature that the app is not entitled to use.
- **reason**: The reason the backend rejected the connection request.

### RoomServerOptionsInvalid
Occurs when the provided room server configuration options are invalid. Most commonly, this is due to an invalid room server configuration name.

- **validationErrors**: A `ReadonlyList<ValidationError>` of validation errors that occurred when parsing the room server options object:
  - **field**: The field that was invalid.
  - **error**: The error message that occurred when parsing the field.

### AppNotFound
Triggered when attempting to connect with an app key that doesn't exist.

### RateLimit
Occurs when too many requests are made in a short time period.

### WebhookRejectedRequest
Triggered when a configured [webhook](../normcore-private/webhooks) rejects the connection request.

- **webhookErrorMessage**: A string containing the error message that was returned by the webhook.
- **webhookErrorContext**: A string containing the context object returned by the webhook.

### InternalServerError
Occurs when there's an unexpected error on the server side.

- **details**: A string containing the specific details of the internal server error.

### BadRequest
Triggered when the client sends an invalid request to the server. In practice, this should be impossible to hit.

- **reason**: A string containing the reason the backend rejected the connection request.

### LegacyMatcherError
Occurs when a newer client connects to an older Normcore backend using the v1 error format.

### UnknownMatcherError
Triggered when an older client receives a new error type it doesn't recognize.

- **errorCode**; A string containing the error code that was returned by the server.
