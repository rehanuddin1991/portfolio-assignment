import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";
import MarqueeComp from "../components/MarqueeComp";
import { Helmet } from "react-helmet-async";
 

const Contact = () => {
  const formSubmit=(event)=>
  {
    event.preventDefault();
    toast.success('Welcome. Message Delivered to Admin!');
  }
  return (
    <div>
      <Helmet>
    <title>Contact Us</title>

    </Helmet>
      <MarqueeComp/>
      <div className="hero    bg-base-100 mt-14  p-1 ">
        <div className="hero-content justify-center items-start gap-32 md:gap-16  xs:gap-4 ssm:gap-4
         flex-col  md:flex-row-reverse sm:flex-row-reverse lg:flex-row-reverse">
          <div className=" text-center xs:-ml-8 lg:text-left">
            
            <p className="py-2 flex flex-row font-bold ">Rehan Uddin</p>
            <p className="py-2 flex flex-row"> Upazila ICT Officer</p>
            <p className="py-2 flex flex-row"> ICT Office, Ramgarh</p>
            <p className="py-2 flex flex-row">
              <MdCall size={20} /> 01674-194142
            </p>
            <p className="py-2 flex flex-row">
              <MdEmail size={20} />
              rehan.doict@gmail.com
            </p>
            <p className="py-2 flex flex-row xs:text-[0.85rem] ssm:text-[0.9rem]">
              <FaFacebook size={20} />
              facebooks.com/rehanuddin1991
            </p>
            <p className="py-2 flex flex-row xs:text-[0.85rem] ssm:text-[0.9rem]">
              <FaGithub size={20} /> github.com/rehanuddin1991
            </p>
            <a
              href="https://www.linkedin.com/in/rehan-uddin-a87292115/"
              target="_blank"
              className="link link-hover "
            >
               <div className="flex-row flex ">
               <FaLinkedin size={30} className="hover:text-blue-400" /> <h1 className="mt-1">Linkedin</h1>
               </div>
              
            </a>
          </div>
          <div className="card bg-base-100 w-full xs:max-w-[19rem] xs:-ml-12 ssm:-ml-8 max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={formSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                 
                <textarea name="" id="" cols="30"  className="h-20 input input-bordered" rows="10"></textarea>

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
