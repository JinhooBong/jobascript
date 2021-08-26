import React from 'react';

import {
  Container,
  Text,
  Link
} from '@chakra-ui/react';

const Job = ({ job_title, companyName = "N/A", location, description, link}) => {

  return (

    <Container m="5">
      <Text fontSize="sm">{job_title}, <Text as="i" fontWeight="extrabold">{companyName}</Text></Text>
      <Text fontSize="sm">{location}</Text>
      <Text color="gray.800" isTruncated>{description.split('.')[0]}{description.split('.')[1]}</Text>
      {/* <Link color="#00A1BA" href="https://chakra-ui.com" isExternal as="u">More Info</Link> */}
      <a className="link" href={link} target="_blank">More Info</a>
    </Container>
  )
}

export default Job;