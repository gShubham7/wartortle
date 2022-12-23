import Model from "./Model";
import style from "./teachers.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Modal,
} from "@chakra-ui/react";
import { useState } from "react";

// const getClass = (type = "") => {
//   return fetch(
//     `https://healthy-duck-jewelry.cyclic.app/user/teachers?filter=${type}`
//   ).then((res) => res.json());
// };

const Teachers = ({ teachers }) => {
  const router = useRouter();
  const [data, setData] = useState(teachers.teachers);

  const handleChange = (e) => {
    let searchVal = e.target.value;
    let box = teachers.teachers
      .filter((ele) => ele.class == searchVal)
      .map((ele) => {
        return ele;
      });
    setData(box);
  };
  const handleChange2 = (e) => {
    let searchVal = e.target.value;
    let box = teachers.teachers
      .filter((ele) => ele.sub == searchVal)
      .map((ele) => {
        return ele;
      });
    setData(box);
  };

  return (
    <div className={style.teachers}>
      <div className={style.filters}>
        <div>
          <select value="" onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>

        <div>
          <select onChange={handleChange2} value="">
            <option value="">Select Subject</option>
            <option value="History">HISTORY</option>
            <option value="Economics">ECONOMICS</option>
            <option value="Geography">GEOGRAPHY</option>
            <option value="Politics">POLITICS</option>
          </select>
        </div>
      </div>
      <div className={style.gridbox}>
        {data?.map((ele) => (
          <div>
            <Center py={6}>
              <Box
                key={ele._id}
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                }
                rounded={"lg"}
                p={6}
                textAlign={"center"}
              >
                <Avatar
                  size={"xl"}
                  src={ele.img}
                  alt={"Avatar Alt"}
                  mb={4}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {ele.name}
                </Heading>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  {ele.email}
                </Text>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  {ele.desc}{" "}
                </Text>
                <Box>{ele.experience} years experience</Box>
                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                >
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    Class: {ele.class}
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    {ele.rating} <StarIcon color="tomato" mb="3px" />
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    Subject: {ele.sub}
                  </Badge>
                </Stack>

                <Stack mt={8} direction={"row"} spacing={4}>
                  <div>
                    <Model />
                  </div>

                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "blue.500",
                    }}
                    _focus={{
                      bg: "blue.500",
                    }}
                  >
                    Follow
                  </Button>
                </Stack>
              </Box>
            </Center>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Teachers;

export async function getStaticProps() {
  let res = await fetch(
    "https://healthy-duck-jewelry.cyclic.app/user/teachers"
  );
  let data = await res.json();

  return {
    props: {
      teachers: data,
    },
  };
}
