import React from 'react';
import './about.css';
import Html from '../../assets/html-5.png';
import Css from '../../assets/css-3.png';
import Javascript from '../../assets/javascript.png';
import ReactIcon from '../../assets/react.png';
import Java from '../../assets/java.png';
import C from '../../assets/c.png';
import CPlusPlus from '../../assets/c++.png';
import Python from '../../assets/python.png';
import Snowflake from '../../assets/snowflake.png';
import Mysql from '../../assets/mysql.png';
import Postgres from '../../assets/postgresql.png';
import MicrosoftSql from '../../assets/microsoft-sql-server.png';
import Aws from '../../assets/aws.png';
import Docker from '../../assets/docker.png';
import Kubernetes from '../../assets/kubernetes.png';
import Bamboo from '../../assets/bamboo.png';

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>About Me</span>
        <span className='aboutDesc'>I first learned coding in Java, C, and C++ at the University of Georgia as part of their Computer Science program. I have since worked in the
          industry for over six years, creating highly available, modern, responsive, and scalable web applications for Elevance Health. I am skilled in a variety of technologies,
          including React, Node.js, Python, Snowflake, RDBMS such as MySQL, Microsoft SQL Server, and PostgreSQL, CI/CD such as Bamboo or Argo CD, containerization such as Docker,
          Red Hat Quay, and Kubernetes, and AWS cloud. I am a dedicated, hard-working, and detail-oriented individual who is always looking to improve and learn new technologies.
          <br/>
          <br/>
          Apart from coding, I enjoy playing video games, watching anime, reading fantasy books, and partner dancing in the form of West Coast Swing. I compete and DJ at 
          West Coast Swing competitions all over the country. I have traveled the world, visiting countries like Japan, South Korea, and Singapore, and I am always looking for 
          new places to explore. I also have a 6-year old Pitbull named Luna who reminds me to take breaks and enjoy the little things in life.
        </span>
        <br/>
        <h2>Front End</h2>
        <div className='aboutBars'>
            <div className='aboutBar'>
              <img src={Html} alt='HTML' className='aboutBarImg'/>
              <img src={Css} alt='CSS' className='aboutBarImg'/>
              <img src={Javascript} alt='Javascript' className='aboutBarImg'/>
              <img src={ReactIcon} alt='React' className='aboutBarImg'/>
            </div>
        </div>
        <h2>Back End</h2>
        <div className='aboutBars'>
            <div className='aboutBar'>
              <img src={Java} alt='Java' className='aboutBarImg'/>
              <img src={C} alt='C' className='aboutBarImg'/>
              <img src={CPlusPlus} alt='C++' className='aboutBarImg'/>
              <img src={Python} alt='Python' className='aboutBarImg'/>
            </div>
        </div>
        <h2>Database</h2>
        <div className='aboutBars'>
            <div className='aboutBar'>
              <img src={Snowflake} alt='Snowflake' className='aboutBarImg'/>
              <img src={Mysql} alt='MySQL' className='aboutBarImg'/>
              <img src={Postgres} alt='PostgreSQL' className='aboutBarImg'/>
              <img src={MicrosoftSql} alt='Microsoft SQL Server' className='aboutBarImg'/>
            </div>
        </div>
        <h2>Other</h2>
        <div className='aboutBars'>
            <div className='aboutBar'>
              <img src={Aws} alt='AWS' className='aboutBarImg'/>
              <img src={Docker} alt='Docker' className='aboutBarImg'/>
              <img src={Kubernetes} alt='Kubernetes' className='aboutBarImg'/>
              <img src={Bamboo} alt='Bamboo' className='aboutBarImg'/>
            </div>
        </div>
    </section>
  );
}

export default About;