import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import style from "./common.module.css"

export const Top = () => {



    const clock = () => {


        return Date()
    }
    return (


        <div className={style.video_frame}>


            <video
                id={style.v_bag}
                autoPlay
                loop
                muted
                preload="auto"

                src="/intro.mp4"
            ></video>
            
           
        </div>
 

    )
}
