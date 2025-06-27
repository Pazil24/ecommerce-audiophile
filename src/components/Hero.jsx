import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center relative text-white">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        {/* Mobile Background */}
        <div
          className="block md:hidden w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/home/mobile/image-header.jpg')`,
          }}
        ></div>
        {/* Tablet Background */}
        <div
          className="hidden md:block lg:hidden w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/home/tablet/image-header.jpg')`,
          }}
        ></div>
        {/* Desktop Background */}
        <div
          className="hidden lg:block w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/home/desktop/image-hero.jpg')`,
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-md pt-20 text-center md:text-left">
            <p className="text-sm tracking-[6px] md:tracking-[10px] font-normal opacity-50 mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white opacity-75 mb-8 leading-relaxed text-sm md:text-base">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/product/xx99-mark-two-headphones">
              <Button
                variant="primary"
                className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white"
              >
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
