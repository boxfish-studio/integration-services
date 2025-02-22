# Ecommerce-SSI Bridge

## Concept and logic architecture

The Ecommerce-SSI Bridge allows users to create Self-Sovereign Identities, linking Decentralized Identifiers (DIDs) to their specification ([DID Documents](https://www.w3.org/TR/did-core/)). DIDs are public/private key pairs and can be created for organizations, individuals and objects. Each identity is represented by a unique public key immutably stored onto the ledger (in our case the IOTA Tangle). Identities and public keys are used to anchor off-chain Verifiable Credentials ([VCs](https://www.w3.org/TR/vc-data-model/)), certificates containing identity attributes and signed by an Issuer identity (using its private key).

The Issuer itself is an entity with its own decentralized identity. The Bridge allows an identified trust root to verify users identity. Verified identities can then propagate this verification to other entities (organizations, individuals, objects) identity using a network of trust approach (see figure below).

![network-of-trust](./assets/arch/network-of-trust.jpeg)


The Bridge also allows Issuers to issue Verifiable Credentials for selected identity Owners (identified by a decentralized identity) and Owners to present them to Verifiers. Verifiers can use the Ecommerce-SSI Bridge APIs to verify credentials authenticity. This requires verifying that a credential contains the identifier (DID) of the owner presenting it, and it is signed by an authorised Issuer. This requires accessing the information stored onto a ledger.

The image below shows the interaction between Issuer, Owner, Verifier and the ledger to manage the lifecycle of decentralized identities and verifiable credentials.


<img width="742" alt="Screenshot 2021-05-21 at 22 21 11" src="https://user-images.githubusercontent.com/1702827/119199429-ef67bc80-ba82-11eb-8d74-c92f5bc66717.png">


The IOTA Ecommerce-SSI Bridge provides an abstraction layer through REST APIs that allows entities to create decentralized identities (DIDs), verify them, attach verifiable credentials and verify them.

The figure below shows the envisioned system architecture (within the full set of IOTA Integration Services developed for the ENSURESEC project).
![IOTA-Tools-Architecture](https://user-images.githubusercontent.com/1702827/119853084-c5d9e580-bf07-11eb-9cac-9aab23d7123a.png)

Below we provide examples on how the Bridge could be used in the context of e-commerce ecosystems, in particular: 1) secure goods distribution and 2) secure sales.

## Use cases
### Secure goods distribution
#### Use case 1. Delivery company identity and scanners verification

__Problem__: Protection of Delivery: avoid goods being handled by unauthorised carriers; avoid threats and frauds in the distribution chain. 

In the context of ENSURESEC e-commerce ecosystem, the proposed use case will make use of the Ecommerce-SSI Bridge to implement the following workflow:
* An authorised employee of a delivery company X registers an identity (DID) for their organization using the Ecommerce-SSI Bridge;
* An e-commerce operator verifies the delivery company organization identity and uses the Bridge to issue a credential for the company to deliver on their behalf. The credential contains the company organization DID and it is signed by the e-commerce operator private key (associated to its identity; previously established);
* The authorised employee of the verified delivery company registers a DID for each scanner (i.e. android scanners) used by the company couriers;
* The authorised employee uses the Ecommerce-SSI Bridge to issue authorisation credentials to the scanner devices used to handling deliveries (with such credentials stored locally into the scanner devices);
* When a courier hands over the delivery, the scanner device uses the Ecommerce-SSI Bridge to present its credential to the e-commerce operator;
* The e-commerce operator uses the Ecommerce-SSI Bridge to verify that the parcel was handled by an authorised courier and device and not stolen or diverted in transit. This is possible because of the verification of the device handling the scanning of the delivery;
* (optionally) The customer can acquire the courier scanner device credential (in the form of a QR code read through her mobile phone) and use the Ecommerce-SSI Bridge to verify that the scanner device belongs to a delivery company authorised by her e-commerce operator. This allows to verify authentic deliveries.


#### Use case 2. Customer identity and delivery verification

__Problem__: Proof of Collection: guarantee goods being collected by the right customer; avoid threats and frauds in the distribution chain. 

In the context of ENSURESEC e-commerce ecosystem, the proposed use case will make use of the Ecommerce-SSI Bridge to implement the following workflow:
* A customer creates a decentralized identity (DID) using a mobile application (a standalone credential wallet or an e-commerce shopping app);
* The customer performs a purchase on an e-commerce site (see below use case 2 in case of age verification is required);
* The e-commerce site uses the Ecommerce-SSI Bridge to issue a proof of purchase credential to the customer (this is saved to the customer phone);
* The customer receives the product delivery and present the credential in the form af a QR code to the courier scanner;
* The courier acquires the credential and uses the Ecommerce-Bridge to verify its authenticity; the delivery is safely handled over to the right customer;
* (optionally) The customer acquires the courier scanner credential (see above, use case 1) and uses the Ecommerce-SSI Bridge to verify that it belongs to an authorised delivery company; the customer knows the delivery is legit.

_The two scenarios above become even more interesting in case of automated (i.e., drones) delivery. And when including also product identification._

### Secure e-commerce sales
#### Use case 1. Customer identity and credential (age) verification

__Problem__: Verify customer identity and avoid to collect and store personal information; increasing compliance and reducing liability for e-commerce and small sellers.

In the context of ENSURESEC e-commerce ecosystem, the proposed use case will make use of the Ecommerce-SSI Bridge to implement the following workflow:
* An authorised bank employee registers an _organization_ decentralized identity (DID) for its bank;
* A customer creates a decentralized identity (DID) using a mobile application (a standalone credential wallet or an e-commerce shopping app);
* The customer requests an Issuer (e.g., the bank) to issue a credential staying her age;
* The issuer uses information about the user held on local record (and previously verified) and the Ecommerce-SSI Bridge to create and issue a Verifiable Credential to the customer;
* The customer (namely Owner) downloads the credential in her app, using a credential wallet;
* The customer purchases an item that requires age verification on an e-commerce site;
* The customer provides her credential to the e-commerce website using the Ecommerce-SSI Bridge;
* The e-commerce site uses the Ecommerce-SSI Bridge to verify the credential and authorise the purchase.

_A similar scenarion can be applied in case of online purchase of dedicated drugs for specific health condition. The customer can be issued with a credential from her GP statying her condition._


#### Use case 2. Seller identity verification 

__Problem__: Verify sellers identity; reducing small sellers compliance burden and reputation risks.

In the context of ENSURESEC e-commerce ecosystem, the proposed use case will make use of the Ecommerce-SSI Bridge to implement the following workflow:
* An e-commerce site allows a seller authorised employee to create a decentralized identity (DID for organization) using the Ecommerce-SSI Bridge;
* The seller requests an Issuer (e.g., its bank) to issue a credential stating its KYC (Know Your Customer) status;
* The seller presents the credentials to the e-commerce site operator using the Ecommerce-SSI Bridge;
* The e-commerce site operator verifies the seller credentials using the Ecommerce-SSI Bridge and allow the seller to trade on its marketplace

#### Use case 3. Product identity and authenticity

__Problem__: Verify product authenticity; reducing counterfeit.

In the context of ENSURESEC e-commerce ecosystem, the proposed use case will make use of the Ecommerce-SSI Bridge to implement the following workflow:
* The e-commerce site allows the seller to create a decentralized identity for each of its products (DID for objects) using the Ecommerce-SSI Bridge;
* The e-commerce site allows the seller to create and sign an authenticity credential associated to a given product identity using the Ecommerce-SSI Bridge;
* A user app allows a customer to obtain the product authenticity credential (scanning a QR from an e-commerce site or directly attached to a purchased product);
* A user app allows a customer to verify signature of the product authenticity credential using the Ecommerce-SSI Bridge (thus allowing verification of the seller identity).

<!-- perhaps we need to explain the data model -->

## Software Architecture and APIs Definition
The software and services architecture and the list of provided APIs are shown in the figure below.

![ecommerce-ssi-bridge](./assets/diagrams/ecommerce-ssi-bridge.jpeg)

> ### An interactive swagger documentation of the API can be found [here](https://ensuresec.solutions.iota.org/docs/).


### Identity Service 
The service allows to create decentralized identity onto the IOTA Tangle and to locally manage information for their indexing and search. This service is provided centrally for ease of use but in production ready scenario it is recommended to be installed locally.

__Prefix:__ `/api/v1/identities`

`GET /search`

Search for identities in the system and returns a list of existing identities. 

_Body:_

```
-
```

_Response:_
```
-
```


`GET /identity/{identity-id}`

Get information (including attached credentials) about a specific identity using the identity-id (DID identifier). 

_Body:_

```
-
```

_Response:_
```
{
    "id": string,
    "publicKey": string,
    "username": string,
    "registrationDate": string,
    "claim": {
        "type": string,
        // further data about the identity
    },
    "verifiableCredentials": {
        "@context": string,
        "id": string,
        "type": string[],
        "credentialSubject": any,
        "issuer": string,
        "issuanceDate": string,
        "proof": {
            "type": string,
            "verificationMethod": string,
            "signatureValue": string
        }
    }[],
    "role": string
}
```

`POST /create`

Create a new decentralized digital identity (DID). Identity DID document is signed and published to the ledger (IOTA Tangle). A digital identity can represent an individual, an organization or an object. The privateAuthKey controlling the identity is returned. It is recommended to securely (encrypt) store the privateAuthKey locally, since it is not stored on the APIs Bridge.

_Body:_

```
{
  "username"?: string,
  "claim": {
        "type": string,
        // further data about the identity like the following for a Person
        "name"?: string,
        "familyName"?: string,
        "givenName"?: string,
        "jobTitle"?: string,
   }
}
```

_Response:_
```
{
    "doc": {
        "id": string,
        "authentication": [
            {
                "id": string,
                "controller": string,
                "type": string,
                "publicKeyBase58": string,
            }
        ],
        "created": string,
        "updated": string,
        "proof": {
            "type": string,
            "verificationMethod": string,
            "signatureValue": string,
        }
    },
    "key": {
        "type": string,
        "public": string,
        "secret": string,
        "encoding": string
    },
    "txHash": string
}
```


`POST /identity`

Register an existing identity into the Bridge. This can be used if the identity already exists or it was only created locally. Registering an identity in the Bridge makes it possible to search for it by using some of the identity attributes, i.e., the username.

<!-- I am not sure we should have this functionalities, it is against the principle of SSI -->
<!-- I understand what you mean but every SSI needs to be registered in any way. For instance if someone wants access to your channel you won't give him access with only the DID, you want a verifiable credential or something from the identity to know who is behind it. Having the possibility to store identities also makes it easier if you want to use it to manage your IoT devices for instance. -->

_Body:_

```
{
    "id": string,
    "publicKey": string,
    "username": string,
    "type": string,
    "registrationDate": string,
    "claim": any,
    "verifiableCredentials": {
        "@context": string,
        "id": string,
        "type": string[],
        "credentialSubject": any,
        "issuer": string,
        "issuanceDate": string,
        "proof": {
            "type": string,
            "verificationMethod": string,
            "signatureValue": string
        }
    }[],
    "role": string
}
```

_Response:_
```
-
```

`PUT /identity`

Update claim of a registered identity.
<!-- still would want to explain how this is done --> 
<!-- we need to discuss this for instance shall it revoke the existing credentials if I update my identity? -->
_Body:_

```
{
    "id": string,
    "publicKey": string,
    "username": string,
    "registrationDate": string,
    "claim": {
        "type": string,
        // further data about the identity
    },
    "verifiableCredentials": {
        "@context": string,
        "id": string,
        "type": string[],
        "credentialSubject": any,
        "issuer": string,
        "issuanceDate": string,
        "proof": {
            "type": string,
            "verificationMethod": string,
            "signatureValue": string
        }
    }[],
    "role": string
}
```

_Response:_
```
-
```

`DELETE /identity/{identity-id}`

Removes an identity from the Bridge. An identity can only delete itself and is not able to delete other identities. Administrators are able to remove other identities. The identity cannot be removed from the immutable IOTA Tangle but only at the Bridge. Also the identity credentials will remain and the identity is still able to interact with other bridges.

<!-- I understand this are functions that makes easier to search and interact, a sort of index. But we need to be sure we do not store personal data. More we need to be sure we implement standards for identities indexing and search -->
<!-- Actually we store personal data and I don't see a problem in it since data is in a database which can be removed. But I could see use cases where this store of identities might not be wanted or are already stored in another system so they don't want it to be stored twice. In this case, I could make the data storage optional or if you prefer we could completely remove it though. -->

_Body:_

```
-
```

_Response:_
```
-
```


### Authentication Service 
The service allows previously created identies to be authenticated and authorized to use the Bridge. This is required to maintain the security of the Bridge and audit its use, but it can be removed in case the Bridge is deployed locally to each party.

__Prefix:__ `/api/v1/authentication`

`GET /prove-ownership/{identity-id}`

Request a nonce which must be signed by the private key of the client and send it to /prove-ownership/{identity-id} endpoint via POST. This allows a user to prove ownership of its identity public key.

_Body:_

```
-
```

_Response:_
```
{
    "nonce": string
}
```

`POST /prove-ownership/{identity-id}`

Get an authentication token by signing a nonce using the private key. If signature is verified, a JWT string will be returned in the response. The nonce can be received from `GET /prove-ownership/{identity-id}` endpoint. The JWT is used for any future API interaction.

_Body:_

```
{
    "signedNonce": string
}
```

_Response:_

```
{
    "jwt": string
}
```

### Verification Service
The service allows to verify identities, create and verify credentials. This is the abstraction layer that allows every entity to easily deal with IOTA decentralized (SSI) identity implementation. 

__Prefix:__ `/api/v1/verification`


`GET /check-credential`

Check the verifiable credential of an identity. Validates the signed verifiable credential against the Issuer information stored onto the IOTA Tangle and checks if the issuer identity (DID) contained in the credential is from a trusted root.

_Body:_

```
{
    "@context": string,
    "id": string,
    "type": string[],
    "credentialSubject": any,
    "issuer": string,
    "issuanceDate": string,
    "proof": {
        "type": string,
        "verificationMethod": string,
        "signatureValue": string
    }
}
```

_Response:_
```
{
    "isVerified": boolean
}
```

`POST /create-credential`

Verify the authenticity of an identity (of an individual, organization or object) and issue a credential stating the identity verification status. Only previously verified identities (based on a network of trust) with assigned privileges can verify other identities. Having a verified identity provides the opportunity for other identities to identify and verify a the entity they interact to.

_Body:_

```
{
    "subject": {
        "id": string,
        "credentialType": string,
        "claim": { // the claim will become the credentialSubject
            "type": string,
            // further data about the identity
        }, 
    },
    "initiatorVC": {
        "@context": string,
        "id": string,
        "type": string[],
        "credentialSubject": any,
        "issuer": string,
        "issuanceDate": string,
        "proof": {
            "type": string,
            "verificationMethod": string,
            "signatureValue": string
        }
    }
}
```

_Response:_
```
{
    "@context": string,
    "id": string,
    "type": string[],
    "credentialSubject": any,
    "issuer": string,
    "issuanceDate": string,
    "proof": {
        "type": string,
        "verificationMethod": string,
        "signatureValue": string
    }
}
```

`POST /revoke-credential`

Revoke one specific verifiable credential of an identity. In the case of individual and organization identities the reason could be that the user has left the organization. Only organization admins (with verified identities) or the identity owner itself can do that.

<!-- not here but in the deliverable we need to explain how revocation is implemented in practice --> 

_Body:_

```
{
   "signatureValue": string
}
```

_Response:_
```
-
```


`GET /trusted-roots`

Returns a list of Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

_Body:_

```
-
```

_Response:_
```
{
    "trustedRoots": string[]
}
```

`GET /latest-document/{identity-id}`

Get the latest version of an identity document (DID) from the IOTA Tangle.

_Body:_

```
-
```

_Response:_
```
{
    "id": string,
    "authentication": [
        {
            "id": string,
            "controller": string,
            "type": string,
            "publicKeyBase58": string
        }
    ],
    "created": string,
    "updated": string,
    "proof": {
        "type": string,
        "verificationMethod": string,
        "signatureValue": string
    }
}
```

## HowTo
<!-- to replace with an end-to-end tutorial based on a selected use case. Suggest to align to the example of the scanner above, but it needs a lot of rewording. To be done later -->
In the following we focus on the secure goods distribution scenario. This might require the creation and life-cycle management of organization and object (devices) identities.

### Create and verify a device identity (DID)

The first step is to create an (object) identity (in this case for a device) and verify its authenticity. This allows all the interacting parties to trust each involved identity. Furthermore it is possible to add several information about the given entity represented by the identity. Examples can be a name or to which organization the identity (and its owner) belongs to. These attributes are expressed in the form of Verifiable Credentials, statements about the entity linked to the identity (e.g., an individual, an organization, an object). VCs are signed by a third party (using its identity and corresponding private key). 


The steps are the following.

#### 1. Create the device identity (DID)

The creation of an identity is one of the key aspects when interacting with other identities. By creating an identity, the owner of the identity creates a public/private key pair. 

The public key represents the identity public identifier (DID), represented by a DID document stored onto the IOTA ledger. The private key is kept secret and used to prove ownership of that the identity. 

To specify the identity attributes, currently the Ecommerce-SSI Bridge supports five data models types: `Device`, `Person`, `Organization`, `Service` and `Product`. These are the currently valid type for an identity and are derived by adapting the data models of https://schema.org.<!-- do we have a better link --> <!-- i don't have a better, what do you mean by this? --> In addition, our implementation allows to define custom user's types, to fulfil the need of use cases with different data types. The type of an identity is defined by the field type; if an unknown type is provided, the API will reject the call.

<!-- to check. In a normal process; I would create first the identity then add attributes. But I might be wrong. Check DID standards for this -->
<!-- yes exactly -->

> The exact data model definition can be found here: https://gist.github.com/dominic22/186f67b759f9694f45d35e9354fa5525

The following snippet demonstrates an example where a device identity is created and verified by a previously verified organization. Since schema.org does not provide a data model for devices, the device attributes linked to its identity are derived from the [FIWARE device data model](https://github.com/smart-data-models/dataModel.Device/blob/master/Device/doc/spec.md).

https://ensuresec.solutions.iota.org/api/v0.1/identities/create

The body of the POST request contains the Device type, a username and a claim field which contains detailed attributes about the device identity.

<!-- what is the role of the username? --> 
<!-- this was intended to have a easier indexable method to identify idendities instead of their identity id -->

```
{
  "username": "iota-test-device",
  "claim": {
        "type": "Device",
        "category": ["sensor"],
        "controlledProperty": [
            "fillingLevel",
            "temperature"
        ],
        "controlledAsset": ["wastecontainer-Osuna-100"],
        "ipAddress": ["192.14.56.78"],
        "mcc": "214",
        "mnc": "07",
        "serialNumber": "9845A",
        "refDeviceModel": "myDevice-wastecontainer-sensor-345",
        "dateFirstUsed": "2014-09-11T11:00:00Z",
        "owner": ["did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"]
    }
}
```

The request returns the following body:

```
{
    "doc": {
        "id": "did:iota:CM2H6tQo2GuviYBmbUpHkA4Ava1NB6KR5itmNWAhP8bh",
        "authentication": [
            {
                "id": "did:iota:CM2H6tQo2GuviYBmbUpHkA4Ava1NB6KR5itmNWAhP8bh#key",
                "controller": "did:iota:CM2H6tQo2GuviYBmbUpHkA4Ava1NB6KR5itmNWAhP8bh",
                "type": "Ed25519VerificationKey2018",
                "publicKeyBase58": "Dw6AinmNy39TZYFtgj7ktLwVaUq3Kd84nT6g4xcfEKk9"
            }
        ],
        "created": "2021-06-18T11:31:31Z",
        "updated": "2021-06-18T11:31:31Z",
        "proof": {
            "type": "JcsEd25519Signature2020",
            "verificationMethod": "#key",
            "signatureValue": "4mthsbaETSBavC4PWhwBf2U2iSEeB8Dvx8Ai2LdxWan3RmPmPMNykifWr2X37T6A7oEiHMsrBQEtoL1wd34eGNvC"
        }
    },
    "key": {
        "type": "ed25519",
        "public": "Dw6AinmNy39TZYFtgj7ktLwVaUq3Kd84nT6g4xcfEKk9",
        "secret": "97jJbKiqRT6NvzSHoMCjfghzo293GZYBBChpCFDmn1qc",
        "encoding": "base58"
    },
    "txHash": "533aedf46c927f88afe0c305947c30de8b93b69609d01340f213357f62a5ea3e"
}
```

The `doc` field contains the created identity document of the newly created identity (also stored onto the IOTA Tangle). The `doc.id` is the unique identifier (DID) of the identity.

The `key` field of the body is the essential part which must be stored by the client, since it contains the public/private key pair which is used to control the identity ownership and to authenticate at the APIs Bridge.

The `txHash`contains the transaction hash (i.e., the unique address of the IOTA Tangle) where the identity document is stored. The `txHash`can be used to retrieve the identity information using any Tangle explorer and without the need to access the APIs Bridge. You can test [here](https://explorer.iota.org/mainnet)


_In production environments it is recommended that each organization installs and runs its Bridge locally. In case of centralized Bridge the Bridge implementation should be adapted to only receive the identity public from a private/public key pair generated locally.
_

#### 2. Authenticate the device identity (DID) and authorise access to the Bridge
<!-- should this be split in two parts? -->
<!-- I would keep it as it is and wait for feedback -->

A created identity can be used to authenticatem the user linked to it, to a number of services provided by the Bridge. These services allow to manage the identity itself. For accessing the provided endpoint services the entity is authenticated using the public/private key pair associated to the used identity, which was generated when creating the identity itself. Endpoints which need user authentication for the Ecommerce-SSI bridge are as following:

- get('/identities/search')
- put('/identities/identity')
- delete('/identities/identity/:id')
- post('/verification/create-credential')
- post('/verification/revoke-credential')

User authentication workflow is described in the following sequence diagram. As an example, the diagram shows the authentication of a user for the purpose of using the Bridge functionalities to verify a registered identity (see section 3 below).

<!-- is the sequence diagram still valid? is the name of APIs still correct or needs update? -->
<!-- I've already updated the sequence diagram when adjusting the endpoint names -->

![verify identity sd](./assets/diagrams/verify-identity-sd.jpeg)

As described in the sequence diagram the user willing to authenticate with a given identity must request and then sign (with the identity private key) a nonce in order to being able to authenticate at the API. Therefore two scripts must be implemented by the user client. These are `getHexEncodedKey` & `signNonce` which are described in the following.

<!-- we need to add one line describing the snippet -->
<!-- it is described below and by comments in code -->

```
import * as ed from '@noble/ed25519';
import * as bs58 from 'bs58';

// Decode a base58 key and encode it as hex key. (Needed for signNonce & verifySignedNonce)
export const getHexEncodedKey = (base58Key: string) => {
	return bs58.decode(base58Key).toString('hex');
};

// Hash a string
const hashNonce = (nonce: string) => crypto.createHash('sha256').update(nonce).digest().toString('hex');

// Sign a nonce using the private key.
export const signNonce = async (privateKey: string, nonce: string): Promise<string> => {
	const hash = hashNonce(nonce);
	const signedHash = await ed.sign(hash, privateKey);
	return ed.Signature.fromHex(signedHash).toHex();
};
```

To verify an identity ownership and to authenticate the user against a corresponding endpoint, first of all a nonce must be requested to the API endpoint. This is triggered by calling the selected endpoint with the identity DID that requires authentication via __GET__. An example is:

https://ensuresec.solutions.iota.org/api/v0.1/authentication/prove-ownership/did:iota:7Vk97eWqUfyhq92Cp3VsUPe42efdueNyPZMTXKUnsAJL

The call returns a json object with the generated nonce:

```
{
    "nonce":"25110bd1742ebcabdc9962819a181e91515d51aa"
}
```

This nonce must now be signed using the private key of the keypair associated to the identity DID and sent back to the `prove-ownership` endpoint via POST. 

Signing the nonce by the client can be done with the following two function calls. The first command changes the encoding of the secret key since for signing it must be hex encoded but the identity sdk returns it as base58 encoding. Then the nonce can be signed with the second command.

```
const encodedKey = await getHexEncodedKey(identity.key.secret);
const signedNonce = await signNonce(encodedKey, nonce);
```
<!-- this depend on how the key are stored locall; we should probably provide an example in the part above --> 
<!-- this assumes that the key is stored as it is received from the identity sdk directly so this should fit all who store it without changing the encoding but I've added a description.-->
This signed nonce must then be sent to the following API via POST request:

https://ensuresec.solutions.iota.org/api/v0.1/authentication/prove-ownership/did:iota:Ced3EL4XN7mLy5ACPdrNsR8HZib2MXKUQuAMQYEMbcb4

As body of the request the `signedNonce` must be added like following:

```
{ signedNonce: 'ed0bee53f0ef32b4b3d1934d690bf34bfa098394280f16c21c3ac85595d9dfc9a8dba11d1e1839e427c17d81d2dda0e614325ee363282fd61af6e6ebbeadb007' }
```

A more detailed usage script on how to integrate the authentication into a typescript client can be found below:

```
export const fetchAuth = async (identity: any) => {
	console.log('requesting nonce to sign...');

	const url = `${Config.baseUrl}/api/v1/authentication/prove-ownership/${identity.doc.id}`;
	const res = await axios.get(url);
	if (res.status !== 200) {
		console.error('didnt receive status 200 on get request for prove-ownership!');
		return;
	}
	const body = await res.data;
	const nonce: string = body.nonce;
	console.log('received nonce: ', nonce);

	const encodedKey = await getHexEncodedKey(identity.key.secret);
	const signedNonce = await signNonce(encodedKey, nonce);
	console.log('signed nonce: ', signedNonce);

	console.log('requesting authentication token using signed nonce...', identity.doc.id);
	const response = await axios.post(`${Config.baseUrl}/api/v1/authentication/prove-ownership/${identity.doc.id}`, JSON.stringify({ signedNonce }), {
		method: 'post',
		headers: { 'Content-Type': 'application/json' }
	});

	return response;
};
```
The signature is then verified and in case of valid a JWT string is returned. This JWT can then be transformed into a Bearer token and be added into the Authorization header of future requests.

#### 3. Verify a device identity and issue a "verified" identity credential

Everyone can create an identity and add any attribute to such identity. To avoid creation of fake identities, an identity needs to be verified by an already verified identity (network of trust). This process includes also verifying the attributes associated to the identity, i.e., if a person or device really belongs to the organization they claim to be. 

This verification can be done by an administrator of the Ecommerce-SSI bridge or an already verified identity, i.e., of an organization (based on the principle of network of trust described above). Upon verification, the system allows to create a so called Verifiable Credential, which contains information about the identity and a signature proof of the information of the verifier, so that authenticity of data in the verifiable credential cannot be changed later but only verified. 

In this case we verify the previously generated device identity using an already verified Test User with the following identity and verifiable credential:

<!-- I am not sure why we show this here; it might be confusing -->
<!-- because this credential is used to verify the device in the request later-->
```
{
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
    "type": [
        "VerifiableCredential",
        "VerifiedIdentityCredential"
    ],
    "credentialSubject": {
        "id": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
        "@context": "https://schema.org/",
        "familyName": "Engineer",
        "givenName": "Test",
        "initiatorId": "did:iota:AUKN9UkJrTGGBcTZiYC3Yg2FLPQWnA11X8z6D6DDn56Y",
        "jobTitle": "Software Engineer",
        "name": "Test Engineer",
        "type": "Person"
    },
    "issuer": "did:iota:94T4RpgfSsGbsH9v5BFPAps4zcyNDBXocP4CBfN4nWof",
    "issuanceDate": "2021-06-18T11:33:59Z",
    "proof": {
        "type": "MerkleKeySignature2021",
        "verificationMethod": "#key-collection-0",
        "signatureValue": "Bj52SFRTPo7VkoCf8QxTSzgJsiTNdKCQLhuFL1u3Tscb.1116NQBwTcw2dxxkWwikerjDwg9FwqPULGcv749RFZzT6AJ3cvyEqbx8ifzgLueSiEeq3shtbgEJZucM8YgF5wD6iWraLr2bMWDQKuEhNYSYXwRV8LdJBXWmRjxSjfFw8h5Dq7YhxKGYnMPckPWY3VzP76euay3oaarJW3WTjEUBwtdkw6pPoH9XWseNju6bzh5emfA64ECCHYzNbERzAxV22ubBw1NQdabCLh9NzRyGt4k5PjvZSawQswRVpCTiwaa3BQH8Vi2L1wUFZDferTkLef6NzXV4TdWHX2BwumY7tpMAHRJssoH8E7RUgRiivBdQ1A8nSg1fY2jyykTAjeRaa4cp52zkjzdvD7nndNzeUsBjEYBq4WbBy4z9ERZfywEACm7PQpgMMrWCBDnA22PVLKXH9Lme2TkTwZvuJuVdDKbCpWvbst1X8cmkkgad8GZkFPYiYqqKqVe9hQkZDfcgqaCTgiZuCBNvSLKN5Tfhhc67FK127WZW6hKtKUZv1jwuzWcicmxYvfRE8uhtjXvPLZrGkj91G.484x7hG8Ubxn4WywDsBW7vCV1tF2nUXXFUVzUaEiArxUm6zmcVzXuWxrGvHtcnuXtoqvC61rmzAqSXf7T6itbJ24"
    }
}
```

The endpoint of this request is the following:

https://ensuresec.solutions.iota.org/api/v0.1/verifcation/create-credential

> As described in section 2, the request must be authenticated by having a valid Bearer token in the Authorization header otherwise the APIs Bridge will return a "401 Unauthorized" status code.

The API body must contain information about the identity to verify in the `subject` field but also a valid credential of the caller must be added in the `initiatorVC` field.

In this case we use the DID of the device as subject to verify. Furthermore, if the user requesting the verification is not an administrator, the initiator needs to add a verifiable credential which was generated when verifying itself. With a network of trust approach, an identity verification must be requested by an identity different from the subject. This is always true in case of organizations and objects identities.

<!-- why is that? Is not already authenticated? do we need to know the identity of which is requesting a verification? This is not a general pattern and mainly works for object or organization. For individual a person will ask to verify her own identity not a third party one. Check what I have added -->

<!-- must be requested by an identity different from the subject <- this is true that is why the initiator of a verification must provide its own credential so the api is able to check wether this person is trusted or not who wants to create a credential for someone else. -->

This verifiable credential is stored by the API Bridge and can be requested at the GET `/identities/identity/{identity-id}` API. How to request the verifiable credential at the API will be described in section 4. As discussed, the verifiable credential of the initiator must be part of the request body, if the verification request is not initiated by an admin. The verifiable credentialof the initiator can be added in the `initiatorVC` field. The request must also contain a `subject` field where details about the identity to verify are added, like the `id`, the type of the credential in `credentialType` but also the `claim` of the identity which acquires information about the identity.

```
{
  "subject": {
      "id":"did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt", // id of the device which the credential shall be created for
      "credentialType": "VerifiedIdentityCredential",
      "claim": {
        "type": "Device",
        "category": [
            "sensor"
        ],
        "controlledProperty": [
            "fillingLevel",
            "temperature"
        ],
        "controlledAsset": [
            "wastecontainer-Osuna-100"
        ],
        "ipAddress": [
            "192.14.56.78"
        ],
        "mcc": "214",
        "mnc": "07",
        "serialNumber": "9845A",
        "refDeviceModel": "myDevice-wastecontainer-sensor-345",
        "dateFirstUsed": "2014-09-11T11:00:00Z",
        "owner": [
            "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"
        ]
    }
  },
  "initiatorVC": {
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
    "type": [
        "VerifiableCredential",
        "VerifiedIdentityCredential"
    ],
    "credentialSubject": {
        "id": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
        "@context": "https://schema.org/",
        "familyName": "Engineer",
        "givenName": "Test",
        "initiatorId": "did:iota:AUKN9UkJrTGGBcTZiYC3Yg2FLPQWnA11X8z6D6DDn56Y",
        "jobTitle": "Software Engineer",
        "name": "Test Engineer",
        "type": "Person"
    },
    "issuer": "did:iota:94T4RpgfSsGbsH9v5BFPAps4zcyNDBXocP4CBfN4nWof",
    "issuanceDate": "2021-06-18T11:33:59Z",
    "proof": {
        "type": "MerkleKeySignature2021",
        "verificationMethod": "#key-collection-0",
        "signatureValue": "Bj52SFRTPo7VkoCf8QxTSzgJsiTNdKCQLhuFL1u3Tscb.1116NQBwTcw2dxxkWwikerjDwg9FwqPULGcv749RFZzT6AJ3cvyEqbx8ifzgLueSiEeq3shtbgEJZucM8YgF5wD6iWraLr2bMWDQKuEhNYSYXwRV8LdJBXWmRjxSjfFw8h5Dq7YhxKGYnMPckPWY3VzP76euay3oaarJW3WTjEUBwtdkw6pPoH9XWseNju6bzh5emfA64ECCHYzNbERzAxV22ubBw1NQdabCLh9NzRyGt4k5PjvZSawQswRVpCTiwaa3BQH8Vi2L1wUFZDferTkLef6NzXV4TdWHX2BwumY7tpMAHRJssoH8E7RUgRiivBdQ1A8nSg1fY2jyykTAjeRaa4cp52zkjzdvD7nndNzeUsBjEYBq4WbBy4z9ERZfywEACm7PQpgMMrWCBDnA22PVLKXH9Lme2TkTwZvuJuVdDKbCpWvbst1X8cmkkgad8GZkFPYiYqqKqVe9hQkZDfcgqaCTgiZuCBNvSLKN5Tfhhc67FK127WZW6hKtKUZv1jwuzWcicmxYvfRE8uhtjXvPLZrGkj91G.484x7hG8Ubxn4WywDsBW7vCV1tF2nUXXFUVzUaEiArxUm6zmcVzXuWxrGvHtcnuXtoqvC61rmzAqSXf7T6itbJ24"
    }
  }
}

```

It checks if the verifiable credential of the initiator is valid (signed by a valid identity). If it applies, a verifiable credential for the subject is created. The credential is stored by the api and returned as signed verifiable credential of the device in the API response. An example is provided below.

```
{
    "@context": "https://www.w3.org/2018/credentials/v1",
    "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
    "type": [
        "VerifiableCredential",
        "VerifiedIdentityCredential"
    ],
    "credentialSubject": {
        "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
        "@context": [
            "https://smartdatamodels.org/context.jsonld"
        ],
        "category": [
            "sensor"
        ],
        "controlledAsset": [
            "wastecontainer-Osuna-100"
        ],
        "controlledProperty": [
            "fillingLevel",
            "temperature"
        ],
        "dateFirstUsed": "2014-09-11T11:00:00Z",
        "initiatorId": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
        "ipAddress": [
            "192.14.56.78"
        ],
        "mcc": "214",
        "mnc": "07",
        "owner": [
            "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"
        ],
        "refDeviceModel": "myDevice-wastecontainer-sensor-345",
        "serialNumber": "9845A",
        "type": "Device"
    },
    "issuer": "did:iota:94T4RpgfSsGbsH9v5BFPAps4zcyNDBXocP4CBfN4nWof",
    "issuanceDate": "2021-06-18T11:44:04Z",
    "proof": {
        "type": "MerkleKeySignature2021",
        "verificationMethod": "#key-collection-0",
        "signatureValue": "2LdZCCWgzFehFLuTSV6fyTzaVBPnn85RpLzcKbCA6zMh.1116NNMEegXdESs8e2bGopuoMGtdkxVenTGgkp3W8oRaT6EcHvyKU9JmiMcUe7EUiTfJbuzfFM3EHpoQZYhUQ1CPX8gCG4SMpqZQQLV9YBZKY4JVZFbzc7mdUdpRaz38eTxKu61a9yTPAVSWkqJUDg9XqSFGAqXpNZxcg2UTvna9E2RPNauAZgJ6YwK2BbvbSCiw1sUnEy9iazLYTGm2EaFRE5Xwij4KBWekxyrTCA7sshVtt5okA93v7WPTtHTapSur7xnjFQgkHqCjtcrYXvMRoSoeMEfnvEibW3YkUYw3751d7UjZ9A33dsFfGDLQUb7sxoypT39nAEtTzuL54yjSSucb3PVe5rMt5xWNrgRAeqZVqxYvGkwgGsPa17QVXy6MnaHznBG93sRFY48FbFbiVs96W1MU1P8YbeEnAAQ1d1t6KXCoqEfMh7KXbyCzAZNp1pjhXee754Jr4JVWhUDoC7fxYxrkvaCPxLhNvBGMUecWvUZcG5L8GGTpnFV73WCPun8KnYYcgCS4siurNTWjyYKafxJ5k.5DhG429KDLQuLohRy6hAT4NtJ5RPqE21jeEokYwKNBWCFnwSzP72jypKNdxC15dqQhKgfg16QtKGHHC4MJ4vJFTJ"
    }
}
```

#### 4. Read credentials (i.e., attributes) of the device identity (DID)

After an identity is verified, in this case a device identity, an authorised user now can request to access information about the identity by using its DID. Among the various attributes, one can request if the identity has been verified by checking its verifiable credentials of the `verifiableCredentials` array attached to the identity. Each verifiable credential stores attributes of the identity, however some of these credentials might have been revoked. To check whether the requested verifiable credential is still valid and not revoked the request in section 5 can be used.

Identity credentials can be requested using the identity DID in the id of a GET request of the following API. 

https://ensuresec.solutions.iota.org/api/v0.1/identities/identity/did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt

The response contains now all information of the device like for instance its username, its claim but also the verifiableCredentials of the device.

```
{
    "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
    "publicKey": "4jYw13y25JgbFk9RnNwUVC2Y3qkT8DRFBqXLEHwkFvjR",
    "username": "iota-test-device",
    "registrationDate": "2021-06-18T13:35:26+02:00",
    "claim": {
        "type": "Device",
        "category": [
            "sensor"
        ],
        "controlledProperty": [
            "fillingLevel",
            "temperature"
        ],
        "controlledAsset": [
            "wastecontainer-Osuna-100"
        ],
        "ipAddress": [
            "192.14.56.78"
        ],
        "mcc": "214",
        "mnc": "07",
        "serialNumber": "9845A",
        "refDeviceModel": "myDevice-wastecontainer-sensor-345",
        "dateFirstUsed": "2014-09-11T11:00:00Z",
        "owner": [
            "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"
        ]
    },
    "verifiableCredentials": [
        {
            "@context": "https://www.w3.org/2018/credentials/v1",
            "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
            "type": [
                "VerifiableCredential",
                "VerifiedIdentityCredential"
            ],
            "credentialSubject": {
                "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
                "@context": [
                    "https://smartdatamodels.org/context.jsonld"
                ],
                "category": [
                    "sensor"
                ],
                "controlledAsset": [
                    "wastecontainer-Osuna-100"
                ],
                "controlledProperty": [
                    "fillingLevel",
                    "temperature"
                ],
                "dateFirstUsed": "2014-09-11T11:00:00Z",
                "initiatorId": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
                "ipAddress": [
                    "192.14.56.78"
                ],
                "mcc": "214",
                "mnc": "07",
                "owner": [
                    "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"
                ],
                "refDeviceModel": "myDevice-wastecontainer-sensor-345",
                "serialNumber": "9845A",
                "type": "Device"
            },
            "issuer": "did:iota:94T4RpgfSsGbsH9v5BFPAps4zcyNDBXocP4CBfN4nWof",
            "issuanceDate": "2021-06-18T11:44:04Z",
            "proof": {
                "type": "MerkleKeySignature2021",
                "verificationMethod": "#key-collection-0",
                "signatureValue": "2LdZCCWgzFehFLuTSV6fyTzaVBPnn85RpLzcKbCA6zMh.1116NNMEegXdESs8e2bGopuoMGtdkxVenTGgkp3W8oRaT6EcHvyKU9JmiMcUe7EUiTfJbuzfFM3EHpoQZYhUQ1CPX8gCG4SMpqZQQLV9YBZKY4JVZFbzc7mdUdpRaz38eTxKu61a9yTPAVSWkqJUDg9XqSFGAqXpNZxcg2UTvna9E2RPNauAZgJ6YwK2BbvbSCiw1sUnEy9iazLYTGm2EaFRE5Xwij4KBWekxyrTCA7sshVtt5okA93v7WPTtHTapSur7xnjFQgkHqCjtcrYXvMRoSoeMEfnvEibW3YkUYw3751d7UjZ9A33dsFfGDLQUb7sxoypT39nAEtTzuL54yjSSucb3PVe5rMt5xWNrgRAeqZVqxYvGkwgGsPa17QVXy6MnaHznBG93sRFY48FbFbiVs96W1MU1P8YbeEnAAQ1d1t6KXCoqEfMh7KXbyCzAZNp1pjhXee754Jr4JVWhUDoC7fxYxrkvaCPxLhNvBGMUecWvUZcG5L8GGTpnFV73WCPun8KnYYcgCS4siurNTWjyYKafxJ5k.5DhG429KDLQuLohRy6hAT4NtJ5RPqE21jeEokYwKNBWCFnwSzP72jypKNdxC15dqQhKgfg16QtKGHHC4MJ4vJFTJ"
            }
        }
    ],
    "role": "User"
}
```


#### 5. Verify authenticity of a verifiable credential

To check whether a verifiable credential is valid the following API can be called:

https://ensuresec.solutions.iota.org/api/v0.1/verification/check-credential

Simply insert the verifiable credential one wish to check into the body of the POST request.

```
{
    "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
    "publicKey": "4jYw13y25JgbFk9RnNwUVC2Y3qkT8DRFBqXLEHwkFvjR",
    "username": "iota-test-device",
    "registrationDate": "2021-06-18T13:35:26+02:00",
    "claim": {
        "type": "Device",
        "category": [
            "sensor"
        ],
        "controlledProperty": [
            "fillingLevel",
            "temperature"
        ],
        "controlledAsset": [
            "wastecontainer-Osuna-100"
        ],
        "ipAddress": [
            "192.14.56.78"
        ],
        "mcc": "214",
        "mnc": "07",
        "serialNumber": "9845A",
        "refDeviceModel": "myDevice-wastecontainer-sensor-345",
        "dateFirstUsed": "2014-09-11T11:00:00Z",
        "owner": [
            "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"
        ]
    },
    "verifiableCredentials": [
        {
            "@context": "https://www.w3.org/2018/credentials/v1",
            "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
            "type": [
                "VerifiableCredential",
                "VerifiedIdentityCredential"
            ],
            "credentialSubject": {
                "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
                "@context": [
                    "https://smartdatamodels.org/context.jsonld"
                ],
                "category": [
                    "sensor"
                ],
                "controlledAsset": [
                    "wastecontainer-Osuna-100"
                ],
                "controlledProperty": [
                    "fillingLevel",
                    "temperature"
                ],
                "dateFirstUsed": "2014-09-11T11:00:00Z",
                "initiatorId": "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY",
                "ipAddress": [
                    "192.14.56.78"
                ],
                "mcc": "214",
                "mnc": "07",
                "owner": [
                    "did:iota:CtPnfQqSZBmZEe5A5iNZzJ6pkCqUxtsFsErNfA3CeHpY"
                ],
                "refDeviceModel": "myDevice-wastecontainer-sensor-345",
                "serialNumber": "9845A",
                "type": "Device"
            },
            "issuer": "did:iota:94T4RpgfSsGbsH9v5BFPAps4zcyNDBXocP4CBfN4nWof",
            "issuanceDate": "2021-06-18T11:44:04Z",
            "proof": {
                "type": "MerkleKeySignature2021",
                "verificationMethod": "#key-collection-0",
                "signatureValue": "2LdZCCWgzFehFLuTSV6fyTzaVBPnn85RpLzcKbCA6zMh.1116NNMEegXdESs8e2bGopuoMGtdkxVenTGgkp3W8oRaT6EcHvyKU9JmiMcUe7EUiTfJbuzfFM3EHpoQZYhUQ1CPX8gCG4SMpqZQQLV9YBZKY4JVZFbzc7mdUdpRaz38eTxKu61a9yTPAVSWkqJUDg9XqSFGAqXpNZxcg2UTvna9E2RPNauAZgJ6YwK2BbvbSCiw1sUnEy9iazLYTGm2EaFRE5Xwij4KBWekxyrTCA7sshVtt5okA93v7WPTtHTapSur7xnjFQgkHqCjtcrYXvMRoSoeMEfnvEibW3YkUYw3751d7UjZ9A33dsFfGDLQUb7sxoypT39nAEtTzuL54yjSSucb3PVe5rMt5xWNrgRAeqZVqxYvGkwgGsPa17QVXy6MnaHznBG93sRFY48FbFbiVs96W1MU1P8YbeEnAAQ1d1t6KXCoqEfMh7KXbyCzAZNp1pjhXee754Jr4JVWhUDoC7fxYxrkvaCPxLhNvBGMUecWvUZcG5L8GGTpnFV73WCPun8KnYYcgCS4siurNTWjyYKafxJ5k.5DhG429KDLQuLohRy6hAT4NtJ5RPqE21jeEokYwKNBWCFnwSzP72jypKNdxC15dqQhKgfg16QtKGHHC4MJ4vJFTJ"
            }
        }
    ],
    "role": "User"
}
```

The API should return:

```
{
    "isVerified": true
}
```

for verified identities and `false` for not verified identities. Signature of a verifiable credential is first check ,however additional reasons for not verified verifiable credentials could be:

- Data of verifiable credential was altered (so it does not match with the proof hash)
- Verifiable credential got revoked (as described in section 6)

<!-- it seems from this that authenticity of a credential is not verified; if it is I am not sure data can be changed. We need to discuss this --> 

#### 6. Revoke an identity (DID) verifiable credential (i.e., a device attribute)

A verifiable credential can be revoked so it is no more verified. In the example above, a reason could be: A person left the organization or a device is no more in use and removed by the organization (i.e., a stolen scanner). To revoke the credential the following API must be called via POST by an authorised user:

https://ensuresec.solutions.iota.org/api/v0.1/verification/revoke-credential

The body of the request contains only one field, the `signatureValue` which contains the signature of the verifiable credential as a string. This signatureValue can be easily extracted by every verifiable credential which needs to be revoked.

```
{
   "signatureValue": "BPLQaMjNEP5H27U9NmHA8gaAHRrYH2oHB7Qgpaufnm82.1113c6Jy3MFVwQFyDMG7QmbZJ89S72R8DwUHc6eNEwddUQow8rPxYrHzMM7Db5MdRF5JDDSoorHqio6h877HZY2654br4RxBpNd5K4Y6CLLthuxmDrWHz93kAHfr7vcrVyYLDCq5Uc8ENWbTWChSFpZ1AzLXxz2PJu82HqZAZcDZZgPBsRX6y2mS1AGih7Js44eTY9iuCR5nAuuXP4TjXxABWujdmVSXp5MyRLGmSeg5jr3bkmJCmwqvWPBYpRL9mCt7g7xsqgop6epjqqB7e351xbAXfkMsrArkeKvmgAh9YMvhdQgaYVgc9Mp1cvySRWGnj8mQVtzVQicbWuEx9UTRvgm4um16Ne2BnaX4BManN5yarfvqJTsXwtNYGC6HnCuD1GjXhPYtmg2Nr9xUBKMdqnpWojZGAKBgHNsRKU2dK1sDyu7x67Tr2ituVThy9eHPfdE.5kDCcE65y9tNadgQWKdLkYLFPofpP9cZ5e1x746EijMJmXPPL3DTpZ9MNXr6WhJGe9YH4ffMJ31i9P7hMKPJkNTp"
}
```

After the credential is revoked the verifiable credential can be checked again using the same endpoint and body as in section 5. In this case the endpoint should return false like in the case below:

```
{
    "isVerified": false
}
```


#### 7. Retrieve a specific identity description (DID document)

<!-- does this mean all the other APIs read data stored in the Bridge?--> 
<!-- yes a lot of data is stored on the bridge for instance the created verifiable credentials and to have indexable identites and channels. since we don't can store personal data on the tangle only the identity doc is stored on tangle -->
To request the latest identity description from IOTA Tangle (i.e., to check the integrity with a local copy), the Ecommerce-SSI Bridge also offers an endpoint which can be called via GET. The API uses the requested identity DID (i.e., the associated public key).

https://ensuresec.solutions.iota.org/api/v0.1/verification/latest-document/did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt

The API returns information about the identity document of the device stored on the IOTA Tangle.

```
{
    "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
    "authentication": [
        {
            "id": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt#key",
            "controller": "did:iota:H7csnzWEec9oDZb29bkcvK3hRrRxFkacWtdW3p9c26Mt",
            "type": "Ed25519VerificationKey2018",
            "publicKeyBase58": "4jYw13y25JgbFk9RnNwUVC2Y3qkT8DRFBqXLEHwkFvjR"
        }
    ],
    "created": "2021-06-18T11:35:24Z",
    "updated": "2021-06-18T11:35:24Z",
    "proof": {
        "type": "JcsEd25519Signature2020",
        "verificationMethod": "#key",
        "signatureValue": "QPzT7MPKE2raRycrreyQbrmmMwamfqzNn7sHdhhPbFyswcNBQTiymBxMz2iGPqHo4ELRcgsaJiDCNfunTTnmBav"
    }
}
```

#### 8. Get the network of trust

In a decentralized identity management system, identities can only be verified by a previously verified identity. This requires to establish a root of trusted identities and their DID. This is managed using a network of trust that can have one or multiple roots, i.e., already verified identities. In order to enable this, the root DID of such trusted verified identities should be added to the Bridge. For instance in case of an Organization X with DID `did:iota:abc` and Organization Z with DID `did:iota:xyz`, if both organizations decide to trust each others on verifying each others identities, both trust roots should be added to the Bridge.

<!-- how this URI prefix technically called? did domain? -->
<!-- seems like they are called did methods: https://www.w3.org/TR/did-spec-registries/#did-methods -->

<!-- Does the following belongs here? I do not understand

When checking a verifiable credential it checks:

- Is the signature and content of the credential the same
- Is the credential valid or revoked
- Is the issuer id trusted

-->
<!-- yes exactly -->

To receive the list of all trusted roots, the Bridge offers an endpoint which can be called as the following:

https://ensuresec.solutions.iota.org/api/v0.1/verification/trusted-roots

The API returns all trusted identity uri which are trusted by the Bridge.

```
{
    "trustedRoots": [
        "did:iota:HUReLjBy79sk4Jbah9S56GtRDyGoEskHdQjFXSashKGr",
        "did:iota:8P4uV9haNks6N8aXXLt2Ps3nQtSqGXc2kJM4K6urm62Y"
    ]
}
```

<!-- OK we are checking what trust roots exist; how do we add them? This is not provided. Are they hardcoded? Shall we add such API? -->
<!-- currently there is no api for this but yes must possible for administrators to add them -->
