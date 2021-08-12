---
layout: docs
title: RPC Events
---
# Recipe: RPC Events

// TODO: Note about how RPCs suck ass and a link to the RPC page if we have one
- If you're using them to sync state, you're going to run into issues, use a model!
- They can introduce bugs where clients that join late can't be brought up to speed
  - Some services buffer the last X messages, but this makes debugging even harder because you now have a bug that only appears when an important message was more than 512 messages old...

That said, they can be useful for one-shot effects, or things that don't require a client that joins late to be aware of them or the state they alter in your application.

This recipe shows how to use a model to send an RPC-like event message that can be fired by anyone in the room.

For this example, let's say we want to trigger a celebration particle system effect on all clients. We'll want to send an RPC-like message that includes the sender ID, position, and scale of the effect. Typically I'd recommend instantiating a particle system prefab, but if you *absolutely have to* use an RPC-like structure, here's how you can do it:

Let's start with the [template project](./). Open up the scene located in the `_RPC Events Recipe` folder. This is an empty scene with a prebuilt particle system called **Explosion Particle System**. We can test it out by entering play mode and then clicking Emit in the inspector:

![](./rpc-events/particle-system-test.mp4)

Now that we have this working, let's network it. We'll start by creating a model for our explosion event. This model will hold all of the values we'd typically send in an RPC message and an integer that we can increment every time we want to trigger an event:

```csharp
[RealtimeModel]
public class ExplosionEventModel {
    [RealtimeProperty(1, true)] private int     _trigger;
    [RealtimeProperty(2, true)] private int     _senderID;
    [RealtimeProperty(3, true)] private Vector3 _position;
    [RealtimeProperty(4, true)] private float   _scale;
}
```

This model includes the trigger integer that we'll use to trigger the event, the clientID that sent the event, the position to emit particles from, and the scale of the explosion.

Go into the Unity editor and compile this model so we can start using the public properties on it. Once it's compiled, we'll add a method and C# event to let us fire the event and listen for when it's fired:

```csharp{8-25}
[RealtimeModel]
public partial class ExplosionEventModel {
    [RealtimeProperty(1, true)] private int     _trigger;
    [RealtimeProperty(2, true)] private int     _senderID;
    [RealtimeProperty(3, true)] private Vector3 _position;
    [RealtimeProperty(4, true)] private float   _scale;

    // Used to fire an event on all clients
    public void FireEvent(int senderID, Vector3 position, float scale) {
        this.trigger++;
        this.senderID = senderID;
        this.position = position;
        this.scale    = scale;
    }

    // An event that consumers of this model can subscribe to in order to respond to the event
    public delegate void EventHandler(int senderID, Vector3 position, float scale);
    public event EventHandler eventDidFire;

    // A RealtimeCallback method that fires whenever we read any values from the server
    [RealtimeCallback(RealtimeModelEvent.OnDidRead)]
    private void DidRead() {
        if (eventDidFire != null && trigger != 0)
            eventDidFire(senderID, position, scale);
    }
}
```

**Compile your model again** so that the `[RealtimeCallback]` functionality is added by the model compiler.

Now we have a model with a `FireEvent()` method and a C# `eventDidFire` event that will be invoked when any client fires an event.

Let's create a **RealtimeComponent** that uses this to call `Emit()` on the particle system whenever the event fires:

```csharp
using UnityEngine;
using Normal.Realtime;

public class ExplosionEvent : RealtimeComponent<ExplosionEventModel> {
    [SerializeField]
    private ExplosionParticleSystem _explosionParticleSystem = default;

    // When we connect to a room server, we'll be given an instance of our model to work with.
    protected override void OnRealtimeModelReplaced(ExplosionEventModel previousModel, ExplosionEventModel currentModel) {
        if (previousModel != null) {
            // Unsubscribe from events on the old model.
            previousModel.eventDidFire -= EventDidFire;
        }
        if (currentModel != null) {
            // Subscribe to events on the new model
            currentModel.eventDidFire += EventDidFire;
        }
    }

    // A public method we can use to fire the event
    public void Emit(Vector3 position, float scale) {
        model.FireEvent(realtime.clientID, transform.position, scale);
    }

    // Called whenever our event fires
    private void EventDidFire(int senderID, Vector3 position, float scale) {
        // Tell the particle system to trigger an explosion in response to the event
        _explosionParticleSystem.Emit(position, scale);
    }
}
```

That's it! To test it, let's create a script that we can use to fire the event:

```csharp
using UnityEngine;

public class ExplosionEventTest : MonoBehaviour  {
    // Debug UI so we can trigger an event from the Unity editor.
    [SerializeField] private bool _emit;
    [SerializeField, Range(0.1f, 1.0f)] private float _scale = 0.3f;

    private void Update() {
        // Check if the emit button has been pressed.
        if (_emit) {
            // Fire an event at the current position with the scale value set in Unity.
            GetComponent<ExplosionEvent>().Emit(transform.position, _scale);

            _emit = false;
        }
    }
}
```

Create an empty game object, add both scripts, wire up the particle system reference, and it's ready to use. Go ahead and export a standalone build and run it next to the editor:

![](./rpc-events/rpc-events-test.mp4)

That's it! Despite having a nice recipe for this, I still recommend avoiding this pattern if you can. Any state that is modified in response to an event like this can easily diverge between clients. There are circumstances where it can make sense, but in most cases it will lead to desyncs and bugs that are hard to test for and reproduce.
