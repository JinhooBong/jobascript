import React from 'react';
import styled from 'styled-components';
import Job from './Job.jsx';

// const modal = styled.div`


// `


const JobsModal = ({ jobs }) => {

  return (
    <div>
      <h1>Available Jobs</h1>
      {jobs.map((item, i) => {
        return <Job
          key={i}
          job_title={item.title}
          companyName={item.company_name}
          location={item.country}
          description={item.description}
          link={item.detail_url}
        />
      })}
    </div>
  )

}

export default JobsModal;