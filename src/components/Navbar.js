import React, { useEffect, useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'
import '../css/nav.css'
import { navIcon } from '../data/data'
import logoImg from '../video/Video-icon.gif'

const Navbar = ({ footerstatus }) => {
  const [status, setStatus] = useState('Home')
  const [menuIcon, setMenuIcon] = useState(true)
  const [videoShow, setVideoShow] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [account, setAccount] = useState(false)
  const [reload, setReload] = useState(false)
  const location = useLocation()

  const pageHandle = (data) => {
    setStatus(data)
  }

  const accountHandler = () => {
    setAccount(!account)
  }

  function removeTrailingSlash(str) {
    return str.replace(/^\/|\/$/g, '')
  }

  useEffect(() => {
    if (performance.navigation.type == 1) {
      const temp = removeTrailingSlash(location.pathname)
      // setStatus(temp)
      if (!temp) {
        setStatus('Home')
      } else {
        setStatus(temp)
      }
      setReload(true)
    }
    setTimeout(() => {
      setReload(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    footerstatus && setStatus(footerstatus)
  }, [footerstatus])

  const menuIconHandler = () => {
    setMenuIcon(!menuIcon)
  }

  if (windowWidth > 1023 && menuIcon === false) {
    setMenuIcon(true)
  }

  if (windowWidth < 769 && videoShow === false) {
    setVideoShow(true)
  } else if (windowWidth > 769 && videoShow === true) {
    setVideoShow(false)
  }

  window.addEventListener('scroll', function () {
    let navContainer = document.getElementById('navbar_container')
    navContainer.classList.toggle('sticky', window.scrollY > 0)
  })

  return (
    <div className="Navbar-container" id="navbar_container">
      <div className="inner">
        {videoShow === false ? (
          <div className="logo">Welcome to smart Photography</div>
        ) : (
          <img
            style={{ borderRadius: '50%' }}
            src={logoImg}
            alt="No Image"
            width="60px"
            height="60px"
          />
        )}
        <span onClick={menuIconHandler} className="menu-icon">
          {menuIcon == true ? <AiOutlineMenu /> : <RxCross1 />}
        </span>
      </div>
      <div className="shape">
        <div className="pages">
          <ul>
            {navIcon.map((item) => (
              <li
                key={item.id}
                onClick={() => pageHandle(item.title)}
                className={`list ${
                  item.title === status ? 'active' : 'inactive'
                }`}
              >
                <Link to={`${item.link}`}>
                  {item.text}
                  {/*<span className='icon'><img src={item.icon} alt={"No Image"} width="20px" /></span> */}
                  <span className="text">{item.title}</span>
                </Link>
              </li>
            ))}
            <div className="indicator"></div>
          </ul>
        </div>
        {/*<div
          onClick={() => accountHandler()}
          className={`account ${account === true ? 'active' : 'inactive'}`}
        >
          <VscAccount width="100%" height="100%" />
          <ul>
            <li style={{number:0}}>
              <Link to="#">Login</Link>
            </li>
            <li style={{number:1}}>
              <Link to="#">Register</Link>
            </li>
            <li style={{number:2}}>
              <Link to="#">Dashboard</Link>
            </li>
          </ul>
        </div> */}
      </div>
      <div
        className={`responsiveIcons ${
          menuIcon == true ? 'inactive' : 'active'
        }`}
      >
        {navIcon.map((items) => {
          return <Link key={items.id}>{items.title}</Link>
        })}
      </div>
    </div>
  )
}

export default Navbar
