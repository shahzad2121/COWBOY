import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#E6DAC0]">
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />



        <div className="flex items-center justify-between">
        <div>
          <div className="w-[60%] pl-14">
            <h1 className="font-semibold text-6xl mb-6">The Future of Urban Mobility</h1>
            <p className="font-normal text-lg mb-6">
              Experience the ride of your life with Cowboy’s sleek, smart, and
              powerful electric bikes designed for urban adventurers.
            </p>
          </div>
          <div className="flex gap-5 pl-14">
            <Button color='black' textc='white' text='Explore Models' />
            <Button text='Start Your Ride' />
          </div>
        </div>
        <div className="pt-[15.3vw]">
            <img src="../public/images/mainC.png" alt="" />
        </div>
      </div>
      </div>
      <div className="w-full h-screen bg-[#E6DAC0]">
        <Navbar />
        <Navbar />
        <div className="flex items-center justify-between">
        <div>
          <div className="w-[60%] pl-14">
            <h1 className="font-semibold text-6xl mb-6">The Future of Urban Mobility</h1>
            <p className="font-normal text-lg mb-6">
              Experience the ride of your life with Cowboy’s sleek, smart, and
              powerful electric bikes designed for urban adventurers.
            </p>
          </div>
          <div className="flex gap-5 pl-14">
            <Button color='black' textc='white' text='Explore Models' />
            <Button text='Start Your Ride' />
          </div>
        </div>
        <div className="pt-[15.3vw]">
            <img src="../public/images/mainC.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
