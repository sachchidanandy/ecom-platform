/**
 * User controller contains all actions related to User
 *
 * @file User.mjs
 * @author SachchidanandY
*/

import crypto from 'crypto';
import User from '../model/User.mjs';
import Organization from '../model/Organization.mjs';
import {
    SOMETHING_WENT_WRONG,
    INSUFFICIENT_PERMISSION,
    INVALID_ORG,
    UNABLE_TO_CREATE_USER,
    EMAIL_ID_ALREADY_REGISTERED
} from '../utils/error_response.mjs';
import { INTERNAL_SERVER_ERROR, FORBIDDEN, ADMIN, ORG_ADMIN, BAD_REQUEST } from '../utils/constants.mjs';
import { PASSWORD_SECRET } from '../utils/config.mjs';

// Function handle create new user
export const createUser = async (req, res) => {
    let { first_name, last_name, gender, email, mobile_no, password, org_id } = req.body;
    try {
        // Check if email id already registered
        const registeredUser = await User.getUserByEmailId(email);
        if (Array.isArray(registeredUser) && registeredUser.length) {
            return res.status(BAD_REQUEST).json(EMAIL_ID_ALREADY_REGISTERED);
        }

        // Check if org present or not
        const orgObject = await Organization.getOrgById(org_id);
        if(! orgObject) {
            return res.status(BAD_REQUEST).json(INVALID_ORG);
        }

        // Generate salt
        const saltBuffer = crypto.randomBytes(256);
        const salt = saltBuffer.toString('hex');

        // Append salt to password
        password = `${salt}${password}${salt}`;

        // Encrypt password
        password = crypto.createHmac('sha256', PASSWORD_SECRET).update(password).digest('hex');

        // Store new user to DB
        const newUser = await User.createNewUser({ first_name, last_name, gender, email, mobile_no, password, org_id, salt });
        if (!newUser) {
            return res.status(INTERNAL_SERVER_ERROR).json(UNABLE_TO_CREATE_USER);
        }

        return res.json({ first_name, last_name, gender, email, mobile_no, org_id });
    } catch (error) {
        console.error(error);
        return res.status(INTERNAL_SERVER_ERROR).json(SOMETHING_WENT_WRONG);
    }
};

// Function to handle update user
export const updateUser = (req, res) => {

};

// Function to handle delete User
export const deleteUser = (req, res) => {

};

// Function to handle fetch user
export const fetchUser = (req, res) => {

};
