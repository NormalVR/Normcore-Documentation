---
layout: docs
title: Transport
---
# Transport
A lot of people ask us why we support only WebRTC and not other transports. There's one reason: **WebRTC is simply the best**.

### A note on WebRTC as a protocol
WebRTC is not just for browser apps and games. WebRTC can be utilized the same way native apps utilize WebSockets. However, while WebSockets are fairly simple to implement. WebRTC is close to impossible to implement from scratch. It’s challenging even to compile from existing implementations (Especially Google's libwebrtc). But we still stick with WebRTC because no other transport can provide the same high-quality experience.

### Why WebRTC is the best transport option
WebRTC brings together the features of all the other transports and surpasses them. It provides everything you need.

|                         | WebRTC (Normcore) | WebSockets (Croquet) | eNet (Photon) | Telepathy (Mirror) | kcp2k (Mirror) |
|:-----------------------:|:-----------------:|:--------------------:|:-------------:|:------------------:|:--------------:|
| UDP                     | ✅                | ❌                    | ✅            | ❌                 | ✅              |
| TCP Fallback            | ✅                | ✅                    | ❌            | ✅                 | ❌              |
| Reliable messages       | ✅                | ✅                    | ✅            | ❌                 | ✅              |
| Unreliable messages     | ✅                | ❌                    | ✅            | ✅                 | ✅              |
| TLS/DTLS encryption     | ✅                | ✅                    | ❌            | ❌                 | ❌              |
| Congestion/Flow control | ✅                | ✅                    | ❌            | ✅                 | ✅              |
| Video/Audio Streaming   | ✅                | ❌                    | ❌            | ❌                 | ❌              |
| Browser compatibility   | ✅                | ✅                    | ❌            | ❌                 | ❌              |


### WebRTC supports UDP and TCP
We recommend that you always use UDP if you can. If a TCP packet is dropped along the way, all other packets are stopped until that packet is resent. TCP works like a tunnel that is one car wide. If one car stalls—if one packet is dropped—all the others will get backed up. But sometimes it’s OK to bypass that broken car by building a route around it. That’s what UDP allows—for the flow of traffic to continue without the stalled car. 

For instance, in multiplayer games, these cars could contain audio data or messages about turning on a light switch or where to move objects. If they contain audio data and a packet stalls (gets dropped), it’s best to leave it behind. A small blip of lost audio will be less disruptive than all of the jitter and delay introduced when all following packets are held up in order to resend it. Most of the time, users will understand audio in spite of a small missing chunk, and sometimes the missing chunk of can be recreated using the audio data before and after it.

The thing is, UDP can *only* send packets unreliably. WebRTC introduces reliable channels on top of UDP. WebRTC offers an abstraction that functions in some ways like TCP, but that is actually tailored for real-time, latency-sensitive applications. The use of WebRTC allows unreliable packets—such as transform snapshots or video frames—to be dropped so that attempted resends don't interrupt subsequent incoming messages. 
If a packet is dropped with a WebRTC channel on top of UDP, it's up to you to determine if a packet should be resent immediately or bypassed. Therefore, if the dropped packed is a light switch or a moved object—in other words, data essential and irreplaceable to the game—you can still ensure it’s resent. Anything nonessential, like audio, can be dropped indefinitely.

WebRTC does support TCP as a fallback. Many corporate networks block UDP traffic. If that happens to your traffic, WebRTC allows you to fall back to TCP while still performing actions like congestion control. If WebRTC detects that packets are stalling over TCP, Normcore can reduce the amount of traffic sent in order to prevent packets from building up. This circumvents any congestion issues that could degrade your users’ experience.

### WebRTC is treated as a first-class citizen by the browser
Are you uncertain about supporting the web? Keep in mind that:

* Any productivity app will require the web. Productivity apps focused on collaboration can’t expect every user to download a native app. Providing web access is therefore essential to retaining clients.
* Game developers may not want to ship on the web, but supporting browsers means you can create secondary experiences, such as live spectating.

These are only two of many types of developers who might need to support the web. Yet the only way to support the web as a real-time application is to send data over UDP using WebRTC. Browsers require the WebRTC protocol in order to send unreliable data. 

It’s an impossibly daunting task to switch protocols partway through a project or after its release. This is why we always choose WebRTC from the start.

### WebRTC implements congestion control
Congestion control will make you a good citizen on your local network and on the internet—it will also make your users’ experience much better. With WebRTC, Normcore can automatically adjust the rate at which updates are sent to the server so as to utilize the maximum bandwidth available while still keeping updates smooth for users with poor connections.

### WebRTC uses TLS/DTLS encryption
Implementing encryption correctly is nearly impossible for most developers. It’s a general rule that one should never implement one’s own cryptography. In most cases, the same can be said about implementing even proprietary encryption protocols.  

WebRTC uses DTLS encryption, a form of TLS that works over UDP. TLS/DTLS is used in every secure browser connection around the globe. It is widely accepted as the industry standard for providing secure connections.

There are two central reasons you should always use TLS/DTLS encryption for your products:

1. **Bugs will be caught and fixed immediately.** Bugs in proprietary encryption protocols often go completely unnoticed. Meanwhile, if a bug appears in TLS/DTLS encryption, it will be noticed and fixed immediately due to their widespread use.
2. **You will not accidentally leak sensitive information.** Many networking plug-ins offer encryption, but make it a tool that you can run on your sensitive messages. In practice, sensitive information is often inadvertantly saved in multiple places and ends up in unencrypted messages. This is not an issue when using TLS/DTLS, which encrypts the entire connection; TLS/DTLS fully secures your project.

### WebRTC includes the audio/video features you need
If you want to add audio or video streaming to your product, WebRTC is again the obvious choice. Audio and video features require:

* compression
* jitter buffers
* echo cancellation
* noise suppression
* sample rate conversion
* hardware encoding/decoding 

WebRTC already includes these elements and more, and it implements them better than any other protocol available. It powers Google Meet. It powers Zoom. WebRTC is the only way to achieve industry-standard audio and video quality in your products. 

### Why doesn't everyone use WebRTC?
If WebRTC is so great, why do so few companies use it?

**First, implementing all of WebRTC from scratch is almost impossible.** WebRTC has lots of *incredibly useful features*, but all these features take an *incredibly long time* to implement. Further, each implementation of WebRTC needs to be made compliant with other implementations or it will not be able to support browsers and other clients. This places an obvious barrier on WebRTC access.

**Second, using an off-the-shelf implementation is notoriously difficult.** The only viable option for implementing WebRTC is to compile from an existing implementation, such as Google’s libwebrtc. Google’s libwebrtc implements the full WebRTC protocol—but it is not easy to use. Many developers would [rather rewrite their own protocols from scratch](https://gafferongames.com/post/why_cant_i_send_udp_packets_from_a_browser/#what-about-webrtc) than try to get WebRTC to compile. For those developers who still want to use WebRTC, [entire companies are dedicated solely to compiling it for them](https://web.archive.org/web/20181020093837/https://webrtcbydralex.com/index.php/2018/10/14/libwebrtc-is-open-source-how-hard-can-it-be/). 

Compare WebRTC to a car engine. It would be an engine robust enough to power a top-of-the-line, Formula One racecar (Google Chrome is the racecar in this case). If you want to build a great car yourself, you might want that engine for yourself. But you can only have it if you are able to remove it from the racecar and install it in your own car. To install it, you need to unhook everything, reconfigure the space under the hood of your own vehicle, and find all the parts needed to reconnect the engine in its new home. 

Compiling WebRTC is a little like transferring this racecar engine. It’s a big, messy job. But if you pull it off, the reward is great.

**Third, WebRTC upkeep is rigorous.** Google updates libwebrtc 200 times per week. It also cuts new releases every six weeks, releases that are sometimes non-backwards-compatible. This means that any tricks you’ve used to automate compilation need to be reapplied every six weeks. 

Failure to stay on top of these updates and releases can leave you out of security fixes. We’ve made it our job to ensure that these updates are deployed across all of our platforms so there is never an interruption for your users. 

On top of that, if you want to support multiple platforms, you’ll be compiling separately for each one. Normal has successfully compiled WebRTC for all of the 10+ platforms we support. We were able to do this because it’s our specialty. But we don’t recommend trying this at home.

### Normcore with WebRTC
WebRTC is wildly useful as a protocol. It’s also energy-intensive to build, hard to link against, and upkeep intensive. Still, WebRTC is well worth the effort, or we wouldn’t have chosen it. Normcore applications perform beautifully, surpassing their peers on every platform including the web. Best of all, Normcore manages the transport protocol so you don’t have to. You can access all the benefits of WebRTC—without any of the extra work.
