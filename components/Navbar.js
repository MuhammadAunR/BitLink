import React from 'react'
import Link from 'next/link'
import Hamburger from './Hamburger'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center px-7 text-white py-3 bg-[#2F3061] border-b-8 border-[#343434]'>
                <Link href="/">
                    <div className='text-2xl font-bold cursor-pointer'>BitLink
                        <span>
                            <lord-icon
                                src="https://cdn.lordicon.com/wsbmifnf.json"
                                trigger="loop"
                                delay="1000"
                                state="in-reveal"
                                colors="primary:#ffffff,secondary:#3080e8"
                            // style="width:250px;height:250px"
                            >
                            </lord-icon>
                        </span>
                    </div>
                </Link>
                <div className='md:hidden block'>
                <Hamburger />
                </div>
                <ul className='md:flex md:items-center md:gap-7 font-semibold hidden'>
                    <Link href="/">
                        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Home</li>
                    </Link>
                    <Link href="/shorten">
                        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Shorten</li>
                    </Link>
                    <Link href="/about">
                        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>About</li>
                    </Link>
                    <Link href="/contact">
                        <li className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Contact</li>
                    </Link>

                    <div className='flex items-center justify-center gap-3'>

                        <Link href="/shorten"><button className='cursor-pointer bg-white hover:bg-[#515281] hover:text-white  transition-all duration-500 text-black px-2 py-2 rounded-md hover:rounded-xl'>Try Now</button></Link>
                        <Link href="https://github.com/MuhammadAunR/BitLink.git" target='_blank'><button className='cursor-pointer bg-white hover:bg-[#515281] hover:text-white  transition-all duration-500 text-black px-2 py-2 rounded-md hover:rounded-xl'>GitHub</button></Link>

                    </div>
                </ul>
            </nav >
        </>
    )
}

export default Navbar
