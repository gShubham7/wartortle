import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import style from "./common.module.css";

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
    </div>
  );
};
