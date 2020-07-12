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
        org_name: Joi.string().required().strip(),
        founded_on: Joi.date().required().strip(),
        founded_by: Joi.string().required().strip()
    })
};

export const updateOrgValidation = {
    body: Joi.object({
        org_name: Joi.string().strip().optional(),
        founded_on: Joi.date().strip().optional(),
        founded_by: Joi.string().strip().optional()
    })
};

export const deleteOrgValidation = {
    body: Joi.object({
        org_id: Joi.string().strip().required()
    })
};
