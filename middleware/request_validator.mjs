/**
 * requestValidator is use to validate incomming request
 *
 * @file requestValidator.mjs
 * @author SachchidanandY
*/

import expressValidation from 'express-validation';
const { Joi } = expressValidation;

export const newOrgValidation = {
    body: Joi.object({
        org_name: Joi.string().required(),
        org_logo: Joi.string(),
        founded_on: Joi.date().required(),
        founded_by: Joi.string().required()
    })
};
