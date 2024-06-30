/* eslint-disable react/prop-types */
import React from "react";

function Button({title="Get Started"}) {
  return (
    <div className="w-40 px-4 py-2  text-zinc-50	 button	cursor-pointer		 text-center rounded-2xl">
      <span className="text-lg font-thin ">{title}</span>
    </div>
  );
}

export default Button;