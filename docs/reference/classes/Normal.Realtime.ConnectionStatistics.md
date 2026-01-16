---
title: ConnectionStatistics
layout: Reference
category: API Reference
class_name: ConnectionStatistics
class_summary: Statistics for the connection to a server.
class_remarks: Use  to get the connection statistics for a specific room.
class_members:
- name: Fields
  members:
  - name: connection
    definition: public Connection connection
    summary: The statistics for the overall connection, across all channels.
  - name: channel
    definition: public Channels channel
    summary: The statistics for the subset of channels specified when [Normal.Realtime.Room.GetConnectionStatistics(Normal.Realtime.ChannelFlags)](Normal.Realtime.Room.GetConnectionStatistics(Normal.Realtime#channelflags)) was called.
- name: Methods
  members:
  - name: ToString
    definition: string ToString()

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
