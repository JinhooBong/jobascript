const Job = require('../model/jobList.jsx');

const addJob = ({ jobTitle, companyName, location, date_added }) => {
  const jobApp = new Job({
    job_title: jobTitle,
    companyName: companyName,
    location: location,
    date_added: date_added
  });

  jobApp.save((err, saved) => {
    if (err) return err;
    return saved;
  })
};

module.exports = addJob;