import React from "react";

const Button = ({ text, color, textc, border }) => {
  return (
    <div>
      <button
        className="px-5 py-2 border-[1px] border-zinc-600 rounded-full"
        style={{ backgroundColor:color, color:textc, border:border}}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
