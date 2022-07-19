import React from 'react'
import Cart from './Cart/Cart'
import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import BackToTopButton from './BackToTop/BackToTopButton'

const Layout = ({children}) => {
  const showCart = useSelector(state => state.ui.cartIsVisible)

  return (
     <>
     
    {showCart && <Cart/>}  
     <Header/>
     {children}
     <BackToTopButton/>
     <Footer/>
     </>
  )
}

export default Layout