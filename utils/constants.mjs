/**
 * App constants
 *
 * @file constants.mjs
 * @author SachchidanandY
*/

// GENERAl APP CONSTANTS
export const VALIDATOR_OPTIONS = { context: false, statusCode: 400, keyByField: true };

// HTTP status code
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const INTERNAL_SERVER_ERROR = 500;

// JWT SIGNING OPTIONS
export const SIGNING_OPTIONS = {
    issuer:  'Ecom Platform',           // Issuer
    subject:  'Authentication Tocken',  // Subject
    audience:  'Ecom Platform Client',  // Audience
    expiresIn:  "12h",                  //expiresIn
    algorithm:  "RS256"                 //algorithm
};

// JWT VERIFY OPTIONS
export const VERIFY_OPTIONS = {
    issuer:  'Ecom Platform',           // Issuer
    subject:  'Authentication Tocken',  // Subject
    audience:  'Ecom Platform Client',  // Audience
    expiresIn:  "12h",                  //expiresIn
    algorithm:  ["RS256"]               //algorithm
};
