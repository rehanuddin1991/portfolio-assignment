import React from 'react'
import { NavLink } from 'react-router-dom'

const header = () => {
  return (
    <>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden sm:hidden lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NavLink to="/" className=" text-2xl xs:text-[0.75rem] ssm:text-[0.9rem] text-[darkcyan] font-bold ">Rehan's Portfolio</NavLink>
  </div>
  <div className="navbar-center hidden md:flex sm:flex lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-7 justify-center items-center font-bold">
       <NavLink className="hover:text-orange-400" to="/">Home</NavLink>
       <NavLink className="hover:text-orange-400"  to="/skills">Skills</NavLink>
       <NavLink className="hover:text-orange-400" >Project</NavLink>
       <NavLink className="hover:text-orange-400"  to="write-up" >Write Up</NavLink>
       <NavLink className="hover:text-orange-400"  to="">Gallery</NavLink>
       <NavLink className="hover:text-orange-400"  to="/about">About</NavLink>
       <NavLink className="hover:text-orange-400"  to="/contact">Contact</NavLink>
       <NavLink className="hover:text-orange-400"  to="https://drive.google.com/file/d/1fuW0Ht6GlqCwCOjFpEWbQ9bzH3inNxEg/view?usp=sharing">Resume</NavLink>
        
    </ul>
  </div>
   
</div>
    </>
  )
}

export default header