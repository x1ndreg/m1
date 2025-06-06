import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import LogoCarousel from "./components/Carousel";
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import PortfolioPage from "./pages/portfolio";
import BlogPage from "./pages/blog";
import AllBlogsPage from "./pages/all-blogs";
import ContactPage from "./pages/contact";
import BlogAdmin from "./pages/admin/BlogAdmin";
import BackToTop from "./components/BackToTop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <LogoCarousel />
              <Awards />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/all-blogs" element={<AllBlogsPage />} />
        <Route path="/all-blogs/:slug" element={<AllBlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
