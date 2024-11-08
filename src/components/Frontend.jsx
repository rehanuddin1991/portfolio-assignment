import React from 'react'
import { RiHtml5Fill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
const frontend = () => {
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
  justify-center items-center gap-3  "
  >
    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiHtml5Fill className='text-[#DD4B24]' size={36} />
      </div>

      <h2 className="card-title">HTML</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiCss3 className='text-[#254BDF]' size={36} />
      </div>

      <h2 className="card-title">CSS</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <IoLogoJavascript className='text-[#E8D44D]' size={36} />
      </div>

      <h2 className="card-title">Javascript</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiJquery className='text-[#1163A4]' size={36} />
      </div>

      <h2 className="card-title">Jquery</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaVuejs className='text-[#3FB27F]' size={36} />
      </div>

      <h2 className="card-title">Vue</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaReact className='text-[#61DAFB]' size={36} />
      </div>

      <h2 className="card-title">React js</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiNextjsFill size={36} />
      </div>

      <h2 className="card-title">Next js</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiTailwindCssFill className='text-[#36B6F2]' size={36} />
      </div>

      <h2 className="card-title " >Tailwind</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaBootstrap size={36} />
      </div>

      <h2 className="card-title">Bootstrap</h2>
    </div>
  </div>
  )
}

export default frontend