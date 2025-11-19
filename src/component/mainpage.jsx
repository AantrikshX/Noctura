import React, { useState } from 'react';
import Secondpage from './secondpage';

const MainPage = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="w-full h-screen relative overflow-hidden max-sm:overflow-auto">
      {/* Background Image */}
      <img
        src="/mainpage.jpeg"
        className="absolute inset-0 w-full h-full object-cover object-[center_60%] [image-rendering:high-quality]"
        alt="Noctura background"
      />

      {/* Expanding laptop screen */}
      <div
        className={`absolute shadow-inner border transition-all duration-700 ease-in-out 
          ${
            expand
              ? "w-full min-h-full left-0 top-0 bg-black rounded-none"
              : `
                w-[30vw] h-[18vw] left-1/2 top-1/2 
                -translate-x-[45%] -translate-y-[42%] 
                bg-[#FFF8E7] border-[#d1ccc0] rounded-2xl

                /* MOBILE FIX */
                max-sm:w-[47vw] 
                max-sm:h-[30vw]
                max-sm:-translate-x-[45%]
                max-sm:-translate-y-[12%]
                max-sm:rounded 
              `
          }`}
      >
        {/* Title */}
        <div
          className={`absolute flex gap-2 transition-opacity duration-500 
            ${
              expand
                ? "opacity-0"
                : `
                  opacity-100 top-[30%] left-[15%]

                  /* MOBILE FIX */
                  max-sm:top-[5%]
                  max-sm:left-[20%]
                  max-sm:flex-col
                  max-sm:gap-0
                  
                `
            }`}
        >
          <h1 className="text-[#2E2E2E] text-2xl mt-2 font-semibold max-sm:text-lg">
            Welcome to
          </h1>
          <h1 className="text-[#E6B325] text-6xl noctura font-bold max-sm:text-3xl ">
            Noctura
          </h1>
        </div>

        {/* Button */}
        {!expand && (
          <button
            onClick={() => setExpand(true)}
            className="
              absolute text-xl get cursor-pointer font-semibold text-[#E6B325] border-3 border-[#E6B325] 
              left-1/2 -translate-x-1/2 bottom-[15%] px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#E6B325] hover:text-white

              /* MOBILE FIX */
              max-sm:text-xs
              max-sm:px-1 
              max-sm:py-1
              max-sm:bottom-[8%]
            "
          >
            Get Started
          </button>
        )}

        {/* Fade-in new content after expansion */}
        {expand && <Secondpage />}
      </div>
    </div>
  );
};

export default MainPage;
