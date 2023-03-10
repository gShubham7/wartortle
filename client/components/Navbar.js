import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import style from "./Navbar.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ActionLogout } from "../redux/auth/auth.actions";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  return (
    <div className={style.navbar}>
      <Box bg={useColorModeValue("rgb(52, 91, 153)", "gray.900")} px={4} py={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href="/">
              <Flex alignItems={"center"}>
                <Image src="/logo.png" width="16%" marginLeft={"10px"}></Image>
                <Text
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                  fontSize={"25px"}
                >
                  Qlick2Learn
                </Text>
              </Flex>
            </Link>
          </Box>

          <Flex width="50%" alignItems={"center"} gap="10px">
            <Input w="100%" />
            <Button>GET</Button>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={""} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={""} />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your profile</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  {/* --------------------------------------- */}
                  {isAuth ? (
                    <MenuItem onClick={() => dispatch(ActionLogout())}>
                      Logout
                    </MenuItem>
                  ) : (
                    <Link href={"/login"}>
                      <MenuItem>Login</MenuItem>
                    </Link>
                  )}

                  {/* ---------------------------------- */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
