import React from 'react'
import Head from 'next/head';
import { branch } from './data'
import {MdLocationOn } from 'react-icons/md';

const Branches = () => {
  return (
    <>
    <Head>
      <title>Zo'rFastFood | Филиалы</title>
      <meta name="keywords"/>
    </Head>
    <div className='branch px-16 py-5 bg-slate-100 '>
      {branch.map((item,idx) => (
        <div key={idx} className="branch-items flex p-5 py-10 bg-white m-5 justify-between rounded items-center text-base">
              <p>{item.location}</p> 
              <p>{item.address}</p>
              <div>
                <p>Часы работы</p>
              <p>{item.workTime}</p>
              </div>
              <p><MdLocationOn/></p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Branches