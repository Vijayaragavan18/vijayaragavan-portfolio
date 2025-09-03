import React from "react";
import ImOne from '../images/imOne.png';
import MyPort from '../images/mobMy1.png';
import '../css/main.css';
import NavBar from '../navBar/navBAr';
import { motion } from 'framer-motion';
const heroPage = () => {


    return (

        <>

            <div className="heroPageMixing">
                <NavBar />
                <div className="heroPagePart">
                    <div className="heroPageSection">
                        <div className="myPhoto ">
                            <img src={ImOne} alt="MyPHoto" className="myPhotoImg" />
                            <img src={MyPort} alt="MyPHoto" className="myPhotoImgMob" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, translateY: "10%" }}

                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1 }} div className="myName col-lg-6">
                            <h1 className="deskName">
                                <span className="nameStyle fw-bold"> Vijayaragavan</span> a
                                Aspiring <span className="nameStyleTwo text-warning ">Software Engineer</span>
                            </h1>

                            <h1 className="mobName">
                                <h1> <span className=" fw-semibold clr"> Vijayaragavan </span><br /> a Aspiring <br /> Software <span className="fw-bold"> Engineer </span></h1>
                            </h1>
                            <a className="hireBtn bg-warning  text-white" href="#Contact" id="Contacts">Hire Me</a>
                            <a className="hireBtONe bg-white text-black" href="#Contact" id="Contacts">Hire Me</a>
                        </motion.div>
                    </div>
                </div >
            </div >



        </>

    );

};
export default heroPage;