import { AuthenticationRoutes } from './index';
import { AuthenticationService } from '../../services/authentication-service';
import { UserService } from '../../services/user-service';
import { StatusCodes } from 'http-status-codes';
import * as AuthDb from '../../database/auth';
import { User } from '../../models/types/user';
import * as EncryptionUtils from '../../utils/encryption';
import { UserIdentityMock } from '../../test/mocks/identities';
import { SsiService } from '../../services/ssi-service';
import { IdentityConfig } from '../../models/config';
import { LoggerMock } from '../../test/mocks/logger';
import { IdentityConfigMock } from '../../test/mocks/config';

const validUserMock = UserIdentityMock.userData;

describe('test authentication routes', () => {
	const serverSecret = 'very-secret-secret';
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any;
	let userService: UserService, ssiService: SsiService;
	let authenticationService: AuthenticationService, authenticationRoutes: AuthenticationRoutes;
	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();
		const identityConfig: IdentityConfig = IdentityConfigMock;
		ssiService = SsiService.getInstance(identityConfig, LoggerMock);
		userService = new UserService(ssiService, serverSecret, LoggerMock);
		authenticationService = new AuthenticationService(userService, ssiService, {
			jwtExpiration: '2 days',
			serverSecret
		});
		authenticationRoutes = new AuthenticationRoutes(authenticationService, LoggerMock);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock,
			status: jest.fn(() => res)
		};
	});

	it('getNonce - should return bad request because no id provided.', async () => {
		const userMock: User = null;

		const getUserSpy = jest.spyOn(userService, 'getUser').mockImplementation(async () => userMock);
		const upsertNonceSpy = jest.spyOn(AuthDb, 'upsertNonce').mockImplementation(async () => null);
		const req: any = {
			params: { id: null },
			body: null
		};

		await authenticationRoutes.getNonce(req, res, nextMock);

		expect(getUserSpy).not.toHaveBeenCalled();
		expect(upsertNonceSpy).not.toHaveBeenCalled();
		expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
		expect(res.send).toHaveBeenCalledWith({ error: 'no id provided' });
	});

	it('getNonce - should return a valid nonce to solve', async () => {
		const id = 'did:iota:BfaKRQcBB5G6Kdg7w7HESaVhJfJcQFgg3VSijaWULDwk';
		const upsertNonceSpy = jest.spyOn(AuthDb, 'upsertNonce').mockImplementation(async () => null);
		const req: any = {
			params: { id },
			body: null
		};

		await authenticationRoutes.getNonce(req, res, nextMock);

		expect(upsertNonceSpy).toHaveBeenCalled();
		expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
		expect(res.send).toHaveBeenCalled();
	});

	it('auth - should return bad request because no id provided.', async () => {
		const req: any = {
			params: { id: null },
			body: { signedNonce: 'SIGNED_NONCE' }
		};

		await authenticationRoutes.proveOwnership(req, res, nextMock);

		expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
		expect(res.send).toHaveBeenCalledWith({ error: 'no signedNonce or id provided' });
	});

	it('auth - should return bad request because no signedNonce is provided in the body.', async () => {
		const req: any = {
			params: { id: 'identityid' },
			body: null
		};

		await authenticationRoutes.proveOwnership(req, res, nextMock);
		expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
		expect(res.send).toHaveBeenCalledWith({ error: 'no signedNonce or id provided' });
	});

	it('auth - should return the jwt for identity not in db but on tangle', async () => {
		const verified = true;
		const id = 'did:iota:Ced3EL4XN7mLy5ACPdrNsR8HZib2MXKUQuAMQYEMbcb4';
		const getUserSpy = jest.spyOn(userService, 'getUser').mockImplementation(async () => null); // not found in db
		const getLatestIdentityJsonSpy = jest.spyOn(ssiService, 'getLatestIdentityJson').mockImplementation(async () => {
			return { document: UserIdentityMock.doc, messageId: '' };
		});
		const getNonceSpy = jest
			.spyOn(AuthDb, 'getNonce')
			.mockImplementation(async () => ({ id, nonce: 'as23jweoifwefjiasdfoasdfasdasdawd4jgio43' }));
		const verifySignedNonceSpy = jest.spyOn(EncryptionUtils, 'verifySignedNonce').mockImplementation(async () => verified);
		const req: any = {
			params: { id },
			body: { signedNonce: 'SIGNED_NONCE' }
		};

		await authenticationRoutes.proveOwnership(req, res, nextMock);

		expect(getUserSpy).toHaveBeenCalledWith(id);
		expect(getLatestIdentityJsonSpy).toHaveBeenCalledWith(id);
		expect(getNonceSpy).toHaveBeenCalledWith(id);
		expect(verifySignedNonceSpy).toHaveBeenCalledWith(
			'6f9546516cfafef9e544ac7e0092a075b4a253ff4e26c3b53513f8ddc832200a',
			'as23jweoifwefjiasdfoasdfasdasdawd4jgio43',
			'SIGNED_NONCE'
		);
		expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
		expect(res.send).toHaveBeenCalled();
	});

	it('auth - should throw error since no user found', async () => {
		const loggerSpy = jest.spyOn(LoggerMock, 'error');
		const userMock: User = null;
		const id = 'did:iota:BfaKRQcBB5G6Kdg7w7HESaVhJfJcQFgg3VSijaWULDwk';
		const getUserSpy = jest.spyOn(userService, 'getUser').mockImplementationOnce(async () => userMock);
		const getLatestIdentitySpy = jest.spyOn(ssiService, 'getLatestIdentityDoc').mockImplementationOnce(async () => null);
		const req: any = {
			params: { id },
			body: { signedNonce: 'SIGNED_NONCE' }
		};

		await authenticationRoutes.proveOwnership(req, res, nextMock);

		expect(getUserSpy).toHaveBeenCalledWith(id);
		expect(getLatestIdentitySpy).toHaveBeenCalledWith(id);
		expect(loggerSpy).toHaveBeenCalledWith(new Error(`no identity with id: ${id} found!`));
		expect(nextMock).toHaveBeenCalledWith(new Error(`could not prove the ownership`));
	});

	it('auth - should throw error for a nonce which is verified=false', async () => {
		const loggerSpy = jest.spyOn(LoggerMock, 'error');
		const verified = false;
		const userMock: User = validUserMock;
		const id = 'did:iota:BfaKRQcBB5G6Kdg7w7HESaVhJfJcQFgg3VSijaWULDwk';

		const getUserSpy = jest.spyOn(userService, 'getUser').mockImplementation(async () => userMock);
		const getNonceSpy = jest
			.spyOn(AuthDb, 'getNonce')
			.mockImplementation(async () => ({ id, nonce: 'as23jweoifwefjiasdfoasdfasdasdawd4jgio43' }));
		const verifySignedNonceSpy = jest.spyOn(EncryptionUtils, 'verifySignedNonce').mockImplementation(async () => verified);
		const req: any = {
			params: { id },
			body: { signedNonce: 'SIGNED_NONCE' }
		};

		await authenticationRoutes.proveOwnership(req, res, nextMock);

		expect(getUserSpy).toHaveBeenCalledWith(id);
		expect(getNonceSpy).toHaveBeenCalledWith(id);
		expect(verifySignedNonceSpy).toHaveBeenCalledWith(
			'6f9546516cfafef9e544ac7e0092a075b4a253ff4e26c3b53513f8ddc832200a',
			'as23jweoifwefjiasdfoasdfasdasdawd4jgio43',
			'SIGNED_NONCE'
		);
		expect(loggerSpy).toHaveBeenCalledWith(new Error(`signed nonce is not valid!`));
		expect(nextMock).toHaveBeenCalledWith(new Error(`could not prove the ownership`));
	});

	it('auth - should return the jwt for nonce which is verified=true', async () => {
		const verified = true;
		const userMock: User = validUserMock;
		const id = 'did:iota:BfaKRQcBB5G6Kdg7w7HESaVhJfJcQFgg3VSijaWULDwk';
		const getUserSpy = jest.spyOn(userService, 'getUser').mockImplementation(async () => userMock);
		const getNonceSpy = jest
			.spyOn(AuthDb, 'getNonce')
			.mockImplementation(async () => ({ nonce: 'as23jweoifwefjiasdfoasdfasdasdawd4jgio43', id: userMock.id }));
		const verifySignedNonceSpy = jest.spyOn(EncryptionUtils, 'verifySignedNonce').mockImplementation(async () => verified);
		const req: any = {
			params: { id },
			body: { signedNonce: 'SIGNED_NONCE' }
		};

		await authenticationRoutes.proveOwnership(req, res, nextMock);

		expect(getUserSpy).toHaveBeenCalledWith(id);
		expect(getNonceSpy).toHaveBeenCalledWith(id);
		expect(verifySignedNonceSpy).toHaveBeenCalledWith(
			'6f9546516cfafef9e544ac7e0092a075b4a253ff4e26c3b53513f8ddc832200a',
			'as23jweoifwefjiasdfoasdfasdasdawd4jgio43',
			'SIGNED_NONCE'
		);
		expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
		expect(res.send).toHaveBeenCalled();
	});
	afterEach(() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
		jest.resetModules();
	});
});
