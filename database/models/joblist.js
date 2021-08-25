const mongoose = require('mongoose');

const jobsAppliedSchema = mongoose.Schema({
  jobTitle: String,
  companyName: String,
  location: String,
  dateApplied: Date
});

const JobList = mongoose.model('JobList', jobsAppliedSchema);

module.exports = JobList;