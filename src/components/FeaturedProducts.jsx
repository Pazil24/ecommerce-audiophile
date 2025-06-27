import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ZX9 Speaker - Large Feature */}
        <div className="bg-[#D87D4A] rounded-lg p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 border border-white rounded-full"></div>
            <div className="absolute top-10 right-10 w-80 h-80 border border-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-64 h-64 border border-white rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                className="w-48 h-64 object-contain mx-auto lg:mx-0"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white opacity-75 mb-8 max-w-md">
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
        <div
          className="rounded-lg p-12 lg:p-20 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('/assets/home/desktop/image-speaker-zx7.jpg')",
          }}
        >
          <div className="max-w-md">
            <h3 className="text-3xl font-bold mb-8">ZX7 SPEAKER</h3>
            <Link to="/product/zx7-speaker">
              <Button variant="outline">SEE PRODUCT</Button>
            </Link>
          </div>
        </div>

        {/* YX1 Earphones - Split Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="bg-[#F1F1F1] rounded-lg p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8">YX1 EARPHONES</h3>
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
