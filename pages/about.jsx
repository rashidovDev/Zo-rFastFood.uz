import React from 'react'
import { about } from './data';
import Head from 'next/head';

const About = () => {
  return (
    <>
    <Head>
      <title>Zo'rFastFood |  О нас</title>
      <meta name="keywords"/>
    </Head>
    <div className='about about p-5 m-auto justify-center w-3/4'>
      {about.map((item,idx)=> (
         <div key={idx}> 
             <p className='text-center text-5xl py-5 font-semibold'>{item.title}</p>
              <p className='text-xl'>{item.text}</p>
         </div>
      ))}
     
    </div>
    </>
  )
}

export default About;     