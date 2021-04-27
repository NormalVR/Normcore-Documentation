---
layout: docs
title: Transport
---
# Transport
Hey, it's Max here, Chief Blob Officer.

A lot of people ask me, Max, why don't you support X transport? Well, there's really one pretty simple reason: the webrtc protocol is simply the best.

## Why doesn't Normcore provide multiple transport options?
When I say webrtc here, I don't mean the browser API, but rather the webrtc spec (TODO: link!). In the same way websockets are a spec that you can use outside of the browser. So is webrtc. And webrtc is /awesome/. Well, let me rephrase that, it's a complete pain in the ass, and libwebrtc is one of the hardest libraries to cross-compile out of anything I've ever tried to compile in my career. As a developer using webrtc directly, it /sucks/, but once it's compiling and working, it is /awesome/.

Why is it awesome, well there's a laundry list of features, UDP & TCP support, congestion control, reliable + ordered packet transport, stream multi-plexing, audio/video streaming, and of course, it's treated as a first-class citizen in the browser. It is not possible to send data over UDP from a browser if you're not using webrtc.

Here's a little comparison chart of webrtc vs other protocols:

Protocols:
webrtc
websockets
UNet (Deprecated)
ENet (Photon)


Things to measure:
TCP / UDP
Congestion Control
TLS/DTLS Encryption


## Why do those things matter?
### Why TCP and UDP support matters
By default, you should /always/ try to use UDP if you can. With TCP, if a packet is dropped along the way, all other packets are kept from your application until that packet is resent. This introduces incredible amounts of jitter and delay in how your data arrives. It also can cause a snowball effect. Unless your application has started sending less data, packets can continue to drop and stall the queue of messages. With UDP, if a packet is dropped, it's up to you to determine if it should be resent.

webrtc introduces reliability on top of UDP to make it function like a TCP connection when it needs to, but allow unreliable packets (such as transform snapshots, or a video frame) to be dropped so they don't stop other messages from getting delivered.

Ok, so why do we /also/ want TCP support then? Well, we want it as a fallback. Most corporate networks block UDP traffic. If that happens, you want to be able to fallback to TCP, but also perform things like congestion control. If webrtc detects that packets are stalling over TCP, Normcore can reduce the amount of traffic to prevent congestion that degrades your user experience.

### Why Congestion Control matters
Who doesn't want to be a good citizen on the internet, but more importantly, it helps you deliver a higher quality experience. Normcore can automatically adjust how often it synchronizes the datastore to ensure the smoothest possible connection for your users and reduce packet loss.

### Why TLS / DTLS matters
Have you ever heard the saying "never implement your own encryption?" - There's a good reason for this saying, and it's because it's /incredibly/ difficult to get right. libwebrtc uses DTLS (the UDP equivalent of TLS that's used in every secure browser connection). It's a widely accepted industry standard for providing secure connections. TLS/DTLS is used in just about every computer on the planet every day. If a bug is found, it's fixed immediately. You're not waiting for someone to target your application, and then for someone on your team to notice and fix the bug. Bugs in proprietary encryption protocols can go completely unnoticed.

## FAQ
### I thought webrtc only worked in the browser?
Nope! It works everywhere, it's just such a complete pain in the ass to compile Google's libwebrtc that most people don't bother trying. Not to worry! The developers at Normal have done all of that work for you : )

### 

