import React from 'react';

const JobsApplied = ({ job }) => {
  return (
    <li>{job.job_title}, {job.companyName}, {job.location}, {job.date_added.substring(0, 10)}</li>
  )
}

export default JobsApplied;