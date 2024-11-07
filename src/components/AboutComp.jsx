import React from 'react'
import mylogo from '../../public/images/rehan.jpg'
import { NavLink } from 'react-router-dom'
const AboutComp = () => {
  return (
    <div>
        <div className=" mt-10 mb-5 card xs:w-[17rem] xs:-ml-8 justify-center items-center gap-32 xs:gap-4 ssm:gap-4  ssm:w-[20rem] card-side bg-base-100 shadow-xl flex-col lg:flex-row md:flex-row sm:flex-row">
  <figure>
    <img className='w-[30rem] xs:w-[17rem]  ssm:w-[20rem]'
      src={mylogo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">✅&nbsp;Full Stack Developer </h2>
    <h2 className="card-title">✅&nbsp;Mern & PHP/Mysql</h2>
    <h2 className="card-title">✅&nbsp;Software Developer</h2>
    <h2 className="card-title">✅&nbsp;First Class Govt. Official</h2>
    <h2 className="card-title">✅&nbsp;Writer</h2>
    <h2 className="card-title">✅&nbsp;Sportsman</h2>
     
     
    <div className="card-actions justify-end  right-0  bottom-0  absolute">
      <button className="btn btn-primary  "> <NavLink to="/skills">All Skills</NavLink> </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutComp