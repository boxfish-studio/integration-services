import { Router } from 'express';

import { ServiceOrderRoutes } from '../routes/service-order.route';

const { forwardServiceOrder, writeChannel } = new ServiceOrderRoutes();
export const serviceOrderRouter = Router();

serviceOrderRouter.post('/serviceOrder', forwardServiceOrder);

serviceOrderRouter.post('/listener/serviceOrderCreateEvent', writeChannel);