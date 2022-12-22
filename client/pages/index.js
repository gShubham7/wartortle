
import { Box, useColorModeValue } from "@chakra-ui/react"
 
import { Scroll } from "../components/HomeElement/Scroll"
import { Top } from "../components/HomeElement/Top"
import style from "../styles/Home.module.css"
export default function Home() {

  return (

    <div>
      <Top />
      <Box bg={useColorModeValue("gray.100", "gray.900")} className={style.homebox}  >

        <Scroll />

      </Box>
    </div>


  )
}
