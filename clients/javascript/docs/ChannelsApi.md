# IntegrationServicesApiDocumentation.ChannelsApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelsCreatePost**](ChannelsApi.md#channelsCreatePost) | **POST** /channels/create | Create a new channel
[**channelsHistoryChannelAddressGet**](ChannelsApi.md#channelsHistoryChannelAddressGet) | **GET** /channels/history/{channelAddress} | Get the history of a channel.
[**channelsLogsChannelAddressGet**](ChannelsApi.md#channelsLogsChannelAddressGet) | **GET** /channels/logs/{channelAddress} | Get data from the channel
[**channelsLogsChannelAddressPost**](ChannelsApi.md#channelsLogsChannelAddressPost) | **POST** /channels/logs/{channelAddress} | Write data to a channel
[**channelsReImportChannelAddressPost**](ChannelsApi.md#channelsReImportChannelAddressPost) | **POST** /channels/re-import/{channelAddress} | Re import the data from the tangle into the database.
[**channelsValidateChannelAddressPost**](ChannelsApi.md#channelsValidateChannelAddressPost) | **POST** /channels/validate/{channelAddress} | Validates channel data by comparing the log of each link with the data on the tangle.

<a name="channelsCreatePost"></a>
# **channelsCreatePost**
> CreateChannelResponseSchema channelsCreatePost(opts)

Create a new channel

Create a new channel. An author can create a new channel with specific topics where other clients can subscribe to.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelsApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.CreateChannelBodySchema() // CreateChannelBodySchema | 
};
apiInstance.channelsCreatePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateChannelBodySchema**](CreateChannelBodySchema.md)|  | [optional] 

### Return type

[**CreateChannelResponseSchema**](CreateChannelResponseSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsHistoryChannelAddressGet"></a>
# **channelsHistoryChannelAddressGet**
> channelsHistoryChannelAddressGet(channelAddress, presharedKey)

Get the history of a channel.

Get all data of a channel using a shared key (in case of encrypted channels). Mainly used from auditors to evaluate a log stream.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.ChannelsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let presharedKey = "presharedKey_example"; // String | Preshared key defined by the author to encrypt/decrypt data.

apiInstance.channelsHistoryChannelAddressGet(channelAddress, presharedKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelAddress** | [**ChannelAddressSchema**](.md)|  | 
 **presharedKey** | **String**| Preshared key defined by the author to encrypt/decrypt data. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="channelsLogsChannelAddressGet"></a>
# **channelsLogsChannelAddressGet**
> [ChannelDataSchema] channelsLogsChannelAddressGet(channelAddress, opts)

Get data from the channel

Get data from the channel with address channel address. The first possible message a subscriber can receive is the time the subscription got approved all messages before are not received. Read permission is mandatory.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'limit': 1.2, // Number | 
  'index': 1.2, // Number | 
  'asc': true, // Boolean | 
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.channelsLogsChannelAddressGet(channelAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelAddress** | [**ChannelAddressSchema**](.md)|  | 
 **limit** | **Number**|  | [optional] 
 **index** | **Number**|  | [optional] 
 **asc** | **Boolean**|  | [optional] 
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 

### Return type

[**[ChannelDataSchema]**](ChannelDataSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="channelsLogsChannelAddressPost"></a>
# **channelsLogsChannelAddressPost**
> ChannelDataSchema channelsLogsChannelAddressPost(channelAddress, opts)

Write data to a channel

Write data to a channel with address channel address. Write permission is mandatory. The type and metadata fields are not encrypted to have a possibility to search for events. The payload is stored encrypted for encrypted channels.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.AddChannelLogBodySchema() // AddChannelLogBodySchema | 
};
apiInstance.channelsLogsChannelAddressPost(channelAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelAddress** | [**ChannelAddressSchema**](.md)|  | 
 **body** | [**AddChannelLogBodySchema**](AddChannelLogBodySchema.md)|  | [optional] 

### Return type

[**ChannelDataSchema**](ChannelDataSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsReImportChannelAddressPost"></a>
# **channelsReImportChannelAddressPost**
> channelsReImportChannelAddressPost(channelAddress, opts)

Re import the data from the tangle into the database.

The user can decide to re-import the data from the Tangle into the database. A reason for it could be a malicious state of the data.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.ReimportBodySchema() // ReimportBodySchema | 
};
apiInstance.channelsReImportChannelAddressPost(channelAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelAddress** | [**ChannelAddressSchema**](.md)|  | 
 **body** | [**ReimportBodySchema**](ReimportBodySchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsValidateChannelAddressPost"></a>
# **channelsValidateChannelAddressPost**
> ValidateResponseSchema channelsValidateChannelAddressPost(channelAddress, opts)

Validates channel data by comparing the log of each link with the data on the tangle.

Validates data of a channel.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'body': [new IntegrationServicesApiDocumentation.ValidateBodySchemaInner()] // [ValidateBodySchemaInner] | 
};
apiInstance.channelsValidateChannelAddressPost(channelAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelAddress** | [**ChannelAddressSchema**](.md)|  | 
 **body** | [**[ValidateBodySchemaInner]**](ValidateBodySchemaInner.md)|  | [optional] 

### Return type

[**ValidateResponseSchema**](ValidateResponseSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

