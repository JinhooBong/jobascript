import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button
} from '@chakra-ui/react';

const axios = require('axios');

const ApplicationForm = ({ refreshFn }) => {

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  function storeJobData() {
    let date = new Date().toDateString();
    axios.post('/joblist', {
      jobTitle: jobTitle,
      companyName: companyName,
      location: location,
      date_added: date
    })
      .then((successMsg) => {
        console.log('success', successMsg);
        refreshFn();
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
    <Container w="100vw" maxW="100vw" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <FormControl display="flex" flexDirection="row" maxW="90vw" isRequired>
        <FormLabel m="2" display="flex" justifyContent="center" alignItems="center">Job Title:</FormLabel>
        <Input m="3" type="text" placeholder="Job Title" onChange={(e) => handleJobTitle(e)}/>
        <FormLabel m="2" display="flex" justifyContent="center" alignItems="center">Company Name:</FormLabel>
        <Input m="3" type="text" placeholder="Company Name" onChange={(e) => handleCompany(e)}/>
        <FormLabel m="2" display="flex" justifyContent="center" alignItems="center">Location:</FormLabel>
        <Input m="3" type="text" placeholder="Location" onChange={(e) => handleLocation(e)}/>
      </FormControl>
      <Button type="submit" height="48px" width="200px" onClick={() => storeJobData()}>Submit</Button>
    </Container>
  )

}

export default ApplicationForm;