import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className='flex justify-between border h-[100px]'>
        
            <Link to='/' className='px-5 my-auto text-5xl'><IoBagHandle/></Link>
            <Link to='/cart' className='mx-5 px-5 my-auto border rounded text-orange-400 hover:border-orange-400'>
                <FaCartShopping className='text-5xl'/>
            </Link>
        
    </div>
  )
}
