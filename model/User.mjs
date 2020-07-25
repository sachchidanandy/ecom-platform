/**
 * Users schema and model
 *
 * @file User.mjs
 * @author SachchidanandY
*/

import mongoose from 'mongoose';
import { NORMAL_USER, CSA_USER, ORG_ADMIN, ADMIN } from '../utils/constants.mjs';

const userSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String, required: true  },
    mobile_no: { type: Array },
    password: { type: String, required: true },
    permission: { type: Number, enum: [NORMAL_USER, CSA_USER, ORG_ADMIN, ADMIN ], default: NORMAL_USER },
    org_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
    salt: { type: String, required: true }
}, { timestamp: true });

// Create new user
userSchema.static('createNewUser', async function({ first_name, last_name, gender, email, mobile_no, password, org_id, salt }) {
    let newUser = false;
    try {
        newUser = await this.create({ first_name, last_name, gender, email, mobile_no, password, org_id, salt });
    } catch (error) {
        console.error(`Can't able to create user for email id : ${email}, error : `, error);
    }
    return newUser;
});

// Get user by email
userSchema.static('getUserByEmailId', async function(email) {
    let userData = false;
    try {
        userData = await this.find({email});
    } catch (error) {
        console.error(`Can't able to get user for email id : ${email}, Error :`, error);
    }
    return userData;
});

// Get user by id
userSchema.static('getUserById', async function(user_id) {
    let userData = false;
    try {
        userData = await this.findById(user_id);
    } catch (error) {
        console.error(`Can't able to get user for user_id id : ${user_id}, Error :`, error);
    }
    return userData;
});

export default new mongoose.model('User', userSchema);
