import { KEY_COLLECTION_INDEX, KEY_COLLECTION_SIZE } from '../config/identity';
import { getIdentity, saveIdentity, updateIdentityDoc } from '../database/identities';
import { getKeyCollection, saveKeyCollection } from '../database/key-collection';
import {
  addKeyCollectionIdentity,
  getKeyCollectionIdentity,
  getLinkedIdentitesSize,
  revokeKeyCollectionIdentity
} from '../database/key-collection-links';
import { KeyCollectionJson, KeyCollectionPersistence } from '../models/data/key-collection';
import { CreateIdentityBody, DocumentUpdate, IdentityJson, IdentityUpdate, UserCredential } from '../models/data/identity';
import { User, VerificationUpdatePersistence } from '../models/data/user';
import { getDateFromString } from '../utils/date';
import { Credential, IdentityService } from './identity-service';
import { UserService } from './user-service';

export class AuthenticationService {
  identityService: IdentityService;
  userService: UserService;
  constructor(identityService: IdentityService, userService: UserService) {
    this.identityService = identityService;
    this.userService = userService;
  }

  saveKeyCollection(keyCollection: KeyCollectionPersistence) {
    return saveKeyCollection(keyCollection);
  }

  getKeyCollection(index: number) {
    return getKeyCollection(index);
  }

  generateKeyCollection = async (issuerId: string): Promise<KeyCollectionPersistence> => {
    const issuerIdentity: IdentityUpdate = await getIdentity(issuerId);
    if (!issuerIdentity) {
      throw new Error(`No identiity found for issuerId: ${issuerId}`);
    }
    const { kcp, docUpdate } = await this.identityService.generateKeyCollection(issuerIdentity, KEY_COLLECTION_INDEX, KEY_COLLECTION_SIZE);
    await this.updateDatabaseIdentityDoc(docUpdate);
    return kcp;
  };

  createIdentity = async (createIdentityBody: CreateIdentityBody): Promise<IdentityUpdate> => {
    const identity = await this.identityService.createIdentity();
    const user: User = {
      ...createIdentityBody,
      userId: identity.doc.id.toString(),
      publicKey: identity.key.public
    };

    await this.userService.addUser(user);

    if (createIdentityBody.storeIdentity) {
      await saveIdentity(identity);
    }

    return {
      ...identity
    };
  };

  createVerifiableCredential = async (userCredential: UserCredential, issuerId: string) => {
    const user = await this.userService.getUser(userCredential.id);
    if (!user) {
      throw new Error("User does not exist, so he can't be verified!");
    }
    console.log('userCredential', userCredential);

    const credential: Credential<UserCredential> = {
      type: 'UserCredential',
      id: userCredential.id,
      subject: {
        ...userCredential
      }
    };
    const keyCollection = await this.getKeyCollection(KEY_COLLECTION_INDEX);
    const index = await getLinkedIdentitesSize(KEY_COLLECTION_INDEX);
    const keyCollectionJson: KeyCollectionJson = {
      type: keyCollection.type,
      keys: keyCollection.keys
    };

    const issuerIdentity: IdentityUpdate = await getIdentity(issuerId);
    if (!issuerIdentity) {
      throw new Error(`No identiity found for issuerId: ${issuerId}`);
    }
    const vc = await this.identityService.createVerifiableCredential<UserCredential>(issuerIdentity, credential, keyCollectionJson, index);
    await this.updateDatabaseIdentityDoc(issuerIdentity);

    await addKeyCollectionIdentity({
      index,
      isRevoked: false,
      linkedIdentity: userCredential.id,
      keyCollectionIndex: KEY_COLLECTION_INDEX
    });

    await this.setUserVerified(credential.id, issuerIdentity.doc.id);
    return vc;
  };

  checkVerifiableCredential = async (vc: any, issuerId: string) => {
    const issuerIdentity: IdentityJson = await getIdentity(issuerId);
    if (!issuerIdentity) {
      throw new Error(`No identiity found for issuerId: ${issuerId}`);
    }
    const res = await this.identityService.checkVerifiableCredential(issuerIdentity, vc);
    const user = await this.userService.getUser(vc?.id);
    const vup: VerificationUpdatePersistence = {
      userId: vc?.id,
      verified: res.isVerified,
      lastTimeChecked: new Date(),
      verificationDate: getDateFromString(user?.verification?.verificationDate),
      verificationIssuerId: user?.verification?.verificationIssuerId
    };
    await this.userService.updateUserVerification(vup);

    return res;
  };

  revokeVerifiableCredential = async (did: string, issuerId: string) => {
    const kci = await getKeyCollectionIdentity(did);
    if (!kci) {
      throw new Error('No identity found to revoke the verification!');
    }
    const issuerIdentity: IdentityUpdate = await getIdentity(issuerId);
    if (!issuerIdentity) {
      throw new Error(`No identiity found for issuerId: ${issuerId}`);
    }

    const res = await this.identityService.revokeVerifiableCredential(issuerIdentity, kci.index);
    const newDoc = res.docUpdate;
    await this.updateDatabaseIdentityDoc(newDoc);

    // TODO clarify in which situation this is true or false!
    if (res.revoked === true) {
      console.log('Successfully revoked!');
    } else {
      console.log(`Could not revoke identity for ${did} on the ledger!`);
    }

    await revokeKeyCollectionIdentity(kci);

    const vup: VerificationUpdatePersistence = {
      userId: did,
      verified: false,
      lastTimeChecked: new Date(),
      verificationDate: undefined,
      verificationIssuerId: undefined
    };
    await this.userService.updateUserVerification(vup);

    return res;
  };

  updateDatabaseIdentityDoc = async (docUpdate: DocumentUpdate) => {
    await updateIdentityDoc(docUpdate);
  };

  getLatestDocument = async (did: string) => {
    return await this.identityService.getLatestIdentity(did);
  };

  private setUserVerified = async (userId: string, issuerId: string) => {
    if (!issuerId) {
      throw new Error('No valid issuer id!');
    }
    const date = new Date();
    const vup: VerificationUpdatePersistence = {
      userId,
      verified: true,
      lastTimeChecked: date,
      verificationDate: date,
      verificationIssuerId: issuerId
    };
    await this.userService.updateUserVerification(vup);
  };
}