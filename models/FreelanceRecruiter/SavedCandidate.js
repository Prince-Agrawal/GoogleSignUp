const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// nested model
const EducationSchema = new Schema();
const JobExperienceSchema = new Schema();
const AcheivementSchema = new Schema();
// nested model ends

const SavedCandidateSchema = new Schema({
  name:{
    type: Schema.Types.String,
    require: true
  },
  email:{
    type: Schema.Types.String,
    require: true
  },
  portfolio_url:{
    type: Schema.Types.String,
    require: true
  },
  qualification:{
    type: [EducationSchema],
    require: true
  },
  skill:{
    type: [Schema.Types.String],
    require: true
  },
  additional_skill:{
    type: [Schema.Types.String],
    require: true
  },
  job_experiences:{
    type: [JobExperienceSchema],
    require: true
  },
  achievements:{
    type: [AcheivementSchema],
    required: true
  }
});

module.exports = {
  SavedCandidate: mongoose.model("saved_candidate", SavedCandidateSchema),
  Education: mongoose.model("saved_candidate", EducationSchema),
  JobExperience: mongoose.model("job_experience", JobExperienceSchema),
  Acheivement: mongoose.model("acheivements", AcheivementSchema),
};
