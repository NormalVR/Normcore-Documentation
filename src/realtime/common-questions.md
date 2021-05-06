---
layout: docs
title: Common Questions
---
# Common Questions

TODOs
- How should we organize these if there are a lot of them?

### Can I add RealtimeComponents at runtime?
No, Normcore uses metadata on the prefab in order to connect RealtimeComponents on all clients.

### Why would a realtime component's model stay null?
so it's set by Realtime when you connect to the room. Usually it only fails if it doesn't get a reference to the Realtime component, which can happen for a few reasons:
1. It was instantiated with Instantiate instead of Realtime.Instantiate
2. The prefab is corrupt and the RealtimeComponent does not appear in the list of components on the RealtimeView
3. The RealtimeView is a child and doesn't appear in the list of child views on the parent RealtimeView (repeat all the way up to the root RealtimeView)
4. You're using RealtimeComponent (as opposed to RealtimeComponent<>) and the model setter doesn't save the value of the model or it's not named model
5. It's a RealtimeView in the scene, and the Realtime reference (under advanced settings) is not wired up to Realtime. Or if it's an additively loaded scene, it's loaded before an instance of Realtime exists in the scene
6. You're checking the model property inside of Awake() (or inside of Start() for scene RealtimeViews). If you want to do initialization logic with the model, do it inside of OnRealtimeModelReplaced or your model setter if you're not using the generic RealtimeComponent<> baseclass.
that's about all I can think of

### What happens to my objects when a room server shuts down?
When the last player leaves a room, the room server will remain running for about 30 seconds before it's shut down. When this happens, any objects that are not flagged to destroy will be written to persistent storage. The next time someone joins a room, they will be restored instantly.

### I have a script on my player, but it's updating all players in the room!
When there are two avatars in a room, your scripts that live on the avatar prefab are instantiated for each avatar (not just the local player). This means that your code will execute on local and remote avatars, and once for every player in the scene. If you’d like logic to only apply to a single player, use RealtimeView’s isOwnedLocallyInHierarchy property Take a look at <TODO: INSERT LINK> this section in the Player Controller guide.

### I’m trying to store the health in a RealtimeComponent on my avatar, but then I want other players to be able to modify that value.
RealtimeAvatar sets the ownership of the root RealtimeView to the local client. This is to ensure that only the local client can modify the avatar. This means that only the local player can update values in RealtimeComponents on their own avatars. This is intentional! Don’t try to just clear ownership on the avatar, you’re going to be in a world of hurt if you try this. Link to Nathaniel’s guide on storing it in the scene?


## RealtimeView
### Can I disable RealtimeView?
No. RealtimeView performs its initialization and connection to the datastore in Start(). If it is disabled, this will not occur.

Instead, use a custom RealtimeComponent to enable/disable child game objects, scripts, or renderers directly.

### Is there a UUID of some sort that I can use to find a RealtimeView reference at runtime?
Nope! RealtimeViews that are in the scene sometimes have a Scene View UUID, which is used to synchronize that same view when the scene is loaded on multiple clients, but Normcore doesn’t use UUIDs to synchronize views internally.
If you’d like to introduce this functionality, you can create a RealtimeComponent that assigns a UUID in OnRealtimeModelReplaced() when getting a fresh model.
This will ensure the component has a unique UUID and existing models don’t have their UUIDs re-assigned by new clients.

### When can I start calling methods on a RealtimeView or RealtimeComponent, at the moment I’m calling a method, but sometimes I get “not connected to room” <TODO: Actual error copy>
If you’re dealing with a prefab, all views and components are initialized with their models and ready to work with by the time Start() is called on any script on the prefab. Awake() is called before Normcore can initialize any components on the game object.
If you’re dealing with a RealtimeView that exists in a scene file, you’ll need to wait until realtime.connected is true, or the didConnectToRoom event has fired.
RealtimeView uses Start() internally to register with Realtime and it’s possible your start method will run before RealtimeView.Start().

## RealtimeTransform
### I’d like to reparent RealtimeTransform and it’s not working
RealtimeTransform cannot support reparenting. Take a look at the [RealtimeTransform](./RealtimeTransform) docs for more information.

### My RealtimeTransform gets stuck and I can't move it!
RealtimeTransform requires an owner in order to designate which client is responsible for its movement. Try calling `RequestOwnership()`! Take a look at the [RealtimeTransform](./RealtimeTransform) docs for more information.

### My RealtimeTransform doesn't properly transfer ownership on collision
You most likely requested ownership of the transform and the view. You only need to request ownership of the transform. If you would like a RealtimeTransform to support ownership handoff, you need to ensure the view has no owner. See [Ownership and Lifetime Flags](../room/ownership-and-lifetime-flags)

### I’m calling RequestOwnership(), setting the position of a transform and then immediately calling ClearOwnership() and nothing happens!
Normcore doesn’t send changes to the server immediately when you change ownership or the value on a model. Instead, it synchronizes at 20hz and sends the latest state. If you change something and then change it back immediately, nothing will be sent to the server.
In this case, skip calling ClearOwnership(). As long as the RealtimeView’s owner remains None, then any other client in the future can just call RequestOwnership() to take over the transform and move it.

### I’d like to add/remove a Rigidbody at runtime
RealtimeTransform with a transform has to derive the velocity and operates differently depending on if the rigidbody is kinematic or not
Rigidbody's also operate in world space in Unity, where as a vanilla transform is using the local position/rotation
we're essentially syncing more/less information and the common pieces are in a different coordinate space depending on whether a Rigidbody is present to match how Unity works under the hood
in general I just recommend people instantiate an invisible game object with a Rigidbody on it and copy the transform position/rotation in update if they need that information to be dynamic
in addition to syncing different information, we'd also have to synchronize the presence of the Rigidbody component or not. If you remove it from the owner, it felt too destructive to remove it on other clients
not to mention if you remove it on the owner but someone else claimed ownership before the remove call, we'd have to rewind it and bring the Rigidbody component back it just slowly becomes a mess to support.

## Voice chat

### Voice chat doesn't work!
Check your default microphone device settings. If you're on a platform that requires microphone permissions (Mac, iOS, & Android), make sure your Microphone permissions and Microphone Usage Description is set correctly in Unity.

### How do I spatialize voice chat?
Adjust it on the AudioSource. RealtimeAvatarVoice plays audio back using Unity’s audio engine, and so all of the Unity audio APIs work correctly. At runtime RealtimeAvatarVoice will create an AudioSource if one is not present, but if you’d like to configure it in the editor, add your own AudioSource component and RealtimeAvatarVoice will detect and use that instance.

## XR

### When I disconnect, my avatar doesn’t disappear on remote clients
The root RealtimeView is set to destroyWhenOwner leaves, if you change this value, or you clear the owner of the avatar itself, then it will not be cleaned up properly by the server.


### I’m using a plugin like VRIK for IK movement on avatars. When I teleport or move my camera rig, the camera rig moves, but my avatar stays in the same place.
If your avatar setup is using a camera rig, you’ll need to wire it up to RealtimeAvatarManager’s Root, Head, and Hand transform inputs. This will make sure your RealtimeAvatar instance matches the transforms of your camera rig instead of using the default Unity XR APIs.



