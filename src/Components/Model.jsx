import React from "react";
import Button from "./Button";

const Model = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(../public/images/secondC.jpg)" }}
    >
      <div className="flex pt-[33vw] px-14 gap-40">
        <div >
          <h2 className="text-4xl text-white font-semibold mb-5">Classic</h2>
          <p className=" text-white pr-14 mb-5">
            Meet the Classic and you've found one agile ride with an incredibly
            swift side. Gain serious power on an electric bike that's built
            around you.
          </p>
          <Button border='none' text="Start Your Ride" textc="black" color="#E6DAC0" />
        </div>
        <div>
          <h2 className="text-4xl text-white font-semibold mb-5">Cruiser</h2>
          <p className=" text-white mb-5">
            Meet the Cruiser for an elevated take on the classic Cowboy. A
            higher vantage gives you a comfortable advantage with an electric
            bike that's built around you.
          </p>
          <Button border='none' text="Start Your Ride" textc="black" color="#E6DAC0" />
        </div>
      </div>
    </div>
  );
};

export default Model;
