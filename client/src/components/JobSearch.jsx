import React, { useState } from 'react';
import styled from 'styled-components';
import JobsModal from './JobsModal.jsx';

import { Flex, Button } from '@chakra-ui/react';

const axios = require('axios');


const JobSearch = () => {

  const [jobs, setJobs] = useState([]);

  function clickSearch() {
    const options = {
      method: 'GET',
      url: 'https://job-search4.p.rapidapi.com/indeed/search',
      params: {query: 'Software Engineer', page: '1'},
      headers: {
        'x-rapidapi-host': 'job-search4.p.rapidapi.com',
        'x-rapidapi-key': '87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8'
      }
    };

    axios.request(options)
      .then((data) => {
        setJobs(data.data['jobs']);
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  return (
    <Flex>
      <Button
        onClick={() => clickSearch()}
        size="md"
        height="48px"
        width="200px"
      >
        Search Jobs
      </Button>
      <JobsModal jobs={jobs}/>
    </Flex>
  )

}

export default JobSearch;