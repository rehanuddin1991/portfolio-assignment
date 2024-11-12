import React from 'react'
import mylogo from '../../public/images/rehan.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import  { useRef, useEffect } from "react";
import {  gsap } from "gsap";
    

import { NavLink } from 'react-router-dom'
const AboutComp = () => {

  let slideRef = useRef();
  

  let bioRef,bioRef2,bioRef3,bioRef4,bioRef5,bioRef6 = useRef();
   
    useEffect(() => {
        gsap.fromTo(slideRef, { y: -100 }, { y: 0, duration: 1 });
        gsap.fromTo(slideRef, { scale: 0 }, { scale: 1, duration: 2 });
        
      
        gsap.fromTo(bioRef, { rotation: 180 }, { rotation: 360, duration: 1 });
        gsap.fromTo(bioRef2, { rotation: 180 }, { rotation: 360, duration: 1 });
        gsap.fromTo(bioRef3, { rotation: 180 }, { rotation: 360, duration: 2 });
        gsap.fromTo(bioRef4, { rotation: 180 }, { rotation: 360, duration: 2 });
        gsap.fromTo(bioRef5, { rotation: 180 }, { rotation: 360, duration: 3 });
        gsap.fromTo(bioRef6, { rotation: 180 }, { rotation: 360, duration: 3 });

    }, []);
  return (
    <div>
        <div className=" mt-6 mb-5 card xs:w-[17rem] xs:-ml-8 justify-center items-center 
         gap-28 xl:gap-60 lg:gap-28 md:gap-0 xs:gap-4 ssm:gap-4  ssm:w-[20rem] card-side bg-base-100 shadow-2xl flex-col lg:flex-row md:flex-row sm:flex-row">
  <figure className='lg:-mt-28   md:-mt-32 xl:-mt-28'>
    <img ref={el=>slideRef=el} className=' w-[30rem] xs:w-[17rem]  ssm:w-[20rem]'
      src={mylogo}
      alt="Movie" />
  </figure>
  <div className="card-body xs:-ml-7  ">
    <h2 ref={el=>bioRef=el}  className="card-title  md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem]">✅&nbsp;Full Stack Developer </h2>
    <h2 ref={el=>bioRef2=el}  className="card-title md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem]">✅&nbsp;MERN & PHP/MySQL</h2>
    <h2 ref={el=>bioRef3=el} className="card-title md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem]">✅&nbsp;Software Developer</h2>
    <h2 ref={el=>bioRef4=el} className="card-title md:text-[1rem]  ssm:text-[0.89rem] xs:text-[0.89rem]">✅&nbsp;First Class Govt. Official</h2>
    <h2 ref={el=>bioRef5=el} className="card-title md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem]">✅&nbsp;Writer</h2>
    <h2 ref={el=>bioRef6=el} className="card-title md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem]">✅&nbsp;Sportsman & Traveler</h2>
    <h2  className="card-title md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem] text-[midnightblue] flex-row">
    <FaLinkedin size={36} />
      <NavLink  to='https://www.linkedin.com/in/rehan-uddin-a87292115/' target='_blank'>
    Linkedin</NavLink></h2>

    <h2 className="card-title md:text-[1rem] ssm:text-[0.89rem] xs:text-[0.89rem] text-[midnightblue] flex-row">
    <FaGithub size={36} />
      <NavLink  to='https://github.com/rehanuddin1991' target='_blank'>
    GitHub</NavLink></h2>

      <h2 className="md:text-[1rem] card-title ssm:text-[0.89rem] xs:text-[0.89rem] text-[blue]">🚀Project-1: 
      <NavLink title="Email: admin@gmail.com pass:123456" to='https://binary-planet.netlify.app' target='_blank'>
      Binary Planet🔥</NavLink></h2>

      
    <h2 className="md:text-[1rem] card-title ssm:text-[0.89rem] xs:text-[0.89rem] text-[darkcyan]">🚀Project-2: 
      <NavLink   to='https://rehanuddin1991.github.io/food_awesome/' target='_blank'>Food Awesome</NavLink></h2>
    <h2 className="md:text-[1rem] card-title ssm:text-[0.89rem] xs:text-[0.89rem] text-[blue]">🚀Project-3: 
      <NavLink   to='https://books-heaven.netlify.app/' target='_blank'>Book's Heaven</NavLink></h2>
    <h2 className="md:text-[1rem] card-title ssm:text-[0.89rem] xs:text-[0.89rem] text-[midnightblue]">🚀Project-4:
       <NavLink  to='https://bindu-theke-sindhu.netlify.app/' target='_blank'>Bindu Theke Sindhu</NavLink></h2>
     
     
    <div className="md:text-[1rem] card-actions justify-center   ">
      <button className="btn btn-primary  "> <NavLink to="/skills">All Skills</NavLink> </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutComp