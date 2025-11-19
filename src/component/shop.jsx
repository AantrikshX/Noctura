import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const shop = () => {
  const navigate = useNavigate()
  return (
    <div className='shop text-[#2E2E2E] w-full min-h-screen bg-[#FFF8E7] items-center justify-center rounded-b-2xl flex flex-wrap gap-15 max-sm:gap-5  -mt-1 max-sm:-mt-3'>
        
        <div className='w-1/4 max-sm:w-80 max-sm:mt-20 max-sm:h-190 h-150 flex-col px-10 py-10  relative bg-white/15 backdrop-blur-2xl border border-[#e8bf4e] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-3xl flex '>
          <div className='Fisrhalf w-full  flex flex-col gap-8 ' >
            <div className='flex max-sm:text-center  w-full' >
          <h1 className='text-3xl font-semibold  ' >PortFolio Website</h1></div>
          <div className='flex items-center gap-1' >
            <h1 className='price text-5xl font-bold ' >₹50</h1>
            <h1 className='/month text-gray-500 mt-1 text-2xl' >/Month</h1>
          </div>
          <div className='flex text-gray-500' ><p>For anyone who wants to showcase their skills, projects, and achievements in a professional, creative way.</p></div>
          </div>
          <div className='flex w-full mt-4 justify-center' ><button onClick={() => navigate("/billing")} className='bg-[#2E2E2E] cursor-pointer hover:bg-black text-xl text-white font-medium px-20 py-2 rounded shadow-md hover:shadow-lg transition-all duration-300 ' >Book Now</button></div>
          <div className='flex w-full justify-center items-center mt-5' ><div className='w-15 h-px bg-gray-400' ></div><h1 className='text-gray-400 max-sm:text-xs' >Stand Out Features</h1><div className='w-15 h-px bg-gray-400' ></div></div>
          <div className='Secondhalf flex mt-5 flex-col gap-4 w-full  ' >
            <div className='f1 w-full flex items-center  gap-3' ><img src="/smartphone.png" className=' w-5 h-8' alt="" /><div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >One-page responsive portfolio design</h1></div> </div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/dashboard.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Sections for About, Skills, and Projects</h1></div></div>
            <div className='f1 w-full flex items-center  gap-3' ><img src="/message.png" className=' w-5 h-6' alt="" /><div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Integrated contact form or social links</h1></div> </div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/startup.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Fast load speed + SEO-ready setup</h1></div></div>
          </div>
        </div>

        <div className='w-1/4 h-160 max-sm:w-85 max-sm:mt-20 max-sm:h-200 flex-col px-10 relative bg-white/15 backdrop-blur-2xl border border-[#e8bf4e] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-3xl flex justify-center'>
          <div className='Fisrhalf w-full  flex flex-col gap-8 ' >
          <div className='flex max-sm:text-center  w-full' >
          <h1 className='text-3xl font-semibold  ' >E-commerce Website</h1></div>
          <div className='flex items-center gap-1' >
            <h1 className='price text-5xl font-bold ' >₹300</h1>
            <h1 className='/month text-gray-500 mt-1 text-2xl' >/Month</h1>
          </div>
          <div className='flex text-gray-500' ><p>For small businesses, creators, or brands who want to sell products online with a fast, modern store.</p></div>
          </div>
          <div className='flex w-full mt-4 justify-center' ><button onClick={() => navigate("/billing")} className='bg-[#2E2E2E] cursor-pointer hover:bg-black text-xl text-white font-medium px-20 py-2 rounded shadow-md hover:shadow-lg transition-all duration-300 ' >Book Now</button></div>
          <div className='flex w-full justify-center items-center mt-5' ><div className='w-15 h-px bg-gray-400' ></div><h1 className='text-gray-400 max-sm:text-xs ' >Stand Out Features</h1><div className='w-15 h-px bg-gray-400' ></div></div>
          <div className='Secondhalf flex mt-5 flex-col gap-4 w-full  ' >
            <div className='f1 w-full flex items-center  gap-3' ><img src="/chain.png" className=' w-6 h-6' alt="" /><div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Product Listing & Management</h1></div> </div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/secure.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Add-to-Cart & Secure Checkout</h1></div></div>
            <div className='f1 w-full flex items-center  gap-3' ><img src="/automation.png" className=' w-6 h-6' alt="" /><div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Admin Dashboard & Order Control</h1></div> </div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/responsive-page.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Responsive & Mobile-Friendly Design</h1></div></div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/analytics.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Analytics & SEO Optimization</h1></div></div>
          </div>
        </div>

        <div className='w-1/4 h-150 max-sm:w-80 max-sm:mt-20 max-sm:h-190 flex-col px-10 max-sm:mb-5 py-10 bg-white/15 backdrop-blur-2xl border border-[#e8bf4e] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-3xl flex justify-center'>
          <div className='Fisrhalf w-full  flex flex-col gap-8 ' >
          <div className='flex max-sm:text-center  w-full' >
          <h1 className='text-3xl font-semibold  ' >Custom Website</h1></div>
          <div className='flex items-center gap-1' >
            <h1 className='price text-5xl font-bold ' >Flexible</h1>
            <h1 className='/month text-gray-500 mt-1 text-2xl' ></h1>
          </div>
          <div className='flex text-gray-500' ><p>For startups, brands, or professionals who need a completely personalized website built to match their exact goals.</p></div>
          </div>
          <div className='flex w-full mt-4 justify-center' ><button onClick={() => navigate("/billing")} className='bg-white cursor-pointer hover:bg-gray-100 border text-xl text-black font-medium px-20 py-2 rounded shadow-md hover:shadow-lg transition-all duration-300 ' >Contact Now</button></div>
          <div className='flex w-full justify-center items-center mt-5' ><div className='w-15 h-px bg-gray-400' ></div><h1 className='text-gray-400' >Stand Out Features</h1><div className='w-15 h-px bg-gray-400' ></div></div>
          <div className='Secondhalf flex mt-5 flex-col gap-4 w-full  ' >
            <div className='f1 w-full flex items-center  gap-3' ><img src="/web-design.png" className=' w-6 h-6' alt="" /><div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Fully Custom UI/UX Design</h1></div> </div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/api.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Backend & Dynamic Functionality</h1></div></div>
            <div className='f1 w-full flex items-center  gap-3' ><img src="/speed-test.png" className=' w-6 h-6' alt="" /><div className='w-full' ><h1 className='text-[15px] tracking-tighter leading-4 font-medium' >Scalable & High-Performance Architecture</h1></div> </div>
            <div className='f2 w-full flex items-center gap-3 ' ><img src="/customer-service.png" className=' w-6 h-6' alt="" /> <div className='w-full' ><h1 className='text-[15px] tracking-tighter font-medium' >Ongoing Support & Maintenance</h1></div></div>
          </div>
        </div>

    </div>
  )
}

export default shop
