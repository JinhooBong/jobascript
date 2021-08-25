const mongoose = require('mongoose');

const jobApplicationSchema = mongoose.schema({
  job_title: String,
  companyName: String,
  location: String,
  date_added: Date
});

const Job = mongoose.model('Job', jobApplicationSchema);

module.exports = Job;