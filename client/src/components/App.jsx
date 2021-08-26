import React from 'react';
import Axios from 'axios';
import JobsList from './JobsList.jsx';
import JobSearch from './JobSearch.jsx';

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading
} from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Container
        bg="#F7F6EF"
        w="100vw"
        h="100vh"
        m="0"
        maxW="100vw"
      >
        <Heading
          p="5"
          size="4xl"
          fontFamily="Open Sans"
          fontWeight="400"
          letterSpacing="4px"
          className="title">Jobascript</Heading>
        <JobSearch />
        <JobsList />
      </Container>
    </ChakraProvider>
  )
}

export default App;