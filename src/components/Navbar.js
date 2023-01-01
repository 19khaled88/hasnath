import React from 'react'
import '../css/headers.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="NavContainer">
      <div className="Nav">
        <img src="/images/photo-shoot.png" alt="No Image" width="50px" height="50px"/>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </div>
      <div className="Auth">
        <button>Login</button>
        <button>Sign-up</button>
      </div>
      
    </div>
  )
}

export default Navbar
