import React from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from '@chakra-ui/react';

const ApplicationForm = () => {

  return (
    <FormControl id="email">
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  )

}

export default ApplicationForm;