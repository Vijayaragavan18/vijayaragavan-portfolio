import React from 'react'
import Me from '../images/profile/me1.png';
import '../../../src/App.css';

const LinksRote = () => {
    return (
        <>


            <div className="LinksRote" id="profile">

                <div className="projectHead">
                    <h1>My Profiles  </h1>
                </div>


                <div className="proSec justify-content-center align-items-center ">
                    <div className="profileDetails ">
                        <div className="myProfilePhotoMob"><img src={Me} alt="me " className="mePhoto App-logo" /></div>

                        <div className="myProfiles d-flex flex-column align-items-center justify-content-center">
                            <div className="textBox animated-button ">
                                <a href="https://www.linkedin.com/in/vijay-ragavan-t-941b1621b/" target="_blank" className="mb-0 disSize text-white" >Linkedin/Vijaragavan</a>
                            </div>
                            <div className="textBox animated-button ">
                                <a href="https://leetcode.com/u/T_Vijay18/" target="_blank" className="mb-0 disSize text-white">LeedCode/Vijayaragavan</a>
                            </div>
                            <div className="textBox animated-button t">
                                <a href="https://github.com/Vijayaragavan18" target="_blank" className="mb-0 disSize text-white">GittHub/Vijayaragavan</a>
                            </div>
                            <div className="textBox animated-button ">
                                <a href="https://www.behance.net/vjvj5" target="_blank" className="mb-0 disSize text-white" >Behance/Vijayaragavan</a>
                            </div>
                            <div className="textBox animated-button ">
                                <a href="/" target="_blank" className="mb-0 disSize text-white" >Website/Vijayaragavan</a>
                            </div>
                        </div>
                        <div className="myProfilePhoto"><img src={Me} alt="me " className="mePhoto App-logo" /></div>


                    </div>
                </div>



            </div>



        </>
    )
}

export default LinksRote