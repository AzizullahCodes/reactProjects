import React, { useEffect, useState } from "react";
import mobileImage from './images/mobileImage.jfif';
import laptopImage from './images/laptopImage.jfif';
import smartwatchImage from './images/smartwatchImage.jfif';
import cameraImage from './images/cameraImage.jfif';
import keyboardImage from './images/keyboardImage.jfif';
// Initialization for ES Users
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import allProduct from "../../webData/webData";

const Home = ()=>{
    const [data,setData] = useState([allProduct]);
    useEffect(()=>{
console.log(data)
    },[])

    return(
        <>
      <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img src={laptopImage} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={mobileImage} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={smartwatchImage} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={keyboardImage} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src={cameraImage} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>

        </>
    )
}
export default Home;