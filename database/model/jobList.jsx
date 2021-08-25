const mongoose = require('mongoose');

const jobApplicationSchema = mongoose.Schema({
  job_title: String,
  companyName: String,
  location: String,
  date_added: Date
});

const Job = mongoose.model('Job', jobApplicationSchema);

module.exports = Job;