
import "./Navbar.css";
import Img from "./img.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar-container">

            {/* Logo and Website Name */}
            <div
                className="sub-container"
                onClick={() => navigate("/")}
            >
                <img
                    src={Img}
                    alt="Flora Explorer Logo"
                    className="navbar-logo"
                />

                <h2>
                    <span className="flora">Flora</span>
                    <span className="explorer">Explorer</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <div className="navbar-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/categories">
                    Categories
                </Link>

                <Link to="/about">
                    About
                </Link>

            </div>

        </div>
    );
}

export default Navbar;

