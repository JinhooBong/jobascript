import React from 'react';

const Job = ({ job_title, companyName, location, description, link}) => {

  return (
    <div>
      <p>{job_title}</p>
      <p>{companyName}</p>
      <p>{location}</p>
      <p>{description.substring(0, 100)}</p>
      <p>{link}</p>
    </div>
  )
}

export default Job;