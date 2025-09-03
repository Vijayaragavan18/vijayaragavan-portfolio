import React from 'react'
import '../css/main.css';
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import cv from '../../asset/Vijayaragavan.t.cv.pdf';
const footer = () => {
    return (
        <>

            <div className="footerContent d-flex align-items-center justify-content-center">
                <div className="footerWidth ">
                    <div className="footerSecOne d-flex align-items-center justify-content-between">
                        <h1 className="fs-3  text-white fw-semibold">Vijayaragavan T</h1>
                        <div className="footerLinks d-flex gap-4">
                            {/* <a className="fw-semibold  text-white " href="">Home</a>
                            <a className="fw-semibold text-white " href="">Projects</a>
                            <a className="fw-semibold text-white " href="">Skills</a>
                            <a className="fw-semibold text-white " href="">About Me</a>
                            <a className="fw-semibold text-white " href="">Contact</a> */}
                            <a className="fw-semibold  text-white " href="/">Home</a>
                            <a className="fw-semibold text-white " href="#project" id="Projects">Projects</a>
                            <a className="fw-semibold text-white " href="#Skill" id="Skills">Skills</a>
                            <a className="fw-semibold text-white " href="#About" id="Abouts">About Me</a>
                            <a className="fw-semibold  text-white" href="#profile" id="Profiles">Profiles</a>
                            <a className="fw-semibold text-white " href="#Contact" id="Contacts">Contact</a>
                        </div>
                        <a className="downloadBtn" href={cv} download="Vijayragavan__Cv.pdf">
                            Download CV
                        </a>
                    </div>
                    <hr className="fooLine" />
                    <div className="lineBelow d-flex align-items-center justify-content-between">
                        <h3 className="fs-6 bottomCpy">all rights reserved*</h3>
                        <a href="" className="fs-6 bottomCpy">T.Vijayragavan.be@gmail.com</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default footer