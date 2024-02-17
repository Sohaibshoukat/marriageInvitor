import React from 'react'
import logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className="block px-4 md:px-10">
        <div className="flex flex-row gap-4 justify-between items-center py-4">
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className="flex gap-2 md:gap-4 items-center flex-row justify-start text-black font-normal text-base md:text-2xl">
                <Link to={"/login"}>
                <div className="hover:bg-amber-700 cursor-pointer hover:text-white text-black px-4 py-2 md:px-8 md:py-3 rounded-3xl ease-in-out duration-300">
                    Login
                </div>
                </Link>
                <Link to={"/signup"}>
                <div className='bg-amber-700 hover:bg-amber-600 ease-in-out duration-300 cursor-pointer text-white px-4 py-2 md:px-8 md:py-3 rounded-3xl'>
                    Sigup
                </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav