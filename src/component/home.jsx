import React, { useEffect, useRef } from 'react'
import Navbar from './navbar'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { Routes, Route } from "react-router-dom";
import Home2 from './home2';
import Home21 from './home21';
import Shop from "./shop"
import Billing from "./billing"
import About from './about';
import Work from "./work"

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    })

    return () => scroll.destroy()
  }, [])

  return (

    <div data-scroll-container ref={containerRef}>
      

      <div
        data-scroll
        data-scroll-speed=".2"
       className="
        w-375 mt-2 rounded-2xl

        /* MOBILE FIX HARDCODED */
          max-sm:w-90
          max-sm:!max-w-none
          max-sm:!overflow-visible
          max-sm:rounded-2xl
          max-sm:mt-4
          "

      >
        <Navbar />
        <Routes>

        <Route path="/" element={<Home2/>} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ourwork' element={<Work/>}/>
        </Routes>
        <Home21/>
      </div>

    </div>
  )
}

export default Home
