import React from 'react'
import '../css/main.css';
import Java from '../images/skill/java_226777.png';
import Js from '../images/skill/js_5968292.png';
import ReactImg from '../images/skill/atom_17433148.png';
import PhpImg from '../images/skill/php_919830.png';
import Laravel from '../images/skill/1000383407.jpg';
import MySqlImg from '../images/skill/mysql_919836.png';
import BootstrapImg from '../images/skill/1000383408.jpg';
import JquryImg from '../images/skill/1000383409.jpg';
import PhoToshop from '../images/skill/photoshop-express_5968503.png';
import Figma from '../images/skill/figma_5968705.png';
import Illustrator from '../images/skill/illustrator_10526880.png';
import AdopeAnimate from '../images/skill/adobe-animate_5968359.png';
import Indesign from '../images/skill/indesign_9814182.png';
import { motion } from 'framer-motion';


function skill() {
  return (
    <>


      <div className="skillPart" id="Skill">
        <div className="skillMotion">
          <div className="skillHead ">
            <h1>My Skills</h1>
          </div>
          <div className="skillContent mt-5">
            <div className="allSkills">
              <div className="skillSection">
                <img src={Java} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText ">Java</h3>
              </div>
              <div className="skillSection">
                <img src={Js} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Java Script</h3>
              </div>
              <div className="skillSection">
                <img src={ReactImg} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">React Js</h3>
              </div>
              <div className="skillSection">
                <img src={PhpImg} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Php</h3>
              </div>
              <div className="skillSection">
                <img src={Laravel} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Laravel</h3>
              </div>
              <div className="skillSection">
                <img src={MySqlImg} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">MySql</h3>
              </div>
              <div className="skillSection">
                <img src={BootstrapImg} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Bootstrap</h3>
              </div>
              <div className="skillSection">
                <img src={JquryImg} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Jqury</h3>
              </div>
              <div className="skillSection">
                <img src={PhoToshop} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Photoshop</h3>
              </div>
              <div className="skillSection">
                <img src={Figma} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Figma</h3>
              </div>
              <div className="skillSection">
                <img src={Illustrator} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Illustrator</h3>
              </div>
              <div className="skillSection">
                <img src={AdopeAnimate} className='skillImages' alt="JavaImage" />
                <h3 className="fs-5 fw-normal  skillText">Adobe Animate</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default skill