import React from "react";

const CategoryHeader = ({ title }) => {
  return (
    <section className="bg-black text-white pt-32 pb-24 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-wider">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CategoryHeader;
