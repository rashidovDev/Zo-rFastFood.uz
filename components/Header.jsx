import React from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css"
import { navigation } from '../pages/data';
import  {BsTelephoneFill} from "react-icons/bs";
import { useState } from 'react';
import { foodModes } from '../pages/data';
import Link from 'next/link';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
        <Image src={require("../assets/logo.png")} alt="logo" width={100} height={100} />
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
        <div className="nav-left">
              {
                navigation.map((item, idx) => (
                  <Link key={idx} href={item.href}><p>{item.name}</p></Link>
                ))
              }         
            </div>
            <div className="nav-right ">
              <p><BsTelephoneFill/></p>
              <p>+998-90-121-01-28</p>
            </div>
        </div>
        <div className="nav-login">
         <button type='button'>Логин</button>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
         onClick={() => setIsOpen(!isOpen)}>
            <div className="bar">
            </div>
        </div>
      </div>      
    </>
  )
}

export default Header;
