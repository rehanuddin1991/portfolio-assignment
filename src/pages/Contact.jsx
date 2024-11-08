import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="hero    bg-base-100 mt-14  p-2 ">
        <div className="hero-content justify-center items-start gap-32  xs:gap-4 ssm:gap-4 flex-col  md:flex-row-reverse sm:flex-row-reverse lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            
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
            <p className="py-2 flex flex-row">
              <FaFacebook size={20} />
              facebook.com/rehanuddin1991
            </p>
            <p className="py-2 flex flex-row">
              <FaGithub size={20} /> github.com/rehanuddin1991
            </p>
          </div>
          <div className="card bg-base-100 w-full xs:max-w-[19rem] xs:-ml-8 max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
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
