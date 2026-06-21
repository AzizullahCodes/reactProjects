import React, { useEffect, useState } from "react";
import mobileImage from './images/mobileImage.jfif';
import laptopImage from './images/laptopImage.jfif';
import smartwatchImage from './images/smartwatchImage.jfif';
import cameraImage from './images/cameraImage.jfif';
import keyboardImage from './images/keyboardImage.jfif';
const Home = ()=>{
    const allImages = [mobileImage,laptopImage,smartwatchImage,cameraImage,keyboardImage];
    const [index,setIndex] = useState(0);
    useEffect(()=>{

    let a = setInterval(() => {
        setIndex(index + 1);
        if(index == allImages.length - 1){
            setIndex(0)
        }
      
    }, 1000);
   return()=>clearInterval(a)
    },[index])
        
      

    //  let a = 0;
    //     setInterval(() => {
    //         a++;
    //          console.log(a)
    //         if(a == 5){
    //             a = 0
    //         }
            
    //     }, 1000);
       
    return(
        <>
        <img src={allImages[index]} alt="" />
        </>
    )
}
export default Home;