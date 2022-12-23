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
  border,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import SocketIOClient from "socket.io-client";

function Model() {
  const user = "User_" + String(new Date().getTime()).substr(-3);
  //................................................................
  const inputRef = useRef(null);

  // connected flag
  const [connected, setConnected] = useState(false);

  // init chat and message
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // connect to socket server
    const socket = SocketIOClient.connect("http://localhost:3000", {
      path: "/api/socketio",
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    // update chat on new message dispatched
    socket.on("message", (message) => {
      chat.push(message);
      setChat([...chat]);
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = async () => {
    if (msg) {
      // build message obj
      const message = {
        user,
        msg,
      };

      // dispatch message to other users
      const resp = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      // reset field if OK
      if (resp.ok) setMsg("");
    }

    // focus after click
    inputRef?.current?.focus();
  };
  //.......................................................................
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        _focus={{
          bg: "gray.300",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
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
            <textarea
              style={{
                width: "200px",
                marginTop: "10px",
                border: "1px solid #6b88ff",
              }}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            ></textarea>
          </ModalBody>
          <ModalFooter>
            <Button onClick={sendMessage}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Model;
