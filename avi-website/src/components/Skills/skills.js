import React from "react";
import "./skills.css";
import UIDesign from "../../Assets/uxDesign.png"
import WebDesign from "../../Assets/websiteDesign.png"
import FullStack from "../../Assets/fullStack.png"

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDesign"> I am a skilled and passionate web designer with experience in creating visualy opeoling and user-friendly websites. i have a strong understanding of disign and a keen eye for detail i am proficeant HTML,CSS and JavaScript, as well as design software such as Adobe</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>UI/UX Design </h2>
            <p> This is a demo text, you can write your won contetent here </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Website Design </h2>
            <p> This is a demo text, you can write and making Website</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={FullStack} alt="FullStack" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Full Mern Stack Web Developer </h2>
            <p> I am Front End and Back End Developer</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default skills