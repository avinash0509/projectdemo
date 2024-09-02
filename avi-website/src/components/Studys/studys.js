import React from "react";
import "./studys.css";
import studys1 from "../../Assets/htmlcss.png";
import studys2 from "../../Assets/bootstrap.png";
import studys3 from "../../Assets/javascript.png";
import studys4 from "../../Assets/react.png";
import studys5 from "../../Assets/mysql.png";
import studys6 from "../../Assets/nodejs.png";

const Works = () => {
  return (
    <section id="studys">
           <h2 className="studytitle"> My Skills</h2>
           <span className="studysDesc"> I have some learn technical skills as programing language as shown below</span>
           <div className="studysImgs">
            <img src={studys1} alt="" className="studysImg" />
            <img src={studys2} alt="" className="studysImg" />
            <img src={studys3} alt="" className="studysImg" />
            <img src={studys4} alt="" className="studysImg" />
            <img src={studys5} alt="" className="studysImg" />
            <img src={studys6} alt="" className="studysImg" />
            
            
          </div>
    </section>
  );
}


export default Works