import React, { useEffect } from 'react'
import About from './About';
import AOS from "aos"
import style from "./common.module.css";
import { Top } from './Top';
import 'aos/dist/aos.css';
import Zoom from 'react-reveal/Fade';
import { AutoMoving } from './AutoMoving';
export const Scroll = () => {

  useEffect(()=>{
    AOS.init();
    AOS.refresh()
  },[])
 
  
  return (
<div >
     
    
   
   
   <div className={style.body}>
     
       <About/>
    
      
      <div className={style.mdiv}>
      <Zoom left>
      <div className={style.b}>
     
    
       <div data-aos="fade-down-left" data-aos-duration="2000">
       
      
        <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
           alt=""
         />
       
       </div>
       
       <div data-aos="fade-down-right" data-aos-duration="4000">
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
           alt=""
         />
       </div>
     </div>
     </Zoom >
     <div data-aos-duration="2000" className={style.c}>
       <img
         data-aos="fade-down-left"
         data-aos-duration="1000"
         src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
         alt=""
       />
       <img
         data-aos="fade-down-right"
         data-aos-duration="2000"
         src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
         alt=""
       />
     </div>
     <div data-aos="fade-down" data-aos-duration="1000" className={style.d}>
       {" "}
       <img
         src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
         alt=""
       />
     </div>

     

     <div
       data-aos="zoom-in-up"
       data-aos-duration="1000"
       className={style.f1}
     >
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
           alt=""
         />
       </div>
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
           alt=""
         />
       </div>
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
           alt=""
         />
       </div>
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
           alt=""
         />
       </div>
     </div>

 

   <div
       data-aos="zoom-in-up"
       data-aos-duration="1000"
       className={style.f2}
     >
        <Zoom right> 
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
           alt=""
         />
       </div>
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
           alt=""
         />
       </div>
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
           alt=""
         />
       </div>
       <div>
         <img
           src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
           alt=""
         />
       </div>
       </Zoom>
     </div>
 

       <AutoMoving/>

      </div>
 
   </div>
 </div>
  )
}
