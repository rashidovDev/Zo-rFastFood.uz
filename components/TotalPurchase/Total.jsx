import React from 'react'
import classes from "./Total.module.css"
import { BsFillCartFill } from 'react-icons/bs';
import { uiAction } from '../store/Shopping-Cart/uiSlice';
import { useDispatch,useSelector } from 'react-redux';


const Total = () => {

  const totalAmount = useSelector(state => state.cart.totalAmount)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const openCart =  () => {
    dispatch(uiAction.toggle())
  } 

  return (
    <>
      <div onClick={openCart} className={classes.total}>
        <div className={classes.totalItems}>
            <div><BsFillCartFill/></div>
            <div>{totalQuantity} шт</div>
        </div>
        <div className={classes.totalAmount}>
           <p>{totalAmount} сум</p>
        </div>
    </div>
    </>
  )
}

export default Total