import React,{useState} from 'react'
import classes from "./Booked.module.css"
import { TiDeleteOutline } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { bookAction } from '../store/Shopping-Cart/bookedSlice';

const Booked = () => {

    const [register, setRegister] = useState(true)

    const changeToggle = () => {
        setRegister(!register)
    }

    const book = useSelector(state => state.book.bookIsVisible)
    const BookClasses = [classes.myBook]
    if (book) {
        BookClasses.push(classes.active)
    } else {
        BookClasses
    }
    const dispatch = useDispatch()
    const closeToggle = () => {
        dispatch(bookAction.toggle())
    }
    
    return (
        <>
            <div className={BookClasses.join(" ")}>
                <div className={classes.myBookContent}>
                    <button onClick={closeToggle} className={classes.iks}>
                        <TiDeleteOutline />
                    </button>
                    <div className={classes.bookItems}>
                        <p className='text-3xl text-red-500 mb-5'>
                            {register ? "Добро пожаловать"
                            : "Регистрация" } </p>
                        <p className='text-slate-800 mb-5' >
                            {register ? "Войдите с вашим номером телефона"
                            :""}</p>
                            {register ? 
                            <input type="tel" id="phone" name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required placeholder='Номер телефона'/>
                            :
                            <>
                            <input type="name" placeholder='Имя' className='mb-5'/>
                            <input type="tel" id="phone" name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required placeholder='Номер телефона'/>
                            </>
                            }
                        
                         <div className={classes.bookButtons}> <button className={classes.bookBtn}>{register ? "Войти" : "Регистрация"} </button></div>
                         <p>У вас {register ? "нет" : "есть"}  аккаунта? 
                            <span onClick={changeToggle} className='text-red-500 cursor-pointer'> 
                            {register ? " Регистрация" : " Войти"}</span> </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Booked