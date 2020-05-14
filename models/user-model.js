const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freelancerRecruiterSchema = new Schema({
        username: {
            type : Schema.Types.String
        },
        googleId:{
            type : Schema.Types.String
        }, 
        register_date: {
            type: Schema.Types.Date,
        },
        
        email: {
            type: Schema.Types.String,
        },
        password: {
            type: Schema.Types.String,
        },
        profile_type: {
            type: Schema.Types.String,
        },
        experience_details: {
            type: Schema.Types.String,
            default: "",
        },
        domains: {
            type: [Schema.Types.String],
            default: [],
        },
        hours: {
            type: Schema.Types.String,
            default: "",
        },
        locations: {
            type: [Schema.Types.String],
            default: [],
        },
        acc_settings: {
            type: String,
            default: "",
        },
        targets: {
            type: String,
            default: "",
        },
        candidates: {
            type: [Schema.Types.ObjectId],
            ref: "candidates",
            default: [],
        },
        assigned_jobs: {
            type: [Schema.Types.ObjectId],
            ref: "assigned_jobs",
            default: [],
        },
        payment_details: {
            type: String,
            default: "",
        },
});

  

const User = mongoose.model('freelancer_recruiter', freelancerRecruiterSchema);

module.exports = User;
