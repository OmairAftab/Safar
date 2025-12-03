import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import AboutUs from "../Components/AboutUs"
import aboutpic from "../assets/aboutpic.jpg"
function About(){
    return(
        <>
       
         <Navbar />
         <Hero cName="about" title="About" heroImg={aboutpic}  btnClass="hidebtn"/>
        <AboutUs />
        <Footer />
        </>
    )
}

export default About