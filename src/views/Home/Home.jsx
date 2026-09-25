import "./Home.css";   
   import Navbar from "../../components/Navbar/Navbar";
   import Footer from "../../components/Footer/Footer";
   import Image from "./home.jpg";
   import Image1 from "./home_1.jpg";
function Home() {
    return(
        <div className="home-page">
            <Navbar />
            <h1 className="title">Flora Explorer</h1>
           <div className="img-container"> <img src={Image} alt="Flower" className="home-img" />
            <img src={Image1} alt="Flower" className="home-img-1" /></div>
            <p className="msg">
                Welcome to the Flora Explorer!
                Flora Explorer is a beautiful platform created for everyone who loves flowers and wants to discover more about them. Explore a wide variety of flowers and learn about their colors, meanings, uses, occasions, and unique characteristics. Whether you are looking for a flower for a special celebration, decoration, gifting, or simply want to enjoy the beauty of nature, Flora Explorer makes it easy to find the right flower. Step into the colorful world of flowers, explore their beauty, and let every bloom tell its own story.

            </p>
            <Footer />
        </div>
    );

}

export default Home;