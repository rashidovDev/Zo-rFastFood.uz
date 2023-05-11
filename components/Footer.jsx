import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { navigation } from '../data'
import { network } from '../data'

const Footer = () => {
  return (
    <div className='footer px-16 mb-5 border-t-2'>
      <div className='footer-items items-center border-b-2'>
        <div className='footer-logo'>
          <Image src={require('../assets/logo.png')} alt="logo" width={80} height={80} />
          <div className='flex'>
            {navigation.map((item, idx) => (
                  item.case == true &&  
                  <Link key={idx} href={item.href}><p className='px-1 mx-3 cursor-pointer hover:border-b-4 ease-in duration-300 border-red-600'>{item.name}</p></Link>
            ))}
          </div>
        </div>
        <div className='footer-social'>
               <p>Присоединяйтесь к нам</p>
               <div className='flex'>
               {network.map((item, idx) => (
                <a key={idx} className='text-center px-1 mt-1 mx-2' href={item.href}>{item.icon}</a>
               ))}
               </div>
        </div>
        <div className='footer-contact'>
           <p>Заказывайте по номеру</p>
           <p>+998-88-034-90-99</p>
        </div>
      </div>
      <div className='footer-bottom text-slate-400 flex justify-between'>
             <p >©2022, ООО «Zo'r Fastfood», официальный сайт</p>
             <p>Пользовательское соглашение</p>
      </div>
    </div>
  )
}

export default Footer