import React from 'react'

const home21 = () => {
  return (
    <div className=' h-150   mt-6 flex justify-center w-full' >
      <div className='bg-zinc-700 w-250 h-130 rounded-3xl flex justify-center items-end max-sm:w-95 max-sm:rounded-2xl' >
        
        <div className='lft  h-120 w-100 flex  flex-col relative ' >
          <div className='findmehere text-xl font-medium text-white absolute top-50 flex flex-col ' >
            <h1>Mail us at:</h1>
              <div className='flex gap-2 text-white findmehere'><img src="/mail.png" alt="" className='w-6 rounded'/><a href="mailto:noctura.hq@gmail.com" className="hover:underline">noctura.hq@gmail.com</a></div>
          </div>
          <div className='absolute bottom-1 text-white findmehere  text-xl ' >
            <h1>Find Me Here</h1>
            <div className='flex mt-1 pl-2 gap-1.5' >
          <a href="https://github.com/AantrikshX"><img src="/contgithub.png" className='w-6 rounded'  alt="" /></a>
          <a href="https://www.linkedin.com/in/aantriksh-sharma-6807b22a5/"><img src="/contlink.jpg" className='w-6 rounded '  alt="" /></a>
          <a href="https://x.com/aantriksh_"><img src="/contx.jpg" className='w-6 rounded'  alt="" /></a>
          <a href="https://www.instagram.com/aantriksh_/"><img src="/continsta.jpg" className='w-6 rounded'  alt="" /></a>
          </div>
            </div>
          <h1 className='absolute z-9 text-2xl left-50 top-5 max-sm:text-sm max-sm:left-40 max-sm:top-29 max-sm:w-25 font-bold'>Put An Impresion with us🦉🔥</h1><img src="/home21chatbox.png" alt="" className='absolute left-25 bottom-60 scale-70 max-sm:scale-80' /></div>
        <div className='rght ' >
        <img src="/home21owl.png" alt="" className='' />
        </div>
        </div>
      </div>
  )
}

export default home21