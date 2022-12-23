import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Clock } from './clock'

import style from "./common.module.css"

export const Top = () => {

 
    return (


        <div className={style.video_frame}>


           <div>
           <video
                id={style.v_bag}
                autoPlay
                loop
                muted
                preload="auto"

                src="/intro.mp4"
            ></video>
           </div>
            
           
          
          <Box bg={useColorModeValue("	rgb(229, 249, 255,.8)", "rgb(0, 0, 0,.8)")} className={style.clock} >
              <span><Clock/></span>
         </Box>
         
    
           
        </div>
 

    )
}
