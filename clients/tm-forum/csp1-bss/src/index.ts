import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import { productOrderRouter } from './routers/product-order.router';
import { violationRouter } from './routers/violation.router';
import { serviceOrderRouter } from './routers/service-order.router';
import { setup } from './setup/setup';

function useRouter(app: express.Express, prefix: string, router: express.Router) {
	const messages = router.stack.map((r) => `${Object.keys(r?.route?.methods)?.[0].toUpperCase()}  ${prefix}${r?.route?.path}`);
	messages.map((m) => console.log(m));

	app.use(prefix, router);
}

const startServer = async () => {
	const app = express();

	const prefix = '/tmf-api';
	app.use(express.json());
	useRouter(app, `${prefix}/productOrderingManagement/v1`, productOrderRouter);
	useRouter(app, `/api/rest/orderManagement/1.0.0`, serviceOrderRouter);
	useRouter(app, `${prefix}/slaManagement/v1`, violationRouter);
	app.listen(process.env.PORT, async () => {
		app._router.stack.forEach((router: any) => {
			if (router.stack) {
				router.stack.map((r: any) => `${Object.keys(r?.route?.methods)?.[0].toUpperCase()}  ${prefix}${r?.route?.path}`);
			}
		});
		console.log(`API running on port ${process.env.PORT}`);
		console.log('--------------------------------------------------------');
		console.log('--------------------------------------------------------');
		await setup();
	});
};

startServer();
