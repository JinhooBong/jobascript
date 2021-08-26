import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ApplicationForm from './ApplicationForm.jsx';
import JobsApplied from './JobsApplied.jsx';

import {
  Container,
  Heading
} from '@chakra-ui/react';

const axios = require('axios');

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
    <Container maxW="100vw" w="100vw" m="3">
      <Heading size="lg">Jobs Applied To:</Heading>
      <ApplicationForm refreshFn={getJobApplied}/>
      <ul>
        {jobApplicationList.map((item, i) => {
          return <JobsApplied job={item} key={i} />
        })}
      </ul>
    </Container>
  )
}

export default JobsList;