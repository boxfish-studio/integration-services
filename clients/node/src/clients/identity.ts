import { BaseClient } from './base';
import { ClientConfig } from '../models/clientConfig';
import {
  IdentityInternal,
  IdentityJson,
  LatestIdentityJson,
  VerifiableCredentialJson
} from '../models/types/identity';
import { Claim, RevokeVerificationBody } from '../models/types/request-response-bodies';
import { User, UserType } from '../models/types/user';
import { CredentialTypes, VerifiableCredentialInternal } from '../models/types/verification';
import { searchCriteria } from '../models/searchCriteria';

export class IdentityClient extends BaseClient {
  constructor(config: ClientConfig = {}) {
    super(config);
  }

  /**
   * Create a new decentralized digital identity (DID). Identity DID document is signed and published to the ledger (IOTA Tangle). A digital identity can represent an individual, an organization or an object. The privateAuthKey controlling the identity is returned. It is recommended to securely (encrypt) store the privateAuthKey locally, since it is not stored on the APIs Bridge.
   * @param username
   * @param claimType defaults to UserType.Person
   * @param claim
   * @returns
   */
  async create(username?: string, claimType = UserType.Person, claim?: any ): Promise<IdentityJson> {
    return await this.post('identities/create', {
      username,
      claim : {
        ...claim,
        type: claimType
      }
    });
  }

  /**
   * Search for identities in the system and returns a list of existing identities.
   * @param username
   * @returns
   */
  async search({
    type,
    username,
    registrationDate,
    limit,
    index,
    ascending
  }: searchCriteria): Promise<User[]> {
    const param = registrationDate != undefined ? { 'registration-date': registrationDate } : {};
    return await this.get(
      'identities/search',
      { type, username, ...param, limit, index, ascending }
    );
  }

  /**
   * Get information (including attached credentials) about a specific identity using the identity-id (DID identifier).
   * @param id
   * @returns
   */
  async find(id: string): Promise<User> {
    return await this.get(`identities/identity/${id}`, {});
  }

  /**
   * Register an existing identity into the Bridge. This can be used if the identity already exists or it was only created locally. Registering an identity in the Bridge makes it possible to search for it by using some of the identity attributes, i.e., the username.
   * @param identity
   * @returns
   */
  async add(identity: IdentityInternal): Promise<null> {
    return this.post('identities/identity', identity);
  }

  /**
   * Update claim of a registered identity.
   * @param identity
   * @returns
   */
  async update(identity: IdentityInternal): Promise<null> {
    return this.put('identities/identity', identity);
  }

  /**
   * Removes an identity from the Bridge. An identity can only delete itself and is not able to delete other identities. Administrators are able to remove other identities. The identity cannot be removed from the immutable IOTA Tangle but only at the Bridge. Also the identity credentials will remain and the identity is still able to interact with other bridges.
   * @param id
   * @param revokeCredentials
   * @returns Null
   */
  async remove(id: string, revokeCredentials: boolean = false): Promise<null> {
    return this.delete(
      `identities/identity/${id}`,
      { 'revoke-credentials': revokeCredentials }
    );
  }

  /**
   * Get the latest version of an identity document (DID) from the IOTA Tangle.
   * @param id
   * @returns
   */
  async latestDocument(id: string): Promise<LatestIdentityJson> {
    return await this.get(`verification/latest-document/${id}`);
  }

  /**
   * Adds Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.
   * @param trustedAuthority
   * @returns
   */
  async addTrustedAuthority(trustedRootId: string): Promise<null> {
    return await this.post('verification/trusted-roots', { trustedRootId });
  }

  /**
   * Returns a list of Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.
   * @returns
   */
  async getTrustedAuthorities(): Promise<string[]> {
    return await this.get('verification/trusted-roots');
  }

  /**
   * Remove Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.
   * @param trustedAuthorityId
   * @returns
   */
  async removeTrustedAuthority(trustedAuthorityId: string): Promise<null> {
    return await this.delete(`verification/trusted-roots/${trustedAuthorityId}`, {});
  }

  /**
   * Verify the authenticity of an identity (of an individual, organization or object) and issue a credential stating the identity verification status. Only previously verified identities (based on a network of trust) with assigned privileges can verify other identities. Having a verified identity provides the opportunity for other identities to identify and verify a the entity they interact to.
   * @param initiatorVC
   * @param targetDid
   * @param claim
   * @returns
   */
  async createCredential(
    initiatorVC: VerifiableCredentialInternal | undefined,
    targetDid: string,
    credentialType: CredentialTypes,
    claimType: UserType,
    claim?: any
  ): Promise<VerifiableCredentialJson> {
    let body = {
      subject: {
        id: targetDid,
        credentialType,
        claim: {
          type: claimType,
          ...claim
        }
      },
      initiatorVC: initiatorVC
    };
    return await this.post('verification/create-credential', body);
  }

  /**
   * Check the verifiable credential of an identity. Validates the signed verifiable credential against the Issuer information stored onto the IOTA Tangle and checks if the issuer identity (DID) contained in the credential is from a trusted root.
   * @param credential
   * @returns
   */
  async checkCredential(
    credential: VerifiableCredentialInternal
  ): Promise<{ isVerified: boolean }> {
    return await this.post('verification/check-credential', credential);
  }

  /**
   * Revoke one specific verifiable credential of an identity. In the case of individual and organization identities the reason could be that the user has left the organization. Only organization admins (with verified identities) or the identity owner itself can do that.
   * @param credential
   * @returns
   */
  async revokeCredential(credential: RevokeVerificationBody): Promise<null> {
    return await this.post('verification/revoke-credential', credential);
  }
}
