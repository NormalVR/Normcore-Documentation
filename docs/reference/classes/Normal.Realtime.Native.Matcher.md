---
title: Matcher
layout: Reference
category: API Reference
class_name: Matcher
class_members:
- name: Methods
  members:
  - name: Dispose
    definition: void Dispose()
  - name: Connect
    definition: void Connect()
  - name: Disconnect
    definition: void Disconnect()
  - name: Tick
    definition: void Tick()
  - name: SendRequest
    definition: string SendRequest(string requestType, string requestDataJSONString, float timeout)
  - name: GetRequestState
    definition: RequestState GetRequestState(string requestGUID)
  - name: GetRequestFailMessage
    definition: string GetRequestFailMessage(string requestGUID)
  - name: TryGetRequestError
    definition: bool TryGetRequestError(string requestGUID, RequestErrorBridged& error)
  - name: TryGetRequestResponse
    definition: bool TryGetRequestResponse(string requestGUID, RequestResponseBridged& response)
  - name: ClearRequest
    definition: void ClearRequest(string requestGUID)
  - name: ConnectToRoom
    definition: string ConnectToRoom(string requestType, string appKey, string appMetadataJSONString, string roomName, string roomServerOptionsJSONString, string clientOffer, string webhookContext, Cluster[] clusterPingResults = null, Region[] preferredRegions = null)
  - name: ConnectToNextAvailableQuickmatchRoom
    definition: string ConnectToNextAvailableQuickmatchRoom(string requestType, string appKey, string appMetadataJSONString, string roomGroupName, int capacity, string roomServerOptionsJSONString, string clientOffer, string webhookContext, Cluster[] clusterPingResults = null, Region[] preferredRegions = null)
  - name: GetConnectToRoomRequestResponseType
    definition: string GetConnectToRoomRequestResponseType(string requestGUID)
  - name: GetConnectToRoomRequestClustersToPing
    definition: Cluster[] GetConnectToRoomRequestClustersToPing(string requestGUID)
  - name: GetConnectToRoomRequestFoundRoomResponse
    definition: string GetConnectToRoomRequestFoundRoomResponse(string requestGUID)

---
import ReferencePage from '../_ReferencePage.mdx'

<ReferencePage data={ frontMatter } />
