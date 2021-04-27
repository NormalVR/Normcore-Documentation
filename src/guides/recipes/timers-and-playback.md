---
layout: docs
title: Timers + Playback
---
# Recipe: Timers + Playback

A common need in Normcore is to synchronize a timer or playback between all clients. Luckily, Normcore includes a local clock that's synchronized across all clients. This clock is set to match the server's clock exactly with no latency.

Once connected a room, the room time is available via the realtime.room.time property.

Therefore, we can create a synchronized timer RealtimeComponent like so:

// TODO: Clean-up and test
```csharp
public Stopwatch : RealtimeComponent<StopwatchModel> {
    public float time {
      get {
        // Make sure the stopwatch is running
        if (model.startTime == 0.0) return 0.0f;

        // Calculate how much time has passed
        return (float)(realtime.room.time - model.startTime);
      }
    }

    public void StartStopwatch() {
      model.startTime = realtime.room.time;
    }
}

[RealtimeModel]
public StopwatchModel {
    [RealtimeProperty(1, true)] private double _startTime;
}
```

That's it! This technique can also be used to synchronize things like video and audio playback.

Until next time : )
