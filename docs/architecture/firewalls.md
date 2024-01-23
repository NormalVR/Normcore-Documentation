---
layout: docs
title: Firewalls + Corporate Networks
---
# Firewalls + Corporate Networks
Normcore Public uses multiple cloud providers to ensure a high-quality connection for all players. If you're having trouble connecting to Normcore's servers on a corporate network, make sure the following IP ranges and ports are enabled.


### Normcore Firewall Rules
The following rules should be applied to outbound traffic. Allow the server to communicate back to the destination port received from the client connection.

|Protocol|Ports|Source|Destination|
|:------:|:---:|:----:|:---------:|
TCP|443, 3000|All Normcore Clients|*.normcore.io
UDP|32,768 - 65,535|All Normcore Clients|No outbound IP limit|

### Limiting Hosts and Port Ranges
Normcore makes use of multiple cloud providers to ensure uptime and reliability. If you need to limit the range of hosts or ports, contact us to get [Normcore Private](https://normcore.io/normcore-private). With Normcore Private, our team can create a dedicated deployment that makes use of a single cloud provider and block of IP addresses.
