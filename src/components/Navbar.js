import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'
import { navIcon } from '../data/data'



const Navbar = () => {
  const [status, setStatus]=useState('Gallery')
  const pageHandle=(data)=>{
    setStatus(data)
  }
  return (
    <div className='Navbar-container'>
      <div className='inner'>
        <div className='logo'>Logo</div>
      </div>
      <div className='shape'>
        <div className='pages'>
            <ul>
                {
                    navIcon.map((item)=>(   
                        <li onClick={()=>pageHandle(item.title)} className={`list ${item.title === status ? 'active' : 'inactive'}`}>
                            <Link to="#">
                                {item.text}
                                {/*<span className='icon'><img src={item.icon} alt={"No Image"} width="20px" /></span> */}
                                <span className='text'>{item.title}</span>
                            </Link>
                        </li>
                    ))
                }
                <div className='indicator'></div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
