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

	console.log('--------------------------------------------------------');
	console.log('--------------------------------------------------------');
	const { identityId, channelAddress } = await setup(index);
	await checkSubscriptionState(channelAddress, identityId);

	if (index === 1) {
		// seller
		const log = { description: 'Package handed over to logistics', date: new Date().toISOString() };
		await writeChannel({ ...log, identityId }, 'seller-log');
	} else {
		// logistic
		const log = { description: 'Package received from seller', date: new Date().toISOString(), coordinates: { lat: 48.8566, lng: 2.3522 } }; // paris
		await writeChannel({ ...log, identityId }, 'logistic-log');

		const log2 = { description: 'Package loaded into transport cart', date: new Date().toISOString(), coordinates: { lat: 48.0566, lng: 2.1522 } };
		await writeChannel({ ...log2, identityId }, 'logistic-log');

		const log3 = { description: 'Arrived at destination', date: new Date().toISOString(), coordinates: { lat: 52.520007, lng: 13.404954 } }; // berlin
		await writeChannel({ ...log3, identityId }, 'logistic-log');

		const log4 = {
			description: 'Package handed over to recipient',
			date: new Date().toISOString(),
			coordinates: { lat: 52.520007, lng: 13.404954 },
			signature: {
				nonce: '1d4460be22c2769f88c24543b941fab2e9723f07',
				signedNonce:
					'879005757aa9d4238ca68972faf8e6d869b7c7eb890d09d0f0b4154ae92d6e8385c29434f3a998d3fef380a7f44034926e19f55312031306b2cfd26a0411e803'
			}
		}; // berlin
		await writeChannel({ ...log4, identityId }, 'logistic-log');
	}

	console.log('Device demo finished :)');
};

startDevice();
