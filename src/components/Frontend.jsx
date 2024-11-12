import React, { useEffect, useRef } from 'react'
import { RiHtml5Fill } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { gsap } from "gsap";
    

const frontend = () => {
   
   let slideRef1 ,slideRef2,slideRef3,slideRef4,slideRef5,slideRef6,slideRef7,slideRef8,slideRef9,slideRef10=useRef();

  useEffect(() => {
    
    gsap.fromTo(slideRef1, { x: -100 }, { x: 0, duration: 1 });
    gsap.fromTo(slideRef2, { x: -100 }, { x: 0, duration: 1 });
    gsap.fromTo(slideRef3, { x: -100 }, { x: 0, duration: 1 });
    gsap.fromTo(slideRef4, { x: -100 }, { x: 0, duration: 2 });
    gsap.fromTo(slideRef5, { x: -200 }, { x: 0, duration: 2 });
    gsap.fromTo(slideRef6, { x: -200 }, { x: 0, duration: 2 });
    gsap.fromTo(slideRef7, { x: -200 }, { x: 0, duration: 3 });
    gsap.fromTo(slideRef8, { x: -400 }, { x: 0, duration: 3 });
    gsap.fromTo(slideRef9, { x: -400 }, { x: 0, duration: 3 });
    gsap.fromTo(slideRef10, { x: -400 }, { x: 0, duration: 3 });
 
     
  }, []);
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
  justify-center items-center gap-3  "
  >
    <div ref={el=>slideRef1=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiHtml5Fill className='text-[#DD4B24]' size={36} />
      </div>

      <h2 className="card-title">HTML5</h2>
    </div>

    <div ref={el=>slideRef2=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiCss3 className='text-[#254BDF]' size={36} />
      </div>

      <h2 className="card-title">CSS3</h2>
    </div>

    <div ref={el=>slideRef3=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <IoLogoJavascript className='text-[#E8D44D]' size={36} />
      </div>

      <h2 className="card-title">Javascript</h2>
    </div>

    <div ref={el=>slideRef4=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiJquery className='text-[#1163A4]' size={36} />
      </div>

      <h2 className="card-title">Jquery</h2>
    </div>

    <div ref={el=>slideRef5=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaVuejs className='text-[#3FB27F]' size={36} />
      </div>

      <h2 className="card-title">Vue</h2>
    </div>

    <div ref={el=>slideRef6=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaReact className='text-[#61DAFB]' size={36} />
      </div>

      <h2 className="card-title">React js</h2>
    </div>

    <div ref={el=>slideRef7=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiNextjsFill size={36} />
      </div>

      <h2 className="card-title">Next js</h2>
    </div>

    <div ref={el=>slideRef8=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <RiTailwindCssFill className='text-[#36B6F2]' size={36} />
      </div>

      <h2 className="card-title " >Tailwind</h2>
    </div>

    <div ref={el=>slideRef9=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaBootstrap size={36} />
      </div>

      <h2 className="card-title">Bootstrap</h2>
    </div>

    <div title='tailwind library' ref={el=>slideRef10=el} className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiDaisyui size={42} />
      </div>

      <h2 className="card-title">Daisy</h2>
    </div>
  </div>
  )
}

export default frontend