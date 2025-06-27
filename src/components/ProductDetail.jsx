import React, { useState } from "react";
import Button from "./Button";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Add safety check for product
  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="pt-20 pb-8">
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-[#D87D4A] transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="order-1">
            <img
              src={product.image?.desktop?.replace("./assets", "/src/assets") || ""}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="order-2 space-y-6">
            {product.new && (
              <p className="text-[#D87D4A] text-sm font-normal tracking-[10px] uppercase">
                New Product
              </p>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-500 leading-relaxed">
              {product.description}
            </p>
            <p className="text-2xl font-bold text-black">
              {formatPrice(product.price)}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-3 text-gray-500 hover:text-[#D87D4A] transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 font-bold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-3 text-gray-500 hover:text-[#D87D4A] transition-colors"
                >
                  +
                </button>
              </div>
              <Button variant="primary" className="px-8">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Features and In the Box Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">
              Features
            </h2>
            <div className="text-gray-500 leading-relaxed space-y-4">
              {product.features.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">
              In the Box
            </h2>
            <ul className="space-y-2">
              {product.includes?.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#D87D4A] font-bold mr-6 w-8">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-500">{item.item}</span>
                </li>
              )) || <li>No items listed</li>}
            </ul>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
              <img
                src={product.gallery?.first?.desktop?.replace(
                  "./assets",
                  "/src/assets"
                ) || ""}
                alt="Product gallery 1"
                className="w-full h-auto rounded-lg"
              />
              <img
                src={product.gallery?.second?.desktop?.replace(
                  "./assets",
                  "/src/assets"
                ) || ""}
                alt="Product gallery 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:col-span-1 lg:col-span-2">
              <img
                src={product.gallery?.third?.desktop?.replace(
                  "./assets",
                  "/src/assets"
                ) || ""}
                alt="Product gallery 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-black text-center mb-12">
            You may also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others?.map((item, index) => (
              <div key={index} className="text-center space-y-6">
                <img
                  src={item.image?.desktop?.replace("./assets", "/src/assets") || ""}
                  alt={item.name}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-xl font-bold text-black">{item.name}</h3>
                <Button
                  variant="primary"
                  onClick={() =>
                    (window.location.href = `/product/${item.slug}`)
                  }
                >
                  See Product
                </Button>
              </div>
            )) || <div>No related products</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
