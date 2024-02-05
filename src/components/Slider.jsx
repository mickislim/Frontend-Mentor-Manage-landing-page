import React, { useState } from 'react';
import { people } from '../data';

const Slider = () => {
const [value,setValue]= useState(0)
const {img,name,text} = people[value]


  return (
    <>
    <div id="review-wrapper" className="sm:w-full sm:overflow-hidden lg:flex sm:flex sm:flex-col">
      <div id="slider" className="lg:hidden sm:relative sm:flex-col sm:h-80 sm:w-full">
        
          
            <article  className="sm:absolute lg:static lg:w-1/4">
            <div className="relative mt-10 w-full px-3">
              <figure className="absolute transform right-1/2 translate-x-1/2 -top-10">
                <img src={img} alt="person-img" className="sm:w-20" />
              </figure>

              <div className="flex flex-col item-center justify-center bg-Neutral-Vary-Light-Gray my-10 py-10 px-5">
                <figcaption className="text-center text-1.5xl font-bold my-5 text-Primary-Dark-Blue">{name}</figcaption>
                <p className="text-1.5xl text-center font-semibold text-Neutral-Dark-Grayish-Blue">{text}</p>
              </div>
            </div>
          </article>




          
    

     
      </div>
     
    </div>

    <div id="slider-btn" className="flex item-center justify-center lg:hidden">
    <ul className="flex ">
         {people.map((person,personIndex)=>{
             
return <li key={personIndex} className={`h-2 w-2 mx-1 border border-black rounded-full ${personIndex === value ? 'bg-Primary-Bright-Red' : ''}`} onClick={()=>setValue(personIndex)}></li>
        })} 
      
      
    </ul>
  </div>


    </>
  );
};

export default Slider;