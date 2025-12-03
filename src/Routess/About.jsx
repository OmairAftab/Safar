import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import AboutUs from "../Components/AboutUs"
function About(){
    return(
        <>
       
         <Navbar />
         <Hero cName="about" title="About" heroImg="https://i.pinimg.com/736x/b0/ce/dc/b0cedcc2a734a6def06eed6bb21c57eb.jpg"  btnClass="hidebtn"/>
        <AboutUs />
        <Footer />
        </>
    )
}

export default About