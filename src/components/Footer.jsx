import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaTwitter,
  } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="footer mt-10 footer-center bg-[white] shadow-2xl font-semibold text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4 text-[#3a7272]">
                    <NavLink to="/about" className="link link-hover">About</NavLink>
                    <NavLink to="/contact" className="link link-hover">Contact</NavLink>
                    <NavLink to="/skills" className="link link-hover">Skills</NavLink>
                    <NavLink to="" className="link link-hover">Projects</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a  href='https://github.com/rehanuddin1991' target='_blank' className="link link-hover"> <FaGithub size={30} className="hover:text-gray-600" /></a>
    <a  href='https://facebook.com/rehanuddin1991' target='_blank'  className="link link-hover"><FaFacebook size={30} className="hover:text-blue-500" /></a>
    <a  href='https://twitter.com/' target='_blank'   className="link link-hover"> <FaTwitter size={30} className="hover:text-blue-400" /></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright©Rehan Uddin-2024 All Right Reserved</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer