import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/ContactUs';
import Career from './Components/Pages/Career';
import AboutUs from './Components/Pages/AboutUs';
import Portfolio from './Components/Pages/Portfolio';
import Products from './Components/Pages/Products';
import Projects from './Components/Pages/Projects';
import Testimonials from './Components/Pages/Testimonials';
import Page404 from './Components/Pages/Page404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
