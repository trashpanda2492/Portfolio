import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/raccoon.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-30} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-10} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
          }}>
            <img src={contactImg} alt='Contact Me' className='desktopMenuImg'/>Contact Me</button>

        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display : showMenu ? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-30} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={0} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={20} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar