import React from 'react'
import Hero from './Components/Hero'
import Model from './Components/Model'
import Download from './Components/Download'
import Video from './Components/Video'
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();



  return (
    
    <>
    <div className='font-[Satoshi]'>
    <Hero />
    <Model />
    <Download />
    <Video />
    <Hero />
    <Model />
    <Download />
    <Video />
    </div>
    </>
  )
}

export default App