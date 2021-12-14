import { RateLimiterMongo } from 'rate-limiter-flexible';
import { MongoDbService } from '../services/mongodb-service';
import { Request, Response, NextFunction } from 'express';

export const rateLimiter = (points: number, duration: number) => (req: Request, res: Response, next: NextFunction) => {
	const rateLimiter = new RateLimiterMongo({
		storeClient: MongoDbService.client,
		keyPrefix: 'middleware',
		points, // X requests
		duration // per Y second by IP
	});

	rateLimiter
		.consume(req.ip)
		.then(() => {
			next();
		})
		.catch(() => {
			res.status(429).send({ error: 'Too Many Requests' });
		});
};
