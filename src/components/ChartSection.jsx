import React from 'react'
import hero from '../assets/images/illustration-intro.svg'

const ChartSection = () => {
  return (
    <section id="chart" className="my-8 lg:my-10 lg:flex lg:flex-row-reverse">
    <div className="lg:w-1/2  lg:px-10">
<img src={hero} alt="" />
    </div>

    <div className="mx-7 text-center lg:w-1/2 lg:px-10 font-bold lg:text-start lg:py-10">
      <h1 className="text-4xl lg:text-6xl text-Primary-Dark-Blue ">Bring everyone together to build better products.</h1>

        <p className="text-1.5xl lg:pr-20 lg:text-2xl my-3 text-Neutral-Dark-Grayish-Blue ">
          Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.</p>
<div id="btn-contaier" className="mt-5 lg:my-10">
  <button className="bg-Primary-Bright-Red text-Neutral-Very-Pale-Red rounded-full py-2 px-8 hover:bg-red-200 ">Get Started</button>

</div>
    </div>
  </section>
  )
}

export default ChartSection