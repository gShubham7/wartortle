
import { Box, useColorModeValue } from "@chakra-ui/react"
import Footer from "../components/Footer"
 
import Feedback from "../components/HomeElement/feedback"
 
import { Scroll } from "../components/HomeElement/Scroll"
import { Top } from "../components/HomeElement/Top"
import style from "../styles/Home.module.css"
export default function Home() {

  return (

    <div>
      <Top />
      <Box bg={useColorModeValue("	rgb(229, 249, 255,.8)", "rgb(0, 0, 0,.8)")} className={style.homebox}  >

        <Scroll />
     
         <Feedback/>
        <Footer/>

        

      </Box>
    </div>


  )
}
