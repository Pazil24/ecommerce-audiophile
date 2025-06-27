import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 lg:space-y-32">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
              product.reverse ? "md:grid-flow-col-dense" : ""
            }`}
          >
            <div className={product.reverse ? "md:col-start-2" : ""}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 md:h-96 lg:h-[500px] object-contain rounded-lg bg-gray-50"
              />
            </div>
            <div
              className={`space-y-4 md:space-y-6 text-center md:text-left ${
                product.reverse ? "md:col-start-1" : ""
              }`}
            >
              {product.isNew && (
                <p className="text-[#D87D4A] text-xs md:text-sm tracking-[6px] md:tracking-[10px] font-bold">
                  NEW PRODUCT
                </p>
              )}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {product.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
              <Link to={`/product/${product.slug}`}>
                <Button text="SEE PRODUCT" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
