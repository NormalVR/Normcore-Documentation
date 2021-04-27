---
layout: docs
title: RealtimeComponent
---
# RealtimeComponent

Realtime Components are the most common way to synchronize data in your application. A **RealtimeComponent** script is responsible for keeping a specific part of your scene in sync. The most common built-in component is **RealtimeTransform**, which synchronizes the transform of a GameObject.

The flow of data looks something like this:

![](./synchronizing-custom-data/data-flow.svg "The flow of data in a Normcore application")

A RealtimeComponent keeps a game object in sync with its corresponding model in the datastore. When the game object changes, it updates the model, and when the model changes, it updates the game object to match. This means that in the diagram above, when Player 1 moves a game object, RealtimeTransform can set the new position on its model in the datastore. When Player 2 gets a notification that the model changed, it can update the position of the matching game object in its scene.

## Model
Every RealtimeComponent has a model that holds all state that needs to be synchronized to the scene. When an object is first created, Realtime will create a fresh RealtimeModel for each RealtimeComponent to store data in (TODO: Talk about model subclasses?). If the object already exists on the server, the model will be prepopulated with the current state before it is given to the RealtimeComponent.

### When using views and components in a scene, views and components follow this life-cycle:
1. Awake() + Start() both run. RealtimeView registers with Realtime.
2. Realtime creates an empty model for every view / component and sets the model on each view / component, triggering a OnRealtimeModelReplaced() call.
3. When Realtime connects to a room, if an object in the scene doesn't exist, its model will be inserted into the datastore.
  - However, if the object already exists, Realtime will create a new RealtimeModel, populate it with the state from the server, and replace the model again triggering a OnRealtimeModelReplaced() call.
4. Realtime.connected == true and Realtime.didConnectToRoom fires.

### When using views and components on a prefab, they follow this cycle:
1. Realtime.Instantiate() is called with the name of a prefab.
2. The prefab is instantiated on all clients.
3. Awake() is run by Unity.
4. Realtime creates a model, populates it with any state, and sets it, triggering an OnRealtimeModelReplaced() call.
5. Start() is run by Unity.

### Using a model
Once your model is set, you can use it!
- Look at the synchronizing custom data for a more thorough walkthrough of how to write a custom RealtimeComponent

#### Setting default values
If you'd like to set default values that are unique for each instantiation when freshly instantiating an object, we generally recommend having the code that called Realtime.Instantiate() set initial values on the RealtimeComponent. However, another way you can do it is using the RealtimeModel.isFreshModel boolean:

```csharp

void OnRealtimeModelReplaced(blah) {
  if (currentModel != null) {
    if (currentModel.isFreshModel) {
      // Set initial values here
      currentModel.startPosition = transform.localPosition;
    }

    // Subscribe to events
  }

  if (previousModel != null) {
    // Unsubscribe from events
  }
}
```


