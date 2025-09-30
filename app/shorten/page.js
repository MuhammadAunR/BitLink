"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { CirclePlus, Copy } from "lucide-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Link from 'next/link';


const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generatedUrl, setGeneratedUrl] = useState("")
    const [shortenArray, setShortenArray] = useState([])

    useEffect(() => {
        let urls = localStorage.getItem('urls')
        if (urls) {
            setShortenArray(JSON.parse(urls))
        }
    }, [])

    const displayToast = (message) => {
        toast(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const handleGenerate = () => {
        if (url?.trim() && shortUrl?.trim()) {
            const newGeneratedUrl = `${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`
            let check = shortenArray.some(item => {
                return item.url.split('/').pop() === shortUrl
            })
            if (shortUrl === check) {
                displayToast('Short Url already exists!')
                return
            }
            setGeneratedUrl(newGeneratedUrl)
            let urls = [...shortenArray, { url: newGeneratedUrl }]
            setShortenArray(urls)
            localStorage.setItem('urls', JSON.stringify(urls))
            displayToast('Url Generated Successfully')
            setUrl("")
            setShortUrl("")
        } else {
            displayToast('Input fields required.')
        }
    }

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url)
        displayToast("URL copied to clipboard.")
    }

    const handleDelete = (i) => {
        let newArray = shortenArray.filter((item, index) => {
            return index !== i
        })
        setShortenArray(newArray)
        localStorage.setItem('urls', JSON.stringify(newArray))
    }
    console.log(shortenArray)
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className='w-10/12 lg:w-[800px] bg-[#c7c7c9] transition-colors duration-700 ease-in-out hover:bg-[#b6b6d0] py-10 rounded-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>

                <div className='text-center'>
                    <h1 className='font-semibold text-3xl md:text-4xl max-sm:text-2xl leading-12'>Generate your Short URL&apos;s</h1>
                </div>

                <div className='line w-full h-2 border-b-4 border-white'></div>

                <div className='flex flex-col gap-5 p-5 items-center justify-center'>

                    <input type="text"
                        className='bg-[#343434] hover:bg-[#555555] focus:bg-[#2f3061] transition-all duration-200 ease-in text-white placeholder:text-white w-10/12 p-3 md:text-lg rounded-lg outline-none border-none'
                        placeholder='Enter your URL'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)} />

                    <input type="text"
                        className='bg-[#343434] hover:bg-[#555555] focus:bg-[#2f3061] transition-all duration-200 ease-in text-white placeholder:text-white w-10/12 p-3 md:text-lg rounded-lg outline-none border-none'
                        placeholder='Enter your preferred short URL text'
                        value={shortUrl}
                        onChange={(e) => setShortUrl(e.target.value)} />

                    <div className=''>
                        <button className='hover:bg-[#2f3061] flex items-center justify-center gap-2 ring-4 ring-[#2f3061] p-2 md:p-3 md:text-xl font-bold hover:text-white rounded-lg cursor-pointer transition-all duration-200 ease-in '
                            onClick={handleGenerate} >
                            Generate
                            <span><CirclePlus /></span>
                        </button>
                    </div>
                </div>

                <div className='line w-full h-2 border-b-4 border-white'></div>

                <div><h3 className='font-bold text-lg m-3'>Your Links:</h3></div>


                {shortenArray.length > 0 ? <div className='h-46 scrollbar-custom overflow-y-scroll'>

                    {shortenArray.map((item, index) => {
                        return (
                            <div key={index}
                                className="displayUrl flex items-center justify-between p-3 m-3 rounded-lg bg-gray-400/45 backdrop-blur-2xl hover:shadow-lg hover:shadow-[#2f3061]-inset transition-all duration-300 ease-in-out">
                                <Link href={item.url} target='_blank'>
                                    <code>{item.url}</code>
                                </Link>
                                <div className="icons flex items-center gap-2">
                                    <span>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/egqwwrlq.json"
                                            trigger="loop"
                                            delay="1000"
                                            className="cursor-pointer"
                                            onClick={() => { handleDelete(index) }}>
                                        </lord-icon>
                                    </span>
                                    <span>
                                        <Copy className="cursor-pointer" onClick={() => { handleCopy(item.url) }} />
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div> : <div
                    className='text-center font-bold md:text-xl text-[#2f3061] mt-4 underline underline-offset-2'>
                    No Generated URL
                </div>}
            </div>
        </>
    )
}

export default Shorten
