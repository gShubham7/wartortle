import React from 'react'
import style from "./common.module.css"
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut, Animator } from "react-scroll-motion";


export const AutoMoving = () => {
  const ZoomInScrollOut = batch(Sticky(  ), FadeIn(50,0), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  
  return (
    <div className={style.move}> 
         
         <ScrollContainer>
         <ScrollPage>
     
     </ScrollPage>
     
     <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>The great aim of education is not knowledge but action.</span>
    </Animator>
  </ScrollPage>

  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>Change is the end result of all true learning.</span>
    </Animator>
  </ScrollPage>

 
 

 
 
 
</ScrollContainer>
        


    </div>
  )
}
