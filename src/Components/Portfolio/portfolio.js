import React from 'react';
import './portfolio.css';
import DownArrow from '../../assets/down-arrow.png';
import GithubIcon from '../../assets/github-icon.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2 className='portfolioTitle'>Portfolio</h2>
        <span className='portfolioDesc'>You can find examples of past projects on my GitHub account.
        <br/>Click the icon below to view my GitHub profile.
        </span>
        <img src={DownArrow} alt='DownArrow' className='link'></img>
        <img src={GithubIcon} alt='GitHub' className='github' onClick={() => { window.location.href = 'https://github.com/trashpanda2492' }}></img>
    </section>
  );
}

export default Portfolio;