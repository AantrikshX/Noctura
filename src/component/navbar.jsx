import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Our Work', path: '/ourwork' },
  ]

  return (
    <div className="w-full relative bg-[#FFF8E7] rounded-t-2xl flex px-8 py-2 justify-between items-center 
      max-sm:px-4 max-sm:py-3 max-sm:rounded-2xl">

      {/* Logo */}
      <div className="w-60 max-sm:w-40">
        <img src="/noctura-logo2.png" alt="noctura" className="logo" />
      </div>

      {/* Desktop Nav */}
      <div className="flex gap-8 navbutton pr-10 text-[#2E2E2E] text-2xl 
        max-sm:hidden">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer relative pb-1 transition-all duration-200 
              ${
                location.pathname === item.path
                  ? 'font-semibold after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#2E2E2E]'
                  : 'hover:opacity-80'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="hidden max-sm:block text-3xl text-[#2E2E2E]"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="
          absolute top-full left-0 w-full bg-[#FFF8E7] flex flex-col 
          items-start px-6 py-4 z-99 gap-4 text-[#2E2E2E] text-xl shadow-lg 
          max-sm:flex">

          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path)
                setOpen(false)
              }}
              className={`w-full text-left py-1 border-b 
                ${
                  location.pathname === item.path
                    ? 'font-semibold'
                    : 'opacity-80'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
