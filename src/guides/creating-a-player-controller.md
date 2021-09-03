---
layout: docs
title: Creating a player controller
---
# Creating a Player Controller

This guide will demonstrate how to create a basic player that you can move using WASD and the mouse. It will serve as the foundation for any multiplayer game that lets you play as a third-person player.

When you're finished, you'll end up with a multiplayer game that looks like this:

![](./creating-a-player-controller/hoverbird-completed-1.mp4)

We'll start by creating a singleplayer player controller from scratch. We'll get the controls to feel nice, and then we'll make it multiplayer. If you're only interested in the multiplayer part, skip to [making it multiplayer](#making-it-multiplayer).

## Creating a singleplayer player controller

Create a copy of the Blank Scene Template scene included in the `Normal/Examples` folder. Save it as "Player Controller".

Let's start by creating a game object to represent the player. Create an empty game object in the scene named "Player".

Add a **Rigidbody** to the Player game object so that it can respond to physics. We'll always want our player to remain upright, so let's enable Freeze Rotation on every axis.

Last, we'll add a Sphere game object to represent the body of the player. Set the scale of the sphere to 1.8 and set the y-position at 0.9 so the bottom is lined up with the ground.

![](./creating-a-player-controller/create-player-object-2.mp4)

Looking good so far! If we enter Play mode, nothing will happen, so let's create a script to control our player. Create a new script called Player, and add it to the Player game object.

The first step is to create a method to capture player input in `Update()` and a method to apply the input to our rigidbody in `FixedUpdate()`

```csharp
using UnityEngine;

public class Player : MonoBehaviour {
    // Physics
    private Vector3   _targetMovement;
    private Vector3   _movement;

    private Rigidbody _rigidbody;

    private void Awake() {
        // Set physics timestep to 60hz
        Time.fixedDeltaTime = 1.0f/60.0f;

        // Store a reference to the rigidbody for easy access
        _rigidbody = GetComponent<Rigidbody>();
    }

    private void Update() {
        // Use WASD input and the camera look direction to calculate the movement target
        CalculateTargetMovement();
    }

    private void FixedUpdate() {
        // Move the player based on the input
        MovePlayer();
    }

    private void CalculateTargetMovement() {
        // Get input movement. Multiple by 6.0 to increase speed.
        Vector3 inputMovement = new Vector3();
        inputMovement.x = Input.GetAxisRaw("Horizontal") * 6.0f;
        inputMovement.z = Input.GetAxisRaw("Vertical")   * 6.0f;
        _targetMovement = inputMovement;
    }

    private void MovePlayer() {
        // Start with the current velocity
        Vector3 velocity = _rigidbody.velocity;

        // Smoothly animate towards the target movement velocity
        _movement = Vector3.Lerp(_movement, _targetMovement, Time.fixedDeltaTime * 5.0f);
        velocity.x = _movement.x;
        velocity.z = _movement.z;
        
        // Set the velocity on the rigidbody
        _rigidbody.velocity = velocity;
    }
}
```
Enter Play mode and give this a shot. Using WASD, you should see the sphere move around and roll over the cubes.

![](./creating-a-player-controller/sphere-player-no-camera-target-3.mp4)

So far so good, but our camera is left behind! Let's fix that.

We could add the camera as a child of the player, but we plan to instantiate the player later on after we connect to a multiplayer room, which means we'd have no camera until after we connect. Instead, we'll create an empty game object to represent a target point on the player that the camera should follow.

Create an empty game object called "Camera Target", and set the y-position to 1.0. This will be the point our camera looks at. We'll also add a **Parent Constraint** component to the camera. Check the box for **Is Active** and set the **Position At Rest** and **Rotation At Rest** to (0.0, 1.5, -3.0) and (15.0, 0.0, 0.0), respectively, to match the camera defaults. Finally, add the CameraTarget game object as the source.

Enter Play mode and use WASD to move around.

![](./creating-a-player-controller/sphere-player-camera-target-4.mp4)

Getting there, but it would be really nice if we could turn and look around. Let's use the mouse for this. We'll use the mouse input to rotate the camera target in the direction we're looking:

```csharp {4-7,24-25,36-48,56-61,77-82}
using UnityEngine;

public class Player : MonoBehaviour {
    // Camera
    public  Transform  cameraTarget;
    private float     _mouseLookX;
    private float     _mouseLookY;

    // Physics
    private Vector3   _targetMovement;
    private Vector3   _movement;

    private Rigidbody _rigidbody;

    private void Awake() {
        // Set physics timestep to 60hz
        Time.fixedDeltaTime = 1.0f/60.0f;

        // Store a reference to the rigidbody for easy access
        _rigidbody = GetComponent<Rigidbody>();
    }

    private void Update() {
        // Move the camera using the mouse
        RotateCamera();

        // Use WASD input and the camera look direction to calculate the movement target
        CalculateTargetMovement();
    }

    private void FixedUpdate() {
        // Move the player based on the input
        MovePlayer();
    }

    private void RotateCamera() {
        // Get the latest mouse movement. Multiple by 4.0 to increase sensitivity.
        _mouseLookX += Input.GetAxis("Mouse X") * 4.0f;
        _mouseLookY += Input.GetAxis("Mouse Y") * 4.0f;

        // Clamp how far you can look up + down
        while (_mouseLookY < -180.0f) _mouseLookY += 360.0f;
        while (_mouseLookY >  180.0f) _mouseLookY -= 360.0f;
        _mouseLookY = Mathf.Clamp(_mouseLookY, -15.0f, 15.0f);

        // Rotate camera
        cameraTarget.localRotation = Quaternion.Euler(-_mouseLookY, _mouseLookX, 0.0f);
    }

    private void CalculateTargetMovement() {
        // Get input movement. Multiple by 6.0 to increase speed.
        Vector3 inputMovement = new Vector3();
        inputMovement.x = Input.GetAxisRaw("Horizontal") * 6.0f;
        inputMovement.z = Input.GetAxisRaw("Vertical")   * 6.0f;

        // Get the direction the camera is looking parallel to the ground plane.
        Vector3    cameraLookForwardVector = ProjectVectorOntoGroundPlane(cameraTarget.forward);
        Quaternion cameraLookForward       = Quaternion.LookRotation(cameraLookForwardVector);

        // Use the camera look direction to convert the input movement from camera space to world space
        _targetMovement = cameraLookForward * inputMovement;
    }

    private void MovePlayer() {
        // Start with the current velocity
        Vector3 velocity = _rigidbody.velocity;

        // Smoothly animate towards the target movement velocity
        _movement = Vector3.Lerp(_movement, _targetMovement, Time.fixedDeltaTime * 5.0f);
        velocity.x = _movement.x;
        velocity.z = _movement.z;
        
        // Set the velocity on the rigidbody
        _rigidbody.velocity = velocity;
    }

    // Given a forward vector, get a y-axis rotation that points in the same direction that's parallel to the ground plane
    private static Vector3 ProjectVectorOntoGroundPlane(Vector3 vector) {
        Vector3 planeNormal = Vector3.up;
        Vector3.OrthoNormalize(ref planeNormal, ref vector);
        return vector;
    }
}
```

Let's give this version a shot.

![](./creating-a-player-controller/sphere-player-mouse-control-5.mp4)

Already this is much better! We can look around with the mouse and the player smoothly moves towards the direction we're facing.

Let's add the ability to jump while we're at it. We'll check in `Update()` to see if the space bar is pressed and in `FixedUpdate()` we'll set an instantaneous upward velocity to make the player jump:

```csharp {13-14,33-34,70-74,85-97}
using UnityEngine;

public class Player : MonoBehaviour {
    // Camera
    public  Transform  cameraTarget;
    private float     _mouseLookX;
    private float     _mouseLookY;

    // Physics
    private Vector3   _targetMovement;
    private Vector3   _movement;

    private bool      _jumpThisFrame;
    private bool      _jumping;

    private Rigidbody _rigidbody;

    private void Awake() {
        // Set physics timestep to 60hz
        Time.fixedDeltaTime = 1.0f/60.0f;

        // Store a reference to the rigidbody for easy access
        _rigidbody = GetComponent<Rigidbody>();
    }

    private void Update() {
        // Move the camera using the mouse
        RotateCamera();

        // Use WASD input and the camera look direction to calculate the movement target
        CalculateTargetMovement();

        // Check if we should jump this frame
        CheckForJump();
    }

    private void FixedUpdate() {
        // Move the player based on the input
        MovePlayer();
    }

    private void RotateCamera() {
        // Get the latest mouse movement. Multiple by 4.0 to increase sensitivity.
        _mouseLookX += Input.GetAxis("Mouse X") * 4.0f;
        _mouseLookY += Input.GetAxis("Mouse Y") * 4.0f;

        // Clamp how far you can look up + down
        while (_mouseLookY < -180.0f) _mouseLookY += 360.0f;
        while (_mouseLookY >  180.0f) _mouseLookY -= 360.0f;
        _mouseLookY = Mathf.Clamp(_mouseLookY, -15.0f, 15.0f);

        // Rotate camera
        cameraTarget.localRotation = Quaternion.Euler(-_mouseLookY, _mouseLookX, 0.0f);
    }

    private void CalculateTargetMovement() {
        // Get input movement. Multiple by 6.0 to increase speed.
        Vector3 inputMovement = new Vector3();
        inputMovement.x = Input.GetAxisRaw("Horizontal") * 6.0f;
        inputMovement.z = Input.GetAxisRaw("Vertical")   * 6.0f;

        // Get the direction the camera is looking parallel to the ground plane.
        Vector3    cameraLookForwardVector = ProjectVectorOntoGroundPlane(cameraTarget.forward);
        Quaternion cameraLookForward       = Quaternion.LookRotation(cameraLookForwardVector);

        // Use the camera look direction to convert the input movement from camera space to world space
        _targetMovement = cameraLookForward * inputMovement;
    }

    private void CheckForJump() {
        // Jump if the space bar was pressed this frame and we're not already jumping, trigger the jump
        if (Input.GetKeyDown(KeyCode.Space) && !_jumping)
            _jumpThisFrame = true;
    }

    private void MovePlayer() {
        // Start with the current velocity
        Vector3 velocity = _rigidbody.velocity;

        // Smoothly animate towards the target movement velocity
        _movement = Vector3.Lerp(_movement, _targetMovement, Time.fixedDeltaTime * 5.0f);
        velocity.x = _movement.x;
        velocity.z = _movement.z;

        // Jump
        if (_jumpThisFrame) {
            // Instantaneously set the vertical velocity to 6.0 m/s
            velocity.y = 6.0f;

            // Mark the player as currently jumping and clear the jump input
            _jumping       = true;
            _jumpThisFrame = false;
        }

        // Reset jump after the apex
        if (_jumping && velocity.y < -0.1f)
            _jumping = false;
        
        // Set the velocity on the rigidbody
        _rigidbody.velocity = velocity;
    }

    // Given a forward vector, get a y-axis rotation that points in the same direction that's parallel to the ground plane
    private static Vector3 ProjectVectorOntoGroundPlane(Vector3 vector) {
        Vector3 planeNormal = Vector3.up;
        Vector3.OrthoNormalize(ref planeNormal, ref vector);
        return vector;
    }
}
```

Enter Play mode and give it a shot!

![](./creating-a-player-controller/sphere-player-mouse-jump-6.mp4)

It's looking good! However, this sphere is pretty uninspiring.

Let's grab the Hoverbird Character model from the `Normal/Examples/Hoverbird Player` folder and add it as a child of our Player. Make sure to zero out the transform for it. We still want the Sphere collider for physics, but let's turn off the **Mesh Renderer** so it doesn't render to the scene.

![](./creating-a-player-controller/hoverbird-player-no-animation-7.mp4)

This is already much better, but let's add some code to make the Hoverbird more believable. We'll make it rotate towards the direction of travel and lean into turns. The animation logic is a little complex, but don't sweat it! It's not required for using Normcore or making the character multiplayer.

```csharp {18-19,44-45,109-138,147-152,154-160}
using UnityEngine;

public class Player : MonoBehaviour {
    // Camera
    public  Transform  cameraTarget;
    private float     _mouseLookX;
    private float     _mouseLookY;

    // Physics
    private Vector3   _targetMovement;
    private Vector3   _movement;

    private bool      _jumpThisFrame;
    private bool      _jumping;

    private Rigidbody _rigidbody;

    // Hoverbird
    [SerializeField] private Transform _character = default;

    private void Awake() {
        // Set physics timestep to 60hz
        Time.fixedDeltaTime = 1.0f/60.0f;

        // Store a reference to the rigidbody for easy access
        _rigidbody = GetComponent<Rigidbody>();
    }

    private void Update() {
        // Move the camera using the mouse
        RotateCamera();

        // Use WASD input and the camera look direction to calculate the movement target
        CalculateTargetMovement();

        // Check if we should jump this frame
        CheckForJump();
    }

    private void FixedUpdate() {
        // Move the player based on the input
        MovePlayer();

        // Animate the character to match the player movement
        AnimateCharacter();
    }

    private void RotateCamera() {
        // Get the latest mouse movement. Multiple by 4.0 to increase sensitivity.
        _mouseLookX += Input.GetAxis("Mouse X") * 4.0f;
        _mouseLookY += Input.GetAxis("Mouse Y") * 4.0f;

        // Clamp how far you can look up + down
        while (_mouseLookY < -180.0f) _mouseLookY += 360.0f;
        while (_mouseLookY >  180.0f) _mouseLookY -= 360.0f;
        _mouseLookY = Mathf.Clamp(_mouseLookY, -15.0f, 15.0f);

        // Rotate camera
        cameraTarget.localRotation = Quaternion.Euler(-_mouseLookY, _mouseLookX, 0.0f);
    }

    private void CalculateTargetMovement() {
        // Get input movement. Multiple by 6.0 to increase speed.
        Vector3 inputMovement = new Vector3();
        inputMovement.x = Input.GetAxisRaw("Horizontal") * 6.0f;
        inputMovement.z = Input.GetAxisRaw("Vertical")   * 6.0f;

        // Get the direction the camera is looking parallel to the ground plane.
        Vector3    cameraLookForwardVector = ProjectVectorOntoGroundPlane(cameraTarget.forward);
        Quaternion cameraLookForward       = Quaternion.LookRotation(cameraLookForwardVector);

        // Use the camera look direction to convert the input movement from camera space to world space
        _targetMovement = cameraLookForward * inputMovement;
    }

    private void CheckForJump() {
        // Jump if the space bar was pressed this frame and we're not already jumping, trigger the jump
        if (Input.GetKeyDown(KeyCode.Space) && !_jumping)
            _jumpThisFrame = true;
    }

    private void MovePlayer() {
        // Start with the current velocity
        Vector3 velocity = _rigidbody.velocity;

        // Smoothly animate towards the target movement velocity
        _movement = Vector3.Lerp(_movement, _targetMovement, Time.fixedDeltaTime * 5.0f);
        velocity.x = _movement.x;
        velocity.z = _movement.z;

        // Jump
        if (_jumpThisFrame) {
            // Instantaneously set the vertical velocity to 6.0 m/s
            velocity.y = 6.0f;

            // Mark the player as currently jumping and clear the jump input
            _jumping       = true;
            _jumpThisFrame = false;
        }

        // Reset jump after the apex
        if (_jumping && velocity.y < -0.1f)
            _jumping = false;
        
        // Set the velocity on the rigidbody
        _rigidbody.velocity = velocity;
    }

    // Rotate the character to face the direction we're moving. Lean towards the target movement direction.
    private void AnimateCharacter() {
        // Calculate the direction that the character is facing parallel to the ground plane
        Vector3    characterLocalForwardVector = _character.localRotation * Vector3.forward;
        Vector3    characterLookForwardVector  = ProjectVectorOntoGroundPlane(characterLocalForwardVector);
        Quaternion characterLookForward        = Quaternion.LookRotation(characterLookForwardVector);

        // Calculate the angle between the current movement direction and the target movement direction
        Vector3 targetMovementNormalized = _targetMovement.normalized;
        Vector3       movementNormalized =       _movement.normalized;
        float angle = targetMovementNormalized.sqrMagnitude > 0.0f ? SignedAngle2D(targetMovementNormalized, movementNormalized) : 0.0f;

        // Convert the delta between movement direction and the target movement direction to a lean amount. Clamp to +/- 45 degrees so the player doesn't lean too far.
        angle = angle * Mathf.Rad2Deg;
        angle = Mathf.Clamp(angle, -45.0f, 45.0f);

        // Convert the lean angle to a Quaternion that's oriented in the direction the character is facing
        Quaternion leanRotation = characterLookForward * Quaternion.Euler(0.0f, 0.0f, angle);

        // Rotate to face the direction of travel if we're moving forward
        Vector3 targetCharacterLookForwardVector = characterLookForwardVector;
        if (GetRigidbodyForwardVelocity(_rigidbody) >= 2.0f)
            targetCharacterLookForwardVector = _rigidbody.velocity.normalized;

        // Compose the target character rotation from the target look direction + target lean direction
        Quaternion targetRotation = Quaternion.LookRotation(targetCharacterLookForwardVector, leanRotation * Vector3.up);

        // Animate the character towards the target rotation
        _character.localRotation = Quaternion.Slerp(_character.localRotation, targetRotation, 5.0f * Time.fixedDeltaTime);
    }

    // Given a forward vector, get a y-axis rotation that points in the same direction that's parallel to the ground plane
    private static Vector3 ProjectVectorOntoGroundPlane(Vector3 vector) {
        Vector3 planeNormal = Vector3.up;
        Vector3.OrthoNormalize(ref planeNormal, ref vector);
        return vector;
    }

    // Get the rigidbody velocity along the ground plane
    private static float GetRigidbodyForwardVelocity(Rigidbody rigidbody) {
        Vector3 forwardVelocity = rigidbody.velocity;
        forwardVelocity.y = 0.0f;
        return forwardVelocity.magnitude;
    }

    // Get the difference between two angles along the ground plane
    private static float SignedAngle2D(Vector3 a, Vector3 b) {
        float angle = Mathf.Atan2(a.z, a.x) - Mathf.Atan2(b.z, b.x);
        if (angle <= -Mathf.PI) angle += 2.0f * Mathf.PI;
        if (angle >   Mathf.PI) angle -= 2.0f * Mathf.PI;
        return angle;
    }
}
```

Make sure to wire up the Hoverbird Character game object to the Character input on Player and then let's enter Play mode and try it out.

![](./creating-a-player-controller/hoverbird-player-animated-8.mp4)

And there we have it! A nice and simple Hoverbird player with WASD controls, camera controls, jumping, and a simple animated character.

Believe it or not, the hardest part is over. Now let's make it multiplayer!

## Making it multiplayer

We'll start by turning the Player game object into a Realtime prefab that we can instantiate for every player in the multiplayer room. Add a **RealtimeView** to the Player, create a Resources folder, and drag the Player into the Resources folder. Go ahead and delete it from the scene once this is done.

![](./creating-a-player-controller/making-player-prefab-9.mp4)

Next up, we'll create a script to instantiate a copy of the prefab after we connect to a room. We'll also want to wire up the **Parent Constraint** reference so the camera follows our newly instantiated player prefab:

```csharp
using UnityEngine;
using UnityEngine.Animations;
using Normal.Realtime;

public class PlayerManager : MonoBehaviour {
    [SerializeField] private GameObject _camera = default;

    private Realtime _realtime;

    private void Awake() {
        // Get the Realtime component on this game object
        _realtime = GetComponent<Realtime>();

        // Notify us when Realtime successfully connects to the room
        _realtime.didConnectToRoom += DidConnectToRoom;
    }

    private void DidConnectToRoom(Realtime realtime) {
        // Instantiate the Player for this client once we've successfully connected to the room
        GameObject playerGameObject = Realtime.Instantiate(              prefabName: "Player",  // Prefab name
                                                                      ownedByClient: true,      // Make sure the RealtimeView on this prefab is owned by this client
                                                           preventOwnershipTakeover: true,      // Prevent other clients from calling RequestOwnership() on the root RealtimeView.
                                                                        useInstance: realtime); // Use the instance of Realtime that fired the didConnectToRoom event.

        // Get a reference to the player
        Player player = playerGameObject.GetComponent<Player>();

        // Get the constraint used to position the camera behind the player
        ParentConstraint cameraConstraint = _camera.GetComponent<ParentConstraint>();
        
        // Add the camera target so the camera follows it
        ConstraintSource constraintSource = new ConstraintSource { sourceTransform = player.cameraTarget, weight = 1.0f };
        int constraintIndex = cameraConstraint.AddSource(constraintSource);

        // Set the camera offset so it acts like a third-person camera.
        cameraConstraint.SetTranslationOffset(constraintIndex, new Vector3( 0.0f,  1.0f, -4.0f));
        cameraConstraint.SetRotationOffset   (constraintIndex, new Vector3(15.0f,  0.0f,  0.0f));
    }
}
```

Create an empty game object in the scene, and add Realtime and our newly created **PlayerManager**. Make sure you've configured your app key, and then let's export a build and try it out!

Export a build, open it, and hit Play in the editor.

![](./creating-a-player-controller/local-only-player-controls-10.mp4)

This looks good but it seems we're controlling all players at the same time. Let's add some logic so we only control our own player.

```csharp {22-23,32-33,37-39,43-45,48-57,59-65}
using UnityEngine;
using Normal.Realtime;

public class Player : MonoBehaviour {
    // Camera
    public  Transform  cameraTarget;
    private float     _mouseLookX;
    private float     _mouseLookY;

    // Physics
    private Vector3   _targetMovement;
    private Vector3   _movement;

    private bool      _jumpThisFrame;
    private bool      _jumping;

    private Rigidbody _rigidbody;

    // Character
    [SerializeField] private Transform _character = default;

    // Multiplayer
    private RealtimeView _realtimeView;

    private void Awake() {
        // Set physics timestep to 60hz
        Time.fixedDeltaTime = 1.0f/60.0f;

        // Store a reference to the rigidbody for easy access
        _rigidbody = GetComponent<Rigidbody>();

        // Store a reference to the RealtimeView for easy access
        _realtimeView = GetComponent<RealtimeView>();
    }

    private void Update() {
        // Call LocalUpdate() only if this instance is owned by the local client
        if (_realtimeView.isOwnedLocallyInHierarchy)
            LocalUpdate();
    }

    private void FixedUpdate() {
        // Call LocalFixedUpdate() only if this instance is owned by the local client
        if (_realtimeView.isOwnedLocallyInHierarchy)
            LocalFixedUpdate();
    }

    private void LocalUpdate() {
        // Move the camera using the mouse
        RotateCamera();

        // Use WASD input and the camera look direction to calculate the movement target
        CalculateTargetMovement();

        // Check if we should jump this frame
        CheckForJump();
    }

    private void LocalFixedUpdate() {
        // Move the player based on the input
        MovePlayer();

        // Animate the character to match the player movement
        AnimateCharacter();
    }

    private void RotateCamera() {
        // Get the latest mouse movement. Multiple by 4.0 to increase sensitivity.
        _mouseLookX += Input.GetAxis("Mouse X") * 4.0f;
        _mouseLookY += Input.GetAxis("Mouse Y") * 4.0f;

        // Clamp how far you can look up + down
        while (_mouseLookY < -180.0f) _mouseLookY += 360.0f;
        while (_mouseLookY >  180.0f) _mouseLookY -= 360.0f;
        _mouseLookY = Mathf.Clamp(_mouseLookY, -15.0f, 15.0f);

        // Rotate camera
        cameraTarget.localRotation = Quaternion.Euler(-_mouseLookY, _mouseLookX, 0.0f);
    }

    private void CalculateTargetMovement() {
        // Get input movement. Multiple by 6.0 to increase speed.
        Vector3 inputMovement = new Vector3();
        inputMovement.x = Input.GetAxisRaw("Horizontal") * 6.0f;
        inputMovement.z = Input.GetAxisRaw("Vertical")   * 6.0f;

        // Get the direction the camera is looking parallel to the ground plane.
        Vector3    cameraLookForwardVector = ProjectVectorOntoGroundPlane(cameraTarget.forward);
        Quaternion cameraLookForward       = Quaternion.LookRotation(cameraLookForwardVector);

        // Use the camera look direction to convert the input movement from camera space to world space
        _targetMovement = cameraLookForward * inputMovement;
    }

    private void CheckForJump() {
        // Jump if the space bar was pressed this frame and we're not already jumping, trigger the jump
        if (Input.GetKeyDown(KeyCode.Space) && !_jumping)
            _jumpThisFrame = true;
    }

    private void MovePlayer() {
        // Start with the current velocity
        Vector3 velocity = _rigidbody.velocity;

        // Smoothly animate towards the target movement velocity
        _movement = Vector3.Lerp(_movement, _targetMovement, Time.fixedDeltaTime * 5.0f);
        velocity.x = _movement.x;
        velocity.z = _movement.z;

        // Jump
        if (_jumpThisFrame) {
            // Instantaneously set the vertical velocity to 6.0 m/s
            velocity.y = 6.0f;

            // Mark the player as currently jumping and clear the jump input
            _jumping       = true;
            _jumpThisFrame = false;
        }

        // Reset jump after the apex
        if (_jumping && velocity.y < -0.1f)
            _jumping = false;
        
        // Set the velocity on the rigidbody
        _rigidbody.velocity = velocity;
    }

    // Rotate the character to face the direction we're moving. Lean towards the target movement direction.
    private void AnimateCharacter() {
        // Calculate the direction that the character is facing parallel to the ground plane
        Vector3    characterLocalForwardVector = _character.localRotation * Vector3.forward;
        Vector3    characterLookForwardVector  = ProjectVectorOntoGroundPlane(characterLocalForwardVector);
        Quaternion characterLookForward        = Quaternion.LookRotation(characterLookForwardVector);

        // Calculate the angle between the current movement direction and the target movement direction
        Vector3 targetMovementNormalized = _targetMovement.normalized;
        Vector3       movementNormalized =       _movement.normalized;
        float angle = targetMovementNormalized.sqrMagnitude > 0.0f ? SignedAngle2D(targetMovementNormalized, movementNormalized) : 0.0f;

        // Convert the delta between movement direction and the target movement direction to a lean amount. Clamp to +/- 45 degrees so the player doesn't lean too far.
        angle = angle * Mathf.Rad2Deg;
        angle = Mathf.Clamp(angle, -45.0f, 45.0f);

        // Convert the lean angle to a Quaternion that's oriented in the direction the character is facing
        Quaternion leanRotation = characterLookForward * Quaternion.Euler(0.0f, 0.0f, angle);

        // Rotate to face the direction of travel if we're moving forward
        Vector3 targetCharacterLookForwardVector = characterLookForwardVector;
        if (GetRigidbodyForwardVelocity(_rigidbody) >= 2.0f)
            targetCharacterLookForwardVector = _rigidbody.velocity.normalized;

        // Compose the target character rotation from the target look direction + target lean direction
        Quaternion targetRotation = Quaternion.LookRotation(targetCharacterLookForwardVector, leanRotation * Vector3.up);

        // Animate the character towards the target rotation
        _character.localRotation = Quaternion.Slerp(_character.localRotation, targetRotation, 5.0f * Time.fixedDeltaTime);
    }

    // Given a forward vector, get a y-axis rotation that points in the same direction that's parallel to the ground plane
    private static Vector3 ProjectVectorOntoGroundPlane(Vector3 vector) {
        Vector3 planeNormal = Vector3.up;
        Vector3.OrthoNormalize(ref planeNormal, ref vector);
        return vector;
    }

    // Get the rigidbody velocity along the ground plane
    private static float GetRigidbodyForwardVelocity(Rigidbody rigidbody) {
        Vector3 forwardVelocity = rigidbody.velocity;
        forwardVelocity.y = 0.0f;
        return forwardVelocity.magnitude;
    }

    // Get the difference between two angles along the ground plane
    private static float SignedAngle2D(Vector3 a, Vector3 b) {
        float angle = Mathf.Atan2(a.z, a.x) - Mathf.Atan2(b.z, b.x);
        if (angle <= -Mathf.PI) angle += 2.0f * Mathf.PI;
        if (angle >   Mathf.PI) angle -= 2.0f * Mathf.PI;
        return angle;
    }
}
```

Here we've renamed `Update()` and `FixedUpdate()` to `LocalUpdate()` and `LocalFixedUpdate()`. We've also set them to only run if this player is owned by the local client. Inside of `PlayerManager.cs` we've set `ownedByClient: true`, which takes ownership of the **RealtimeView** when the Player prefab is instantiated. We then use `isOwnedLocallyInHierarchy` to determine if the **RealtimeView** on this prefab is owned locally.

Let's try this version out.

![](./creating-a-player-controller/player-without-transform-syncing-11.mp4)

Much better, but not quite there yet. We're now controlling only our own avatar, but if you look at the other build, it's not synchronized over the network. Luckily, Normcore has a built-in component that'll do that for you. We'll add a **RealtimeTransform** component to the Player to synchronize movement and a **RealtimeTransform** on the Hoverbird Character game object so we can synchronize the character look direction and lean.

If you're familiar with our [Networked Physics](../core-concepts/networked-physics) guide, you'll know that **RealtimeTransform**, when paired with a rigidbody, will attempt to clear ownership automatically when the rigidbody goes to sleep in order to allow other clients to take it over on physics collisions. However, in this case, we want to retain ownership of the Player **RealtimeTransform** at all times. In order to do that, we'll want to set it to **Maintain Ownership While Sleeping**.

![](./creating-a-player-controller/add-realtime-transforms-to-player-12.mp4)

The last thing we'll need to do is call `RequestOwnership()` on each **RealtimeTransform** when the prefab is instantiated to signal that all other clients should use this client's transform as the source of truth.

```csharp {36-40,54-58}
using UnityEngine;
using Normal.Realtime;

public class Player : MonoBehaviour {
    // Camera
    public  Transform  cameraTarget;
    private float     _mouseLookX;
    private float     _mouseLookY;

    // Physics
    private Vector3   _targetMovement;
    private Vector3   _movement;

    private bool      _jumpThisFrame;
    private bool      _jumping;

    private Rigidbody _rigidbody;

    // Character
    [SerializeField] private Transform _character = default;

    // Multiplayer
    private RealtimeView _realtimeView;

    private void Awake() {
        // Set physics timestep to 60hz
        Time.fixedDeltaTime = 1.0f/60.0f;

        // Store a reference to the rigidbody for easy access
        _rigidbody = GetComponent<Rigidbody>();

        // Store a reference to the RealtimeView for easy access
        _realtimeView = GetComponent<RealtimeView>();
    }

    private void Start() {
        // Call LocalStart() only if this instance is owned by the local client
        if (_realtimeView.isOwnedLocallyInHierarchy)
            LocalStart();
    }

    private void Update() {
        // Call LocalUpdate() only if this instance is owned by the local client
        if (_realtimeView.isOwnedLocallyInHierarchy)
            LocalUpdate();
    }

    private void FixedUpdate() {
        // Call LocalFixedUpdate() only if this instance is owned by the local client
        if (_realtimeView.isOwnedLocallyInHierarchy)
            LocalFixedUpdate();
    }

    private void LocalStart() {
        // Request ownership of the Player and the character RealtimeTransforms
                   GetComponent<RealtimeTransform>().RequestOwnership();
        _character.GetComponent<RealtimeTransform>().RequestOwnership();
    }

    private void LocalUpdate() {
        // Move the camera using the mouse
        RotateCamera();

        // Use WASD input and the camera look direction to calculate the movement target
        CalculateTargetMovement();

        // Check if we should jump this frame
        CheckForJump();
    }

    private void LocalFixedUpdate() {
        // Move the player based on the input
        MovePlayer();

        // Animate the character to match the player movement
        AnimateCharacter();
    }

    private void RotateCamera() {
        // Get the latest mouse movement. Multiple by 4.0 to increase sensitivity.
        _mouseLookX += Input.GetAxis("Mouse X") * 4.0f;
        _mouseLookY += Input.GetAxis("Mouse Y") * 4.0f;

        // Clamp how far you can look up + down
        while (_mouseLookY < -180.0f) _mouseLookY += 360.0f;
        while (_mouseLookY >  180.0f) _mouseLookY -= 360.0f;
        _mouseLookY = Mathf.Clamp(_mouseLookY, -15.0f, 15.0f);

        // Rotate camera
        cameraTarget.localRotation = Quaternion.Euler(-_mouseLookY, _mouseLookX, 0.0f);
    }

    private void CalculateTargetMovement() {
        // Get input movement. Multiple by 6.0 to increase speed.
        Vector3 inputMovement = new Vector3();
        inputMovement.x = Input.GetAxisRaw("Horizontal") * 6.0f;
        inputMovement.z = Input.GetAxisRaw("Vertical")   * 6.0f;

        // Get the direction the camera is looking parallel to the ground plane.
        Vector3    cameraLookForwardVector = ProjectVectorOntoGroundPlane(cameraTarget.forward);
        Quaternion cameraLookForward       = Quaternion.LookRotation(cameraLookForwardVector);

        // Use the camera look direction to convert the input movement from camera space to world space
        _targetMovement = cameraLookForward * inputMovement;
    }

    private void CheckForJump() {
        // Jump if the space bar was pressed this frame and we're not already jumping, trigger the jump
        if (Input.GetKeyDown(KeyCode.Space) && !_jumping)
            _jumpThisFrame = true;
    }

    private void MovePlayer() {
        // Start with the current velocity
        Vector3 velocity = _rigidbody.velocity;

        // Smoothly animate towards the target movement velocity
        _movement = Vector3.Lerp(_movement, _targetMovement, Time.fixedDeltaTime * 5.0f);
        velocity.x = _movement.x;
        velocity.z = _movement.z;

        // Jump
        if (_jumpThisFrame) {
            // Instantaneously set the vertical velocity to 6.0 m/s
            velocity.y = 6.0f;

            // Mark the player as currently jumping and clear the jump input
            _jumping       = true;
            _jumpThisFrame = false;
        }

        // Reset jump after the apex
        if (_jumping && velocity.y < -0.1f)
            _jumping = false;
        
        // Set the velocity on the rigidbody
        _rigidbody.velocity = velocity;
    }

    // Rotate the character to face the direction we're moving. Lean towards the target movement direction.
    private void AnimateCharacter() {
        // Calculate the direction that the character is facing parallel to the ground plane
        Vector3    characterLocalForwardVector = _character.localRotation * Vector3.forward;
        Vector3    characterLookForwardVector  = ProjectVectorOntoGroundPlane(characterLocalForwardVector);
        Quaternion characterLookForward        = Quaternion.LookRotation(characterLookForwardVector);

        // Calculate the angle between the current movement direction and the target movement direction
        Vector3 targetMovementNormalized = _targetMovement.normalized;
        Vector3       movementNormalized =       _movement.normalized;
        float angle = targetMovementNormalized.sqrMagnitude > 0.0f ? SignedAngle2D(targetMovementNormalized, movementNormalized) : 0.0f;

        // Convert the delta between movement direction and the target movement direction to a lean amount. Clamp to +/- 45 degrees so the player doesn't lean too far.
        angle = angle * Mathf.Rad2Deg;
        angle = Mathf.Clamp(angle, -45.0f, 45.0f);

        // Convert the lean angle to a Quaternion that's oriented in the direction the character is facing
        Quaternion leanRotation = characterLookForward * Quaternion.Euler(0.0f, 0.0f, angle);

        // Rotate to face the direction of travel if we're moving forward
        Vector3 targetCharacterLookForwardVector = characterLookForwardVector;
        if (GetRigidbodyForwardVelocity(_rigidbody) >= 2.0f)
            targetCharacterLookForwardVector = _rigidbody.velocity.normalized;

        // Compose the target character rotation from the target look direction + target lean direction
        Quaternion targetRotation = Quaternion.LookRotation(targetCharacterLookForwardVector, leanRotation * Vector3.up);

        // Animate the character towards the target rotation
        _character.localRotation = Quaternion.Slerp(_character.localRotation, targetRotation, 5.0f * Time.fixedDeltaTime);
    }

    // Given a forward vector, get a y-axis rotation that points in the same direction that's parallel to the ground plane
    private static Vector3 ProjectVectorOntoGroundPlane(Vector3 vector) {
        Vector3 planeNormal = Vector3.up;
        Vector3.OrthoNormalize(ref planeNormal, ref vector);
        return vector;
    }

    // Get the rigidbody velocity along the ground plane
    private static float GetRigidbodyForwardVelocity(Rigidbody rigidbody) {
        Vector3 forwardVelocity = rigidbody.velocity;
        forwardVelocity.y = 0.0f;
        return forwardVelocity.magnitude;
    }

    // Get the difference between two angles along the ground plane
    private static float SignedAngle2D(Vector3 a, Vector3 b) {
        float angle = Mathf.Atan2(a.z, a.x) - Mathf.Atan2(b.z, b.x);
        if (angle <= -Mathf.PI) angle += 2.0f * Mathf.PI;
        if (angle >   Mathf.PI) angle -= 2.0f * Mathf.PI;
        return angle;
    }
}
```

And that's it! Enter Play mode and try it out. Everything should work perfectly and be in sync across all clients : )

![](./creating-a-player-controller/hoverbird-completed-1.mp4)

Looks good! Export a build and send it to a friend. You’ll both be able to join and board around together.

For future reference, the complete project is included in the Normcore unitypackage under `Normal/Examples/Realtime + Hoverbird Player`.

Looking to learn more about Normcore? Check out our guides on synchronizing custom data and networked physics:

- [Synchronizing Custom Data](../core-concepts/synchronizing-custom-data)
- [Networked Physics](../core-concepts/networked-physics)
