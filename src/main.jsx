import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Flowers from "./views/Flowers/Flowers";
import Categories_Details from "./views/Categories_Details/Categories_Details";
import Categories from "./views/Categories/Categories";
import Cards from "./components/Cards/Cards";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/categories_details" element={<Categories_Details />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cards" element={<Cards />} />

      {/* Know More Button ke liye */}
      <Route path="/categories/:id" element={<Categories_Details />} />
    </Routes>
  </BrowserRouter>
);