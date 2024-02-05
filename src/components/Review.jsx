import React from 'react'
import { people } from '../data';

const Review = () => {
  return (
    <div id="review-wrapper" className="sm:hidden lg:flex">
    <div id="slider" className="flex  flex-row  sm:h-80 h-80 w-full">
      {people.map((person, personIndex) => {
        const { name, text, img } = person;
        return (
          <article key={personIndex} className="sm:absolute lg:static lg:w-1/4">
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
        );
      })}
    </div>
  </div>

    )
}

export default Review