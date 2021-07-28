---
layout: docs
title: Common Questions
---
# Common Questions

## Standalone builds
#### When I try to run my application on another computer or device, I get DllNotFoundException: RealtimeClient!
Double check that RealtimeClient.dll exists in the Plugins folder of your standalone build.

If the file exists, and you’re on Windows, it’s because you need to install the Microsoft Visual Studio 2019 redistributables. If you plan to distribute your app via Steam, Epic Games Store, or the Oculus Store, all of them have an option to ensure this file is already pre-installed when your app is installed so you don’t have to manually install it every time you run.

If you’re on Mac, and using a project that was downloaded from a browser (as opposed to with git), you’ll need to strip the quarantine attribute that’s added by macOS (`xattr -r -d com.apple.quarantine /path/to/project/Library/PackageCache/com.normalvr.normcore*/src/Runtime/Plugins/Mac/RealtimeClient.bundle`)

When distributing your mac build via a link that can be downloaded using a browser, you’ll need to follow Apple's instructions to [notarize your build to prevent](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution) this issue.
