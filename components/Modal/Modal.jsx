import React, { useState } from 'react'
import classes from "./Modal.module.css"
import { TiDeleteOutline } from 'react-icons/ti';
import { useSelector,useDispatch } from 'react-redux'
import { cartAction } from '../store/Shopping-Cart/cartSlice';
import ModalItem from './ModalItem';

const Modal = ({ modal, setModal, value }) => {

    const modalClasses = [classes.myModal]
    if (modal) {
        modalClasses.push(classes.active)
    } else {
        modalClasses
    }

    return (
        <>
            {value &&
                <div className={modalClasses.join(" ")} onClick={() => setModal(false)}>
                    <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={classes.iks} onClick={(e) =>  setModal(false)}>
                            <TiDeleteOutline />
                        </button>
                        {
                              <ModalItem 
                              key =  {value.name}
                              id =   {value.id}
                              setModal = {setModal}
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

export default Modal;