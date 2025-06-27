import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CategoryCards from "../components/CategoryCards";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Navigation
        className="text-white"
        style={{ backgroundColor: "black" }}
        showBorder={true}
      />
      <Hero />
      <CategoryCards />
      <FeaturedProducts />
      <About />
      <Footer />
    </>
  );
};

export default Home;
