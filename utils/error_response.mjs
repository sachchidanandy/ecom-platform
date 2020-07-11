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
