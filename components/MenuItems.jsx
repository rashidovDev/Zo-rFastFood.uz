import React,{useState} from 'react'
import {fast} from "../pages/data"
import Image from 'next/image';

const Burger = ({itemType, title, scroll,setModal, setValue}) => {
   
  return (
    <div>
      <p id={scroll} className='text-center text-5xl p-3'>{title}</p>
     <div className='grid-item mx-12'>
     {
     fast.map(item => ( 
     item.type === itemType 
     && 
         <div className='p-5 bg-white rounded m-4 relative w-72 ' key={item.id}>
          <div className='absolute top-0 left-0 '><Image width={60} height={60} src={require('../assets/logo.png')} />
          </div>
              <Image width={150} height={120} src={item.image} alt={item.name} /> 
              <p className='text-red-500 text-xl p-1'>{item.name}</p>
              <p className='text-start p-1 text-slate-600 truncate hover:text-clip text-sm'>{item.title} </p>
              <div className=' flex justify-between mt-11 items-center'>
                <p>{item.price} сум</p>
                <button 
                className='bg-red-500 px-4 py-1 text-white ease-in duration-300 rounded items-center hover:-translate-y-1 ' 
                type='button'
                onClick={() => {
                  setModal(true)
                  setValue(item)
                }}
                >
                Выбрать
                </button>
              </div>
         </div>
     ) ) 
     }
     </div>
     </div>
  )
}
export default Burger;