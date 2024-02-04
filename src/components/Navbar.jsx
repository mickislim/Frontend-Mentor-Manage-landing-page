import React from 'react'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import { navLinks } from '../data'
import close from '../assets/images/icon-close.svg'


const Navbar = ({toggle ,modalToggle,isModalOpen}) => {
  return (
    <nav className="flex flex-row justify-between my-10 mx-10 flex-1 lg:px-10"> 
        <div id="nav-logo" className="lg:w-1/3"> <img src={logo} alt="logo" /></div>

        <div id="nav-toggle" onClick={modalToggle} className="sm:visible lg:hidden z-10"> {isModalOpen? <img src={close} alt="hamburger" /> : <img src={hamburger} alt="hamburger" />} </div>



        <div id="desktop-nav" className="flex flex-1  sm:hidden lg:flex ">
       <div className="flex flex-row flex-1 justify-between ">
      
      <div>
        <ul className=" flex  text-1.5xl font-bold text-center text-Neutral-Very-Dark-Blue items-center justify-center">
            {navLinks.map((item,index)=>{
return <li key={index} className="mx-5 cursor-pointer text-center hover:text-Primary-Bright-Red "><a>{item.link}</a></li>
            })}

        
          </ul>
    </div>

    <div >
      <button className=" bg-Primary-Bright-Red text-Neutral-Very-Pale-Red rounded-full py-2 px-8 hover:bg-red-200 ">Get Started</button>
    </div>
      
      
    </div>



  </div>
    </nav>
  )
}

export default Navbar