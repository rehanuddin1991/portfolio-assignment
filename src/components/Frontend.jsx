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
        <RiHtml5Fill className='' size={32} />
      </div>

      <h2 className="card-title">HTML</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiCss3 size={32} />
      </div>

      <h2 className="card-title">CSS</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <IoLogoJavascript size={32} />
      </div>

      <h2 className="card-title">Javascript</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiJquery size={32} />
      </div>

      <h2 className="card-title">Jquery</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaVuejs size={32} />
      </div>

      <h2 className="card-title">Vue</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaReact size={32} />
      </div>

      <h2 className="card-title">React js</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiNextjsFill size={32} />
      </div>

      <h2 className="card-title">Next js</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiTailwindCssFill size={32} />
      </div>

      <h2 className="card-title">Tailwind</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaBootstrap size={32} />
      </div>

      <h2 className="card-title">Bootstrap</h2>
    </div>
  </div>
  )
}

export default frontend