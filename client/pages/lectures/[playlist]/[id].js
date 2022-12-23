import {
  Box,
  Card,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SingleVideoPage = ({ videolist, video }) => {
  const { query } = useRouter();
  const { playlist, id } = query;
 
  return (
    <HStack marginTop={"60px"}>
      <Box fontWeight="bold" padding={20} w="60%">
        <iframe
          width="800"
          height="500"
          style={{ borderRadius: "40px" }}
          src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>
        <Heading fontSize={20} marginBottom="15px" maxWidth={"800"}>
          {video[0]?.snippet.title}
        </Heading>
        <h2 marginBottom="15px">Description:</h2>
        <Text
          style={{
            whiteSpace: "nowrap",
            width: "600px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            _hover: "visible",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {video[0]?.snippet.description}
        </Text>
      </Box>
      <Box
        w="400px"
        h="600px"
        overflowY={"scroll"}
        scroll
        padding="5px"
        box-shadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"    
      >
        {videolist.map((el) => (
          <Link
            href={`/lectures/${el.snippet.playlistId}/${el.snippet.resourceId.videoId}`}
          >
            <HStack>         
                <Image
                  objectFit="cover"
                  maxW="100px"
                  src={`${el.snippet.thumbnails.medium.url}`}
                  alt="thumbnail"
                />        
              <Text py="2">{el.snippet.title}</Text>
            </HStack>
          </Link>
        ))}
      </Box>
    </HStack>
  );
};

export default SingleVideoPage;

export const getServerSideProps = async (context) => {
  const { playlist, id } = context.query;

  let x = await fetch(`https://healthy-duck-jewelry.cyclic.app/user/lecture/${playlist}`).then(
    (res) => res.json()
  );

  let y = await fetch(`https://healthy-duck-jewelry.cyclic.app/user/list/${id}`).then((res) =>
    res.json()
  );
  return {
    props: {
      videolist: x,
      video: y,
    },
  };
};
