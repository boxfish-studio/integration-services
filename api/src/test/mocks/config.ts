import { Config, IdentityConfig, StreamsConfig } from '../../models/config';
import { RateLimiterConfig } from '../../models/config/index';

export const RateLimiterConfigMock: RateLimiterConfig = {
	enabled: true,
	limitingRequests: 10,
	limitingWindowDuration: 1
};

export const StreamsConfigMock: StreamsConfig = {
	node: '',
	permaNode: '',
	statePassword: 'veryvery-very-very-server-secret'
};

export const IdentityConfigMock: IdentityConfig = {
	keyCollectionTag: 'key-collection',
	keyCollectionSize: 2,
	node: '',
	permaNode: '',
	keyType: 0,
	hashFunction: 0,
	hashEncoding: 'base58'
};

export const ConfigMock: Config = {
	jwtExpiration: '1 day',
	identityConfig: IdentityConfigMock,
	apiKey: 'test-v1',
	serverSecret: 'veryvery-very-very-server-secret',
	databaseName: 'testdatabasename',
	databaseUrl: 'testdatabaseurl',
	apiVersion: '0.1',
	port: 3000,
	permaNode: 'testpermanodeurl',
	hornetNode: 'testhornetnodeurl',
	streamsConfig: StreamsConfigMock,
	rateLimiterConfig: RateLimiterConfigMock,
	commitHash: ''
};
