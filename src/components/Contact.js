import React from 'react'
import '../css/contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div>
        <img src="owner.jpg" alt='No Image' width="200px" height="200px"/>
        <p>I am, Hasnat Arman, a professional photograhper. My photography journey has been started from january 1, 2022. No doubt that I love and enjoy it from my deep heart. In this journey, I find unquestionable love and understanding. Hope this journey will be appearing to me delightfull.</p>
      </div>
      <div>
        <h2>Send us a Message!</h2>
        <form>
          <span>
            <label>Name</label>
            <input type="text" placeholder='Your  name'/>
          </span>
         <span>
            <label>Message</label>
            <textarea type="text" defaultValue='' placeholder='Enter your message'></textarea>
         </span>
         
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
