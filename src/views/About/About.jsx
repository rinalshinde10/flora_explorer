import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heading from "../../components/Heading/Heading";

function About() {
    return (
        <div className="about-page">

            <Navbar />

            <Heading subtitle="About Us" />

            <p className="msg">

                Flora Explorer is a user-friendly web application designed to help users explore and learn about different types of flowers in a simple and engaging way. The platform provides useful information about flowers, including their colors, meanings, uses, occasions, cost, ratings, and other unique characteristics.

                Our goal is to create a digital space where users can easily discover flowers and understand their beauty and importance. Whether you are searching for flowers for decoration, celebrations, gifting, ceremonies, or personal interest, Flora Explorer helps you explore different options in one place.

                The website provides flower categories, search and filter features, detailed flower information, and attractive images to make the experience more interactive and enjoyable. Flora Explorer combines useful information with a simple interface so that users can easily find and explore the flowers they are looking for.
                <br />

                <b>Our Vision</b>

                is to make flower discovery simple, informative, and enjoyable while helping users appreciate the beauty and diversity of flowers.
                <br />

                <b>Our Mission</b>

                is to provide an easy-to-use platform where users can explore flowers, learn about their characteristics and uses, and discover the perfect flower for every occasion.

            </p>

            <Footer />

        </div>
    );
}

export default About;