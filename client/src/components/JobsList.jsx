import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ApplicationForm from './ApplicationForm.jsx';
import JobsApplied from './JobsApplied.jsx';

const axios = require('axios');

// const JobListDiv = styled.div`
//   background-color:

// `


const JobsList = () => {

  const [jobApplicationList, setJobApplicationList] = useState([]);

  function getJobApplied() {
    axios.get('/joblist')
      .then((data) => {
        console.log(data.data);
        setJobApplicationList(data.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  useEffect(() => {
    getJobApplied();
  }, []);

  return (
    <div>
      <h1>Job List Section</h1>
      <ul>
        {jobApplicationList.map((item, i) => {
          return <JobsApplied job={item} key={i} />
        })}
      </ul>
      <ApplicationForm />
    </div>
  )
}

export default JobsList;