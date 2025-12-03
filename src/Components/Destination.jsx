import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1 className='mainheading'>Popular Destination</h1>
        <p className='maintext'>Tours give you the opportunity to see a lot within a time frame </p>



    {/* 1ST COMPONENT */}
    <DestinationData className="first-des" heading="Peer Chanasi" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic iure, tenetur dignissimos accusantium odit aperiam consequuntur soluta eos ipsum dolorem numquam placeat accusamus illo deleniti perspiciatis fuga quibusdam neque doloremque quam. Reiciendis ea explicabo, sint illum, maxime eius fugiat vitae, dolorem perspiciatis rem earum. Quidem optio quibusdam tempora ad sunt eveniet voluptatem nostrum vel, soluta mollitia facilis alias facere non reprehenderit hic blanditiis labore dignissimos iste placeat, repudiandae similique earum! Minus cupiditate quis voluptate quibusdam! Nulla labore illo facilis in?"
    img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjUxD-9xWuhppnrtkAxeWr_VGnTC-qIMiAg&s"
    img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJGio27A1uat9DndA8c91CU4W9XVNGgMXVQ&s"
    />



    {/* 2ND COMPONENT */}
    <DestinationData className="first-des-rev" heading="Babusar Top" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic iure, tenetur dignissimos accusantium odit aperiam consequuntur soluta eos ipsum dolorem numquam placeat accusamus illo deleniti perspiciatis fuga quibusdam neque doloremque quam. Reiciendis ea explicabo, sint illum, maxime eius fugiat vitae, dolorem perspiciatis rem earum. Quidem optio quibusdam tempora ad sunt eveniet voluptatem nostrum vel, soluta mollitia facilis alias facere non reprehenderit hic blanditiis labore dignissimos iste placeat, repudiandae similique earum! Minus cupiditate quis voluptate quibusdam! Nulla labore illo facilis in?"
    img1="https://nust.edu.pk/wp-content/uploads/2023/04/babusar.jpg"
    img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlRyKgJUEle6E2V0RMaNUgXAhowtGSe0SVQ&s"
    />









        
        {/* <div className='first-des'>

            <div className='des-text'>
                <h2>Peer Chanasi</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic iure, tenetur dignissimos accusantium odit aperiam consequuntur soluta eos ipsum dolorem numquam placeat accusamus illo deleniti perspiciatis fuga quibusdam neque doloremque quam. Reiciendis ea explicabo, sint illum, maxime eius fugiat vitae, dolorem perspiciatis rem earum. Quidem optio quibusdam tempora ad sunt eveniet voluptatem nostrum vel, soluta mollitia facilis alias facere non reprehenderit hic blanditiis labore dignissimos iste placeat, repudiandae similique earum! Minus cupiditate quis voluptate quibusdam! Nulla labore illo facilis in?</p>
            </div>

            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjUxD-9xWuhppnrtkAxeWr_VGnTC-qIMiAg&s" alt="img1" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJGio27A1uat9DndA8c91CU4W9XVNGgMXVQ&s" alt="img2" />
            </div>
        </div> */}


    </div>
  )
}

export default Destination