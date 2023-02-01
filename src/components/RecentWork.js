import React from 'react'
import '../css/recentWork.css'
import { event } from '../data/data'
const RecentWork = () => {
  return (
    <div className="recentwork ">
      <h2>Recent Events</h2>

      <div className="photos grid sm-1:grid-cols-1 md-1:grid-cols-2 lg-1:grid-cols-3 xl-1:grid-cols-4 gap-2">
        {event.map((e) => {
          return (
            <div key={e.id} className="content" style={{}}>
              <img src={e.image} alt="..." className="image w-100" />
              <div className="overlay-bottom-slide">
                <h3 id="person1" aria-hidden="true">
                  Person 1
                </h3>
                <div className="item__body text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentWork
