import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Reward } from '../events/Popcott/reward-created-event';

interface UserPayload {
    id: string;
    email: string;
    userName: string;
    userProfileImage: string;
    rewards: Array<Reward> | [];
}

// add the currentUser property (which may or may not be defined) to the Request type
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) { // same as !req.session || !req.session.jwt
        return next();
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
        req.currentUser = payload;
    } catch (err) {}

    // continue to next middleware no matter what happens
    next();
};