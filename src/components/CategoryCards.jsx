import React from "react";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  const categories = [
    {
      name: "HEADPHONES",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      route: "/headphones",
    },
    {
      name: "SPEAKERS",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      route: "/speakers",
    },
    {
      name: "EARPHONES",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      route: "/earphones",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F1F1F1] rounded-lg p-4 md:p-6 pt-16 md:pt-20 text-center relative"
            >
              <div className="absolute -top-10 md:-top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold tracking-wider mb-4 mt-4 md:mt-8">
                {category.name}
              </h3>
              <Link
                to={category.route}
                className="inline-flex items-center gap-3 text-sm font-bold text-black opacity-50 hover:text-[#D87D4A] hover:opacity-100 transition-all"
              >
                SHOP
                <svg className="w-2 h-3" fill="currentColor" viewBox="0 0 8 12">
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
