---
layout: docs
title: Timers + Synchronized Playback
---
# Recipe: Timers + Synchronized Playback

A common need in Normcore is to synchronize a timeline across all clients for music playback or animation playback. A naive approach would be to choose a main client and have it send updates to all clients to update their timelines. This uses a lot of bandwidth, it can result in choppy playback for the other clients, and playback isn't guaranteed to be in sync. It's also a system that breaks if the main client leaves.

In Normcore, all clients are able to access a synchronized clock to drive animation. This clock is set to match the room server's clock exactly with no added latency.

Once connected a room, the room time is available via the `realtime.room.time` property.

To demonstate how to use it, let's put together a recipe for a stopwatch:

Start with a model to hold the room time when the watch was started. Put this in a file called **StopwatchModel.cs**:

```csharp
using Normal.Realtime;
using Normal.Realtime.Serialization;

[RealtimeModel]
public class StopwatchModel {
    [RealtimeProperty(1, true)] private double _startTime;
}
```

After you compile the model, create a new class called **Stopwatch**:

```csharp
using Normal.Realtime;

public class Stopwatch : RealtimeComponent<StopwatchModel> {
    public float time {
        get {
            // Return 0 if we're not connected to the room yet.
            if (model == null) return 0.0f;

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
```

And that's it!

Add it to a fresh GameObject and call `stopwatch.StartStopwatch()` to start the clock. And the current time can be queried anywhere in your application via the `stopwatch.time` property.

Let's create a custom editor component called **StopwatchEditor** to test it out:

```csharp
using System;
using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(Stopwatch))]
public class StopwatchEditor : Editor {
    public override void OnInspectorGUI() {
        Stopwatch stopwatch = (Stopwatch)target;

        // Only enable in play mode
        EditorGUI.BeginDisabledGroup(Application.isPlaying == false);

        // Show the time
        TimeSpan timeSpan = TimeSpan.FromSeconds(stopwatch.time);
        EditorGUILayout.LabelField($"Time: {timeSpan:mm\\:ss\\.ff}");

        // Show a button to start the timer
        if (GUILayout.Button("Start"))
            stopwatch.StartStopwatch();

        EditorGUI.EndDisabledGroup();

        // Refresh the inspector while in play mode
        if (Application.isPlaying) EditorUtility.SetDirty(target);
    }
}
```

Once implemented, we can make a copy of our project and test it in two instances of the Unity editor:

![](./timers-and-synchronized-playback/stopwatch-test.mp4)

Notice how we can leave and rejoin the room server and the stopwatch stays perfectly in sync between both clients.

If you're implementing synchronized music or animation playback, you can use this same technique to synchronize your timeline perfectly between all clients.

Until next time : )
