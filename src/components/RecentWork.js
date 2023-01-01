import React from 'react'
import '../css/recentWork.css'
import { event } from '../data/data'
const RecentWork = () => {
  return (
    <div className="recentwork">
      <h2>Recent Events</h2>

      <div className="">
        {event.map((e) => {
          return (
            <div class="card" style={{ width: '18rem' }}>
              <div>
                <img src={e.image} width="100%" height="100%" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  See All Scenes
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentWork
