import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <div className='px-14 py-6 flex justify-between items-center'>
        <div>
            <img className='w-36' src="../public/images/logo.png" alt="" />
        </div>
        <div className='flex items-center justify-between gap-7'>
            <a href="">E-bike</a>
            <a href="" className='text-base font-normal'>Adaptive Power</a>
            <a href="">Connect</a>
            <a href="">Care</a>
        </div>
        <div>
            <Button text='Order Now'/>
        </div>
    </div>
  )
}

export default Navbar