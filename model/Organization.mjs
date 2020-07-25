/**
 * Organization model
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import mongoose from 'mongoose';

const orgSchema = new mongoose.Schema({
    org_name: { type: String, required: true },
    org_logo: { type: String },
    founded_on: { type: Date, required: true },
    founded_by: { type: String, required: true },
    active: { type: Boolean, default:true, required: true }
}, { timestamps: true });

// Static function to get organization by ID
orgSchema.static('getOrgById', async function(org_id) {
    let orgData = false;
    try {
        orgData = await this.findById(org_id);
    } catch (error) {
        console.error(`Can't able to get organizaton for org_id : ${org_id}, error :`, error);
    }
    return orgData;
});

export default mongoose.model('Organization', orgSchema);
