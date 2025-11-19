import React from 'react'

import Home from "./home"
import Notification from "./notification"


const secondpage = () => {
  
  return (
    <div className="flex flex-col relative items-center   opacity-0 animate-fadeIn">
          <Notification/>
            <Home/>
          </div>
          
  )
}

export default secondpage