import React from "react";
import Navigation from "../components/Navigation";
import ProductDetail from "../components/ProductDetail";
import CategoryCards from "../components/CategoryCards";
import About from "../components/About";
import Footer from "../components/Footer";
import { products } from "../data.js";

const YX1EarphonesProduct = () => {
  const product = products.find((p) => p.slug === "yx1-earphones");

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navigation
        className="text-white"
        style={{ backgroundColor: "black" }}
        showBorder={false}
      />
      <ProductDetail product={product} />
      <CategoryCards />
      <About />
      <Footer />
    </>
  );
};

export default YX1EarphonesProduct;
