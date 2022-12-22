import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Highlight,
  HStack,
  IconButton,
  Input,
  Spacer,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
  Heading,
  RadioGroup,
  Radio,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  // const { isAuth, loading, error, errorMessage } = useSelector(
  //   (store) => store.auth
  // );
  // const dispatch = useDispatch();
  const [loginCreds, setLoginCreds] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!loginCreds.email || !loginCreds.password) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Your are logged in",
        description: "Get rid of your doubts here.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      console.log(loginCreds);
      // dispatch(login(loginCreds));
    }
  };

  if (false) {
    // return <Loading />;
  } 
  // else if (error) {
  //   toast({
  //     title: "Wrong Credentials",
  //     description: "Incorrect Email or Password",
  //     status: "error",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  //   return <Link href="/login" />;
  // }
  // if (isAuth) {
  //   toast({
  //     title: "Logged in successfully",
  //     description: "Go and get exciting offers...",
  //     status: "success",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  //   return <Link href="/register" />;
  // }

  return (
    <>
      <Box
        position={"absolute"}
        top="10%"
        left={{ base: "10%", md: "25%" }}
        w={{ base: "80%", md: "50%" }}
        color="white"
        zIndex={10}
        margin={"auto"}
        backgroundColor="rgba(100,100,200,.4)"
        borderRadius={20}
      >
        <VStack
          padding={{ base: "20px", md: "20px 100px" }}
          //   height="90vh"
        >
          <Heading color="moccasin">Feels Good to See You again</Heading>
          <Text>We together explore the new ideas here</Text>
          <FormControl as="fieldset"></FormControl>

          <Stack spacing={3} w="full">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter Your Email..."
                bgColor={"gray.100"}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter Your Password..."
                bgColor={"gray.100"}
                color="black"
              />
            </FormControl>
            <Checkbox
              value="student"
              colorScheme={"purple"}
              defaultChecked="true"
            >
              I agree to the website's Privacy & Terms and Conditions
            </Checkbox>
            <Checkbox value="student" colorScheme={"purple"}>
              I certify that I am an accredited Teacher
            </Checkbox>
          </Stack>
          <Stack textAlign="left" spacing={3} w="full">
            <Button
              onClick={handleClick}
              w="full"
              colorScheme="purple"
              variant="solid"
            >
              {"Log In"}
              {false && (
                <Spinner
                  thickness="4px"
                  speed="0.55s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
              )}
            </Button>
            <Link href={"/register"}>
              <Text>To register yourself Click Me</Text>
            </Link>
          </Stack>
        </VStack>
      </Box>
      <video
        autoPlay
        loop
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      >
        <source src="/register_bg.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Login;
