---
layout: docs
title: WebGL
---
# WebGL
Normcore WebGL support is designed to allow any Normcore project to be compiled for WebGL with no modifications to the source project. WebGL applications are treated as a first-class citizen and given the same network performance as native Normcore applications.

## Getting started

The following steps will create a build of the Player Controller sample for the web:

#### Import the Normcore WebGL preview package

1. Create a fresh Unity project (the latest Unity LTS version), and import the Normcore unitypackage.
2. Wait for Unity to compile and import the Normcore UPM Package. 

At this point, your project will support Normcore WebGL export, but let's create a quick sample project to demonstrate this.

### WebGL Example

Start by opening up the Realtime + Hoverbird Player scene. We'll use this scene as a starting point.

1. Open up your NormcoreAppSettings asset and make sure you have a valid app key and valid matcher URL set. This URL needs to be the URL of a cluster running a version that supports the WebGL preview audio channels.
2. Export a WebGL build and open it in two browser windows. You should see two hoverbirds and be able to control them both in multiplayer.

Although the hoverbird controls don't work on mobile, try opening the scene on iOS or Android. Multiplayer works great between mobile and desktop platforms as well.

## Common questions

#### Unable to load the page or connect to a room
Browsers like Chrome and Firefox are very strict about access to webrtc and the microphone. We recommend that if you're running locally, you're using a local web server like [Simple Web Server](https://simplewebserver.org/), and if you're hosting on a server, you're using a webserver that supports the correct wasm + gzip content headers and has https with a valid certificate.

#### Voice chat spatialization does not work on the web
Unfortunately, Unity's audio engine, FMOD, [does not run on the web](https://docs.unity3d.com/Manual/webgl-audio.html). All voice-chat audio is played directly through the browser rather than through Unity.
