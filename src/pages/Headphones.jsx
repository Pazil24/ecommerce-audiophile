import React from "react";
import Navigation from "../components/Navigation";
import CategoryHeader from "../components/CategoryHeader";
import ProductList from "../components/ProductList";
import CategoryCards from "../components/CategoryCards";
import About from "../components/About";
import Footer from "../components/Footer";
import { products } from "../data.js";

const Headphones = () => {
  const headphonesProducts = products
    .filter((product) => product.category === "headphones")
    .map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.categoryImage.desktop.replace("./assets", "/assets"),
      slug: product.slug,
      isNew: product.new,
      reverse: product.id % 2 === 0, // Alternate reverse layout
    }));

  return (
    <>
      <Navigation
        className="text-white"
        style={{ backgroundColor: "black" }}
        showBorder={false}
      />
      <CategoryHeader title="HEADPHONES" />
      <ProductList products={headphonesProducts} />
      <CategoryCards />
      <About />
      <Footer />
    </>
  );
};

export default Headphones;
