const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// import model
const PaymentDetail = require("../common/PaymentDetail");
const AccountSettingsSchema = new Schema();

// nested model
const TargetSchema = new Schema({
  start_date: {
    type: Schema.Types.Date,
    required: true,
  },
  end_date: {
    type: Schema.Types.Date,
    required: true,
  },
  targetValue: {
    type: Schema.Types.String,
  },
  acheived_value: {
    type: Schema.Types.String,
  },
});

const ExperienceDetails = new Schema({});
// nested model ends

const FreelanceRecruiterSchema = new Schema({
  register_date: {
    type: Schema.Types.Date,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  profile_type: {
    type: Schema.Types.String,
    required: true,
  },
  experience_details: {
    type: Schema.Types.String,
    required: true,
    default: {},
  },
  domains: {
    type: [Schema.Types.String],
    default: [],
    required: true,
  },
  hours: {
    type: Schema.Types.String,
    default: "",
    required: true,
  },
  locations: {
    type: [Schema.Types.String],
    default: [],
    required: true,
  },
  acc_settings: {
    type: AccountSettingsSchema,
    default: {},
    required: true,
  },
  targets: {
    type: TargetSchema,
    default: {},
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
    type: PaymentDetail,
    default: {},
  },
});

module.exports = {
  FreelanceRecruiter: mongoose.model(
    "freelance_recruiter",
    FreelanceRecruiterSchema
  ),
  AccountSettings: mongoose.model("account_settings", AccountSettingsSchema),
};
