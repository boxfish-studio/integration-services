# IntegrationServicesApiDocumentation.ServerInfoApi

All URIs are relative to *https://ensuresec.solutions.iota.org/api/v0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**infoGet**](ServerInfoApi.md#infoGet) | **GET** /info | Get information about the server

<a name="infoGet"></a>
# **infoGet**
> InlineResponse2001 infoGet()

Get information about the server

Get information about the server like commitHash, server identity id and api version

### Example
```javascript
import {IntegrationServicesApiDocumentation} from 'integration_services_api_documentation';
let defaultClient = IntegrationServicesApiDocumentation.ApiClient.instance;

// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new IntegrationServicesApiDocumentation.ServerInfoApi();
apiInstance.infoGet((error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

