import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";

 
const Backend = () => {
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
  justify-center items-center gap-3  "
  >
    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaNodeJs className='text-[#509941]' size={36} />
      </div>

      <h2 className="card-title">Node.js</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiExpress size={36} />
      </div>

      <h2 className="card-title">Express.js</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiPhp size={36} />
      </div>

      <h2 className="card-title">PHP</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiMongodb className='text-[#419432]' size={36} />
      </div>

      <h2 className="card-title">MongoDB</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <GrMysql className='text-[#005C85]' size={36} />
      </div>

      <h2 className="card-title">MySQL</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-1 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiFirebase className='text-[#F7BE00]' size={36} />
      </div>

      <h2 className="card-title">Firebase</h2>
    </div>

     
  </div>
  )
}

export default Backend