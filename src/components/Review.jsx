import React from 'react'
import { people } from '../data'
import Slider from './Slider'

const Review = () => {
  return (
    
    <section className="my-10 px-2">
  <header className=" flex item-center justify-center text-center  text-Primary-Dark-Blue font-bold text-3xl my-10 "><h1>What they've said</h1></header>


<div id="review-wrapper" className=" sm:w-full  sm:overflow-hidden">
   <div id=" slider " className="lg:flex sm:relative  lg:flex-row sm:hidden sm:h-80 lg:h-80 sm:w-full lg:w-full ">

   {people.map((person,index)=>{
            return (
                <article key={index} className="sm:absolute lg:static lg:w-1/4">
    <div className="relative mt-10 w-full px-3 ">
       <figure className="absolute transform right-1/2 translate-x-1/2 -top-10">
        <img src={person.img} alt="person-img" className="sm:w-20" />
       </figure>

              <div className="flex flex-col item-center justify-center bg-Neutral-Vary-Light-Gray my-10 py-10 px-5 ">
           <figcaption className="text-center text-1.5xl font-bold my-5 text-Primary-Dark-Blue">{person.name}</figcaption>
       
           <p className="text-1.5xl text-center font-semibold text-Neutral-Dark-Grayish-Blue "> {person.text}</p>
           
      </div>    

    </div>
</article>
                
            )
        })}







    </div> 


    <Slider/>
</div>


  <div className="flex items-center justify-center my-7  "> <button className="bg-Primary-Bright-Red text-Neutral-Very-Pale-Red rounded-full py-2 px-8 hover:bg-red-200">Get Started</button></div>

    </section>
  )

}

export default Review