import React from 'react'
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { SiBisecthosting } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { GiElectricalSocket } from "react-icons/gi";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
 




 
const OthersSkills = () => {
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
  justify-center items-center gap-3  "
  >
    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaGitAlt className='text-[#D74A34]' size={36} />
      </div>

      <h2 className="card-title">Git</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaGithub size={36} />
      </div>

      <h2 className="card-title">GitHub</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaPinterest size={36} />
      </div>

      <h2 className="card-title">Rest API</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiNetlify size={36} />
      </div>

      <h2 className="card-title">Netlify(Host)</h2>
    </div>


    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <IoLogoVercel size={36} />
      </div>

      <h2 className="card-title">Vercel(Host)</h2>
    </div>


    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiRender size={36} />
      </div>

      <h2 className="card-title">Render(Host)</h2>
    </div>



    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <SiBisecthosting size={36} />
      </div>

      <h2 className="card-title">Web Hosting</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaSlack size={36} />   
      </div>

      <h2 className="card-title">Slack(Project Management)</h2>
    </div>

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
      <DiScrum size={36} /> 
      </div>

      <h2 className="card-title">Scrum(Project Management)</h2>
    </div> 

    <div className=" mx-auto w-48 flex flex-col justify-center items-center gap-2 bg-base-100 shadow-lg font-bold  p-5  rounded-lg">
      <div>
        <FaDocker  size={36} />
      </div>

      <h2 className="card-title">Docker</h2>
    </div>

     
  </div>
  )
}

export default OthersSkills