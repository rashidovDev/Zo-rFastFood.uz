import React from 'react'
import { foodModes } from '../pages/data'
import { Link as Links } from "react-scroll"

const Navigation = () => {
    return (
        <>
            <div className="nav-bottom text-center m-4 text-base">
                {foodModes.map((item, idx) => (
                    <Links key={idx} className='px-1 mx-3 cursor-pointer hover:bg-red-300 rounded-md  ease-in duration-500' to={item.href} spy={true} smooth={true} offset={50} duration={1000}>{item.name}</Links>
                ))}
            </div>
        </>
    )
}
export default Navigation