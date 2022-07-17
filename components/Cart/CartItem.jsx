import React from 'react'
import Image from 'next/image'
import classes from './CartItem.module.css'
import { MdDelete } from 'react-icons/md';
import {useSelector,useDispatch} from 'react-redux';
import { cartAction } from '../store/Shopping-Cart/cartSlice';

const CartItem = (props) => {

  const {name,image,id,quantity,totalPrice,price} = props

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartAction.addItemToCart({
      id, name, image,price
    }))
  }
  const removeFromCart = () => {
    dispatch(cartAction.removeItemFromCart(id))
  }

  const deleteItem = () => {
    dispatch(cartAction.deleteItem(id))
  }
  return (
    <>
    <div className={classes.cartItem}>
           <div className={classes.cartInfo}>
            <Image src={image} width={60} height={60}/>
            <div className={classes.cartName}>
                <p className='mb-2'>{name}</p>
                <p className='text-red-600 font-semibold'>{price}</p>     
            </div>
           </div>
           <div className={classes.cartButtons}>
            <div className={classes.cartCount}>
            <button onClick={removeFromCart} className={classes.cartBtn}>-</button>
            <p className={classes.cartTotalItem}>{quantity}</p>
            <button onClick={addToCart} className={classes.cartBtn}>+</button>
            </div>
            <div className={classes.cartTotal}>
                <p className='mr-3'>{totalPrice}</p>
                 <button onClick={deleteItem} className='text-lg mr-3'> <MdDelete/></button> 
            </div>
           </div>

    </div>
    </>
  )
}

export default CartItem