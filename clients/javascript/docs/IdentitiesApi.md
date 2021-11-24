# IntegrationServicesApiDocumentation.IdentitiesApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identitiesCreatePost**](IdentitiesApi.md#identitiesCreatePost) | **POST** /identities/create | Create a new decentralized digital identity (DID)
[**identitiesIdentityIdentityIdDelete**](IdentitiesApi.md#identitiesIdentityIdentityIdDelete) | **DELETE** /identities/identity/{identityId} | Removes an identity from the Bridge
[**identitiesIdentityIdentityIdGet**](IdentitiesApi.md#identitiesIdentityIdentityIdGet) | **GET** /identities/identity/{identityId} | Get information about a specific identity
[**identitiesIdentityPost**](IdentitiesApi.md#identitiesIdentityPost) | **POST** /identities/identity | Register an existing identity into the Bridge
[**identitiesIdentityPut**](IdentitiesApi.md#identitiesIdentityPut) | **PUT** /identities/identity | Update claim of a registered identity
[**identitiesSearchGet**](IdentitiesApi.md#identitiesSearchGet) | **GET** /identities/search | Search for identities

<a name="identitiesCreatePost"></a>
# **identitiesCreatePost**
> IdentityJsonUpdateSchema identitiesCreatePost(opts)

Create a new decentralized digital identity (DID)

Create a new decentralized digital identity (DID). Identity DID document is signed and published to the ledger (IOTA Tangle). A digital identity can represent an individual, an organization or an object. The privateAuthKey controlling the identity is returned. It is recommended to securely (encrypt) store the privateAuthKey locally, since it is not stored on the APIs Bridge.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.IdentitiesApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.CreateIdentityBodySchema() // CreateIdentityBodySchema | 
};
apiInstance.identitiesCreatePost(opts, (error, data, response) => {
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
 **body** | [**CreateIdentityBodySchema**](CreateIdentityBodySchema.md)|  | [optional] 

### Return type

[**IdentityJsonUpdateSchema**](IdentityJsonUpdateSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="identitiesIdentityIdentityIdDelete"></a>
# **identitiesIdentityIdentityIdDelete**
> identitiesIdentityIdentityIdDelete(identityId, opts)

Removes an identity from the Bridge

Removes an identity from the Bridge. An identity can only delete itself and is not able to delete other identities. Administrators are able to remove other identities. The identity cannot be removed from the immutable IOTA Tangle but only at the Bridge. Also the identity credentials will remain and the identity is still able to interact with other bridges.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.IdentitiesApi();
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 
let opts = { 
  'revokeCredentials': true, // Boolean | If true all credentials will be revoked and deleted.
  'revokeSubscriptions': true // Boolean | If true all subscriptions will be revoked and deleted.
};
apiInstance.identitiesIdentityIdentityIdDelete(identityId, opts, (error, data, response) => {
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
 **identityId** | [**IdentityIdSchema**](.md)|  | 
 **revokeCredentials** | **Boolean**| If true all credentials will be revoked and deleted. | [optional] 
 **revokeSubscriptions** | **Boolean**| If true all subscriptions will be revoked and deleted. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="identitiesIdentityIdentityIdGet"></a>
# **identitiesIdentityIdentityIdGet**
> IdentitySchema identitiesIdentityIdentityIdGet(identityId)

Get information about a specific identity

Get information (including attached credentials) about a specific identity using the identity-id (DID identifier).

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.IdentitiesApi();
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 

apiInstance.identitiesIdentityIdentityIdGet(identityId, (error, data, response) => {
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
 **identityId** | [**IdentityIdSchema**](.md)|  | 

### Return type

[**IdentitySchema**](IdentitySchema.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="identitiesIdentityPost"></a>
# **identitiesIdentityPost**
> IdentitySchema identitiesIdentityPost(opts)

Register an existing identity into the Bridge

Register an existing identity into the Bridge. This can be used if the identity already exists or it was only created locally. Registering an identity in the Bridge makes it possible to search for it by using some of the identity attributes, i.e., the username.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.IdentitiesApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.IdentitySchema() // IdentitySchema | 
};
apiInstance.identitiesIdentityPost(opts, (error, data, response) => {
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
 **body** | [**IdentitySchema**](IdentitySchema.md)|  | [optional] 

### Return type

[**IdentitySchema**](IdentitySchema.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="identitiesIdentityPut"></a>
# **identitiesIdentityPut**
> IdentitySchema identitiesIdentityPut(opts)

Update claim of a registered identity

Update claim of a registered identity.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.IdentitiesApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.IdentitySchema() // IdentitySchema | 
};
apiInstance.identitiesIdentityPut(opts, (error, data, response) => {
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
 **body** | [**IdentitySchema**](IdentitySchema.md)|  | [optional] 

### Return type

[**IdentitySchema**](IdentitySchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="identitiesSearchGet"></a>
# **identitiesSearchGet**
> IdentitySchema identitiesSearchGet(opts)

Search for identities

Search for identities in the system and returns a list of existing identities.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.IdentitiesApi();
let opts = { 
  'type': "type_example", // String | 
  'username': "username_example", // String | 
  'registrationDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'limit': 1.2, // Number | 
  'index': 1.2 // Number | 
};
apiInstance.identitiesSearchGet(opts, (error, data, response) => {
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
 **type** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 
 **registrationDate** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **index** | **Number**|  | [optional] 

### Return type

[**IdentitySchema**](IdentitySchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

