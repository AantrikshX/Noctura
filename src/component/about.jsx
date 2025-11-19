import React from 'react'
import CountUp from '../components/CountUp'

const About = () => {
  return (
    <div className="about text-[#2E2E2E] w-full min-h-screen bg-[#FFF8E7] rounded-b-2xl max-sm:-mt-3 -mt-1">

      {/* MAIN SECTION */}
      <div className="flex flex-wrap w-full px-6 max-sm:px-3">

        {/* LEFT TEXT */}
        <div className="w-1/2 max-sm:w-full pt-20 max-sm:pt-10 max-sm:mt-5 flex flex-col text-4xl max-sm:text-3xl max-sm:text-center text-[#2E2E2E] leading-tight">
          
          <h1>Transform your digital presence</h1>

          <div className="flex gap-3 max-sm:justify-center max-sm:flex-col max-sm:gap-1">
            <h1>Experience the</h1>
            <h1
              className="text-[#e8bf4e]"
              style={{ textShadow: "1px 1px 4px #000000" }}
            >
              Noctura
            </h1>
          </div>

          <h1>difference.</h1>

          <p className="aboutp text-xl mt-5 tracking-tight max-sm:text-base max-sm:px-1">
            Noctura isn’t just another digital agency — we’re your creative partner in
            building an unforgettable online presence. With a passion for innovation and
            an eye for precision, we craft digital experiences that stand out and perform.
            Whether you’re launching a startup or scaling a brand, Noctura helps you grow,
            connect, and shine — even in the darkest hours.
          </p>
        </div>

        {/* RIGHT INFO BOXES */}
        <div className="w-1/2 max-sm:w-full mt-10 max-sm:mt-12 flex flex-col gap-6 items-end max-sm:items-center px-10 max-sm:px-0">

          {/* BOX 1 */}
          <div className="w-[90%] max-sm:w-full bg-white shadow glass-box flex py-4 px-4 gap-4 rounded-xl">
            <img src="/group.png" className="w-7 h-7" />
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">Best Team</h1>
              <p className="aboutp text-sm leading-tight">
                Our diverse, skilled team is dedicated to crafting exceptional solutions.
              </p>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="w-[90%] max-sm:w-full bg-white shadow glass-box flex py-4 px-4 gap-4 rounded-xl">
            <img src="/company.png" className="w-7 h-7" />
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">Building Startups</h1>
              <p className="aboutp text-sm leading-tight">
                Empowering startups through innovative digital solutions that drive growth.
              </p>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="w-[90%] max-sm:w-full bg-white shadow glass-box flex py-4 px-4 gap-4 rounded-xl">
            <img src="/email.png" className="w-7 h-7" />
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">24/7 Customer Support</h1>
              <p className="aboutp text-sm leading-tight">
                Our customer support ensures every client receives personalized service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTERS SECTION */}
      <div className="w-full flex justify-around max-sm:flex-wrap max-sm:gap-6 items-center border py-6 border-white bg-[#f9edcf] mt-10 max-sm:mt-14 px-4">

        <div className="flex flex-col items-center w-1/4 max-sm:w-1/2">
          <div className="text-3xl text-[#e8bf4e]">
            <CountUp to={40} duration={1} />
          </div>
          <p className="text-sm aboutp font-semibold tracking-tight">Happy Customers</p>
        </div>

        <div className="flex flex-col items-center w-1/4 max-sm:w-1/2">
          <div className="text-3xl text-[#e8bf4e]">
            <CountUp to={1.5} duration={1} />
          </div>
          <p className="text-sm aboutp font-semibold tracking-tight">Years Experience</p>
        </div>

        <div className="flex flex-col items-center w-1/4 max-sm:w-1/2">
          <div className="text-3xl text-[#e8bf4e]">
            <CountUp to={15} duration={1} />
          </div>
          <p className="text-sm aboutp font-semibold tracking-tight">E-commerce Sites</p>
        </div>

        <div className="flex flex-col items-center w-1/4 max-sm:w-1/2">
          <div className="text-3xl text-[#e8bf4e]">
            <CountUp to={10} duration={1} />
          </div>
          <p className="text-sm aboutp font-semibold tracking-tight">Custom Websites</p>
        </div>

      </div>
    </div>
  )
}

export default About
