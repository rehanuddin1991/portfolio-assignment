import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutComp from '../components/AboutComp'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Marquee from 'react-fast-marquee'

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";


import { FaNodeJs } from "react-icons/fa";
 
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const HomePage = () => {
  return (
    <div>
       <Helmet>
    <title>Home Page</title>

    </Helmet>
    <Marquee pauseOnHover={true} style={{fontWeight:"600",fontSize:"1.2rem"}}>
  I am a full stack Web Developer. I have sound knowledge both MERN & PHP. I am expert at &nbsp;
  <FaReact className='' size={32} /> React &nbsp;
  <RiNextjsFill className='' size={32} /> Next &nbsp;
  <RiTailwindCssFill className='' size={32} />Tailwind &nbsp;
  <FaBootstrap className='' size={32} /> Bootstrap &nbsp;
  <SiPhp className='' size={32} />PHP &nbsp;
  <SiMongodb className='' size={32} />MongoDB &nbsp;
  <GrMysql className='' size={32} /> MySQL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</Marquee>
    <AboutComp/>
    <Project/>
    <Skills/>
    </div>
  )
}

export default HomePage