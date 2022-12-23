import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    border
  } from '@chakra-ui/react';
  import React from 'react';
import { useDisclosure } from '@chakra-ui/react'


  function Model() {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Button
        flex={1}
        fontSize={'sm'}
        rounded={'full'}
        _focus={{
          bg: 'gray.300',
        }}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
         Message
        </Button>
   
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Message</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Type your message here!</Text>
              <textarea style={{
                width:"200px",
                marginTop:"10px",
                border:"1px solid #6b88ff"
              }}></textarea>
            </ModalBody>
            <ModalFooter>
              <Button>Send</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model;