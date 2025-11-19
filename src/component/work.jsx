import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./projects";

const Work = () => {
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
    <div className="about text-[#2E2E2E] w-full min-h-screen bg-[#FFF8E7] rounded-b-2xl -mt-1 max-sm:-mt-3 max-sm:pt-4">

      {/* TITLE + EYES */}
      <div className="flex items-center gap-3 pl-10 pt-10 max-sm:flex-col max-sm:pt-4 max-sm:pl-0 max-sm:gap-4 max-sm:text-center">

        {/* Eye Box */}
        <div 
          ref={boxRef} 
          className="box h-10 bg-[#e8bf4e] rounded-2xl flex shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)] 
                     max-sm:h-8 max-sm:scale-90"
        >
          <div className="eyes w-full flex items-center gap-1 justify-center">
            {/* Left Eye */}
            <div className="w-8 h-8 eye rounded-full relative bg-white overflow-hidden ">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-full flex justify-start"
              >
                <div className="bg-black pupil w-6 h-6 rounded-full m"></div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="w-8 h-8 eye rounded-full relative bg-white overflow-hidden ">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 w-full flex justify-start"
              >
                <div className="bg-black pupil w-6 h-6 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl max-sm:text-2xl max-sm:px-4">
          Crafted in the Quiet Hours, Built to Shine.
        </h1>
      </div>

      {/* CAROUSEL */}
      <div className="flex w-full h-150 items-center max-sm:h-auto max-sm:mt-8">
        <div className="carousel-container w-full overflow-hidden px-4 max-sm:px-2">

          <div className="carousel-track flex gap-6 max-sm:gap-4">

            {/* ORIGINAL SET */}
            <ProjectCard
              title="Shrt-Link"
              imageSrc="/shrtlink.png"
              description="Instantly shorten long URLs with ease."
              url="https://dancing-macaron-0f20bc.netlify.app/"
            />

            <ProjectCard
              title="Fun Mart"
              imageSrc="/funmart.png"
              description="FunMart Online Shopping — your trusted partner in E-Commerce."
              url="https://funmart.com"
            />

            <ProjectCard
              title="Inshort Url"
              imageSrc="/inshorturl.png"
              description="Shorten your links and earn with every click."
              url="https://dancing-macaron-0f20bc.netlify.app/"
            />

            <ProjectCard
              title="A1 Security"
              imageSrc="/a1security.png"
              description="The premier destination for professional security guard services."
              url="https://a1securitynyc.com"
            />

            {/* DUPLICATE SET FOR INFINITE LOOP */}
            <ProjectCard
              title="Shrt-Link"
              imageSrc="/shrtlink.png"
              description="Instantly shorten long URLs with ease."
              url="https://dancing-macaron-0f20bc.netlify.app/"
            />

            <ProjectCard
              title="Fun Mart"
              imageSrc="/funmart.png"
              description="FunMart Online Shopping — your trusted partner in E-Commerce."
              url="https://funmart.com"
            />

            <ProjectCard
              title="Inshort Url"
              imageSrc="/inshorturl.png"
              description="Shorten your links and earn with every click."
              url="https://dancing-macaron-0f20bc.netlify.app/"
            />

            <ProjectCard
              title="A1 Security"
              imageSrc="/a1security.png"
              description="The premier destination for professional security guard services."
              url="https://a1securitynyc.com"
            />

          </div>
        </div>
      </div>

    </div>
  );
};

export default Work;
