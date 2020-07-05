/**
 * Organization controller contains all actions related to Organizations
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import Organization from '../model/Organization.mjs';

export const registerOrg = async (req, res) => {
    console.log(req.body);

    res.json(req.body);
};
