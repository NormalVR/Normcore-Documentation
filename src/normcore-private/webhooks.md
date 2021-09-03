---
layout: docs
title: Webhooks
---
# Webhooks
Normcore Private Cloud and On-Premises both support using the Webhooks API to verify whether an application or user is entitled to access Normcore.

If you're bundling Normcore in your own SDK, this API is the recommended way to validate application keys against your own database.

## Configuration
### Cloud
The webhook URL is configured when your Normcore Private Cloud installation is created by Normal. In order to change your webhook URL, either file a support ticket or use your dedicated Slack channel to ping one of our engineers.

In the future, this will be configurable using the Normcore Private Dashboard.

### On-Premises
The webhook URL can be specified using the `webhook-url` property of the `cluster-config.yaml` or `matcher-config.yaml`. The URL must use `https` and a valid certificate authority. If this URL is unreachable or does not have a valid certificate, all requests will be denied.

## Request format
When the matcher needs to authenticate one or more requests, it sends a POST request to the webhook endpoint. The request includes a JSON-serialized body with a map of requests to verify.

An example request looks like this:
```json
{
  "85a28363-a104-421b-9dae-9037196b35ea": {
    "appKey": "f0b89d74-a4bb-4dc6-8bcb-0dc063c38e7c",
    "action": "ConnectToRoom",
    "roomName": "Max's Room"
  },
  "28be47de-1078-4c8b-b992-9c5a0b0444d7": {
    "appKey": "f0b89d74-a4bb-4dc6-8bcb-0dc063c38e7c",
    "action": "ConnectToRoom",
    "roomName": "Mike's Room"
  }
}
```

The webhook endpoint is expected to reply with a status for each request. Any request GUIDs that are not included in the response to will fail.

The webhook response should match this format:

```json
{
  "85a28363-a104-421b-9dae-9037196b35ea": {
    "status": "success"
  },
  "28be47de-1078-4c8b-b992-9c5a0b0444d7": {
    "status": "error",
    "errorMessage": "Session has expired",
    "errorContext": "{ errorID: 10 }"
  }
}
```

When denying a request, the `errorMessage` field should include a human-readable version of the error to display to the end-user or developer. The `errorContext` field is a string that is returned to the application making the request. It should include any information your application needs in order to understand and respond appropriately to the error.

## Context
In order to authenticate individual users, Normcore supports passing an optional context string when connecting to a room. In Unity, `Connect()` on `Realtime` and `Room` support a `webhookContext` parameter that will be passed along to your webhook. If you need to pass multiple pieces of information, we recommend sending a JSON string.

An example webhook request with a context variable will look like this:

```json
{
  "85a28363-a104-421b-9dae-9037196b35ea": {
    "appKey": "f0b89d74-a4bb-4dc6-8bcb-0dc063c38e7c",
    "roomName": "Max's Room",
    "context": "{ \"Authorization\": \"This is an example JSON context string\" }"
  },
}
```

## Caching
You may want Normcore to cache results to improve response time and reduce load on your webhook servers. For example, if you're only validating the appKey parameter, you may want to have Normcore cache a result for an hour.

By setting `cacheTime` to `3600` and `cacheKey` to `["appKey"]`, Normcore will cache the result for one hour for all requests where the `appKey` matches.

```json
{
  "85a28363-a104-421b-9dae-9037196b35ea": {
    "status": "success",
    "cacheTime": "3600",
    "cacheKey": ["appKey"]
  },
}
```

You can also use the caching API to mark a specific context value as invalid indefinitely. This result returns an error and instructs Normcore to cache the error response for all future requests that include the same `appKey` and `context` value.

Setting `cacheTime` to `-1` will store the result indefinitely. However, if Normcore is running replicas or an instance is restarted, Normcore will still send an additional webhook request.

```json
{
  "28be47de-1078-4c8b-b992-9c5a0b0444d7": {
    "status": "error",
    "errorMessage": "Session has expired",
    "errorContext": "{ errorID: 10 }",
    "cacheTime": "-1",
    "cacheKey": ["appKey", "context"]
  }
}
```
