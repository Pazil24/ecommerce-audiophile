import React from "react";

const About = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 leading-tight">
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span>{" "}
              AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {/* Responsive Images */}
            <img
              src="/assets/shared/mobile/image-best-gear.jpg"
              alt="Person listening to headphones"
              className="block md:hidden w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/assets/shared/tablet/image-best-gear.jpg"
              alt="Person listening to headphones"
              className="hidden md:block lg:hidden w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <img
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt="Person listening to headphones"
              className="hidden lg:block w-full h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
