---
layout: docs
title: Setting up a Networked Meta Avatar
---
import playerWave                    from './setting-up-a-net/player-wave.jpg'
import createPlayerObject            from './creating-a-player-controller/create-player-object-2.mp4'
import spherePlayerNoCameraTarget    from './creating-a-player-controller/sphere-player-no-camera-target-3.mp4'
import spherePlayerCameraTarget      from './creating-a-player-controller/sphere-player-camera-target-4.mp4'
import spherePlayerMouseControl      from './creating-a-player-controller/sphere-player-mouse-control-5.mp4'
import spherePlayerMouseJump         from './creating-a-player-controller/sphere-player-mouse-jump-6.mp4'
import hoverbirdPlayerNoAnimation    from './creating-a-player-controller/hoverbird-player-no-animation-7.mp4'
import hoverbirdPlayerAnimated       from './creating-a-player-controller/hoverbird-player-animated-8.mp4'
import makingPlayerPrefab            from './creating-a-player-controller/making-player-prefab-9.mp4'
import localOnlyPlayerControls       from './creating-a-player-controller/local-only-player-controls-10.mp4'
import playerWithoutTransformSyncing from './creating-a-player-controller/player-without-transform-syncing-11.mp4'
import addRealtimeTransformsToPlayer from './creating-a-player-controller/add-realtime-transforms-to-player-12.mp4'

# Setting up a Networked Meta Avatar

This guide will demonstrate how to quickly load a Meta Avatar and network it to other machines using Normal.

When you're finished, you'll end up with an application that will let you see and talk to other player's avatars:

<video width="100%" controls><source src={playerWave} /></video> 

## Setting up your VR environment

Start by creating a blank unity VR scene, with the camera properly tracked to the player's head.

<video width="100%" controls><source src={playerWave} /></video> 

Create a game object and add a Realtime component to it.  Point your Realtime component at a NormcoreAppSettings scriptable object that has your app id in it.  Then, add a RealtimeAvatarManager component.

<video width="100%" controls><source src={playerWave} /></video> 

For the avatar system to initalize properly, your scene will require a number of components in it (OvrAvatarManager, AvatarLODManager, GPUSkinningConfiguraiton and OvrAvatarShaderManager).  The easiest way get these is to install the Meta Avatar SDK Sample Scenes, and use one of the prefabs they provide as part of that.

First install the sample scenes through the package manager.  If you don't see the Meta Avatar SDK, you may need to [add the Meta Avatar SDK to your package list manually.](https://developer.oculus.com/downloads/package/meta-avatars-sdk/)

<video width="100%" controls><source src={playerWave} /></video> 

Then add the Samples->Meta Avatar SDK->Version Number->Sample Scenes->Common->Prefabs->AvatarSDKManager->Recommended->AvatarSDKManagerMeta.prefab to your scene.

<video width="100%" controls><source src={playerWave} /></video> 

Finally, if you will be running your program on a Quest headset, you will need to initalize the ovr core system prior to the Avatars and Normcore.  This can be done by creating a component that calls the OvrPlatformInit.InitializeOvrPlatform() (a version has been included int the Normal.Realtime.Shared.OculusMeta for convience, but it can also be found as part of the Meta Avatar SDK Sample.)

```csharp
using System.Collections;
using UnityEngine;
using Oculus.Platform;
using Normal.Realtime.Shared.OculusMeta;

public class MetaAvatarConnect : MonoBehaviour
{
    private void Awake()
    {
        StartCoroutine(SetupOvrPlatform());
    }

    private IEnumerator SetupOvrPlatform()
    {
        // Ensure OvrPlatform is Initialized
        if (!Core.IsInitialized())
        {
            OvrPlatformInit.InitializeOvrPlatform();
        }

        while (OvrPlatformInit.status != OvrPlatformInitStatus.Succeeded)
        {
            if (OvrPlatformInit.status == OvrPlatformInitStatus.Failed)
            {
                Debug.LogError("Error initializing OvrPlatform");
                yield break;
            }
            yield return null;
        }

    }
}
```

Once you have added that to a game object in your scene, you are ready to create your Meta Avatar!

## Creating your Meta Avatar





