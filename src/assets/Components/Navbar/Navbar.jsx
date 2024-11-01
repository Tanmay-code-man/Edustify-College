import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react';

const Navbar = () => {

  const [Sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <>
    <nav className={'navbar flex justify-between items-center px-4 py-4 left-0 top-0 fixed w-full z-10 ' +`${Sticky ? 'dark-nav' : ' '}`}>
        <img src='https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png' alt='logo' className='logo w-[50px] ml-10 mt-3' />
        <div className='links justify-around flex gap-10 '>
            <a href="#hero" className="text-white text-lg font-normal pt-2">Home</a>
            <a href="#programs" className="text-white text-lg font-normal pt-2">Programs</a>
            <a href="#about" className="text-white text-lg font-normal pt-2">About Us</a>
            <a href="#campus" className="text-white text-lg font-normal pt-2">Campus</a>
            <a href="#testimonials" className="text-white text-lg font-normal pt-2">Testimonial</a>
            <a href="#message" className="text-zinc-800 text-lg font-normal border-2 border-white bg-white rounded-3xl px-3 py-1 hover:bg-transparent hover:text-white transition-all duration-300">Contact Us</a>
        </div>
        
    </nav>    
    </>
  )
}

export default Navbar