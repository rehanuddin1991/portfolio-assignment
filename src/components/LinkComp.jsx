import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { GoProjectTemplate } from "react-icons/go";

const LinkComp = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 justify-center items-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
        <NavLink target="_blank"   to="https://github.com/rehanuddin1991" className="flex flex-col gap-6 items-center justify-center">
          <div><FaGithub size={34}/>
          </div>
          <div>GitHub</div>
        </NavLink>

        <NavLink target="_blank"  to="https://www.linkedin.com/in/rehan-uddin-a87292115/" className="flex flex-col gap-6 items-center justify-center">
          <div><FaLinkedin size={34}/> 

          </div>
          <div>Linkedin</div>
        </NavLink>

        <NavLink target="_blank"  to="https://facebook.com/rehanuddin1991" className="flex flex-col gap-6 items-center justify-center">
          <div><FaFacebook size={34}/> 

          </div>
          <div>Facebook</div>
        </NavLink>

        <NavLink target="_blank"  to="https://drive.google.com/file/d/1ufDDUqz23d1pcVZmYzjrBI-L87dyq2At/view?usp=sharing" className="flex flex-col gap-6 items-center justify-center">
          <div><GrResume size={34}/> 

          </div>
          <div>Resume</div>
        </NavLink>

        <NavLink target="_blank"  to="https://binary-planet.netlify.app" className="flex flex-col gap-6 items-center justify-center">
          <div><GoProjectTemplate size={34}/> 

          </div>
          <div>Binary Planet (Project-1)</div>
        </NavLink>

        <NavLink target="_blank"  to="https://rehanuddin1991.github.io/food_awesome/" className="flex flex-col gap-6 items-center justify-center">
          <div><GoProjectTemplate size={34}/> 

          </div>
          <div>Food Awesome(Project-2)</div>
        </NavLink>



        

      </div>
    </>
  );
};

export default LinkComp;
