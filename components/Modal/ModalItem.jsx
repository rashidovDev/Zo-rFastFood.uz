import React from 'react'
import classes from "./Modal.module.css"
import Image from 'next/dist/client/image';
import { useSelector,useDispatch } from 'react-redux'
import { cartAction } from '../store/Shopping-Cart/cartSlice';
import { uiAction } from '../store/Shopping-Cart/uiSlice';

const ModalItem = (props) => {
    const {name,title, price,image,id} = props;

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartAction.addItemToCart({
            id,image,name,price
        }))
    }
    const removeFromCart = () => {
        dispatch(cartAction.removeItemFromCart(id))
    }

  return (
    <div className={classes.modalItems}>
    <div className='relative mr-10'>
        <Image width={70} height={70}
            src={require('../../assets/logo.png')} />

        <Image width={220} height={150} src={image} alt={name} />
        <p className='text-center text-rose-600 text-lg p-2 font-semibold'>{name}</p>
    </div>
    <div>
        <p className='text-2xl mb-5'>{name}</p> 
        <p className='mb-10'>{title}</p>
     <div className='flex justify-between mb-3'>
            {/* <div>
                <p className='text-lg'>Количество</p>
            </div>
            <div>
                <button onClick={addToCart} className={classes.btnModals}>-</button>
                <button onClick={removeFromCart} className={classes.btnModals}>+</button>
            </div> */}
        </div>
        <div className='flex justify-between mb-5'>
            <div>
                <p>Стоимость</p>
            </div>
            <div></div>
            <p>{price}</p>
        </div>
        <button onClick={addToCart} className={classes.btnCart}>В корзину</button>
    </div>
</div>
  )
}

export default ModalItem