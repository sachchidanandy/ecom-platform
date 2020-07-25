/**
 * Contains all error messages with error code
 *
 * @file error_response.mjs
 * @author SachchidanandY
*/

export const JWT_TOKEN_MISSING = {
    error_code: 3001,
    messages: 'Authorization tocken missing. Please login again.'
};

export const JWT_TOKEN_EXPIRED = {
    error_code: 3002,
    messages: 'Authorization tocken expired. Please login again.'
};

export const JWT_TOKEN_INVALID = {
    error_code: 3003,
    messages: 'Invalid authorization tocken. Please login again.'
};

export const SOMETHING_WENT_WRONG = {
    error_code: 3004,
    messages: 'Internal Server Error, please try after sometime.'
};

export const INSUFFICIENT_PERMISSION = {
    error_code: 3005,
    messages: 'Insufficient permissions, please contact to admin.'
};

export const INVALID_ORG = {
    error_code: 3006,
    messages: 'Please provide valid organization ID.'
};

export const UNABLE_TO_CREATE_USER = {
    error_code: 3007,
    messages: 'Unable to create new user please try after sometime.'
};

export const EMAIL_ID_ALREADY_REGISTERED = {
    error_code: 3008,
    messages: 'Email id already registered, please login.'
};
