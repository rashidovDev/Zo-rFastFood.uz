import React from 'react'
import classes from "./CartButton.module.css"
import {useSelector} from "react-redux"

const CartButton = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <div className={classes.cartOrder}>
    <p>Заказать</p>
    <p className='pr-20'>{totalAmount}</p>
    </div>
  )
}

export default CartButton