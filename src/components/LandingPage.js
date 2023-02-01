import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../css/home.css'
import { banner } from '../data/data'
import ProfessionalService from './ProfessionalService'
import RecentWork from './RecentWork'
const LandingPage = () => {
  const [isActive, setIsActive] = useState(false)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const toggle=()=>{
    setIsActive(!isActive)
  }
  let hide ={
    display:'none'
  }
  let show ={
    display:'block'
  }
  return (
    <div className="Home">
      <Carousel
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={4000}
        responsive={responsive}
        arrows={false}
        showDots={false}
      >
        {banner.map((e) => {
          return (
            <div key={e.id} className="banner-slide">
              <img src={e.image} alt="No Image" />
            </div>
          )
        })}
      </Carousel>
      <RecentWork />
      <ProfessionalService />

      {/*wrapped up package*/}
      <div className='chatCon'>
        <div className='chat-box' style={isActive == true ? show : hide}>
          <div className='chat-header'><h2>Chat with me</h2></div>
          <div className='msg-area'>
           
          </div>
          <div className='footer'>
            <div><input type="text"/></div>
            <div><img src="/chat/paper.png" alt="No Image" width="30px" height="30px"/></div>
          </div>
        </div>
       {/* lower clickable icon*/}
       <div className='pop'>
        <p><img onClick={toggle} src="/chat/chat (2).png" width="40px" height="40px" alt="No image" /></p>
       </div>
      </div>
    </div>
  )
}

export default LandingPage
