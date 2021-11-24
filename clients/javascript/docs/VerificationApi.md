# IntegrationServicesApiDocumentation.VerificationApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verificationCheckCredentialPost**](VerificationApi.md#verificationCheckCredentialPost) | **POST** /verification/check-credential | Check the verifiable credential of an identity
[**verificationCreateCredentialPost**](VerificationApi.md#verificationCreateCredentialPost) | **POST** /verification/create-credential | Verify the authenticity of an identity and issue a credential
[**verificationLatestDocumentIdentityIdGet**](VerificationApi.md#verificationLatestDocumentIdentityIdGet) | **GET** /verification/latest-document/{identityId} | Get the latest version of an identity document (DID)
[**verificationRevokeCredentialPost**](VerificationApi.md#verificationRevokeCredentialPost) | **POST** /verification/revoke-credential | Revoke one specific verifiable credential of an identity
[**verificationTrustedRootsGet**](VerificationApi.md#verificationTrustedRootsGet) | **GET** /verification/trusted-roots | Returns a list of Trusted Root identity identifiers (DIDs)
[**verificationTrustedRootsPost**](VerificationApi.md#verificationTrustedRootsPost) | **POST** /verification/trusted-roots | Adds Trusted Root identity identifiers (DIDs)
[**verificationTrustedRootsTrustedRootIdDelete**](VerificationApi.md#verificationTrustedRootsTrustedRootIdDelete) | **DELETE** /verification/trusted-roots/{trustedRootId} | Remove Trusted Root identity identifiers (DIDs)

<a name="verificationCheckCredentialPost"></a>
# **verificationCheckCredentialPost**
> InlineResponse2003 verificationCheckCredentialPost(opts)

Check the verifiable credential of an identity

Check the verifiable credential of an identity. Validates the signed verifiable credential against the Issuer information stored onto the IOTA Tangle and checks if the issuer identity (DID) contained in the credential is from a trusted root.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.VerifiableCredentialSchema() // VerifiableCredentialSchema | 
};
apiInstance.verificationCheckCredentialPost(opts, (error, data, response) => {
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
 **body** | [**VerifiableCredentialSchema**](VerifiableCredentialSchema.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verificationCreateCredentialPost"></a>
# **verificationCreateCredentialPost**
> VerifiableCredentialSchema verificationCreateCredentialPost(opts)

Verify the authenticity of an identity and issue a credential

Verify the authenticity of an identity (of an individual, organization or object) and issue a credential stating the identity verification status. Only previously verified identities (based on a network of trust) with assigned privileges can verify other identities. Having a verified identity provides the opportunity for other identities to identify and verify a the entity they interact to.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.VerifyIdentityBodySchema() // VerifyIdentityBodySchema | 
};
apiInstance.verificationCreateCredentialPost(opts, (error, data, response) => {
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
 **body** | [**VerifyIdentityBodySchema**](VerifyIdentityBodySchema.md)|  | [optional] 

### Return type

[**VerifiableCredentialSchema**](VerifiableCredentialSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verificationLatestDocumentIdentityIdGet"></a>
# **verificationLatestDocumentIdentityIdGet**
> LatestIdentityJsonSchema verificationLatestDocumentIdentityIdGet(identityId)

Get the latest version of an identity document (DID)

Get the latest version of an identity document (DID) from the IOTA Tangle.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
let identityId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 

apiInstance.verificationLatestDocumentIdentityIdGet(identityId, (error, data, response) => {
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

[**LatestIdentityJsonSchema**](LatestIdentityJsonSchema.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verificationRevokeCredentialPost"></a>
# **verificationRevokeCredentialPost**
> verificationRevokeCredentialPost(opts)

Revoke one specific verifiable credential of an identity

Revoke one specific verifiable credential of an identity. In the case of individual and organization identities the reason could be that the user has left the organization. Only organization admins (with verified identities) or the identity owner itself can do that.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.RevokeVerificationBodySchema() // RevokeVerificationBodySchema | 
};
apiInstance.verificationRevokeCredentialPost(opts, (error, data, response) => {
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
 **body** | [**RevokeVerificationBodySchema**](RevokeVerificationBodySchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verificationTrustedRootsGet"></a>
# **verificationTrustedRootsGet**
> InlineResponse2002 verificationTrustedRootsGet()

Returns a list of Trusted Root identity identifiers (DIDs)

Returns a list of Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
apiInstance.verificationTrustedRootsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verificationTrustedRootsPost"></a>
# **verificationTrustedRootsPost**
> verificationTrustedRootsPost(opts)

Adds Trusted Root identity identifiers (DIDs)

Adds Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
let opts = { 
  'body': new IntegrationServicesApiDocumentation.TrustedRootBodySchema() // TrustedRootBodySchema | 
};
apiInstance.verificationTrustedRootsPost(opts, (error, data, response) => {
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
 **body** | [**TrustedRootBodySchema**](TrustedRootBodySchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verificationTrustedRootsTrustedRootIdDelete"></a>
# **verificationTrustedRootsTrustedRootIdDelete**
> verificationTrustedRootsTrustedRootIdDelete(trustedRootId)

Remove Trusted Root identity identifiers (DIDs)

Remove Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';


let apiInstance = new IntegrationServicesApiDocumentation.VerificationApi();
let trustedRootId = new IntegrationServicesApiDocumentation.IdentityIdSchema(); // IdentityIdSchema | 

apiInstance.verificationTrustedRootsTrustedRootIdDelete(trustedRootId, (error, data, response) => {
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
 **trustedRootId** | [**IdentityIdSchema**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

