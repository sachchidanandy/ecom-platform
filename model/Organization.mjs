/**
 * Organization model
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import Mongoose from 'mongoose';

const orgSchema = new Mongoose.Schema({
    org_name: { type: String, required: true },
    org_logo: { type: String },
    founded_on: { type: Date, required: true },
    founded_by: { type: String, required: true }
}, { timestamps: true });

const Organization = Mongoose.model('Organization', orgSchema);

export default Mongoose.model('Organization');
