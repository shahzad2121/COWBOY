import React from "react";
import Button from "./Button";

const Download = () => {
  return (
    <div className="min-h-screen w-full bg-[#E6DAC0]">
      <div className="flex flex-col items-center pt-20">
        <h3 className="font-bold text-4xl w-[35%] text-center mb-6">
          Your Ride, Your Way—
          Powered by the Cowboy App
        </h3>
        <p className="font-light text-lg w-[30%] text-center mb-6">
          Unlock the full potential of your Cruiser & Classic bike with seamless
          app integration.
        </p>
        <Button text="Download Now" textc={'white'} color={'black'} />
<Button text="Download Now" textc={'white'} color={'black'} />
        <Button text="Download Now" textc={'white'} color={'black'} />
        <img className="mt-6" src="../public/images/cyclem.png" alt="" />
      </div>
    </div>
  );
};

export default Download;
