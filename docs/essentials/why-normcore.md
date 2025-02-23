---
layout: docs
title: Why Normcore?
---
import datastore from './why-normcore/datastore.mp4'
import fastTransport from './why-normcore/fast-transport.mp4'
import deltaUpdates from './why-normcore/delta-updates.mp4'
import intelligentSerialization from './why-normcore/intelligent-serialization.mp4'
import secureTransport from './why-normcore/secure-transport.mp4'
import highQualityAudioVideo from './why-normcore/high-quality-audio-video.mp4'
import serverScaling from './why-normcore/server-scaling.mp4'
import serverPlacement from './why-normcore/server-placement.mp4'
import networkedPhysics from './why-normcore/networked-physics.mp4'

# Why Normcore?

Normcore is easy to use, but under the hood, it's built using some incredible technology. For those curious about how Normcore works, this page is for you. Whether you're comparing Normcore to other offerings or trying to determine whether you should build your own solution, we hope that after reading this page, you'll realize why Normcore is the best solution for any multiplayer project.

## Philosophy
Our philosophy is simple. Normcore should be better than anything you would write yourself. We spend 100% of our time working on Normcore so you can spend 100% of your time focusing on your project.

### Datastore
<video width="75%" autoPlay playsInline loop muted><source src={datastore} /></video>

#### Problem: Traditional multiplayer networking use RPC messages to synchronize state.

As a developer, it's up to you to synchronize the state of your game by sending messages between each client. If you don't get this part perfect, your game will fail unpredictably. With all clients racing to make changes at the same time, reproducing and fixing these bugs can be incredibly frustrating. This is where many developers spend most of their time when writing netcode.

Want someone to be able to join a match late? Now you need to write the logic for one client to bring the new client up to speed while live changes are still coming in from other clients. It can be an absolute nightmare.

#### Solution: Store all state in a real-time database.

Normcore introduces the concept of a datastore. All state, whether it's the position of a player or the score of the game, is stored in the datastore. Want to move an object in your scene? Update its position in the datastore and Normcore will synchronize the change to everyone else automatically.

Have a player that joins late? No problem, the server can send a snapshot of the datastore and then send delta updates for the remainder of the session.

##### Bonus Features

**Automatic delta updates**: Normcore only sends the minimum information needed to keep all clients in sync.

**Automatic persistent spaces**: When a room shuts down, Normcore can save the datastore to disk and bring it back seamlessly the next time a player connects.



### Fast Transport
<video width="75%" autoPlay playsInline loop muted><source src={fastTransport} /></video>

#### Problem: Large packets often move slower through the public internet

Packets travel through a variety of networking equipment as they make their way from point A to point B. Each step has a maximum transmission unit (MTU) that determines the largest packet size that can be transmitted without fragmentation.

Most multiplayer games use a pretty basic mechanism for transporting packets. They queue up messages to send locally and then serialize them into as few packets as possible. As your packet moves from hop to hop, if a packet is larger than the MTU of any hop along the way, it needs to be broken down and reassembled, introducing added latency. The more hops that need to do this, the more the packet is slowed down.

#### Solution: Use the largest packet size that doesn't introduce fragmentation along the way

This is easier said than done. You could use the smallest MTU (typically ~1500 bytes) as your maximum packet size, but this will also limit the throughput of your connection.

Normcore uses a proprietary transport mechanism for getting packets between clients and the server. Through the use of the datastore, flow control, and intelligent packet fragmentation, Normcore dynamically determines when to send updates and how to fragment them into multiple packets in order to decrease the time it takes for packets to travel from point A to point B.

##### Bonus Features

Normcore’s transport mechanism is so fast that in many cases you’ll see round trip times that are faster than the ping time to our servers.



### Delta Updates
<video width="75%" autoPlay playsInline loop muted><source src={deltaUpdates} /></video>

#### Problem: You can't synchronize all of your state all of the time.

It's not uncommon to have 100 objects in your scene that need to be synchronized. You might have incredibly efficient serialization, but if the majority of objects are at rest, then there's no point in sending their position, rotation, velocity, etc every frame.

#### Solution: Track what changes and synchronize it.

Normcore’s datastore architecture automatically tracks all changes since the last time it sent a packet. When Normcore is ready to send a new packet, it already knows exactly what needs to be included. The result is less data to send, which saves both processing power and bandwidth.



### Intelligent Serialization
<video width="75%" autoPlay playsInline loop muted><source src={intelligentSerialization} /></video>

#### Problem: You don't want to waste CPU on serializing data.

In any multiplayer application, you're going to spend a lot of time serializing and deserializing data. However, if implemented correctly, it can be done with minimal CPU overhead. Delta update tracking from the datastore gets us pretty far, but there's still a lot of room for optimization.

It's not uncommon to write each field of an object at a predefined offset in a buffer. It's fast and you don't have to include any data formatting in the packet. If an object has a name, position, and color, in order to send an update, you serialize every field so it lands in the same place in the buffer. In practice, this burns a lot of CPU time and bandwidth on values that don't change.

On top of just serializing each field, writing to a dynamically resizing buffer (like a MemoryStream object in C#) incurs a lot of overhead every time it needs to resize to allocate room for more data. Copying data to a memory stream is already fairly quick, but every time the internal buffer is resized, it's copied to a new buffer, essentially doubling your serialization time.

#### Solution: Run as little code as possible at runtime and serialize only fields that you have to.

Normcore’s serialization hits near-ideal performance levels by auto-generating all serialization code before you compile your project. Rather than iterating through properties to write to a buffer at runtime, Normcore already knows exactly the fields that have changed, and the fastest way to write them to a buffer.

Additionally, Normcore's serialization doesn't require all fields of an object to be written to a packet. The resulting buffers don't include any wasted space, redundant data, and are smaller than the raw data in memory before any packet compression is applied.

To avoid resizing any internal buffers, Normcore is able to pre-allocate the buffer that will hold all data for an outgoing packet. It knows exactly what values need to be written and can ensure the buffer is large enough to fit all data without resizing during serialization. Most of the time it's reusing a previous buffer and no allocation occurs at all.



### Secure Transport
<video width="75%" autoPlay playsInline loop muted><source src={secureTransport} /></video>

#### Problem: All data should always be encrypted.

At Normal, we believe security and privacy are required for everything we do. However, very few, if any games implement encryption. Some offer it as an optional API on top of their existing unencrypted messages, but this still exposes a lot of information about the connection that should remain private.

#### Solution: Encrypt all packets so all data is sent securely.

This one is pretty simple. Encrypt all packets by default! Normcore uses DTLS to encrypt all packets. It’s the same technology that every web browser in the world uses but is designed for real-time UDP connections like what Normcore uses.



### High Quality, Low Latency, Audio & Video
<video width="75%" autoPlay playsInline loop muted><source src={highQualityAudioVideo} /></video>

#### Problem: Real-time audio & video is really difficult to get right. It's a constant balancing act.

##### Compression
You need to adjust compression speed, audio quality, and packet size. On top of that, there are no settings that work for all devices and connections. They all need to be adjusted live.

##### Playback Buffering
If you play audio as soon as it arrives, you'll hear gaps if packets don't arrive on time. You can throw them in a buffer, but you don't want to add any latency that you don't have to otherwise the connection will feel slow and laggy.

#### Solution: Implement industry-standard VOIP compression and buffering.

##### Compression
The wonderful Opus codec gives us high quality, low bandwidth, and CPU efficient compression. The packets are as small as can be and it [sounds better than any other compression algorithm available](https://opus-codec.org/comparison/). Including MP3 and AAC.

In addition to high-quality compression, Normcore automatically adjusts the encoding bitrate based on each client's connection. If your users are on a high-quality internet connection, their audio quality will be increased automatically.

##### Playback Buffering
Normcore stores incoming audio packets in a buffer, but it performs live analytics to ensure the buffer is always as small as possible. If packets arrive consistently, the local buffer shrinks to reduce latency. However, if packets arrive late or out of order, the buffer grows in order to ensure the stream playback is uninterrupted.



### Server Scaling
<video width="75%" autoPlay playsInline loop muted><source src={serverScaling} /></video>

#### Problem: Your multiplayer infrastructure needs to scale automatically.

Spinning up more servers is easy, but doing it automatically, and before you reach your existing capacity is difficult. Not to mention that you'll want to do this differently depending on the region, time of day, and many other factors.

#### Solution: Normcore benefits from hosting more than one application and includes intelligent autoscaling.

Normal is operating servers for more than just your application, which means we have a large pool of available servers to burst into if your application should see a sudden rush of new users. Normcore is also constantly measuring the load across all of our servers and working to predict if more or less instances are needed.



### Server Placement
<video width="75%" autoPlay playsInline loop muted><source src={serverPlacement} /></video>

#### Problem: The internet does not treat all packets equally.

Real-time applications are very sensitive to latency and your server's physical location has a huge effect on this. Servers that are physically closer will be able to respond faster. On top of this, not all packets are given the same treatment. There's a reason companies like Google and Cloudflare can serve traffic faster than your own servers.

#### Solution: Place servers as close to players as possible, and team up with Google to use their private premium fiber network.

Normcore runs servers in regions across the globe. When you first try to connect to a room, Normcore measures the latency between your client and all available regions to pick the one with the lowest latency.

On top of this, Normcore uses Google’s premium fiber network. When a packet is sent, rather than hopping across the public internet, it finds the closest Google POP and then travels across private fiber directly to Normcore’s servers before doing the same process in reverse to all other clients in a room. This means our packets travel faster across the same physical distance than if they were to travel across the public internet.



### Networked Physics
<video width="75%" autoPlay playsInline loop muted><source src={networkedPhysics} /></video>

#### Problem: Physics in Unity is not deterministic and true server authority is not possible.

Networked physics is difficult to get right. Clients can interact with multiple objects at the same time, and accurately predicting collisions is hard. It's especially difficult in Unity where each device's PhysX simulation will slowly drift apart.

#### Solution: Implement custom prediction, smoothing, and techniques for hiding latency and drift.

Unity's physics engine (PhysX) is not deterministic. The positions of all objects need to be synchronized every frame. We could let the server do this, but interacting with an object would have noticeable latency. An object wouldn't move until the update goes to the server and back.

Normcore solves this by simulating physics locally when you interact with an object. For the local client, changes appear instant. If you toss a ball to another player, they're watching your simulation of the object while it's in flight. However, as soon as they interact with it, Normcore switches to their client's simulation so it appears to have zero-latency on their client as well.

In addition to this, when a rigidbody collides with another one, Normcore automatically claims ownership of the colliding rigidbody so the collision renders seamlessly on all clients.

##### Bonus

In an ideal world, Unity’s physics would be deterministic and all clients could accurately simulate the world perfectly. Normal is working on a custom physics engine for Unity that does this. At this time, we’re reserving the alpha for large-scale projects. If you think you’d be a good fit, [get in touch](https://normcore.io/careers)!
