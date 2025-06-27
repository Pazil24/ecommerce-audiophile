import React from "react";
import Navigation from "../components/Navigation";
import CategoryHeader from "../components/CategoryHeader";
import ProductList from "../components/ProductList";
import CategoryCards from "../components/CategoryCards";
import About from "../components/About";
import Footer from "../components/Footer";
import { products } from "../data.js";

const Earphone = () => {
  const earphonesProducts = products
    .filter((product) => product.category === "earphones")
    .map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.categoryImage.desktop.replace("./assets", "/src/assets"),
      slug: product.slug,
      isNew: product.new,
      reverse: false, // Single product, no reverse needed
    }));

  return (
    <>
      <Navigation
        className="text-white"
        style={{ backgroundColor: "black" }}
        showBorder={false}
      />
      <CategoryHeader title="EARPHONES" />
      <ProductList products={earphonesProducts} />
      <CategoryCards />
      <About />
      <Footer />
    </>
  );
};

export default Earphone;
