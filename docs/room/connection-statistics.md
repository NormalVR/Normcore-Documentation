---
layout: docs
title: Connection Statistics
---
# Connection Statistics

The connection statistics API provides real-time insights into the network performance of your Normcore connection. Use this API to monitor latency, bandwidth usage, and packet delivery across different communication channels.

This API does not introduce additional overhead and can be used at runtime in your builds to monitor connection quality. We recommend using this API to:

* **Show network stats in-game:** Display connection quality indicators to users.
* **Debug networking connections in the field:** Record connection quality info on a specific user's device to debug issues with their connection.
* **Quality monitoring:** Record connection quality stats to analytics to ensure updates don't introduce bugs in connection quality.
* **Improve matchmaking:** Build a profile on a user's live connection to a game. Use this info later on to match players with high quality connections together.

## Using the API

If you're using the [Realtime API](../realtime/readme.md), you can access connection statistics through the `realtime.room` property:

```csharp
Realtime realtime = GetComponent<Realtime>();
ConnectionStatistics? stats = realtime.room.GetConnectionStatistics();

// Connection stats will be null until the client is connected and the first batch of statistics has been collected.
if (stats is ConnectionStatistics s) {
    float ping = s.connection.ping;
    float receiveRate = s.channel.receiveRate;
    Debug.Log($"Ping: {ping} ms, Receive Rate: {receiveRate / 1000f} kB/s");
}
```

:::warning
The `realtime.room` property will be null until a connection has been started and **Realtime** can replace the `room` instance when reconnecting. It's recommended that you always use `realtime.room` and do not store a reference to `room` directly to avoid accidentally referencing a stale room instance.
:::

## Channel filtering

By default, `GetConnectionStatistics()` returns statistics aggregated across all data channels. You can filter statistics to specific channels using the `ChannelFlags` enum:

```csharp
// Get statistics for reliable channels only
ConnectionStatistics? reliableStats = realtime.room.GetConnectionStatistics(ChannelFlags.Reliable);

// Get statistics for datastore channels only
ConnectionStatistics? datastoreStats = realtime.room.GetConnectionStatistics(
    ChannelFlags.DatastoreReliable | ChannelFlags.DatastoreUnreliable
);

// Get statistics for all channels (default)
ConnectionStatistics? allStats = realtime.room.GetConnectionStatistics(ChannelFlags.All);
```

The available channel flags are:

* `All` - All channels (default)
* `Reliable` - All reliable channels combined
* `Unreliable` - All unreliable channels combined
* `AudioReliable` / `AudioUnreliable` - Audio channels
* `DatastoreReliable` / `DatastoreUnreliable` - Datastore channels
* `RPCReliable` / `RPCUnreliable` - RPC channels
* `ServerReliable` / `ServerUnreliable` - Server metadata channels

## Connection metrics

The `connection` property provides overall connection statistics that apply across all channels:

```csharp
ConnectionStatistics s = stats.Value;

// Ping: The round-trip time in milliseconds. This is the average ping time for
// the connection, including server message processing time.
float ping = s.connection.ping;

// Packet counts: The total number of packets sent to and received from the
// server since the connection was established.
long sentPackets = s.connection.sentPackets;
long receivedPackets = s.connection.receivedPackets;
```

## Channel metrics

The `channel` property provides statistics for the subset of channels specified when calling `GetConnectionStatistics()`. If no channels are specified, it aggregates statistics across all channels.

```csharp
ConnectionStatistics s = stats.Value;

// Sent data: Track outgoing data to the server
long  sentMessages = s.channel.sentMessages;         // Total messages sent
long  sentBytes    = s.channel.sentBytes;            // Total bytes sent
float sendRate     = s.channel.sendRate;             // Bytes per second over the last second

// Received data: Track incoming data from the server
long  receivedMessages = s.channel.receivedMessages; // Total messages received
long  receivedBytes    = s.channel.receivedBytes;    // Total bytes received
float receiveRate      = s.channel.receiveRate;      // Bytes per second over the last second

// Jitter: The average variation in network transit time for messages received
// from the server, measured in milliseconds. Lower jitter values indicate more
// consistent network performance.
float jitter = s.channel.receiveJitter;
```

## Display Connection Statistics

The code snippet below outlines how to use the Connection Statistics API to display the current user's stats in-game:

```csharp
using UnityEngine;
using UnityEngine.UI;
using Normal.Realtime;

public class NetworkDiagnostics : MonoBehaviour {
    [SerializeField] private Realtime _realtime;
    [SerializeField] private Text _connectionStatsText;

    private void Update() {
        if (_realtime == null || _realtime.room == null)
            return;

        ConnectionStatistics? stats = _realtime.room.GetConnectionStatistics();
        if (stats is ConnectionStatistics s) {
            _connectionStatsText.text =
                $"Ping: {s.connection.ping:0} ms\n" +
                $"Send Rate: {s.channel.sendRate / 1000f:0.0} kB/s\n" +
                $"Receive Rate: {s.channel.receiveRate / 1000f:0.0} kB/s\n" +
                $"Jitter: {s.channel.receiveJitter:0.0} ms\n" +
                $"Packets Sent: {s.connection.sentPackets}\n" +
                $"Packets Received: {s.connection.receivedPackets}";
        } else {
            _connectionStatsText.text = "Connecting...";
        }
    }
}
```
