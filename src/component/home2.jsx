import React, { useEffect, useRef, useState } from "react";
import Sendcontact from "./sendcontact";

const Home2 = () => {
  const [rotate, setRotate] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const box = boxRef.current;
      if (!box) return;

      const rect = box.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="
        home text-[#2E2E2E] bg-[#FFF8E7] rounded-b-2xl -mt-1 w-full min-h-screen 
        pt-25 pl-10 flex text-8xl flex-col

        /* MOBILE FIX */
        max-sm:pl-0
        max-sm:pt-35
        max-sm:-mt-4
        max-sm:text-6xl
        max-sm:text-center
      "
    >
      <h1>We Bring</h1>

      <div className="flex items-center gap-2 max-sm:gap-3 max-sm:mt-2 max-sm:flex-col">
        {/* Box */}
        <div
          ref={boxRef}
          className="
            box h-20 bg-[#e8bf4e] rounded-2xl flex shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]

            /* MOBILE FIX */
            max-sm:w-20
            max-sm:
          "
        >
          <div className="eyes w-full flex items-center gap-1 justify-center">
            {/* Left Eye */}
            <div className="w-9 h-9 eye rounded-full relative bg-white overflow-hidden ">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-full flex justify-start"
              >
                <div className="bg-black pupil w-6 h-6 rounded-full "></div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="w-9 h-9 eye rounded-full relative bg-white overflow-hidden ">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-full flex justify-start"
              >
                <div className="bg-black pupil w-6 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="max-sm:text-6xl">Clarity</h1>
      </div>

      <h1>To The Dark</h1>

      <div
        className="
          sendcontactholder w-1/3 pt-15 flex justify-center

          /* MOBILE FIX */
          max-sm:w-full
          max-sm:pt-8
        "
      >
        <Sendcontact />
      </div>
    </div>
  );
};

export default Home2;
