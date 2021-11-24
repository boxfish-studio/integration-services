# IntegrationServicesApiDocumentation.AuthenticationApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticationProveOwnershipIdentityIdGet**](AuthenticationApi.md#authenticationProveOwnershipIdentityIdGet) | **GET** /authentication/prove-ownership/{identityId} | Request a nonce which must be signed by the private key
[**authenticationProveOwnershipIdentityIdPost**](AuthenticationApi.md#authenticationProveOwnershipIdentityIdPost) | **POST** /authentication/prove-ownership/{identityId} | Get an authentication token by signing a nonce

<a name="authenticationProveOwnershipIdentityIdGet"></a>
# **authenticationProveOwnershipIdentityIdGet**
> NonceSchema authenticationProveOwnershipIdentityIdGet(identityId)

Request a nonce which must be signed by the private key

Request a nonce which must be signed by the private key of the client and send it to /prove-ownership/{identity-id} endpoint via POST. This allows a user to prove ownership of its identity public key.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.AuthenticationApi();
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 

apiInstance.authenticationProveOwnershipIdentityIdGet(identityId, (error, data, response) => {
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

[**NonceSchema**](NonceSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="authenticationProveOwnershipIdentityIdPost"></a>
# **authenticationProveOwnershipIdentityIdPost**
> InlineResponse200 authenticationProveOwnershipIdentityIdPost(identityId, opts)

Get an authentication token by signing a nonce

Get an authentication token by signing a nonce using the private key. If signature is verified, a JWT string will be returned in the response. The nonce can be received from GET /prove-ownership/{identity-id} endpoint. The JWT is used for any future API interaction.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.AuthenticationApi();
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 
let opts = { 
  'body': new IntegrationServicesApiDocumentation.ProveOwnershipPostBodySchema() // ProveOwnershipPostBodySchema | 
};
apiInstance.authenticationProveOwnershipIdentityIdPost(identityId, opts, (error, data, response) => {
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
 **body** | [**ProveOwnershipPostBodySchema**](ProveOwnershipPostBodySchema.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

