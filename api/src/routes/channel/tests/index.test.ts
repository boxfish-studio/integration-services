import { StatusCodes } from 'http-status-codes';
import { ChannelRoutes } from '..';
import { ChannelInfo } from '../../../models/types/channel-info';
import { Subscription } from '../../../models/types/subscription';
import { AccessRights, SubscriptionType } from '../../../models/schemas/subscription';
import { ChannelInfoService } from '../../../services/channel-info-service';
import { ChannelService } from '../../../services/channel-service';
import { StreamsMessage, StreamsService } from '../../../services/streams-service';
import { SubscriptionService } from '../../../services/subscription-service';
import { UserService } from '../../../services/user-service';
import { StreamsConfigMock } from '../../../test/mocks/config';
import { LoggerMock } from '../../../test/mocks/logger';
import { AuthorMock } from '../../../test/mocks/streams';

describe('test channel routes', () => {
	let sendMock: any, sendStatusMock: any, nextMock: any, res: any;
	let channelService: ChannelService, channelRoutes: ChannelRoutes, streamsService: StreamsService;
	let channelInfoService: ChannelInfoService, userService: UserService, subscriptionService: SubscriptionService;

	beforeEach(() => {
		sendMock = jest.fn();
		sendStatusMock = jest.fn();
		nextMock = jest.fn();
		const config = StreamsConfigMock;
		userService = new UserService({} as any, '', LoggerMock);
		streamsService = new StreamsService(config, LoggerMock);
		channelInfoService = new ChannelInfoService(userService);
		subscriptionService = new SubscriptionService(streamsService, channelInfoService, config);
		channelService = new ChannelService(streamsService, channelInfoService, subscriptionService, config, LoggerMock);
		channelRoutes = new ChannelRoutes(channelService, LoggerMock);

		res = {
			send: sendMock,
			sendStatus: sendStatusMock,
			status: jest.fn(() => res)
		};
	});

	describe('test create channel route', () => {
		it('should call nextMock if no body is provided', async () => {
			const loggerSpy = jest.spyOn(LoggerMock, 'error');
			const req: any = {
				params: {},
				user: { id: undefined },
				body: undefined // no body
			};

			await channelRoutes.createChannel(req, res, nextMock);
			expect(loggerSpy).toHaveBeenCalledWith(new Error("Cannot read property 'topics' of undefined"));
			expect(nextMock).toHaveBeenCalledWith(new Error('could not create the channel'));
		});

		it('should bad request if no id is provided', async () => {
			const req: any = {
				params: {},
				user: { id: undefined }, //no id,
				body: {}
			};

			await channelRoutes.createChannel(req, res, nextMock);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
			expect(res.send).toHaveBeenCalledWith({ error: 'no id provided' });
		});

		it('should create and return a channel for the user', async () => {
			const req: any = {
				params: {},
				user: { id: 'did:iota:1234' },
				body: { topics: [], seed: 'verysecretseed' }
			};

			const expectedSubscription: Subscription = {
				accessRights: AccessRights.ReadAndWrite,
				channelAddress: '1234234234',
				keyloadLink: 'author-keyload-link',
				isAuthorized: true,
				state: 'uint8array string of subscription state',
				subscriptionLink: '1234234234',
				type: SubscriptionType.Author,
				id: 'did:iota:1234',
				publicKey: 'testpublickey',
				pskId: '',
				sequenceLink: ''
			};
			const expectedChannelInfo: ChannelInfo = {
				authorId: 'did:iota:1234',
				channelAddress: '1234234234',
				topics: []
			};

			const exportSubscriptionSpy = jest
				.spyOn(streamsService, 'exportSubscription')
				.mockReturnValue('uint8array string of subscription state');
			const createSpy = jest.spyOn(streamsService, 'create').mockImplementation(async () => ({
				seed: 'verysecretseed',
				author: AuthorMock,
				channelAddress: '1234234234',
				keyloadLink: 'author-keyload-link',
				publicKey: 'testpublickey',
				presharedKey,
				pskId: '',
				sequenceLink: ''
			}));
			const addSubscriptionSpy = jest.spyOn(subscriptionService, 'addSubscription').mockImplementation(async () => null);
			const addChannelInfoSpy = jest.spyOn(channelInfoService, 'addChannelInfo').mockImplementation(async () => null);

			await channelRoutes.createChannel(req, res, nextMock);

			const presharedKey: string = undefined;
			expect(createSpy).toHaveBeenCalledWith('verysecretseed', presharedKey);
			expect(exportSubscriptionSpy).toHaveBeenCalledWith(AuthorMock, StreamsConfigMock.statePassword);
			expect(addSubscriptionSpy).toHaveBeenCalledWith(expectedSubscription);
			expect(addChannelInfoSpy).toHaveBeenCalledWith(expectedChannelInfo);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
			expect(res.send).toHaveBeenCalledWith({ channelAddress: '1234234234', seed: 'verysecretseed', presharedKey });
		});
		it('should create and return a channel for the user using a preshared key', async () => {
			const presharedKey = 'd57921c36648c411db5048b652ec11b8';
			const pskId = 'testpskid';
			const req: any = {
				params: {},
				user: { id: 'did:iota:1234' },
				body: { topics: [], presharedKey, hasPresharedKey: true }
			};

			const expectedSubscription: Subscription = {
				accessRights: AccessRights.ReadAndWrite,
				channelAddress: '1234234234',
				keyloadLink: 'author-keyload-link',
				isAuthorized: true,
				state: 'uint8array string of subscription state',
				subscriptionLink: '1234234234',
				type: SubscriptionType.Author,
				id: 'did:iota:1234',
				pskId,
				publicKey: '',
				sequenceLink: ''
			};
			const expectedChannelInfo: ChannelInfo = {
				authorId: 'did:iota:1234',
				channelAddress: '1234234234',
				topics: []
			};

			const exportSubscriptionSpy = jest
				.spyOn(streamsService, 'exportSubscription')
				.mockReturnValue('uint8array string of subscription state');
			const createSpy = jest.spyOn(streamsService, 'create').mockImplementation(async () => ({
				seed: 'verysecretseed',
				author: {} as any,
				channelAddress: '1234234234',
				pskId,
				presharedKey,
				keyloadLink: 'author-keyload-link',
				publicKey: '',
				sequenceLink: ''
			}));
			const addSubscriptionSpy = jest.spyOn(subscriptionService, 'addSubscription').mockImplementation(async () => null);
			const addChannelInfoSpy = jest.spyOn(channelInfoService, 'addChannelInfo').mockImplementation(async () => null);

			await channelRoutes.createChannel(req, res, nextMock);

			expect(createSpy).toHaveBeenCalledWith(undefined, presharedKey);
			expect(exportSubscriptionSpy).toHaveBeenCalledWith({}, StreamsConfigMock.statePassword);
			expect(addSubscriptionSpy).toHaveBeenCalledWith(expectedSubscription);
			expect(addChannelInfoSpy).toHaveBeenCalledWith(expectedChannelInfo);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
			expect(res.send).toHaveBeenCalledWith({ channelAddress: '1234234234', seed: 'verysecretseed', presharedKey });
		});
	});

	describe('test getLogs channel route', () => {
		it('should return bad request if no id is provided', async () => {
			const req: any = {
				params: { channelAddress: '12345' },
				user: { id: undefined }, //no id,
				body: {}
			};

			await channelRoutes.getLogs(req, res, nextMock);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
			expect(res.send).toHaveBeenCalledWith({ error: 'no channelAddress or id provided' });
		});

		it('should return bad request if no channelAddress is provided', async () => {
			const req: any = {
				params: {}, // no channelAddress
				user: { id: 'did:iota:1234' },
				body: {}
			};

			await channelRoutes.getLogs(req, res, nextMock);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
			expect(res.send).toHaveBeenCalledWith({ error: 'no channelAddress or id provided' });
		});

		it('should return bad request if startDate is after endDate', async () => {
			const req: any = {
				params: { channelAddress: '12345' },
				user: { id: 'did:iota:1234' },
				body: {},
				query: { 'start-date': '2021-09-29T10:00:00+02:00', 'end-date': '2021-09-28T10:00:00+02:00' }
			};

			await channelRoutes.getLogs(req, res, nextMock);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
			expect(res.send).toHaveBeenCalledWith({ error: 'start date is after end date' });
		});
	});

	describe('test getHistory channel route', () => {
		it('should return bad request if no channelAddress is provided', async () => {
			const req: any = {
				params: {},
				body: {}
			};

			await channelRoutes.getHistory(req, res, nextMock);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
			expect(res.send).toHaveBeenCalledWith({ error: 'no channelAddress provided' });
		});

		it('should bad request if no presharedKey is provided', async () => {
			const req: any = {
				params: { channelAddress: '12345' },
				query: {}, // no preshared-key provided
				body: {}
			};

			await channelRoutes.getHistory(req, res, nextMock);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
			expect(res.send).toHaveBeenCalledWith({ error: 'no preshared-key provided' });
		});

		it('should return the data if both is is provided', async () => {
			const req: any = {
				params: { channelAddress: '12345' },
				query: { 'preshared-key': 'eaifooaeenagr' },
				body: {}
			};
			const messages: StreamsMessage[] = [
				{ link: '12313:00', maskedPayload: undefined, messageId: '123', publicPayload: { data: { a: 124 } } }
			];
			const requestSubscriptionSpy = jest
				.spyOn(streamsService, 'requestSubscription')
				.mockImplementation(async () => ({ subscriber: null, pskId: '', seed: '' }));
			const getMessagesSpy = jest.spyOn(streamsService, 'getMessages').mockImplementation(async () => messages);

			await channelRoutes.getHistory(req, res, nextMock);
			expect(requestSubscriptionSpy).toHaveBeenCalledWith('12345', undefined, 'eaifooaeenagr');
			expect(getMessagesSpy).toHaveBeenCalledWith(null);
			expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
			expect(res.send).toHaveBeenCalledWith([
				{
					log: { created: undefined, metadata: undefined, payload: undefined, publicPayload: { a: 124 }, type: undefined },
					link: '12313:00',
					messageId: '123'
				}
			]);
		});
	});
});
