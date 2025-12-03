import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import bg from "../Components/Hero"
import Destination from "../Components/Destination"
import Trip from "../Components/Trip"
import Footer from "../Components/Footer"
import homepic from "../assets/homepic.jpg"

function Home(){
    return(
        <>
       
         <Navbar />
         <Hero cName="hero" title="Your Journey Your Story" text="Choose your Favourite Destination" heroImg={homepic} buttonText="Travel Plan" url="/service" btnClass="show"/>
        <Destination />

        <Trip />
        <Footer />
        </>
    )
}

export default Home