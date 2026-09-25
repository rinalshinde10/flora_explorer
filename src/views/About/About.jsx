import "./About.css"; 
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
  
   
function About() {
    return(
        <div className="about-page">
            <Navbar />
            <Footer />
            <div>About</div>
        </div>
    );

}

export default About;