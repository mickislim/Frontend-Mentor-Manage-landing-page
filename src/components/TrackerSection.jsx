import React from 'react'
import { tracker } from '../data'

const TrackerSection = () => {
  return (
    <section id="manage" className="flex sm:flex-col lg:flex-row " >
    <div className="mx-7 my-5 font-bold lg:w-1/2 lg:px-10 lg:text-start">
      <h1 className="text-4xl text-center lg:text-5xl text-Primary-Dark-Blue lg:text-start">
        What’s different about Manage?
      </h1>

      <p className="text-center  my-3 text-1.5xl text-Neutral-Dark-Grayish-Blue lg:text-start lg:pr-20 lg:text-2xl"> Manage provides all the functionality your team needs, without 
        the complexity. Our software is tailor-made for modern digital 
        product teams. </p>
    </div>

    <div id="track" className="lg:w-1/2 lg:px-10" >
        {tracker.map((track,index)=>{
            const trackId = track.id.length < 2? ` ${track.id}` : `0${track.id}`;
            return     <div key={index} className="my-10 font-bold ">
            <div className="flex bg-Neutral-Very-Pale-Red ml-5 lg:bg-transparent" >
              <div className="flex  item-center justify-center bg-Primary-Bright-Red rounded-full w-12 h-7    text-Neutral-Very-Pale-Red mr-5 text-1.5xl text-center lg:text-2xl lg:w-12 lg:h-9 "><h1>{trackId}</h1></div>
    <div>        <h1 className="text-1.5xl lg:text-2xl text-Primary-Dark-Blue text-center">{track.title}</h1>
    </div>        </div>
    
    <p className="text-Neutral-Dark-Grayish-Blue py-5 px-5 lg:text-2xl"> {track.desc}</p>
          </div>
    
        })}


      
     
    </div>

  </section>  )
}

export default TrackerSection