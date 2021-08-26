import React from 'react';

import {
  Text,
  Container,
  CloseButton
} from '@chakra-ui/react';

const JobsApplied = ({ job, deleteFn }) => {
  let jobTitle = job.job_title;
  let companyName = job.companyName;
  let location = job.location;

  return (
    <Container display="flex" justifyContent="space-between" maxW="75vw" m="5" bgColor="#9AC6C4" p="3" borderRadius="5">
      <Text color="#fff" fontSize="xl">{jobTitle}, <Text as="i">{companyName}</Text>, {location}, {job.date_added.substring(0, 10)}</Text>
      <CloseButton onClick={(job) => deleteFn({
        jobtitle: jobTitle,
        company: companyName,
        location: location
      })}/>
    </Container>
  )
}

export default JobsApplied;