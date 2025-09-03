import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../css/main.css';
export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ifbwuhl', 'template_k3592y8', form.current, {
                publicKey: '-JiPz7lI1nhKbPGsB',
            })
            .then(
                () => {
                    setStatus("Sent! I’ll reach out soon");
                    form.current.reset();
                },
                (error) => {
                    setStatus("Failed to send. Please try again.");
                    console.error("FAILED...", error.text);
                },
            );
    };
    return (
        <>
            <div className="contactMe" id="Contact">
                <div className="contactHead">
                    <h1>Contact Me</h1>
                </div>
                <div className="contactQuery">
                    <div className="secOneForm">

                        <div className="bgColor"></div>

                        <div className="formMsg">
                            <h1 className="text-white   fw-medium fs-1">Eagerly awaiting your message</h1>
                            <div className="formMsgLinks">
                                <a href="mailto:T.Vijayragavan.be@gmail.com" className="fw-normal text-white">T.Vijayragavan.be@gmail.com</a>
                                <a href="" className="fw-normal text-white">8270241319</a>
                            </div>
                        </div>
                    </div>




                    <div className="formSection">
                        <div className="formHead">
                            <h2 className="fw-bold text-white">Get In Touch Today</h2>
                        </div>

                        {status && (
                            <p
                                className={`mt-2 text-center fw-normal ${status.startsWith("✅") ? "text-success" : "text-success"
                                    }`}
                            >
                                {status}
                            </p>
                        )}
                        <form ref={form} onSubmit={sendEmail} method="POST" >
                            <div className="inputSec">
                                <div className="inputFirst">
                                    <div className="inputField">
                                        <label htmlFor="">Name</label>
                                        <input type="text" className='inputOne fw-semibold' required placeholder='Enter Name' name="user_name" />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Email</label>
                                        <input type="text" className='inputOne fw-semibold' required placeholder='Enter E-mail' name="User_Email" />
                                    </div>
                                </div>
                                <div className="inputField">
                                    <label htmlFor="">Message</label>

                                    <textarea name="message" id="" className='fw-semibold' placeholder='Enter Message'></textarea>
                                </div>
                            </div>
                            <div className="formSumBtn"><button className='formBtn fw-bold' type='submit' value="Send">Send</button></div>
                        </form>
                    </div>

                </div>
            </div>


        </>
    )
}

