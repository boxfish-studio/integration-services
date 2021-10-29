import { createIdentity } from '../services/identity.serivce';

import { getChannelAddress } from '../config/config';

export const setup = async (index: number) => {
	const identityId = await createIdentity(index);
	const channelAddress = getChannelAddress();
	return { identityId, channelAddress };
};
