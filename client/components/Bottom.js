import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";

export default function Bottom() {
  return (
    <div className={style.bottom}>
      <Box
        bg={useColorModeValue("	rgba(52, 91, 153,.5)", "gray.900")}
        width="50%"
        borderRadius="10px"
        margin="auto"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            <Link href="/teachers">TEACHERS</Link>
          </Button>
          <Button variant={"solid"} colorScheme={"red"} size={"sm"} mr={4}>
            <AddIcon />
          </Button>

          <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            <Link href="/lectures"> VIDEO</Link>
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
