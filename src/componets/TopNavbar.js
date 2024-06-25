import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/ebica.jpg';
import '../App.css';

export const TopNavbar = () => {
  return (
    <nav className='navBar'>
      <img src={logo} alt='SchoolLogo' height={50} width={49} className='logoPic'/>
      <div className='navCont'>
      <Link to='/' className='navlink'>Home</Link>
      <Link to='/Programs' className='navlink'>Programs & subjects</Link>
      <Link to='/AboutUs ' className='navlink'>About us</Link>
      <Link to='/Contact' className='navlink'>Contact</Link>
      
      </div>

      </nav>
  )
}
