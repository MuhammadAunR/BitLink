"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Hamburger = () => {
    const [showHamburger, setShowHamburger] = useState(false)
    return (
        <>
            <div className='relative'>
                <button id="dropdownMenuIconButton" onClick={() => { setShowHamburger(!showHamburger) }} data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button>

                <div id="dropdownDots" className={` ${showHamburger ? "" : "hidden"} absolute -left-35 top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <Link href="/shorten"
                            onClick={() => { setShowHamburger(!showHamburger) }}>
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shorten</li>
                        </Link>
                        <Link href="/about"
                            onClick={() => { setShowHamburger(!showHamburger) }}>
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</li>
                        </Link>
                        <Link href="/contact"
                            onClick={() => { setShowHamburger(!showHamburger) }}>
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</li>
                        </Link>
                    </ul>
                    <div className="py-2">
                        <Link href={`${process.env.NEXT_PUBLIC_HOST}`}
                            onClick={() => { setShowHamburger(!showHamburger) }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hamburger
