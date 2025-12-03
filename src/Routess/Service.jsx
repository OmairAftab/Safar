import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import servicepic from "../assets/servicepic.avif"

function Service(){
    return(
        <>
       
         <Navbar />
         <Hero cName="about" title="Services" heroImg={servicepic} btnClass="hidebtn"/>
         <Trip />
        <Footer />
        </>
    )
}

export default Service