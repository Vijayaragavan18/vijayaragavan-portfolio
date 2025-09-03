import { React, useState } from 'react';
import '../css/main.css';
import '../js/main.js';
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import cv from '../../asset/Vijayaragavan.t.cv.pdf';
import { IoCall } from "react-icons/io5";
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>

            <div className="navSection ">
                <div className="logoName col-lg-3">
                    <h2> VR</h2>
                </div>
                <div className="navPageBtn col-lg-6">
                    <a className="fw-semibold   " href="/">Home</a>
                    <a className="fw-semibold  " href="#About" id="Abouts">About Me</a>
                    <a className="fw-semibold  " href="#Skill" id="Skills">Skills</a>
                    <a className="fw-semibold  " href="#project" id="Projects">Projects</a>
                    <a className="fw-semibold  " href="#profile" id="Profiles">Profiles</a>
                    <a className="fw-semibold  " href="#Contact" id="Contacts">Contact</a>
                    {/* <a className="fw-semibold  " href="">Resume</a> */}
                </div>
                <div className="contactL col-lg-3 ">
                    <a className="navIcon" href="https://www.linkedin.com/in/vijay-ragavan-t-941b1621b/" target="_blank" title="My LinkedIn"><FaLinkedinIn /></a>
                    <a className="navIcon" href="https://leetcode.com/u/T_Vijay18/" title="My LeetCode" target="_blank"><SiLeetcode /> </a>

                    <a className="navIcon" href="tel:8270241319" ><IoCall /></a>
                </div>

                <div className="menuIconTag">



                    {isOpen == false ?
                        <div onClick={() => setIsOpen(true)} className="menuIconSec">
                            <IoMenuOutline className="menuIcon" />
                        </div> :
                        <div onClick={() => setIsOpen(false)} className="menuIconSec">
                            <VscChromeClose className="menuIcon" />
                        </div>
                    }

                </div>

            </div>

            {isOpen &&
                <div className="menuSec" onClick={() => setIsOpen(false)}>
                    <div className="menuSideBar">
                        <a className="fw-semibold   " href="/">Home</a>
                        <a className="fw-semibold  " href="#About" id="Abouts">About Me</a>
                        <a className="fw-semibold  " href="#Skill" id="Skills">Skills</a>
                        <a className="fw-semibold  " href="#project" id="Projects">Projects</a>
                        <a className="fw-semibold  " href="#profile" id="Profiles">Profiles</a>
                        <a className="fw-semibold  " href="#Contact" id="Contacts">Contact</a>
                        <a className="downloadBtn" href={cv} download="Vijayragavan__Cv.pdf">
                            Download CV
                        </a>
                        <div className="contactLMob col-lg-3 ">
                            <a className="navIcon" href="https://www.linkedin.com/in/vijay-ragavan-t-941b1621b/" target="_blank" title="My LinkedIn"><FaLinkedinIn /></a>
                            <a className="navIcon" href="https://leetcode.com/u/T_Vijay18/" title="My LeetCode" target="_blank"><SiLeetcode /> </a>

                            <a className="navIcon" href="tel:8270241319" ><IoCall /></a>
                        </div>
                    </div>
                </div>

            }









        </>
    );
}

export default NavBar;
