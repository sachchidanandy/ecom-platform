/**
 * Organization controller contains all actions related to Organizations
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import Organization from '../model/Organization.mjs';
import { SOMETHING_WENT_WRONG, INSUFFICIENT_PERMISSION } from '../utils/error_response.mjs';
import { INTERNAL_SERVER_ERROR, FORBIDDEN, ADMIN, ORG_ADMIN } from '../utils/constants.mjs';

// Function to creation of new Org
export const registerOrg = async (req, res) => {
    try {
        // Check if user is admin
        const { permission } = req.user;
        if (permission !== ADMIN) {
            return res.status(FORBIDDEN).json(INSUFFICIENT_PERMISSION);
        }
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

// Function to update Org
export const updateOrg = async (req, res) => {
    try {
        // Check if user is org admin
        const { permission, org_id } = req.user;
        if (permission !== ORG_ADMIN) {
            return res.status(FORBIDDEN).json(INSUFFICIENT_PERMISSION);
        }

        const newOrg = {};
        const { org_name, founded_on, founded_by } = req.body;
        if (req.files || Object.keys(req.files).length) {
            const sampleFile = req.files.org_logo;
            let fileName = `${sampleFile.md5}.${sampleFile.name.split('.')[1]}`;
            await sampleFile.mv(`./public/${fileName}`);
            newOrg.org_logo = fileName;
        }
        if (org_name) {
            newOrg.org_name = org_name;
        }
        if (founded_on) {
            newOrg.founded_on = founded_on;
        }
        if (founded_by) {
            newOrg.founded_by = founded_by;
        }
        // Get organization details
        const orgObject = await Organization.findOneAndUpdate({ _id: org_id }, newOrg, {new: true});
        return res.json(orgObject);

    } catch (error) {
        console.error('Error while updating org :', error);
        return res.status(INTERNAL_SERVER_ERROR).json(SOMETHING_WENT_WRONG);
    }
};

// Function to delete organization
export const deleteOrg = async (req, res) => {
    try {
        // Check if user is admin
        const { permission } = req.user;
        if (permission !== ADMIN) {
            return res.status(FORBIDDEN).json(INSUFFICIENT_PERMISSION);
        }

        const { org_id } = req.body;

        // Get organization details
        const orgObject = await Organization.findOneAndUpdate({ _id: org_id }, { active: false }, {new: true});
        return res.json(orgObject);

    } catch (error) {
        console.error('Error while updating org :', error);
        return res.status(INTERNAL_SERVER_ERROR).json(SOMETHING_WENT_WRONG);
    }
};
