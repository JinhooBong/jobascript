import React from 'react';

import {
  Text,
  Container,
  CloseButton
} from '@chakra-ui/react';

const JobsApplied = ({ job }) => {
  return (
    <Container display="flex" justifyContent="space-between" maxW="75vw" m="5" bgColor="#9AC6C4" p="3" borderRadius="5">
      <Text color="#fff" fontSize="xl">{job.job_title}, <Text as="i">{job.companyName}</Text>, {job.location}, {job.date_added.substring(0, 10)}</Text>
      <CloseButton onClick={}/>
    </Container>
  )
}

export default JobsApplied;