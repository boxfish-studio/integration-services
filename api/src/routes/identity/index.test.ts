import { IdentityRoutes } from '.';
import * as UserDb from '../../database/user';
import * as IdentityDocsDb from '../../database/identity-docs';
import { IdentityConfig } from '../../models/config';
import { UserPersistence, UserType, User, UserSearch } from '../../models/types/user';
import { AuthorizationService } from '../../services/authorization-service';
import { SsiService } from '../../services/ssi-service';
import { UserService } from '../../services/user-service';
import { UserIdentityMock } from '../../test/mocks/identities';
import { getDateFromString, getDateStringFromDate } from '../../utils/date';
import { StatusCodes } from 'http-status-codes';

describe('test Search user', () => {
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any, userService: UserService, userRoutes: IdentityRoutes;
	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();
		userService = new UserService({} as any, '');
		const authorizationService = new AuthorizationService(userService);
		userRoutes = new IdentityRoutes(userService, authorizationService);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock
		};
	});

	it('should call searchUser with expected user search', async () => {
		const expectedUserSearch: UserSearch = {
			type: UserType.Person,
			index: 1,
			limit: 1,
			username: 'charlie',
			verified: true,
			organization: 'IOTA',
			registrationDate: getDateFromString('2021-02-12T14:58:05+01:00')
		};
		const searchUserSpy = spyOn(UserDb, 'searchUsers').and.returnValue([]);
		const req: any = {
			params: {},
			query: {
				type: 'Person',
				'registration-date': '2021-02-12T14:58:05+01:00',
				verified: 'true',
				limit: '1',
				index: '1',
				username: 'charlie',
				organization: 'IOTA',
				'subscribed-channel-ids': ['test-address', 'test-address2']
			},
			body: null
		};

		await userRoutes.searchUsers(req, res, nextMock);

		expect(searchUserSpy).toHaveBeenCalledWith(expectedUserSearch);
	});
});

describe('test GET user', () => {
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any, userService: UserService, userRoutes: IdentityRoutes;
	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();
		userService = new UserService({} as any, '');
		const authorizationService = new AuthorizationService(userService);
		userRoutes = new IdentityRoutes(userService, authorizationService);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock
		};
	});

	it('should return bad request if no user id is given as parameter', async () => {
		const req: any = {
			params: {},
			body: null
		};

		await userRoutes.getUser(req, res, nextMock);
		expect(sendStatusMock).toHaveBeenCalledWith(400);
	});
	it('should return expected user', async () => {
		const date = getDateFromString('2021-02-12T14:58:05+01:00');
		const user: UserPersistence = {
			identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4',
			publicKey: 'my-public-key-1',
			username: 'first-user',
			type: UserType.Person,
			data: { firstName: 'Tom', lastName: 'Tomson' },
			registrationDate: date,
			organization: 'IOTA'
		};
		const getUserSpy = spyOn(UserDb, 'getUser').and.returnValue(user);
		const req: any = {
			params: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			body: null
		};

		await userRoutes.getUser(req, res, nextMock);

		expect(getUserSpy).toHaveBeenCalledTimes(1);
		expect(sendMock).toHaveBeenCalledWith({
			identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4',
			publicKey: 'my-public-key-1',
			username: 'first-user',
			type: 'Person',
			data: { firstName: 'Tom', lastName: 'Tomson' },
			registrationDate: getDateStringFromDate(date),
			organization: 'IOTA'
		});
	});

	it('should call next(err) if an error occurs when reading from db', async () => {
		const getUserSpy = spyOn(UserDb, 'getUser').and.callFake(() => {
			throw new Error('Test error');
		});
		const req: any = {
			params: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			body: null
		};

		await userRoutes.getUser(req, res, nextMock);

		expect(getUserSpy).toHaveBeenCalledTimes(1);
		expect(sendMock).not.toHaveBeenCalled();
		expect(nextMock).toHaveBeenCalledWith(new Error('Test error'));
	});
});

describe('test POST user', () => {
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any, userService: UserService, userRoutes: IdentityRoutes;
	const validBody: User = {
		identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4',
		publicKey: 'my-public-key-1',
		username: 'first-user',
		type: UserType.Person,
		data: { firstName: 'Tom', lastName: 'Sonson' },
		registrationDate: '2021-02-12T14:58:05+01:00',
		organization: 'IOTA'
	};

	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();
		userService = new UserService({} as any, '');
		const authorizationService = new AuthorizationService(userService);
		userRoutes = new IdentityRoutes(userService, authorizationService);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock,
			status: jest.fn(() => res)
		};
	});

	it('should return bad request if no valid body is given', async () => {
		const req: any = {
			params: {},
			body: null
		};

		await userRoutes.addUser(req, res, nextMock);
		expect(nextMock).toHaveBeenCalled();
	});

	it('should return 404 since no user added', async () => {
		const addUserSpy = spyOn(UserDb, 'addUser').and.returnValue({ result: { n: 0 } });

		const req: any = {
			params: {},
			body: validBody
		};

		await userRoutes.addUser(req, res, nextMock);

		expect(addUserSpy).toHaveBeenCalledTimes(1);
		expect(nextMock).toHaveBeenCalledWith(new Error('could not create user identity!'));
	});
	it('should add user', async () => {
		const addUserSpy = spyOn(UserDb, 'addUser').and.returnValue({ result: { n: 1 } });

		const req: any = {
			params: {},
			body: validBody
		};

		await userRoutes.addUser(req, res, nextMock);

		expect(addUserSpy).toHaveBeenCalledTimes(1);
		expect(sendStatusMock).toHaveBeenCalledWith(201);
	});

	it('should call next(err) if an error occurs when adding to db', async () => {
		const addUserSpy = spyOn(UserDb, 'addUser').and.callFake(() => {
			throw new Error('Test error');
		});
		const req: any = {
			params: {},
			body: validBody
		};

		await userRoutes.addUser(req, res, nextMock);

		expect(addUserSpy).toHaveBeenCalledTimes(1);
		expect(sendMock).not.toHaveBeenCalled();
		expect(nextMock).toHaveBeenCalledWith(new Error('Test error'));
	});
});

describe('test create-identity route', () => {
	const serverSecret = 'very-secret-secret';
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any, userService: UserService, userRoutes: IdentityRoutes, ssiService: SsiService;

	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();

		const identityConfig: IdentityConfig = {
			keyCollectionTag: 'key-collection',
			explorer: '',
			network: 'test',
			node: '',
			keyType: 0,
			hashFunction: 0,
			hashEncoding: 'base58'
		};
		ssiService = SsiService.getInstance(identityConfig);
		userService = new UserService(ssiService, serverSecret);
		const authorizationService = new AuthorizationService(userService);
		userRoutes = new IdentityRoutes(userService, authorizationService);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock,
			status: jest.fn(() => res)
		};
	});

	it('should send result for valid body', async () => {
		const identitySpy = spyOn(ssiService, 'createIdentity').and.returnValue(UserIdentityMock);
		const saveIdentitySpy = spyOn(IdentityDocsDb, 'saveIdentity').and.returnValue(UserIdentityMock);
		const userSpy = spyOn(userService, 'addUser').and.returnValue({ result: { n: 1 } });
		const req: any = {
			params: {},
			body: {
				username: 'test-username',
				type: 'Person',
				firstName: 'Mister',
				lastName: 'Subscriber',
				organization: 'IOTA'
			}
		};

		const exptectedUser = {
			type: 'Person',
			firstName: 'Mister',
			lastName: 'Subscriber',
			organization: 'IOTA',
			identityId: 'did:iota:Ced3EL4XN7mLy5ACPdrNsR8HZib2MXKUQuAMQYEMbcb4',
			publicKey: '8WaGsr277JQaqV9fxHmFNGC9haApFbBfdnytmq5gq4vm',
			username: 'test-username'
		};
		await userRoutes.createIdentity(req, res, nextMock);
		expect(identitySpy).toHaveBeenCalledWith();
		expect(userSpy).toHaveBeenCalledWith(exptectedUser);
		expect(saveIdentitySpy).not.toHaveBeenCalled();
		expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
		expect(res.send).toHaveBeenCalledWith(UserIdentityMock);
	});

	it('should save the identity since it is called to with storeIdentity=true', async () => {
		const identitySpy = spyOn(ssiService, 'createIdentity').and.returnValue(UserIdentityMock);
		const saveIdentitySpy = spyOn(IdentityDocsDb, 'saveIdentity');
		const userSpy = spyOn(userService, 'addUser').and.returnValue({ result: { n: 1 } });
		const req: any = {
			params: {},
			body: {
				username: 'test-username',
				type: 'Person',
				firstName: 'Mister',
				lastName: 'Subscriber',
				storeIdentity: true,
				organization: 'IOTA'
			}
		};

		const exptectedUser = {
			type: 'Person',
			firstName: 'Mister',
			lastName: 'Subscriber',
			storeIdentity: true,
			organization: 'IOTA',
			identityId: 'did:iota:Ced3EL4XN7mLy5ACPdrNsR8HZib2MXKUQuAMQYEMbcb4',
			publicKey: '8WaGsr277JQaqV9fxHmFNGC9haApFbBfdnytmq5gq4vm',
			username: 'test-username'
		};
		await userRoutes.createIdentity(req, res, nextMock);
		expect(identitySpy).toHaveBeenCalledWith();
		expect(userSpy).toHaveBeenCalledWith(exptectedUser);
		expect(saveIdentitySpy).toHaveBeenCalledWith(UserIdentityMock, serverSecret);
		expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
		expect(res.send).toHaveBeenCalledWith(UserIdentityMock);
	});
});

describe('test PUT user', () => {
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any, userRoutes: IdentityRoutes, userService: UserService;
	const validBody: User = {
		identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4',
		publicKey: 'my-public-key-1',
		username: 'first-user',
		type: UserType.Person,
		data: { firstName: 'Tom', lastName: 'Sonson' },
		registrationDate: '2021-02-12T14:58:05+01:00',
		organization: 'IOTA'
	};

	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();
		userService = new UserService({} as any, '');
		const authorizationService = new AuthorizationService(userService);
		userRoutes = new IdentityRoutes(userService, authorizationService);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock,
			status: jest.fn(() => res)
		};
	});

	it('should return bad request if no valid body is given', async () => {
		const req: any = {
			params: {},
			body: null
		};

		await userRoutes.updateUser(req, res, nextMock);
		expect(nextMock).toHaveBeenCalled();
	});

	it('should return 404 since no user updated', async () => {
		const updateUserSpy = spyOn(UserDb, 'updateUser').and.returnValue({ result: { n: 0 } });

		const req: any = {
			user: { identityId: validBody.identityId },
			params: {},
			body: validBody
		};

		await userRoutes.updateUser(req, res, nextMock);

		expect(updateUserSpy).toHaveBeenCalledTimes(1);
		expect(res.send).toHaveBeenCalledWith({ error: 'No user found to update!' });
		expect(res.status).toHaveBeenCalledWith(404);
	});

	it('is not authorized to update the user', async () => {
		const updateUserSpy = spyOn(UserDb, 'updateUser').and.returnValue({ result: { n: 1 } });

		const req: any = {
			user: { identityId: 'did:iota:123456789' }, // different request identityId than user to update
			params: {},
			body: validBody
		};

		await userRoutes.updateUser(req, res, nextMock);

		expect(updateUserSpy).toHaveBeenCalledTimes(0);
		expect(nextMock).toHaveBeenCalledWith(new Error('not allowed!'));
	});

	it('should return expected user', async () => {
		const updateUserSpy = spyOn(UserDb, 'updateUser').and.returnValue({ result: { n: 1 } });

		const req: any = {
			user: { identityId: validBody.identityId },
			params: {},
			body: validBody
		};

		await userRoutes.updateUser(req, res, nextMock);

		expect(updateUserSpy).toHaveBeenCalledTimes(1);
		expect(sendStatusMock).toHaveBeenCalledWith(200);
	});

	it('should call next(err) if an error occurs when updating the db', async () => {
		const updateUserSpy = spyOn(UserDb, 'updateUser').and.callFake(() => {
			throw new Error('Test error');
		});
		const req: any = {
			user: { identityId: validBody.identityId },
			params: {},
			body: validBody
		};

		await userRoutes.updateUser(req, res, nextMock);

		expect(updateUserSpy).toHaveBeenCalledTimes(1);
		expect(sendMock).not.toHaveBeenCalled();
		expect(nextMock).toHaveBeenCalledWith(new Error('Test error'));
	});
});

describe('test DELETE user', () => {
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any, userService: UserService, userRoutes: IdentityRoutes;

	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();

		userService = new UserService({} as any, '');
		const authorizationService = new AuthorizationService(userService);
		userRoutes = new IdentityRoutes(userService, authorizationService);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock
		};
	});

	it('should return bad request if no address is given as parameter', async () => {
		const req: any = {
			params: {},
			body: null
		};

		await userRoutes.deleteUser(req, res, nextMock);
		expect(sendStatusMock).toHaveBeenCalledWith(400);
	});

	it('is not authorized to delete different user', async () => {
		const deleteUserSpy = spyOn(UserDb, 'deleteUser');

		const req: any = {
			user: { identityId: 'did:iota:123456789' },
			params: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			body: null
		};

		await userRoutes.deleteUser(req, res, nextMock);

		expect(deleteUserSpy).toHaveBeenCalledTimes(0);
		expect(nextMock).toHaveBeenCalledWith(new Error('not allowed!'));
	});

	it('should delete expected user', async () => {
		const deleteUserSpy = spyOn(UserDb, 'deleteUser');

		const req: any = {
			user: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			params: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			body: null
		};

		await userRoutes.deleteUser(req, res, nextMock);

		expect(deleteUserSpy).toHaveBeenCalledTimes(1);
		expect(sendStatusMock).toHaveBeenCalledWith(200);
	});

	it('should call next(err) if an error occurs when removing from db', async () => {
		const deleteUserSpy = spyOn(UserDb, 'deleteUser').and.callFake(() => {
			throw new Error('Test error');
		});
		const req: any = {
			user: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			params: { identityId: 'did:iota:2QQd1DN1ZjnXnvSAaAjk1VveBNUYDw7eE9bTTCC4RbG4' },
			body: null
		};
		await userRoutes.deleteUser(req, res, nextMock);

		expect(deleteUserSpy).toHaveBeenCalledTimes(1);
		expect(sendMock).not.toHaveBeenCalled();
		expect(nextMock).toHaveBeenCalledWith(new Error('Test error'));
	});
});
