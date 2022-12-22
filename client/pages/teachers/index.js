import Model from "./Model";
import style from "./teachers.module.css";
import {StarIcon} from "@chakra-ui/icons";
import { useRouter } from 'next/router';
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
} from '@chakra-ui/react';

const Teachers = ({teachers}) => {
    const router = useRouter();  

    const handleClick = (id) => {
      router.push(`/teachers/${id}`)
    }

   
  return (
    <div className={style.teachers}>
      <div className={style.filters}>
         <select>
         <option value="">Select Course</option>
         <option value="">Class 6</option>
         <option value="">Class 7</option>
         <option value="">Class 8</option>
         <option value="">Class 9</option>
         <option value="">Class 10</option>
         <option value="">Class 11</option>
         <option value="">Class 12</option>
         </select>

         <select>
         <option value="">Select Course</option>
         <option value="">Class 6</option>
         <option value="">Class 7</option>
         <option value="">Class 8</option>
         <option value="">Class 9</option>
         <option value="">Class 10</option>
         <option value="">Class 11</option>
         <option value="">Class 12</option>
         </select>
         
      </div>
      <div className={style.gridbox}>
         
           {/*
            teachers.map((ele) => (
             
              <div key={ele.id} className={style.box} >
                  <img src={ele.image} />
                  <h2>Name: <span>{ele.name}</span></h2>
                  <h3>Category: <span>{ele.category}</span></h3>
                  <p>Experience: <span>{ele.experience} years</span> </p>
                  <p>Rating: <span>{ele.rating} <StarIcon /></span></p>
            </div> 

            )) */}
   {
    teachers.map((ele) => (
            <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
       {/* <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          _focus={{
            bg: 'gray.200',
          }}>
          Message
        </Button> */}
         <div><Model /></div>
      
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
    ))}  
      </div>
    </div>
  )
}
export default Teachers;


export async function getStaticProps() {
  let res = await fetch("http://localhost:8080/teachers");
  let data = await res.json();

  return {
    props: {
      teachers: data,
    },
  };
}
