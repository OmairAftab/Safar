import React from 'react'
import "./DestinationStyles.css"

//FOR MAKING DESTINATION.JSX REUSABLE (DYNAMIC) WE WILL MAKE A TEMPLATE HERE

const DestinationData = (props) => {
  return (
     <div className={props.className}>

            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>

            <div className="image">
                <img src={props.img1} alt="img1" />
                <img src={props.img2} alt="img2" />
            </div>
        </div>
  )
}

export default DestinationData