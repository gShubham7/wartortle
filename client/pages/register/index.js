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
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/register/register.actions";

const Register = () => {
  const { isAuth } = useSelector((store) => store.auth);
  const { isRegistered, loading, error, successMessage, errorMessage } =
    useSelector((store) => store.register);
  const dispatch = useDispatch();
  const [registerCreds, setRegisterCreds] = useState({});
  const toast = useToast();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterCreds({
      ...registerCreds,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (
      !registerCreds.name ||
      !registerCreds.email ||
      !registerCreds.password
    ) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Your account is created",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      dispatch(registerUser(registerCreds));
      router.push("/login");
    }
  };

  // if (isRegistered) {

  // }
  if (loading) {
    // return <Loading />;
  } else if (error) {
    return toast({
      title: "Wrong Credentials",
      description: "Incorrect Email or Password",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }

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
        backgroundColor="rgba(0, 0, 0,.9)"
        borderRadius={20}
        border="2px solid grey"
      >
        <VStack
          padding={{ base: "20px", md: "20px 100px" }}
          // height={{base:"90vh"}}
        >
          <Heading color="moccasin">Get Started Now</Heading>
          <Text>
            It's free to join and gain full access to thousands of exciting
            Learning opportunities
          </Text>
          <FormControl as="fieldset"></FormControl>
          <RadioGroup defaultValue="student" p={5}>
            <HStack spacing="24px">
              <Radio value="student" colorScheme={"purple"}>
                I am a Student
              </Radio>
              <Radio value="teacher" colorScheme={"purple"}>
                I am a Teacher
              </Radio>
            </HStack>{" "}
          </RadioGroup>

          <Stack spacing={3} w="full">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter Your Name..."
                color={"black"}
                bgColor={"gray.100"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter Your Email..."
                color={"black"}
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
              {"Register"}
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.55s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
              )}
            </Button>
          </Stack>
          <Link href={"/login"}>
            <Text>Already have an account ?</Text>
          </Link>
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

export default Register;
