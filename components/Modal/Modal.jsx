import React, { useState } from 'react'
import classes from "./Modal.module.css"
import { TiDeleteOutline } from 'react-icons/ti';
import { useSelector,useDispatch } from 'react-redux'
import { cartAction } from '../store/Shopping-Cart/cartSlice';
import ModalItem from './ModalItem';

const Modal = ({ modal, setModal, value }) => {

    const cartItem = useSelector(state => state.cart.items)

    const modalClasses = [classes.myModal]
    if (modal) {
        modalClasses.push(classes.active)
    } else {
        modalClasses
    }

    return (
        <>
            {value &&
                <div className={modalClasses.join(" ")}>
                    <div className={classes.myModalContent}>
                        <button className={classes.iks} onClick={() => setModal(false)}>
                            <TiDeleteOutline />
                        </button>
                        {
                              <ModalItem 
                              key =  {value.name}
                              id =   {value.id}
                              name = {value.name}
                              image = {value.image}
                              title = {value.title}
                              price = {value.price}
                              />
                        }
                      
                    </div>
                </div>
            }
        </>
    )
}

export default Modal