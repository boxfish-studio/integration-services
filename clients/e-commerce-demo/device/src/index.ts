require('dotenv').config(); // eslint-disable-line
import { CONFIG } from './config/config';
import { writeChannel } from './services/channel.service';
import { checkSubscriptionState } from './services/subscription.service';

import { setup } from './setup/setup';

const startDevice = async () => {
	const index = Number(CONFIG.index);
	if (isNaN(index)) {
		throw new Error('index must be a number');
	}

	console.log('Device demo started...');
	console.log('--------------------------------------------------------');
	console.log('--------------------------------------------------------');
	const { identityId, channelAddress } = await setup(index);
	await checkSubscriptionState(channelAddress, identityId);
	const measurement = (index: number) => {
		const factor = index * 0.5;
		return { produced: { value: factor * 30, unit: 'kWh' }, consumption: { value: factor * 20, unit: 'kWh' } };
	};

	await writeChannel({ ...measurement(index), identityId }, 'measurement');
	console.log('Device demo finished :)');
};

startDevice();
