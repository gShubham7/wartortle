import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

export const Clock = (props) => {

    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    const [time, setTime] = useState(sec);
    useEffect(() => {
 
        let id = setTimeout(() => {
            setTime((time) => time + 1)
        }, 1000)

        return () => {
            clearTimeout(id);
        }
    }, [time])

    sec = time;

    const seconds = sec % 60;
    const minutes = min;
    const hours = hour;
    return (
        <div>
            <Text>
                {hours} :: {minutes} :: {seconds}
            </Text>



        </div>
    )
}
