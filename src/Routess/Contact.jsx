import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";
import contactpic from "../assets/contactpic.jpg"
function Contact(){
    return(
        <>
       
         <Navbar />
         <Hero cName="about" title="Contact" heroImg={contactpic} btnClass="hidebtn"/>
        <ContactUs />
        <Footer />
        </>
    )
}
export default Contact