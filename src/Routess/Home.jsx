import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import bg from "../Components/Hero"
import Destination from "../Components/Destination"
import Trip from "../Components/Trip"
import Footer from "../Components/Footer"

function Home(){
    return(
        <>
       
         <Navbar />
         <Hero cName="hero" title="Your Journey Your Story" text="Choose your Favourite Destination" heroImg="https://getwallpapers.com/wallpaper/full/5/4/d/151063.jpg" buttonText="Travel Plan" url="/" btnClass="show"/>
        <Destination />

        <Trip />
        <Footer />
        </>
    )
}

export default Home