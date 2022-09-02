import React, { Component } from 'react';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { slider } from '../data';

const Slider = () => {
  return (
    <>
    <div className='slider'>
              <Carousel>
                {slider.map((item,idx) => (
                    <div key={idx} >
                    <Image className='img-carousel' height={400}  src={item.image} alt={item.title}/>
                </div>
                ))}
              </Carousel>
        </div>
    </>
  )
}

export default Slider

