import fs from 'fs';

import { ChannelConfig, CONFIG } from '../config/config';
import { leadCspClient } from '../utils/client';

export const createChannel = async (): Promise<string> => {
	if (fs.existsSync('./src/config/Channel.json')) {
		const channelBuffer = fs.readFileSync('./src/config/Channel.json');
		const channel = JSON.parse(channelBuffer.toString());
		console.log(`Channel already created, channel address: ${channel.channelAddress}`);
		return channel.channelAddress
	}
	const apiKey = CONFIG.apiKey ? `?api-key=${CONFIG.apiKey}` : '';
	const res = await leadCspClient.post(`${CONFIG.baseUrl}/channels/create${apiKey}`, JSON.stringify(ChannelConfig));
	if (res?.status === 201) {
		console.log('successfully created channel!');
		console.log('###########################');
		console.log(`Channel address: ${res.data.channelAddress}`);

		const dir = './src/config/';
		if (!fs.existsSync(dir)) fs.mkdirSync(dir);
		fs.writeFileSync(`${dir}Channel.json`, JSON.stringify(res.data));
		return res.data.channelAddress;
	}
};

export const authorizeSubscription = async (channelAddress: string, subsciptionLink: string): Promise<void> => {
	console.log('Authorizing subscription...');
	const apiKey = CONFIG.apiKey ? `?api-key=${CONFIG.apiKey}` : '';

	const body = {
		subscriptionLink: subsciptionLink
	};
	try {
		const res = await leadCspClient.post(`${CONFIG.baseUrl}/subscriptions/authorize/${channelAddress}${apiKey}`, JSON.stringify(body));
		if (res?.status === 200) {
			console.log('successfully authorized subscription!');
			console.log('###########################');
		}
	} catch (error) {
		if (error.response?.data?.error === 'subscription already authorized') {
			console.log(error.response?.data?.error)
		}
	}


	
};
