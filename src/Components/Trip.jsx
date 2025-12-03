import TripData from "./TripData"
import "./TripStyles.css"
import trip1 from "../assets/trip1.jpg"
import trip2 from "../assets/trip2.jpg"
import trip3 from "../assets/trip3.jpg"
import React from 'react'

const Trip = () => {
  return (
    <div className="trip">
        <h1 className="mainheading">Recent Trips</h1>
        <p className="maintext">Discover Pakistan with us!</p>


        <div className="tripcard">
             <TripData img={trip1}
             heading="Trip to Nanga Parbat"
             text="Nanga Parbat, the world's ninth-highest mountain at 8,126 meters (26,660 feet) in the Himalayas of Pakistan, is notoriously called the Killer Mountain. Its immense vertical relief includes the 4,600-meter Rupal Face, one of the planet's highest. It was first summited solo by Hermann Buhl in 1953 after many tragic failures."
             />

             <TripData img={trip2}
             heading="Trip to Peer Chanasi"
             text="Peer Chanasi is a shrine and tourist destination near Muzaffarabad in Azad Kashmir, famous for the tomb of a saint, Sayed Hussain Shah Bukhari. Located at a height of 2,900 meters, it offers scenic views and is popular for religious reflection, trekking, and adventure sports like paragliding. "
             />


            <TripData img={trip3}
             heading="Trip to Hunza Valley"
             text="Hunza Valley is a mountainous region in northern Pakistan, known for its stunning landscapes, including snow-capped peaks like Rakaposhi. It was once a principality and is now a district famous for its rich cultural heritage, historic forts like Baltit Fort, and local fruits like apricots. "
             />


        </div>
       
    </div>
  )
}

export default Trip