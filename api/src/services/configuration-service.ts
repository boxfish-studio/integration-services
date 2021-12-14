import { Config } from '../models/config';
import { IdentityConfig, StreamsConfig, RateLimiterConfig } from '../models/config/index';
import * as Identity from '@iota/identity-wasm/node';
import isEmpty from 'lodash/isEmpty';
import { getServerIdentities } from '../database/user';
import { ILogger } from '../utils/logger/index';
import { getIdentityKeys } from '../database/identity-keys';

const VERSION = 'v0.1';

export interface IConfigurationService {
	serverIdentityId: string;
	config: Config;
	identityConfig: IdentityConfig;
	streamsConfig: StreamsConfig;
	getRootIdentityId(): Promise<string>;
}

export class ConfigurationService {
	private static instance: ConfigurationService;
	logger: ILogger;
	private _serverIdentityId: string;

	streamsConfig: StreamsConfig = {
		node: process.env.IOTA_HORNET_NODE,
		permaNode: process.env.IOTA_PERMA_NODE,
		statePassword: process.env.SERVER_SECRET
	};

	identityConfig: IdentityConfig = {
		keyCollectionSize: 4096, // size must be a multiple of 2^2, 2^3, 2^4, ...
		node: process.env.IOTA_HORNET_NODE,
		permaNode: process.env.IOTA_PERMA_NODE,
		keyType: Identity.KeyType.Ed25519,
		hashFunction: Identity.Digest.Sha256,
		hashEncoding: 'base58',
		keyCollectionTag: 'key-collection'
	};

	rateLimiterConfig: RateLimiterConfig = {
		enabled: process.env.ENABLE_RATE_LIMITING == 'true' || process.env.ENABLE_RATE_LIMITING == 'TRUE',
		limitingRequests: this.parseEnvVar(process.env.RATE_LIMITING_REQUESTS) || 10,
		limitingWindowDuration: this.parseEnvVar(process.env.RATE_LIMITING_WINDOW_DURATION) || 1
	};

	config: Config = {
		port: this.parseEnvVar(process.env.PORT) || 3000,
		apiVersion: VERSION,
		databaseUrl: process.env.DATABASE_URL,
		databaseName: process.env.DATABASE_NAME,
		serverSecret: process.env.SERVER_SECRET,
		hornetNode: process.env.IOTA_HORNET_NODE,
		permaNode: process.env.IOTA_PERMA_NODE,
		apiKey: process.env.API_KEY,
		commitHash: process.env.COMMIT_HASH,
		identityConfig: this.identityConfig,
		streamsConfig: this.streamsConfig,
		rateLimiterConfig: this.rateLimiterConfig,
		jwtExpiration: !isEmpty(process.env.JWT_EXPIRATION) ? process.env.JWT_EXPIRATION : '1 day'
	};

	constructor(logger: ILogger) {
		this.logger = logger;
		this.assertConfig();
	}

	public static getInstance(logger: ILogger): ConfigurationService {
		if (!ConfigurationService.instance) {
			ConfigurationService.instance = new ConfigurationService(logger);
		}
		return ConfigurationService.instance;
	}

	public get serverIdentityId(): string {
		return this._serverIdentityId;
	}

	public set serverIdentityId(value: string) {
		this._serverIdentityId = value;
	}

	async getRootIdentityId(): Promise<string> {
		try {
			const rootServerIdentities = await getServerIdentities();

			if (!rootServerIdentities || rootServerIdentities.length == 0) {
				this.logger.error('No root identity found!');
				return null;
			}

			if (rootServerIdentities.length > 1) {
				this.logger.error(`Database is in bad state: found ${rootServerIdentities.length} root identities`);
				return null;
			}

			const rootServerIdentity = rootServerIdentities[0];
			const serverIdentityId = rootServerIdentity?.id;

			if (!serverIdentityId) {
				this.logger.error('Root identity id not found');
				return null;
			}

			// check if there is a valid identity-doc
			const serverIdentity = await getIdentityKeys(serverIdentityId, this.config.serverSecret);

			if (!serverIdentity) {
				this.logger.error(`Root identity document with id: ${serverIdentityId} not found in database!`);
				return null;
			}

			this.serverIdentityId = serverIdentityId;
			this.logger.log('Found server identity id: ' + serverIdentityId);
			return serverIdentityId;
		} catch (e) {
			this.logger.error('Error:' + e);
		}

		return null;
	}
	private parseEnvVar(envVar: string): number | null {
		const num = Number.parseInt(envVar, 10);
		if (isNaN(num)) {
			return undefined;
		}
		return num;
	}

	private assertConfig() {
		const config = this.config;

		if (config?.serverSecret === '<server-secret>') {
			this.logger.error('please replace the default values!');
		}

		if (config?.serverSecret?.length !== 32) {
			throw Error('Server secret must to have a length of 32!');
		}

		// apiKey can be empty if the host decides so
		// commitHash is set automatically during deployment
		const optionalEnvVariables = ['apiKey', 'commitHash'];
		Object.values(config).map((value, i) => {
			if (isEmpty(value) && (isNaN(value) || value == null || value === '')) {
				if (optionalEnvVariables.includes(Object.keys(config)[i])) {
					return;
				}

				this.logger.error(`env var is missing or invalid: ${Object.keys(config)[i]}`);
			}
		});
	}
}
