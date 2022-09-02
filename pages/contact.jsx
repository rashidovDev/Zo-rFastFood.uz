import React from 'react'
import Head from 'next/head'
import { contact } from '../data'

const Contact = () => {
  return (
    <>
    <Head>
      <title>Zo'rFastFood | Контакты</title>
      <meta name="keywords"/>
    </Head>
    <div className='Contact bg-slate-50'>
          <p className='text-6xl text-center font-semibold pt-10'>Контакты</p>
         <div className='contact-items flex justify-around w-3/4 m-auto'>
          <div className='contact-element w-1/2 mr-5'>

         <div className='bg-white p-8 rounded my-5'>
          <p className='text-3xl '>Телефоны контактных центров</p>
          <p className='text-slate-400'>Круглосуточно, без выходных</p>
          {contact.map((item,idx) => (
            item.type === "contactserver" &&
               <div key={idx} className="flex justify-between py-5 border-b-4"> 
                <p>{item.city}</p>
                <p>{item.number}</p>
                </div>
          ))}
          </div>
          <div className='contact-support bg-white p-8 rounded my-5'>
          <p className='text-3xl '>Отдел поддержки клиентов</p>
          {contact.map((item,idx) => (
            item.type === "supportclient" &&
               <div key={idx} className="flex justify-between py-5 border-b-4"> 
                 <div >
                  <p>Электронная почта</p>
                  <p>Контактный телефон</p>
                 </div>
                 <div >
                  <p>{item.email}</p>
                  <p>{item.number}</p>
                 </div>
                </div>
          ))}
          </div>

              
         </div>
         <div className='contact-support w-1/2 ml-5'>
         <div className='bg-white p-8 rounded my-5'>
          <p className='text-3xl '>Правообладателям</p>
          {contact.map((item,idx) => (
            item.type === "copyrightholders" &&
               <div key={idx} className="py-5 border-b-4"> 
                <p>{item.text}</p>
                <div className='flex justify-between my-5'>
                  <p>Электронная почта</p>
                  <p>{item.email}</p>
                </div>
                </div>
          ))}
          </div>
         </div>
         <div>

         </div>
         
         </div>
    </div>
    </>
  )
}

export default Contact