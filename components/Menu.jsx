import React,{useState} from 'react'
import MenuItems from './MenuItems'
import Modal from './Modal/Modal'
import Total from './TotalPurchase/Total';

const Menu = () => {

  const [modal, setModal]= useState(false);
const [value, setValue]= useState(null);

  return (
    <>
    <Total/>
    
    <Modal modal={modal} setModal={setModal} value={value}/>
    <div className='bg-slate-100 max-w-full max-h-full py-5 text-center '>
    <MenuItems setValue={setValue} setModal={setModal}  itemType={'lavash'}  title={"Лаваши"} scroll={'lavash'}/>  
    <MenuItems setValue={setValue} setModal={setModal} itemType={'pizzas'} title={'Пиццы'} scroll={'pizzas'}/>
    <MenuItems setValue={setValue} setModal={setModal} itemType={'burger'} title={'Бургеры'} scroll={'burger'}/>
    <MenuItems setValue={setValue} setModal={setModal} itemType={'clabs'} title={'Клабы'} scroll={'clabs'}/>
    <MenuItems setValue={setValue} setModal={setModal} itemType={'salads'} title={'Салаты'} scroll={'salads'}/>
    <MenuItems setValue={setValue} setModal={setModal} itemType={'sweetness'} title={'Сладости'} scroll={'sweetness'}/>
    <MenuItems setValue={setValue} setModal={setModal} itemType={'refreshments'} title={'Напитки'} scroll={'refreshments'}/>
    </div>
    </>
  )
}

export default Menu