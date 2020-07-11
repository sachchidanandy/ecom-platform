/**
 * JWT middleware use to validate JWT recieved from cliend and add user to request object
 *
 * @file jwt_validaotr.mjs
 * @author SachchidanandY
*/

import { JWT_TOKEN_MISSING, JWT_TOKEN_EXPIRED, JWT_TOKEN_INVALID, SOMETHING_WENT_WRONG } from '../utils/error_response.mjs';
import { UNAUTHORIZED, INTERNAL_SERVER_ERROR } from '../utils/constants.mjs';
import { verifyJWT } from '../utils/helper.mjs';

export default async (req, res, next) => {
    const jwtString = req.headers.authorization || false;

    if (!jwtString) {
        return res.status(UNAUTHORIZED).json(JWT_TOKEN_MISSING);
    }

    // verify JWT
    try {
        jwtPayload = await verifyJWT(jwtString);
    } catch (error) {
        console.error('Error while JWT verification : ', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(UNAUTHORIZED).json(JWT_TOKEN_EXPIRED);
        }

        if (error.name === 'JsonWebTokenError') {
            return res.status(UNAUTHORIZED).json(JWT_TOKEN_INVALID);
        }

        return res.status(INTERNAL_SERVER_ERROR).JSON(SOMETHING_WENT_WRONG);
    }

    // TODO : Fetch user and add user in request object
    next();
};
