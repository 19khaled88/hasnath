import React from 'react'
import { event } from '../data/data'
const Gallery = () => {
  return (
    <div className="grid sm-1:grid-cols-1 md-1:grid-cols-2 xl-1:grid-cols-4 lg-1:grid-cols-3 gap-4">
      {event.map((e) => {
        return (
          <div key={e.id}>
            <img src={e.image} alt="no image" />
            <div className="overlay-bottom-slide">
              <h3 id="person1" aria-hidden="true">
                Person 1
              </h3>
              <div className="item__body text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
