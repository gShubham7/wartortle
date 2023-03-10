import { Box, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Lectures = ({ all_lectures }) => {
  // console.log(all_lectures);
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        gap={20}
        p={5}
        marginTop={"100px"}
      >
        {all_lectures?.map((el) => (
          <Link
            href={`/lectures/${el.snippet.playlistId}/${el.snippet.resourceId.videoId}}`}
          >
            <Box height="150px" key={el._id}>
              <Image
                // width="20%"
                // height="100"
                style={{ borderRadius: "10px" }}
                src={`${el.snippet.thumbnails.medium.url}`}
              />
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Lectures;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://healthy-duck-jewelry.cyclic.app/user/alllectures`
  ).then((x) => x.json());

  return {
    props: {
      all_lectures: res,
    },
  };
};
