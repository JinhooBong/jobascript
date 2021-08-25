import React, { useState } from 'react';
import styled from 'styled-components';
import JobsModal from './JobsModal.jsx';

const axios = require('axios');

// const JobSearch = styled.div`

// `

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
    <div>
      <h1>Job Search Section</h1>
      <button onClick={() => clickSearch()}>Search</button>
      <JobsModal jobs={jobs}/>
    </div>
  )

}

export default JobSearch;