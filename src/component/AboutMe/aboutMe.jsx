import React from 'react'

import AboutMe from '../images/aboutMe3.png';
import '../css/main.css';
import { motion } from 'framer-motion';
const aboutMe = () => {
    return (
        <>
            <div className="aboutSection " id="About">

                <div className="aboutContent">
                    <div className="aboutMeHead ">
                        <h1 className="fw-bold " >About Me</h1>
                    </div>
                    <div className="aboutContentArea mt-lg-5 mt-sm-3">
                        <div className="aboutImgSec d-flex align-content-center justify-content-center"> <img className="aboutMe " src={AboutMe} alt="AboutMe" /></div>
                        <div className="aboutDescription d-flex flex-column gap-3 ">
                            {/* <h3 className="fs-5    fw-normal  ">I'm an aspiring Software Development Engineer with a strong foundation in Java and full-stack web development. I actively solve problems using Data Structures and Algorithms to sharpen my logic and coding skills.
                                Trained in building scalable applications, I also bring a good eye for UI/UX and graphic design helping me create clean, user friendly experiences.
                                I’m passionate about learning, building real world projects, and growing into a well rounded software engineer.</h3> */}
                            <h3 className=" aboutMedes   fw-normal ">  I'm an aspiring SDE with a strong foundation in Java and full-stack development. I regularly practice DSA to improve my problem-solving skills and enjoy building clean, user-friendly interfaces with a good sense of UI/UX and design.
                                Always learning and building to grow as a well-rounded developer.</h3>

                            <div className="internshipAbout d-flex align-items-center justify-content-between">

                                <div className="aboutDesOne mt-3">
                                    <div className="fw-bold headCourse" >Experience :</div>
                                    <h1 className="fw-semibold" >Coapps.Ai</h1>
                                    <hr className="hrOne" />
                                    <p  >Full Stack Development, Internship</p>
                                </div>
                                <div className="dateIntern">
                                    Jan 2024 - Mar 2024
                                </div>
                            </div>

                            <div className="internshipAbout d-flex align-items-center justify-content-between">

                                <div className="aboutDesOne mt-3">
                                    <div className="fw-bold headCourse" >Education :</div>
                                    <h1 className="fw-semibold" >KIT-Coimbatore</h1>
                                    <hr className="hrOne" />
                                    <p  >Electrical And Electronics Engineering</p>
                                </div>
                                <div className="dateIntern">
                                    2020 -  2024
                                </div>
                            </div>

                            <div className="internshipAbout d-flex align-items-center justify-content-between">

                                <div className="aboutDesOne mt-3">
                                    <div className="fw-bold headCourse " >Course and Certification :</div>
                                    <h1 className="fw-semibold" >Image Creative Education</h1>
                                    <hr className="hrOne" />
                                    <p  >Full Stack Development</p>
                                </div>
                                <div className="dateIntern">
                                    2023 - 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>


        </>

    );
};

export default aboutMe;