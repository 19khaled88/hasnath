import React from 'react'
import '../css/profession.css'
import { professional } from '../data/data'
const ProfessionalService = () => {

  const prof_func = (data) => {
    const array = []
    data.map((e) => {
      array.push(
        <div key={e.id}>
          <p>{e.title}</p>
          <div>
            {e.image.map((im ,index) => {
              return <img key={index} src={im} alt="No Image" />
            })}
          </div>
        </div>,
      )
    })
    return array
  }
  return (
    <div className="profcontainer">
      <div className='down-up'>
      </div>
      <h2>My Professional Services</h2>
      <div className="professions grid grid-cols-1 sm-1:grid-cols-1 md-1:grid-cols-1 lg-1:grid-cols-2">
        {prof_func(professional)}
      </div>
    </div>
  )
}

export default ProfessionalService
