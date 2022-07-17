import React from 'react'
import classes from "./Cart.module.css"
import CartButton from './CartButton'
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { uiAction } from '../store/Shopping-Cart/uiSlice'

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
            <button onClick={closeCart}>X</button>
        </div>
        {cartItem.map(product => (
            <CartItem 
            key={product.name}
            id = {product.id}
            image = {product.image}
            name = {product.name}
            price = {product.price}
            quantity = {product.quantity}
            totalPrice = {product.totalPrice}
            />
        ) )}
       
        <CartButton />
        <div>

        </div>
    </div>
  )
}

export default Cart