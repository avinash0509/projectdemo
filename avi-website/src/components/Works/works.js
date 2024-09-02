import React from "react";
import "./works.css";
import portfolio1 from "../../Assets/portfolio1.jpeg";
import portfolio2 from "../../Assets/portfolio2.png";
import portfolio3 from "../../Assets/portfolio3.jpeg";

const Works = () => {
  return (
    <section id="works">
           <h2 className="worktitle"> My Portfolio</h2>
           <span className="worksDesc"> I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skill and experience to the help businesses achieve their goal nad create a strong online presence.</span>
           <div className="worksImgs">
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />
            
          </div>
    </section>
  );
}


export default Works;