import React from 'react'
import { useState } from 'react'
import '../css/booking.css'
const Booking = () => {
  const [state, setState] = useState({
    
  })
  const submitHandle=()=>{

  }
  return (
    <div className="booking-container">
      <h2>Please book for your desired service</h2>
        <form onSubmit={submitHandle} className='booking-form'>
              <span>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" name="name" />
              </span>
              <span>
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                />
              </span>
              <span>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  name="email"
                />
              </span>
              <span>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter your detail address"
                  name="address"
                />
              </span>
              <select>
                <option>Select Service type</option>
                <option>Basic</option>
                <option>Economy</option>
                <option>Premium</option>
              </select>
              <span>
                <label>Date</label>
                <input
                  type="text"
                  placeholder="Enter your detail address"
                  name="address"
                />
              </span>
              <span>
                <img src='/right-arrow (1).png' alt='No Image' width='50px' height='40px'/>
                <button type='submit'>Confirm</button>
                <img src='/right-arrow (1).png' alt='No Image' width='50px' height='40px'/>
              </span>
        </form>
        <div className='shapes'>
          <img src='/booking/shape-1.png'/>
          <img src="/booking/shape-3.png" />
          <img src="/booking/shape-5.png" />
          <img src="/booking/shape-10.png" />
        </div>
    </div>
  )
}

export default Booking
