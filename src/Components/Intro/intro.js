import React from 'react';
import './intro.css';
import bg from '../../assets/croppedProPic.jpg';
import btnImg from '../../assets/briefcase.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='introText'>I'm <span className='introName'>Andrew</span><br />Software Engineer</span>
        <p className='introPara'>I am a skilled Software Engineer with over six years of enterprise experience
        <br />creating highly available, modern, responsive, and scalable web applications.
        <br />What can I create for you today?</p>
        <Link><button className='btn' onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
          }}><img src={btnImg} alt='Hire Me' className='btnImg'/> Hire Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
}

export default Intro;