import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service(){
    let bg="https://img.freepik.com/premium-photo/top-view-travel-outfit-accessories-equipment-with-copy-space-black-background_146508-642.jpg";
    return(
        <>
       
         <Navbar />
         <Hero cName="about" title="Services" heroImg={bg} btnClass="hidebtn"/>
         <Trip />
        <Footer />
        </>
    )
}

export default Service