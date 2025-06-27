import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* ZX9 Speaker - Large Feature */}
        <div className="bg-[#D87D4A] rounded-lg p-8 md:p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <div className="absolute top-0 right-0 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 border border-white rounded-full"></div>
            <div className="absolute top-5 md:top-10 right-5 md:right-10 w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 border border-white rounded-full"></div>
            <div className="absolute top-10 md:top-20 right-10 md:right-20 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 border border-white rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                className="w-36 h-48 md:w-48 md:h-64 object-contain mx-auto lg:mx-0"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white opacity-75 mb-6 md:mb-8 max-w-md text-sm md:text-base">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/product/zx9-speaker">
                <Button
                  variant="secondary"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker - Medium Feature */}
        <div className="rounded-lg p-8 md:p-12 lg:p-20 bg-cover bg-center relative">
          {/* Responsive Background Images */}
          <div className="absolute inset-0 rounded-lg">
            {/* Mobile Background */}
            <div
              className="block md:hidden w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  "url('/assets/home/mobile/image-speaker-zx7.jpg')",
              }}
            ></div>
            {/* Tablet Background */}
            <div
              className="hidden md:block lg:hidden w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  "url('/assets/home/tablet/image-speaker-zx7.jpg')",
              }}
            ></div>
            {/* Desktop Background */}
            <div
              className="hidden lg:block w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  "url('/assets/home/desktop/image-speaker-zx7.jpg')",
              }}
            ></div>
          </div>
          <div className="relative max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              ZX7 SPEAKER
            </h3>
            <Link to="/product/zx7-speaker">
              <Button variant="outline">SEE PRODUCT</Button>
            </Link>
          </div>
        </div>

        {/* YX1 Earphones - Split Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-lg overflow-hidden">
            {/* Responsive Images */}
            <img
              src="/assets/home/mobile/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="block md:hidden w-full h-64 md:h-80 object-cover"
            />
            <img
              src="/assets/home/tablet/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="hidden md:block lg:hidden w-full h-64 md:h-80 object-cover"
            />
            <img
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="hidden lg:block w-full h-80 object-cover"
            />
          </div>
          <div className="bg-[#F1F1F1] rounded-lg p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              YX1 EARPHONES
            </h3>
            <Link to="/product/yx1-earphones">
              <Button variant="outline">SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
