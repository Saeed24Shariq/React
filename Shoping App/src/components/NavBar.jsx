import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {

    let [isActive, setIsActive] = useState(null);

    return (
        <>
            <div className='flex items-center justify-between px-[35px] bg-[#111111] h-[10vh]'>
                <div className='cursor-pointer flex items-center'>
                    <div className='mx-4'>
                        <svg className='h-[40px]' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle fill="#ffffff" cx="44" cy="60" r="4"></circle> <circle fill="#ffffff" cx="28" cy="60" r="4"></circle> <path fill="#ffffff" d="M63.246,21.66C62.492,20.617,61.285,20,60,20H18.977L15.934,3.285C15.59,1.383,13.934,0,12,0H4 C1.789,0,0,1.789,0,4s1.789,4,4,4h4.66l7.406,40.715C16.41,50.617,18.066,52,20,52h32c1.723,0,3.25-1.102,3.793-2.734l8-24 C64.203,24.047,63.996,22.703,63.246,21.66z"></path> </g> </g></svg>
                    </div>
                    <div>
                        <h1 className='text-2xl text-white'>Shoping App</h1>
                    </div>
                </div>
                <div className='sm:hidden md:hidden lg:flex xl:flex hidden'>
                    <ul className='flex text-white font-bold'>
                        <Link to="/">
                            <li style={{ textDecoration: (isActive === "Home") ? "underline" : "none" }} className="mx-4 cursor-pointer" onClick={() => { setIsActive("Home") }}>Home</li>
                        </Link>
                        <Link to="/Men">
                            <li style={{ textDecoration: (isActive === "Men") ? "underline" : "none" }} className='mx-4 cursor-pointer' onClick={() => { setIsActive("Men") }}>Men</li>
                        </Link>
                        <Link to="/Women">
                            <li style={{ textDecoration: (isActive === "Women") ? "underline" : "none" }} className='mx-4 cursor-pointer' onClick={() => { setIsActive("Women") }}>Women</li>
                        </Link>
                        <Link to="Cart">
                            <li style={{ textDecoration: (isActive === "Cart") ? "underline" : "none" }} className='mx-4 cursor-pointer' onClick={() => { setIsActive("Cart") }}>Cart</li>
                        </Link>
                    </ul>
                </div>
                <div className='hidden lg:flex xl:flex'>
                    <div>
                        <svg className='h-[40px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>
                    </div>
                </div>
                <div className='lg:hidden xl:hidden flex'>
                    <div className='z-20'>
                        <input type="checkbox" id='menu' className='peer hidden' />
                        <label htmlFor="menu">
                            <svg className='h-[30px]' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hamburger</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-212.000000, -888.000000)" fill="#ffffff"> <path d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z" id="hamburger" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </label>
                        <div className='peer-checked:flex fixed top-0 left-0 h-screen w-screen hidden items-center justify-center z-10 bg-black'>
                            <ul className='flex flex-col font-bold'>
                                <li>
                                    <div className='flex items-center justify-center'>
                                        <svg className='h-[100px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>
                                    </div>
                                </li>
                                <label htmlFor="menu">
                                    <li className="text-xl cursor-pointer my-3 bg-white text-black text-center p-2 w-[200px] rounded-full">
                                        Close
                                    </li>
                                </label>
                                <li style={{ textDecoration: (isActive === "Home") ? "underline" : "none" }} className="text-xl cursor-pointer my-3 bg-white text-black text-center p-2 w-[200px] rounded-full" onClick={() => { setIsActive("Home") }}>Home</li>
                                <li style={{ textDecoration: (isActive === "Men") ? "underline" : "none" }} className="text-xl cursor-pointer my-3 bg-white text-black text-center p-2 w-[200px] rounded-full" onClick={() => { setIsActive("Men") }}>Men</li>
                                <li style={{ textDecoration: (isActive === "Women") ? "underline" : "none" }} className="text-xl cursor-pointer my-3 bg-white text-black text-center p-2 w-[200px] rounded-full" onClick={() => { setIsActive("Women") }}>Women</li>
                                <li style={{ textDecoration: (isActive === "Cart") ? "underline" : "none" }} className="text-xl cursor-pointer my-3 bg-white text-black text-center p-2 w-[200px] rounded-full" onClick={() => { setIsActive("Cart") }}>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
