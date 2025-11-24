import React from "react";

function Button({ onClick }) {
  return (
    <div className="w-full flex justify-center">
      <button
        className="bg-[#eae2c0] text-[#616950] active:scale-100 duration-100 active:bg-[#616950] active:text-[#eae2c0] rounded-[10px] text-[20px] font-lucida w-full md:max-w-[750px] sm:max-w-[550px]
  h-[45px]
  p-2 mx-6"
        onClick={onClick}
      >
        Generate Quote
      </button>
    </div>
  );
}

export default Button;
