import React from 'react';

const Job = ({ job_title, companyName, location, description, link}) => {

  return (
    <div>
      <p>{job_title}</p>
      <p>{companyName}</p>
      <p>{location}</p>
      <p>{description.split('.')[0]}{description.split('.')[1]}</p>
      <a href={link}>More Info</a>
    </div>
  )
}

export default Job;