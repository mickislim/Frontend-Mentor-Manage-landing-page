
import { useState } from 'react'
import { Attribution } from './components/Attribution'
import ChartSection from './components/ChartSection'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import TrackerSection from './components/TrackerSection'
import './index.css'
import Simplicity from './components/Simplicity'
import PeopleSection from './components/PeopleSection'

function App() {
  const [toggle,setToggle] = useState(false)
  const [isModalOpen,setIsMdalOpen] =useState(false)

  const modalToggle =()=>{
    setToggle(!toggle)
    setIsMdalOpen(!isModalOpen)
  }

  return (
    <div id={isModalOpen? `modal-overflow`: `container`} className='Font-custom' >
      <main className="pt-5">
<Navbar toggle={toggle} modalToggle={modalToggle} isModalOpen={isModalOpen}/>
<Modal toggle={toggle} />
<ChartSection/>
<TrackerSection/>
<PeopleSection/>

<Simplicity/>
<Footer/>
      </main>

     <Attribution/>
    </div>
  )
}

export default App
