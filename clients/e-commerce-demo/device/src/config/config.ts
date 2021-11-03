import { Config } from '../models/config.model';

export const CONFIG: Config = {
	baseUrl: process.env.BASE_URL,
	apiKey: process.env.API_KEY,
	index: process.env.INDEX
};

export const SellerServiceIdentity = {
	username: 'seller-service-1',
	claim: {
		type: 'Service',
		name: 'VIP Seller Service'
	}
};

export const LogisticDeviceIdentity = {
	username: 'logistic-device',
	claim: {
		type: 'Device',
		category: ['sensor'],
		controlledProperty: ['location'],
		name: 'VIP Logistic Device'
	}
};

export const getChannelAddress = () => {
	const channelAddress = process.env.CHANNEL_ADDRESS;
	if (channelAddress === '<INSERT_CHANNEL_ADDRESS>' || !channelAddress) {
		console.error('Please create channel and insert channel address in .env !');
		process.exit();
	}
	return channelAddress;
};
