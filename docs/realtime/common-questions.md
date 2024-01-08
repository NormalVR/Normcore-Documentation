---
layout: docs
title: Common Questions
---
# Common Questions

## RealtimeView
#### Can I reparent a game object with a RealtimeView or RealtimeComponent on it?
We generally recommend that you don't. Normcore will not synchronize parent relationships between objects. And if the new parent gets destroyed, it will take the RealtimeView and its components with it. This can result in desyncs between your clients.

*Tip: If you need this functionality, check out some of the suggestions at the bottom of the [RealtimeTransform](./realtimetransform#extra-notes) page.*

#### Can I disable RealtimeView?
No. Scene RealtimeViews register with Realtime in `Start()`. If they are disabled, they will never register: Realtime will neither initialize them nor connect them to the datastore.

Instead, you can use a custom RealtimeComponent to enable/disable child game objects, scripts, or renderers directly.

#### Is there a UUID that I can use to find a RealtimeView reference at runtime?
No. RealtimeViews that are in the scene sometimes have a Scene View UUID, which is used to synchronize that same view when the scene is loaded on multiple clients, but Normcore doesn’t use UUIDs to synchronize views internally. 

If you’d like to introduce this functionality, create a RealtimeComponent that assigns a UUID in `OnRealtimeModelReplaced()` when getting a fresh model. This will ensure that the component has a unique UUID and that existing models don’t have their UUIDs reassigned by new clients.

#### Why do I get the error “This view doesn't have a model yet. Wait until the model is present before interacting with the ownership,” when interacting with RealtimeView? 

If you’re dealing with a prefab, all views and components are initialized with their models. They will be ready to work with by the time `Start()` is called on any script on the prefab. `Awake()` must be called by Unity before Normcore can initialize any components on the game object. If you’re dealing with a RealtimeView that exists in a scene file, you’ll need to wait until `realtime.connected == true`, or the `didConnectToRoom` event has fired. RealtimeView uses `Start()` internally to register with Realtime, and it’s possible your start method ran before `RealtimeView.Start()`.

## RealtimeComponents
#### Can I add RealtimeComponents at runtime?
No. Normcore uses metadata on the prefab in order to connect RealtimeComponents on all clients.

#### Why would a RealtimeComponent's model remain null?
The model is set by Realtime when you connect to the room. This will only fail if Realtime doesn't receive a reference to the RealtimeComponent. This can happen if:

1. The model was instantiated with Unity’s Instantiate API (`Instantiate()` or `GameObject.Instantiate()`) instead of Normcore’s `Realtime.Instantiate()`. If you're passing a prefab reference instead of a prefab string, then you're using the wrong one. Make sure to call `Realtime.Instantiate(prefabName)`.

2. The prefab in Unity is corrupt, so the RealtimeComponent does not appear in the component list on the RealtimeView, and models are not created for those components.

3. A RealtimeView parent/child relationship is not saved correctly by Unity. In these cases, the RealtimeView child doesn't appear in the list of child views on the parent RealtimeView inspector.

4. You're using `RealtimeComponent` (rather than `RealtimeComponent<ModelType>`) and the model setter hasn’t been correctly implemented. This can be because the model setter didn’t save the value of the model or because it was not named model.

5. You're checking the model property inside of `Awake()` (or, for scene RealtimeViews, inside of `Start()`). To fix this:
* If using `RealtimeComponent<ModelType>`, move the initialization logic inside of your `OnRealtimeModelReplaced()` method.
* If using the legacy `RealtimeComponent` class, move the initialization logic into your model setter.

#### I’m trying to store my player’s health in a RealtimeComponent on my avatar. How can I let other players modify this values or others?
RealtimeAvatar sets the ownership of the root RealtimeView to the local client. This is to ensure that only the local client can modify the avatar. Only the local player can update values in realtime components on their own avatars. This is intentional! We recommend that you don’t try to clear ownership of the avatar—you’re going to be in a world of hurt if you do. 

Instead, try storing data like health and scores in a `RealtimeDictionary` or a `StringKeyDictionary`. Nathaniel, A developer from the Normcore community, has written a helpful guide [here](https://gist.github.com/d12/f577bb50b0fdeeb17084819c78fe5c43).

## RealtimeTransform
#### Can I reparent RealtimeTransform?
RealtimeTransform cannot support reparenting. Take a look at the [RealtimeTransform](./realtimetransform#extra-notes) docs for more information.

#### My RealtimeTransform gets stuck and I can't move it. What can I do about this?
RealtimeTransform requires an owner in order to designate which client is responsible for its movement. Try calling `RequestOwnership()`; this should help. Take a look at the [RealtimeTransform](./realtimetransform) docs for more information.

#### Why doesn’t my RealtimeTransform properly transfer ownership on collision?
You most likely requested ownership of the transform and the view. You only need to request ownership of the transform. If you would like a RealtimeTransform to support ownership handoff, you need to ensure the view has no owner. See [Ownership and Lifetime Flags](../room/ownership-and-lifetime-flags) for more information.

#### I’m calling RequestOwnership(), setting the position of a transform, and then immediately calling ClearOwnership()—but nothing happens. How can I fix this?
Normcore doesn’t send changes to the server immediately when you change ownership or the value on a model. Instead, it synchronizes at 20hz and sends the latest state. If you change something and then change it back immediately, nothing will be sent to the server. In this case, skip calling `ClearOwnership()`. As long as the RealtimeView’s owner is **None**, then any other client in the future can just call `RequestOwnership()` to take over the transform and move it.

#### Can I add or remove a Rigidbody at runtime?
No. There’s no easy way to switch between these syncing modes at runtime; therefore, we don’t currently support adding or removing a Rigidbody at runtime. Instead, we recommend people instantiate an invisible game object with a Rigidbody on it and then copy the transform position/rotation in Update if they need the ability to synchronize a transform to be dynamic at runtime.

Take a look at the [RealtimeTransform](./realtimetransform#extra-notes) page for more info.

## Voice chat
#### Voice chat doesn't work! Why?
Check your default microphone device settings. If you're on a platform that requires microphone permissions (Mac, iOS, or Android), make sure your microphone permissions and Microphone Usage Description is set correctly in Unity. Normcore will print an error message to console if something fails. We highly recommend checking your player logs for more information if audio is not working.

#### How do I spatialize voice chat?
Adjust it on the AudioSource. RealtimeAvatarVoice plays audio back using Unity’s audio engine so all of the Unity audio APIs work correctly. At runtime, RealtimeAvatarVoice will create an AudioSource if one is not present, but if you’d like to configure it in the editor, add your own AudioSource component and RealtimeAvatarVoice will detect and use that instance.

## XR
#### Why doesn’t my avatar disappear on remote clients when I disconnect?
The root RealtimeView is set to `destroyWhenOwnerLeaves` by default. If you change this value, or if you clear the owner of the avatar itself, then it will not be cleaned up properly by the server.

#### I’m using a VRIK plugin for IK movement on avatars. When I teleport or move my camera rig, the rig moves, but my avatar doesn’t. What’s going on?
If you are using a plugin like VRIK and your avatar setup uses a camera rig, you’ll need to wire it up to RealtimeAvatarManager’s Root, Head, and Hand transform inputs. This will ensure that your RealtimeAvatar instance matches the transforms of your camera rig instead of using the default Unity XR APIs.

## More questions
#### What happens to my objects when a room server shuts down?
When the last player leaves a room, the room server will remain running for about 30 seconds before it's shut down. When this happens, any objects that are not flagged to destroy will be written to persistent storage. The next time someone joins this room, they will be restored instantly.

#### I have a script on my player. Why is it updating all players in the room?
When there are two avatars in a room, your scripts that live on the avatar prefab are instantiated for each avatar (not just the local player). This means that your code will execute on local and remote avatars, once for every player in the scene. If you’d like logic to only apply to a single player, use RealtimeView’s `isOwnedLocallyInHierarchy` property. Take a look at [this section](../guides/creating-a-player-controller#making-it-multiplayer) in the Player Controller guide for more info.
