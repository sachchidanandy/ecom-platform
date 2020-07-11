/**
 * Organization controller contains all actions related to Organizations
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import Organization from '../model/Organization.mjs';
import { SOMETHING_WENT_WRONG } from '../utils/error_response.mjs';
import { INTERNAL_SERVER_ERROR } from '../utils/constants.mjs';

export const registerOrg = async (req, res) => {
    try {
        let fileName = '';
        const { org_name, founded_on, founded_by } = req.body;
        if (req.files || Object.keys(req.files).length) {
            const sampleFile = req.files.org_logo;
            fileName = `${sampleFile.md5}.${sampleFile.name.split('.')[1]}`;
            await sampleFile.mv(`./public/${fileName}`);
        }
        const newOrg = await Organization.create({
            org_name,
            founded_on,
            founded_by,
            org_logo: fileName
        });
        return res.json(newOrg);
    } catch (error) {
        console.error('Error while creating new org :', error);
        return res.status(INTERNAL_SERVER_ERROR).json(SOMETHING_WENT_WRONG);
    }
};
