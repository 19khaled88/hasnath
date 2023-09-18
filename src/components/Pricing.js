import React from 'react'
import '../css/pricing.css'
import { GiCheckMark } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import Typed from 'react-typed'
const Pricing = () => {
  return (
    <div className='pricing-container'>
          <div style={{ textAlign: 'center' }}>
            <Typed
              style={{ fontSize: '30px', color: 'white', fontWeight: '600' }}
              strings={['Our offers for you']}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>
     
      <div className="cards">
        <div className='card'>
          <div className='circle'>
            <h2>01</h2>
          </div>
          <div className='content'>
           <p> Lorem jfklds fjklfj jklfj jf klaafj akljfkla jfkl jklfljasdalkafjal</p>
            <a href='#'>Read More</a>
          </div>
        </div>
        <div className='card'>
          <div className='circle'>
            <h2>02</h2>
          </div>
          <div className='content'>
           <p> Lorem jfklds fjklfj jklfj jf klaafj akljfkla jfkl jklfljasdalkafjal</p>
            <a href='#'>Read More</a>
          </div>
        </div>
        <div className='card'>
          <div className='circle'>
            <h2>03</h2>
          </div>
          <div className='content'>
           <p> Lorem jfklds fjklfj jklfj jf klaafj akljfkla jfkl jklfljasdalkafjal</p>
            <a href='#'>Read More</a>
          </div>
        </div>
       
       
      </div>
    </div>
  )
}

export default Pricing
