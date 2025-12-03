import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";
function Contact(){
    let bg="https://static.vecteezy.com/system/resources/thumbnails/038/519/246/small/dark-black-and-gray-blurred-gradient-background-has-a-little-abstract-light-photo.jpg";
    return(
        <>
       
         <Navbar />
         <Hero cName="about" title="Contact" heroImg={bg} btnClass="hidebtn"/>
        <ContactUs />
        <Footer />
        </>
    )
}
export default Contact