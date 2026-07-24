
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route,Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import Flowers from "./views/Flowers/Flowers"
import Flowers_Details from "./views/Flowers_Details/Flowers_Details"
import Categories from "./views/Categories/Categories"
import Cards from './components/Cards/Cards';

const root = createRoot(document.getElementById("root"))
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/'  element={<Home />} />
    <Route path='about'  element={<About />} />
    <Route path='contact'  element={<Contact />}/>
    <Route path='flowers'  element={<Flowers />}/>
    <Route path='flowers_details'  element={<Flowers_Details/>}/>
    <Route path='categories'  element={<Categories />}/>
    <Route path='cards' element={<Cards />} />
    </Routes>
    </BrowserRouter>
  </>
);