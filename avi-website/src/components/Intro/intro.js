import React from 'react';
import './intro.css';
import bg from'../../Assets/avinash.png.jpeg';
import btnImg from '../../Assets/hire.png';
import {Link} from 'react-scroll';


const   Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
         <span className='hello'>Hello,</span>
         <span className='introText'>I'm <span className='introName'>Avinash</span> <br/>Software Designer </span>
         <p className='introPara'> i am a skilled softeware designer with experience in crrating <br/> visually appealing and user friendly websites.</p>
         <Link><button className='btn'> <img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt='profile' className='bg'></img>
    </section>
  );
}

export default  Intro;