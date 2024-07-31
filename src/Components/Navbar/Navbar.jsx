import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Nav_icon from '../../Components/Images/nav-icon.png'

const Navbar = () => {

  const Navigate = useNavigate();

  return (
    <nav>
        <div className='nav-logo'>
            <h1>TX <span>trading</span></h1>
        </div>
        <ul>
            
            <Link to='/'>Trade</Link>
            <Link to='/market'>Market</Link>
            <Link to='/about'>About</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='/Support'>Support</Link>
        </ul>
        <div className='nav-right'>
            <button className='log-button' onClick={()=>Navigate("/login")}>
            Log In
            </button>
            
            <button className='demo-button'>Open demo account</button>
            <img src={Nav_icon} alt='' width={30} height={30}/><p>EN</p>
        </div>
      
    </nav>
  )
}

export default Navbar
