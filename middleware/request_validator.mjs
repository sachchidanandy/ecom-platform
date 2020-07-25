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

export const newUserValidation = {
    body: Joi.object({
        first_name: Joi.string().strip().required(),
        last_name: Joi.string().strip().required(),
        gender: Joi.string().strip().lowercase().valid('male', 'female'),
        email: Joi.string().email().required(),
        mobile_no: Joi.number().min(1000000000).max(9999999999).required(),
        password: Joi.string().alphanum().strip().min(8).required(),
        org_id: Joi.string().strip().required()
    })
};
