# IntegrationServicesApiDocumentation.ChannelInfoApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelInfoChannelChannelAddressDelete**](ChannelInfoApi.md#channelInfoChannelChannelAddressDelete) | **DELETE** /channel-info/channel/{channelAddress} | Delete information of a channel
[**channelInfoChannelChannelAddressGet**](ChannelInfoApi.md#channelInfoChannelChannelAddressGet) | **GET** /channel-info/channel/{channelAddress} | Get information about a channel
[**channelInfoChannelPost**](ChannelInfoApi.md#channelInfoChannelPost) | **POST** /channel-info/channel | Add an existing channel into the database
[**channelInfoChannelPut**](ChannelInfoApi.md#channelInfoChannelPut) | **PUT** /channel-info/channel | Update channel information
[**channelInfoSearchGet**](ChannelInfoApi.md#channelInfoSearchGet) | **GET** /channel-info/search | Search for a channel

<a name="channelInfoChannelChannelAddressDelete"></a>
# **channelInfoChannelChannelAddressDelete**
> channelInfoChannelChannelAddressDelete(channelAddress)

Delete information of a channel

Delete information of a channel with address channel-address. The author of a channel can delete its entry in the database. In this case all subscriptions will be deleted and the channel won’t be found in the system anymore. The data &amp; channel won’t be deleted from the IOTA Tangle since its data is immutable on the tangle!

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelInfoApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 

apiInstance.channelInfoChannelChannelAddressDelete(channelAddress, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="channelInfoChannelChannelAddressGet"></a>
# **channelInfoChannelChannelAddressGet**
> ChannelInfoSchema channelInfoChannelChannelAddressGet(channelAddress)

Get information about a channel

Get information about a channel with address channel-address.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.ChannelInfoApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 

apiInstance.channelInfoChannelChannelAddressGet(channelAddress, (error, data, response) => {
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

### Return type

[**ChannelInfoSchema**](ChannelInfoSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="channelInfoChannelPost"></a>
# **channelInfoChannelPost**
> channelInfoChannelPost(opts)

Add an existing channel into the database

Add an existing channel into the database. Clients are able to add existing channels into the database so others can subscribe to them. This will be automatically called when a channel will be created.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelInfoApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.ChannelInfoSchema() // ChannelInfoSchema | 
};
apiInstance.channelInfoChannelPost(opts, (error, data, response) => {
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
 **body** | [**ChannelInfoSchema**](ChannelInfoSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelInfoChannelPut"></a>
# **channelInfoChannelPut**
> channelInfoChannelPut(opts)

Update channel information

Update channel information. The author of a channel can update topics of a channel.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelInfoApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.ChannelInfoSchema() // ChannelInfoSchema | 
};
apiInstance.channelInfoChannelPut(opts, (error, data, response) => {
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
 **body** | [**ChannelInfoSchema**](ChannelInfoSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelInfoSearchGet"></a>
# **channelInfoSearchGet**
> [ChannelInfoSchema] channelInfoSearchGet(opts)

Search for a channel

Search for a channel. A client can search for a channel which it is interested in.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.ChannelInfoApi();
let opts = { 
  'author': "author_example", // String | 
  'topicType': "topicType_example", // String | 
  'topicSource': "topicSource_example", // String | 
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'latestMessage': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'limit': 1.2, // Number | 
  'index': 1.2 // Number | 
};
apiInstance.channelInfoSearchGet(opts, (error, data, response) => {
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
 **author** | **String**|  | [optional] 
 **topicType** | **String**|  | [optional] 
 **topicSource** | **String**|  | [optional] 
 **created** | **Date**|  | [optional] 
 **latestMessage** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **index** | **Number**|  | [optional] 

### Return type

[**[ChannelInfoSchema]**](ChannelInfoSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

