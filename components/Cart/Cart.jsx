import React from 'react'
import classes from "./Cart.module.css"
import CartButton from './CartButton'
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { uiAction } from '../store/Shopping-Cart/uiSlice'
import { BsCartDash } from 'react-icons/bs';

const Cart = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.items)

  const closeCart = () => {
    dispatch(uiAction.toggle())
  }

  return (
    <div className={classes.cart}>
        <div className={classes.cartTop}>
            <p>Корзина</p>
            <button className='text-2xl' onClick={closeCart}>X</button>
        </div>
        {cartItem.length > 0 ?
         cartItem.map(product => (
          <>
          <CartItem 
          key={product.name}
          id = {product.id}
          image = {product.image}
          name = {product.name}
          price = {product.price}
          quantity = {product.quantity}
          totalPrice = {product.totalPrice}
          />
          <CartButton />
          </>
      ) ):
     <>
        <p className='text-center mt-10 text-2xl'> У вас нет покупки</p>
        <div className={classes.noCart}>
        <BsCartDash className={classes.cartDash}/> 
      </div> 
     </>
        }
    </div>
  )
}

export default Cart