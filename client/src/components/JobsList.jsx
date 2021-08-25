import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ApplicationForm from './ApplicationForm.jsx';

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
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  useEffect(() => {
    getJobApplied();
  }, [jobApplicationList]);

  return (
    <div>
      <h1>Job List Section</h1>

      <ApplicationForm />
    </div>
  )
}

export default JobsList;