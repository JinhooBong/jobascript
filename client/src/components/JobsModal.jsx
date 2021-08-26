import React, { Fragment } from 'react';
import styled from 'styled-components';
import Job from './Job.jsx';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  userDisclosure,
  Container
} from "@chakra-ui/react"

const JobsModal = ({ jobs }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
    <Button onClick={onOpen}>Trigger</Button>

    <Modal>
        <ModalHeader>Available Jobs</ModalHeader>
        {/* <ModalCloseButton />
        <ModalBody>
          {jobs.map((item, i) => {
            return <Job
              key={i}
              job_title={item.title}
              companyName={item.company_name}
              location={item.country}
              description={item.description}
              link={item.detail_url}
            />
          })}
          <h1>Hello</h1>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter> */}
    </Modal>
    </Fragment>
  )

}

export default JobsModal;