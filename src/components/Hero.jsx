import React from "react";
import { Link } from "react-router-dom";
import HeroImageDesktop from "../assets/home/desktop/image-hero.jpg";
import HeroImageTablet from "../assets/home/tablet/image-header.jpg";
import HeroImageMobile from "../assets/home/mobile/image-header.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="min-h-[600px] lg:min-h-[700px] bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${HeroImageDesktop})` }}
    >
      {/* Hero Content */}
      <div className="flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-md pt-20">
            <p className="text-sm tracking-[10px] font-normal opacity-50 mb-4">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white opacity-75 mb-8 leading-relaxed">
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
