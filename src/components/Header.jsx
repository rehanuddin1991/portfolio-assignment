import React from 'react'
import { NavLink } from 'react-router-dom'
import { PiLinkSimpleFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";

import Rehan_Resume from '../../public/Rehan_Resume.pdf'

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
        <NavLink className="hover:text-orange-400 py-2" to="/">Home</NavLink>
       <NavLink className="hover:text-orange-400 py-2"  to="/skills">Skills</NavLink>
       <NavLink className="hover:text-orange-400 py-2" to="/project">Project</NavLink>
       <NavLink className="hover:text-orange-400 py-2"  to="write-up" >Write Up</NavLink>
       <NavLink className="hover:text-orange-400 py-2"  to="/gallery">Gallery</NavLink>
       <NavLink className="hover:text-orange-400 py-2"  to="/about">About</NavLink>
       <NavLink className="hover:text-orange-400" title="Education"  to="/education"><MdCastForEducation size={32} /></NavLink>
       <NavLink className="hover:text-orange-400" py-2  to="/contact"><IoMdContact size={32}/>      </NavLink>
       <NavLink className="hover:text-orange-400" py-2 to="/links"><PiLinkSimpleFill size={32} />
       </NavLink>
       <a download  className="hover:text-orange-400" py-2  href={Rehan_Resume}>Resume</a>
     
      </ul>
    </div>
    <NavLink to="/" className=" xl:text-[1.35rem]  text-xl xs:text-[0.7rem] md:text-[0.9rem] ssm:text-[0.9rem] text-[darkcyan]
     font-bold ">Rehan's Portfolio</NavLink>
  </div>
  <div className="navbar-center xl:ml-44 hidden md:flex sm:flex lg:flex">
    <ul className="menu menu-horizontal px-1   flex gap-7 md:gap-3 lg:gap-7  justify-center items-center font-bold md:font-semibold">
       <NavLink className="hover:text-orange-400 md:text-xs" to="/">Home</NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs"  to="/skills">Skills</NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs" to="/project">Project</NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs"  to="write-up" >Write Up</NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs"  to="/gallery">Gallery</NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs"  to="/about">About</NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs" title="Education"  to="/education"><MdCastForEducation size={32} /></NavLink>

       <NavLink className="hover:text-orange-400 md:text-xs" title='Contact'  to="/contact"><IoMdContact size={32}/>      </NavLink>
       <NavLink className="hover:text-orange-400 md:text-xs" title="all links"  to="/links"><PiLinkSimpleFill size={32} />
       </NavLink>
       
       <a download  className="hover:text-orange-400 md:text-xs"   href={Rehan_Resume}>Resume</a>
        
    </ul>
  </div>

  <div className="navbar-end "></div>
   
</div>
    </>
  )
}

export default header