import React from 'react'
import classes from "./CartButton.module.css"
import {useSelector,useDispatch} from "react-redux"
import { bookAction } from '../store/Shopping-Cart/bookedSlice'
import { uiAction } from '../store/Shopping-Cart/uiSlice'

const CartButton = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount)
  
  const dispatch = useDispatch()

  const bookToggle = () => {
    dispatch(bookAction.toggle())
    dispatch(uiAction.toggle())
  }

  return (
    <div onClick={bookToggle} className={classes.cartOrder}>
    <p>Заказать</p>
    <p className='pr-20'>{totalAmount}</p>
    </div>
  )
}
export default CartButton