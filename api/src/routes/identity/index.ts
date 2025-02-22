import { NextFunction, Request, Response } from 'express';
import { UserSearch, UserType } from '../../models/types/user';
import { UserService } from '../../services/user-service';
import * as _ from 'lodash';
import { StatusCodes } from 'http-status-codes';
import { getDateFromString } from '../../utils/date';
import { AuthenticatedRequest } from '../../models/types/verification';
import { AuthorizationService } from '../../services/authorization-service';
import { CreateIdentityBody } from '../../models/types/identity';
import { IdentitySchemaBody } from '../../models/types/request-response-bodies';
import { ILogger } from '../../utils/logger';
import { VerificationService } from '../../services/verification-service';

export class IdentityRoutes {
	constructor(
		private readonly userService: UserService,
		private readonly authorizationService: AuthorizationService,
		private readonly verificationService: VerificationService,
		private readonly logger: ILogger
	) {}

	createIdentity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const createIdentityBody: CreateIdentityBody = req.body;
			const identity = await this.userService.createIdentity(createIdentityBody);

			res.status(StatusCodes.CREATED).send(identity);
		} catch (error) {
			this.logger.error(error);
			next(new Error('could not create the identity'));
		}
	};

	searchUsers = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
		try {
			const userSearch = this.getUserSearch(req);
			const users = await this.userService.searchUsers(userSearch);
			res.status(StatusCodes.OK).send(users);
		} catch (error) {
			this.logger.error(error);
			next(new Error('could not search for the identity'));
		}
	};

	getUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<any> => {
		try {
			const id = _.get(req, 'params.id');

			if (_.isEmpty(id)) {
				return res.status(StatusCodes.BAD_REQUEST).send({ error: 'no id provided' });
			}

			const { isAuthorized } = this.authorizationService.isAuthorized(req.user, id);
			const user = await this.userService.getUser(id, isAuthorized);
			res.send(user);
		} catch (error) {
			this.logger.error(error);
			next(new Error('could not get the identity'));
		}
	};

	addUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
		try {
			const user = req.body as IdentitySchemaBody;
			const result = await this.userService.addUser(user);

			if (!result?.result?.n) {
				return res.status(StatusCodes.NOT_FOUND).send({ error: 'could not add user!' });
			}

			res.sendStatus(StatusCodes.CREATED);
		} catch (error) {
			this.logger.error(error);
			next(new Error('could not add the identity'));
		}
	};

	updateUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<any> => {
		try {
			const user = req.body;

			const { isAuthorized, error } = this.authorizationService.isAuthorized(req.user, user.id);
			if (!isAuthorized) {
				throw error;
			}

			const result = await this.userService.updateUser(user);

			if (!result?.result?.n) {
				return res.status(StatusCodes.NOT_FOUND).send({ error: 'No user found to update!' });
			}

			res.sendStatus(StatusCodes.OK);
		} catch (error) {
			this.logger.error(error);
			next(new Error('could not update the identity'));
		}
	};

	deleteUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<any> => {
		try {
			const id = _.get(req, 'params.id');
			const revokeCredentials: boolean = <string>req?.query?.['revoke-credentials'] === 'true';

			if (_.isEmpty(id)) {
				return res.status(StatusCodes.BAD_REQUEST).send({ error: 'no id provided' });
			}

			const { isAuthorized, error } = this.authorizationService.isAuthorized(req.user, id);
			if (!isAuthorized) {
				throw error;
			}

			if (revokeCredentials) {
				await this.verificationService.revokeVerifiableCredentials(id);
			}

			await this.userService.deleteUser(id);
			res.sendStatus(StatusCodes.OK);
		} catch (error) {
			this.logger.error(error);
			next(new Error('could not delete the identity'));
		}
	};

	getUserSearch = (req: Request): UserSearch => {
		const decodeParam = (param: string): string | undefined => (param ? decodeURI(param) : undefined);
		const type = decodeParam(<string>req.query.type);
		const username = decodeParam(<string>req.query.username);
		const registrationDate = decodeParam(<string>req.query['registration-date']);
		const limitParam = parseInt(<string>req.query.limit, 10);
		const indexParam = parseInt(<string>req.query.index, 10);
		const limit = isNaN(limitParam) || limitParam == 0 ? undefined : limitParam;
		const index = isNaN(indexParam) ? undefined : indexParam;

		return {
			type: <UserType>type,
			index,
			limit,
			username,
			registrationDate: getDateFromString(registrationDate)
		};
	};
}
