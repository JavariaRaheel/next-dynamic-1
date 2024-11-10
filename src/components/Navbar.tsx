'use client'
import Link from 'next/link'
import React from 'react'
 


const Navbar = () => {
  return (
    <div>
        <nav className='bg-slate-400 text-white h-12 py-2 px-3 flex justify-between items-center' >
            <div><h1 className='text-2xl font-semibold'>
                <a href="#!">FRESH MARKET</a></h1></div>
            <div>
                <ul className='flex space-x-7'>
                    <li><Link href="/" className='hover:text-red-700'>Home</Link></li>
                    <li><Link href="/" className='hover:text-red-700' >Fresh Fruits</Link></li>
                    <li><Link href="/" className='hover:text-red-700'>Fresh Vegetables</Link></li>
                    
                </ul>
            </div>
            <div>
                <ul className='flex space-x-7'> 
                    <li><Link href="#!" className='hover:text-red-700'>login</Link></li>
                    <li><Link href="#!" className='hover:text-red-700'>sign up</Link></li>
                   
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar