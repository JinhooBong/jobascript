import React, { useState } from 'react';
import styled from 'styled-components';
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, Button } from '@chakra-ui/react';

const axios = require('axios');

const FormDiv=styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

const ApplicationForm = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  function storeJobData() {
    let date = new Date().toLocaleString();
    axios.post('/joblist', {
      jobTitle: jobTitle,
      companyName: companyName,
      location: location,
      date_added: date
    })
      .then((successMsg) => {
        console.log('success', successMsg);
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  function handleJobTitle(e) {
    setJobTitle(e.target.value);
  }

  function handleCompany(e) {
    setCompanyName(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <FormDiv>
      <FormControl display="flex" isRequired>
        <FormLabel m="5">Job Title:</FormLabel>
        <Input m="3" type="text" placeholder="Job Title" onChange={(e) => handleJobTitle(e)}/>
        <FormLabel m="5">Company Name:</FormLabel>
        <Input m="3" type="text" placeholder="Company Name" onChange={(e) => handleCompany(e)}/>
        <FormLabel m="5">Location:</FormLabel>
        <Input m="3" type="text" placeholder="Location" onChange={(e) => handleLocation(e)}/>
        <Button type="submit" onClick={() => storeJobData()}>Submit</Button>
      </FormControl>
    </FormDiv>
  )

}

export default ApplicationForm;