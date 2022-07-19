import React, { useState, useEffect } from 'react'
import classes from "./BackToTopButton.module.css"
import { AiOutlineArrowUp } from 'react-icons/ai';

const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButton &&
                <button onClick={scrollUp} className={classes.backToTopBtn}>
                    <AiOutlineArrowUp />
                </button>
            }
        </>

    )
}

export default BackToTopButton