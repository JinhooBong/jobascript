import React, { useState, Fragment }  from 'react';
import styled from 'styled-components';
import JobsModal from './JobsModal.jsx';
import Job from './Job.jsx';

import {
  Container,
  Button
} from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

import { SearchIcon } from '@chakra-ui/icons';

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

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    // <Fragment>
    <Container display="flex" justifyContent="center">
      {/* <Button
        onClick={() => {
          clickSearch();
        }}
        size="md"
        height="48px"
        width="200px"
        leftIcon={<SearchIcon />}
      >
        Search Jobs
      </Button> */}
      {/* <JobsModal jobs={jobs}/> */}

      <Button onClick={onOpen} leftIcon={<SearchIcon/>}>Search Jobs</Button>

      <Modal isOpen={isOpen} onClose={onClose} p="10" size="xl">
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Button
            onClick={() => clickSearch()}
            size="md"
            height="48px"
            width="200px"
            leftIcon={<SearchIcon />}
          >Search</Button>
          {jobs.slice(0, 5).map((item, i) => {
            return <Job
              key={i}
              job_title={item.title}
              companyName={item.company_name}
              location={item.country}
              description={item.description}
              link={item.detail_url}
            />
          })}
          </ModalBody>
        </ModalContent>
      </Modal>

    </Container>
  )

}

export default JobSearch;