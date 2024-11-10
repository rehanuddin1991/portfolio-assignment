import React from "react";

import Frontend from "./frontend";
import Backend from "./Backend";
import OthersSkills from "./OthersSkills";
import WriteUp from "./WriteUp";
import MarqueeComp from "./MarqueeComp";

const Skills = () => {
  return (
    <>
    <MarqueeComp/>
      <div>
         
        <h1 className=" text-[lightseagreen] m-3 mt-10 mb-7 text-center font-bold text-2xl xs:text-[0.8rem] ssm:text-[0.8rem] ">
          Frontend Development Skills
        </h1>
        <Frontend/>

        <h1 className="text-[lightseagreen] m-3  mt-10 mb-7 text-center font-bold text-2xl xs:text-[0.8rem] ssm:text-[0.8rem] ">
          Backend Development Skills
        </h1>

        <Backend/>

        <h1 className="text-[lightcoral] m-3  mt-10 mb-7 text-center font-bold text-2xl xs:text-[0.8rem] ssm:text-[0.8rem] ">
          Others Skills
        </h1>

        <OthersSkills/>
        
      </div>
    </>
  );
};

export default Skills;
