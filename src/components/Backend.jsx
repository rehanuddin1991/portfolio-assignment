import React, { useEffect, useRef } from 'react'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { gsap } from "gsap";
 
const Backend = () => {
  let slideRef1 ,slideRef2,slideRef3,slideRef4,slideRef5,slideRef6=useRef();

  useEffect(() => {
    
    gsap.fromTo(slideRef1, { x: -100 }, { x: 0, duration: 5 });
    gsap.fromTo(slideRef2, { x: -100 }, { x: 0, duration: 5 });
    gsap.fromTo(slideRef3, { x: -100 }, { x: 0, duration: 5 });
    gsap.fromTo(slideRef4, { x: -100 }, { x: 0, duration: 5 });
    gsap.fromTo(slideRef5, { x: -200 }, { x: 0, duration: 5 });
    gsap.fromTo(slideRef6, { x: -200 }, { x: 0, duration: 5 });
    
 
     
  }, []);
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
  justify-center items-center gap-3  "
  >
    <div  ref={el=>slideRef1=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaNodeJs className='text-[#509941]' size={36} />
      </div>

      <h2 className="card-title">Node.js</h2>
    </div>

    <div  ref={el=>slideRef2=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiExpress size={36} />
      </div>

      <h2 className="card-title">Express.js</h2>
    </div>

    <div  ref={el=>slideRef3=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiPhp size={36} />
      </div>

      <h2 className="card-title">PHP</h2>
    </div>

    <div  ref={el=>slideRef4=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiMongodb className='text-[#419432]' size={36} />
      </div>

      <h2 className="card-title">MongoDB</h2>
    </div>

    <div  ref={el=>slideRef5=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <GrMysql className='text-[#005C85]' size={36} />
      </div>

      <h2 className="card-title">MySQL</h2>
    </div>

    <div  ref={el=>slideRef6=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiFirebase className='text-[#F7BE00]' size={36} />
      </div>

      <h2 className="card-title">Firebase</h2>
    </div>

     
  </div>
  )
}

export default Backend