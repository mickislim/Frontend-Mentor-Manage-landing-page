import React from 'react'
import { navLinks } from '../data'

const Modal = ({toggle}) => {
  return (
    <>
    { toggle &&
    <section id="modal" className="fixed flex-1 h-full   left-0 right-0 bg-transparent lg:hidden sm:flex  ">
    <div className="flex item-center justify-center bg-yellow -mt-20 transform  box-border shadow-lg mx-auto w-80  ">
      <ul className="flex flex-col  item-center justify-center my-20 text-1.5xl font-bold text-center text-Neutral-Very-Dark-Blue py-20 w-80 h-80 bg-white">
       {navLinks.map((item,index)=>{
        return     <li key={index} className="my-2 cursor-pointer hover:text-Primary-Bright-Red" ><a>{item.link}</a></li>
       })} 
      </ul>
    </div>
        </section>
        }

        </>
  )
}

export default Modal