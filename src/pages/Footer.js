import React from 'react'
import { BsFacebook, BsLinkedin, BsPinterest } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import '../css/footer.css'
import { bg } from '../data/data'
const Footer = ({ footerNav }) => {
  return (
    <footer>
      <div className="waves">
        <div
          className="wave"
          style={{ backgroundImage: `url(${bg[0].img})` }}
          id="wave1"
        ></div>
        <div
          className="wave"
          style={{ backgroundImage: `url(${bg[0].img})` }}
          id="wave2"
        ></div>
        <div
          className="wave"
          style={{ backgroundImage: `url(${bg[0].img})` }}
          id="wave3"
        ></div>
        <div
          className="wave"
          style={{ backgroundImage: `url(${bg[0].img})` }}
          id="wave4"
        ></div>
      </div>
      <ul className="social_icon">
        <li>
          <a href="#">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <BsPinterest />
          </a>
        </li>
        <li>
          <a href="#">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <RiWhatsappFill />
          </a>
        </li>
      </ul>
      {/*  <ul className='menu'>
          <li><a href='/'>Home</a></li>
          <li><a href='/Gallery'>Gallery</a></li>
          <li><a href='/Booking'>Booking</a></li>
          <li><a href='/Pricing'>Pricing</a></li>
          <li><a href='/Contactus'>Contact</a></li>
        </ul> 
    */}
      <ul className="menu">
        <Link onClick={() => footerNav('Home')} to="/">
          Home
        </Link>
        <Link onClick={() => footerNav('Gallery')} to="/Gallery">
          Gallery
        </Link>
        <Link onClick={() => footerNav('Booking')} to="/Booking">
          Booking
        </Link>
        <Link onClick={() => footerNav('Pricing')} to="/Pricing">
          Pricing
        </Link>
        <Link onClick={() => footerNav('Contactus')} to="/Contactus">
          Contact
        </Link>
      </ul>
      <p>@2023 Photography world | all right reserved</p>
    </footer>
  )
}

export default Footer
