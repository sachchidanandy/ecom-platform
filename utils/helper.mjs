/**
 * Contain all helper functions
 *
 * @file helper.mjs
 * @author SachchidanandY
*/

import jwt from 'jsonwebtoken';
import { SIGNING_OPTIONS, VERIFY_OPTIONS } from './constants.mjs';
import { PUBLIC_KEY, PRIVATE_KEY } from '../utils/config.mjs';

// Function to create JWT token
export const createJWT = payload => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, PRIVATE_KEY, SIGNING_OPTIONS, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
};

// Function o verify JWT token
export const verifyJWT = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PUBLIC_KEY, VERIFY_OPTIONS, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
};
