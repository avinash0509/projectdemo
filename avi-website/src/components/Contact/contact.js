import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../Assets/walmart.png";
import Adobe from "../../Assets/adobe2.png";
import Microsoft from "../../Assets/microsoft2.png";
import Fecebook from "../../Assets/clientf.png";
import FecebookIcon from "../../Assets/fecebook.png"
import TwiterIcon from "../../Assets/twittwer.png"
import YotubeIcon from "../../Assets/youtube.jpeg"
import InstagramIcon from "../../Assets/instagram.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzikamk', 'template_8pifraf', form.current, 'hzn-tX6BFRX-nwAesk7Iq')
      
      .then((result) =>{
        console.log(result.text);
        e.target.reset();
        alert('Email Sent')
      }, (error) => {
        console.log(error.text);
      });
    };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc"> I have had the opportunity to work with a diverse group of companies.some of the notable companies i have worked with includes</p>
        <div className=" clientImgs">
          <img src={Walmart} alt="client" className="clientImg"/>
          <img src={Adobe} alt="client" className="clientImg"/>
          <img src={Microsoft} alt="client" className="clientImg"/>
          <img src={Fecebook} alt="client" className="clientImg"/>

        </div>
      </div>
      <div id="contact">
         <h1 className="contactPageTitle">Contact Me</h1>
         <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
         <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email"/>
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit"value="send" className="submitBtn" >Submit</button>
          <div className="links">
            <img src={FecebookIcon} alt="fecebook" className="link" />
            <img src={TwiterIcon} alt="twitter" className="link" />
            <img src={YotubeIcon} alt="youtube" className="link" />
            <img src={InstagramIcon} alt="instagram" className="link" />
            
          </div>
         </form>
      </div>
    </section>
  )
}

export default Contact