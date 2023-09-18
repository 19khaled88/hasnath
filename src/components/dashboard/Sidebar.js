import React, { useState,useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { FcContacts, FcGallery, FcHome } from 'react-icons/fc'
import { GiTakeMyMoney, GiTatteredBanner } from 'react-icons/gi'
// import { FcContacts, FcGallery, FcHome } from 'react-icons/fc'
// import { GiTakeMyMoney, GiTatteredBanner } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'
import '../../css/sidebar.css'

const Sidebar = () => {
  const [selection, setSelection] = useState('Home')
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  let location = useLocation()
  
  useEffect(()=>{
    const splited = location.pathname.split('/')
    setSelection(splited[2])
    console.log(selection)
  },[])
  console.log(selection)
  const menu = [
    { id: 1, name: 'Home', icon: <FcHome /> },
    { id: 2, name: 'Banner', icon: <GiTatteredBanner /> },
    { id: 3, name: 'Gallery', icon: <FcGallery /> },
    { id: 4, name: 'Pricing', icon: <GiTakeMyMoney /> },
    { id: 5, name: 'ContactUs', icon: <FcContacts /> },
  ]

  const navItem = () => {
    let array = []
    menu.map((item) =>
   
      array.push(
        
        <div  key={item.id} className="navBtn">
          <Link
            onClick={() => setSelection(item.name)}
            to={`/dashboard/${item.name}`}
            style={{ cursor: 'pointer' }}
          >
            {item.icon}
          </Link>
          <Link
           
            onClick={() => setSelection(item.name)}
            className={`${selection == item.name ? 'active' : 'inactive'} ${
              isOpen === false ? 'hidden' : 'show'
            }`}
            to={`/dashboard/${item.name}`}
          >
            {item.name}
          </Link>
        </div>,
      ),
    )
    return array
  }

  const isLogo = () => {
    let logoArray = []
    isOpen
      ? logoArray.push(
          <>
            <h1 className="Logo">Logo</h1>
            <div className="bars" style={{ cursor: 'pointer' }}>
              <FaBars onClick={toggle} />
            </div>
          </>,
        )
      : logoArray.push(
          <div className="bars" style={{ cursor: 'pointer' }}>
            <FaBars onClick={toggle} />
          </div>,
        )
    return logoArray
  }

  return (
    <div
      // className='bg-sideMenuBg relative h-[100%] basis-20 p-4'
      className="container"
    >
      <div style={{ width: isOpen ? '200px' : '60px' }} className="sidebar">
        <div className="top_section">{isLogo()}</div>
        <div className="navigation">{navItem()}</div>
      </div>
    </div>
  )
}

export default Sidebar
