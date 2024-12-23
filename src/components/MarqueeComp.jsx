import React from "react";
import Marquee from 'react-fast-marquee'
import { FaReact,FaBootstrap,FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
const MarqueeComp = () => {
  return (
    <>
      <Marquee
        pauseOnHover={true}
        style={{ fontWeight: "500", fontSize: "1.2rem" }}
      >
        "Are you looking for aesthetic web applications?". I am a full stack Web Developer. I have sound knowledge both MERN & PHP.
        I am expert at &nbsp;
        <FaReact className="text-[#61DAFB]" size={32} /> React &nbsp;
        <RiNextjsFill className="" size={32} /> Next &nbsp;
        <RiTailwindCssFill className="text-[#36B6F2]" size={32} />
        Tailwind &nbsp;
        <FaBootstrap className="" size={32} /> Bootstrap &nbsp;
        <SiPhp className="" size={32} />
        PHP &nbsp;
        <SiMongodb className="text-[#419432]" size={32} />
        MongoDB &nbsp;
        <GrMysql className="" size={32} /> MySQL
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Marquee>
    </>
  );
};

export default MarqueeComp;
