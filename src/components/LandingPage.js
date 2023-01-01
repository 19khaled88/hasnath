import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../css/home.css'
import { banner } from '../data/data'
import RecentWork from './RecentWork'
const LandingPage = () => {
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
    </div>
  )
}

export default LandingPage
