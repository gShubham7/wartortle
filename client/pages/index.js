
import { Box, useColorModeValue } from "@chakra-ui/react"
import { dividerClasses } from "@mui/material"
import { Scroll } from "../components/HomeElement/Scroll"
import { Top } from "../components/HomeElement/Top"
import style from "../styles/Home.module.css"
export default function Home() {

  return (

    <din>
      <Top />
      <Box bg={useColorModeValue("gray.100", "gray.900")} className={style.homebox}  >

        <Scroll />

      </Box>
    </din>


  )
}
