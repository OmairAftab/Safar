import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'
import img11 from "../assets/img1.jpg"
import img22 from "../assets/img2.jpg"
import img33 from "../assets/img3.jpg"
import img44 from "../assets/img4.jpg"


const Destination = () => {
  return (
    <div className='destination'>
        <h1 className='mainheading'>Popular Destination</h1>
        <p className='maintext'>Tours give you the opportunity to see a lot within a time frame </p>



    {/* 1ST COMPONENT */}
    <DestinationData className="first-des" heading="Peer Chanasi" text="Peer Chanasi is a beautiful mountain peak located near Muzaffarabad in Azad Kashmir, famous for its breathtaking views, cool weather, and peaceful atmosphere. At a height of around 2,900 meters, it offers a stunning panoramic sight of green valleys, snowy mountains, and cloud-covered landscapes. The place is named after a famous saint, Peer Syed Hussain Shah Bukhari, whose shrine is also present at the top. Thousands of tourists visit this spot every year to enjoy camping, hiking, and photography, especially during summer when the weather becomes pleasantly cold. The road leading to Peer Chanasi is full of scenic beauty, with forests, fresh breezes, and small villages along the way."
    img1={img11}
    img2={img22}
    />



    {/* 2ND COMPONENT */}
    <DestinationData className="first-des-rev" heading="Babusar Top" text="Babusar Top is a high mountain pass located in the northern areas of Pakistan, connecting Khyber Pakhtunkhwa with Gilgit-Baltistan through the famous Babusar Pass. It stands at an impressive height of about 4,173 meters, making it one of the highest and most scenic points in the region. The journey to Babusar Top is full of breathtaking beauty, with lush green meadows, flowing rivers, and tall snow-covered peaks surrounding the entire route. Tourists often stop at different viewpoints to take photos of the winding roads and deep valleys. The temperature at the top remains cool even in summer, while in winter it becomes fully covered with snow and the road usually closes due to heavy snowfall."
    img1={img33}
    img2={img44}
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