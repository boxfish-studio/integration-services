# IntegrationServicesApiDocumentation.SubscriptionsApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionsAuthorizeChannelAddressPost**](SubscriptionsApi.md#subscriptionsAuthorizeChannelAddressPost) | **POST** /subscriptions/authorize/{channelAddress} | Authorize a subscription to a channel
[**subscriptionsChannelAddressGet**](SubscriptionsApi.md#subscriptionsChannelAddressGet) | **GET** /subscriptions/{channelAddress} | Get all subscriptions of a channel.
[**subscriptionsChannelAddressIdentityIdDelete**](SubscriptionsApi.md#subscriptionsChannelAddressIdentityIdDelete) | **DELETE** /subscriptions/{channelAddress}/{identityId} | Deletes subscription
[**subscriptionsChannelAddressIdentityIdGet**](SubscriptionsApi.md#subscriptionsChannelAddressIdentityIdGet) | **GET** /subscriptions/{channelAddress}/{identityId} | Get a subscription by identity id.
[**subscriptionsChannelAddressIdentityIdPost**](SubscriptionsApi.md#subscriptionsChannelAddressIdentityIdPost) | **POST** /subscriptions/{channelAddress}/{identityId} | Adds an existing subscription
[**subscriptionsChannelAddressIdentityIdPut**](SubscriptionsApi.md#subscriptionsChannelAddressIdentityIdPut) | **PUT** /subscriptions/{channelAddress}/{identityId} | Updates an existing subscription
[**subscriptionsRequestChannelAddressPost**](SubscriptionsApi.md#subscriptionsRequestChannelAddressPost) | **POST** /subscriptions/request/{channelAddress} | Request subscription to a channel
[**subscriptionsRevokeChannelAddressPost**](SubscriptionsApi.md#subscriptionsRevokeChannelAddressPost) | **POST** /subscriptions/revoke/{channelAddress} | Revoke subscription to a channel.

<a name="subscriptionsAuthorizeChannelAddressPost"></a>
# **subscriptionsAuthorizeChannelAddressPost**
> AuthorizeSubscriptionResponseSchema subscriptionsAuthorizeChannelAddressPost(channelAddress, opts)

Authorize a subscription to a channel

Authorize a subscription to a channel with address channel-address. The author of a channel can authorize a subscriber to read/write from a channel. Eventually after verifying its identity (using the Ecommerce-SSI Bridge).

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.AuthorizeSubscriptionBodySchema() // AuthorizeSubscriptionBodySchema | 
};
apiInstance.subscriptionsAuthorizeChannelAddressPost(channelAddress, opts, (error, data, response) => {
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
 **body** | [**AuthorizeSubscriptionBodySchema**](AuthorizeSubscriptionBodySchema.md)|  | [optional] 

### Return type

[**AuthorizeSubscriptionResponseSchema**](AuthorizeSubscriptionResponseSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriptionsChannelAddressGet"></a>
# **subscriptionsChannelAddressGet**
> [SubscriptionSchema] subscriptionsChannelAddressGet(channelAddress, opts)

Get all subscriptions of a channel.

Get all subscriptions of a channel. Use the is-authorized query parameter to filter for authorized subscriptions.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'isAuthorized': true // Boolean | 
};
apiInstance.subscriptionsChannelAddressGet(channelAddress, opts, (error, data, response) => {
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
 **isAuthorized** | **Boolean**|  | [optional] 

### Return type

[**[SubscriptionSchema]**](SubscriptionSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsChannelAddressIdentityIdDelete"></a>
# **subscriptionsChannelAddressIdentityIdDelete**
> subscriptionsChannelAddressIdentityIdDelete(channelAddress, identityId)

Deletes subscription

Deletes an existing subscription

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 

apiInstance.subscriptionsChannelAddressIdentityIdDelete(channelAddress, identityId, (error, data, response) => {
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
 **identityId** | [**IdentityIdSchema**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsChannelAddressIdentityIdGet"></a>
# **subscriptionsChannelAddressIdentityIdGet**
> SubscriptionSchema subscriptionsChannelAddressIdentityIdGet(channelAddress, identityId)

Get a subscription by identity id.

Get a subscription of a channel by identity id.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 

apiInstance.subscriptionsChannelAddressIdentityIdGet(channelAddress, identityId, (error, data, response) => {
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
 **identityId** | [**IdentityIdSchema**](.md)|  | 

### Return type

[**SubscriptionSchema**](SubscriptionSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsChannelAddressIdentityIdPost"></a>
# **subscriptionsChannelAddressIdentityIdPost**
> SubscriptionSchema subscriptionsChannelAddressIdentityIdPost(channelAddress, identityId, opts)

Adds an existing subscription

Adds an existing subscription (e.g. the subscription was not created with the api but locally.)

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.SubscriptionSchema() // SubscriptionSchema | 
};
apiInstance.subscriptionsChannelAddressIdentityIdPost(channelAddress, identityId, opts, (error, data, response) => {
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
 **identityId** | [**IdentityIdSchema**](.md)|  | 
 **body** | [**SubscriptionSchema**](SubscriptionSchema.md)|  | [optional] 

### Return type

[**SubscriptionSchema**](SubscriptionSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriptionsChannelAddressIdentityIdPut"></a>
# **subscriptionsChannelAddressIdentityIdPut**
> subscriptionsChannelAddressIdentityIdPut(channelAddress, identityId, opts)

Updates an existing subscription

Updates an existing subscription

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.SubscriptionUpdateSchema() // SubscriptionUpdateSchema | 
};
apiInstance.subscriptionsChannelAddressIdentityIdPut(channelAddress, identityId, opts, (error, data, response) => {
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
 **identityId** | [**IdentityIdSchema**](.md)|  | 
 **body** | [**SubscriptionUpdateSchema**](SubscriptionUpdateSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriptionsRequestChannelAddressPost"></a>
# **subscriptionsRequestChannelAddressPost**
> RequestSubscriptionResponseSchema subscriptionsRequestChannelAddressPost(channelAddress, opts)

Request subscription to a channel

Request subscription to a channel with address channel-address. A client can request a subscription to a channel which it then is able to read/write from.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.RequestSubscriptionBodySchema() // RequestSubscriptionBodySchema | 
};
apiInstance.subscriptionsRequestChannelAddressPost(channelAddress, opts, (error, data, response) => {
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
 **body** | [**RequestSubscriptionBodySchema**](RequestSubscriptionBodySchema.md)|  | [optional] 

### Return type

[**RequestSubscriptionResponseSchema**](RequestSubscriptionResponseSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriptionsRevokeChannelAddressPost"></a>
# **subscriptionsRevokeChannelAddressPost**
> subscriptionsRevokeChannelAddressPost(channelAddress, opts)

Revoke subscription to a channel.

Revoke subscription to a channel. Only the author of a channel can revoke a subscription from a channel.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.SubscriptionsApi();
let channelAddress = new IntegrationServicesApiDocumentation.ChannelAddressSchema(); // ChannelAddressSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.RevokeSubscriptionBodySchema() // RevokeSubscriptionBodySchema | 
};
apiInstance.subscriptionsRevokeChannelAddressPost(channelAddress, opts, (error, data, response) => {
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
 **body** | [**RevokeSubscriptionBodySchema**](RevokeSubscriptionBodySchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

