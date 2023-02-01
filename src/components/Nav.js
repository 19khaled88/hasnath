import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../data/data'
import '../css/navbar.css'

const Nav = () => {
  const [active, setActive] = useState('root')
  const isActive=(data)=>{setActive(data)}

  useEffect(()=>{
    const lst = document.querySelectorAll('.list')
    function activeLink(){
      lst.forEach((item)=>item.classList.remove('active'))
      this.classList.add('active')
    }
    lst.forEach((item)=>item.addEventListener('click',activeLink)) 
  })
 
  return (
    <div className='container'>
      <span><img src='/images/telephone.png' alt="No Image" width="45px" height="45px" /></span>
      <ul>
            {
              navbar.map((e)=>(
                <li className='list' key={e.id}>
                  <Link className={`${e.route}` === `${active}` ? 'active' : 'inactive'}  onClick={()=>isActive(e.route)}>
                    <span>
                      <img className='icon' src={e.icon} alt="No Image" width="25px" height="25px"/>
                    </span>
                    <span className='text'>
                      {e.route}
                    </span>
                    <span className='overLap'></span>
                  </Link>
                </li>
              ))
            }
        <div className='indicator'></div>
      </ul>
      
    </div>
  )
}

export default Nav
