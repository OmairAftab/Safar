import "./TripStyles.css"

import React from 'react'

const TripData = (props) => {
  return (
    <div className="t-card">
        <div className="t-image">
            <img src={props.img} alt="image" />
        </div>

        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        
    </div>
  )
}

export default TripData