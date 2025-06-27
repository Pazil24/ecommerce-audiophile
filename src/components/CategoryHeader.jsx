import React from "react";

const CategoryHeader = ({ title }) => {
  return (
    <section className="bg-black text-white pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CategoryHeader;
