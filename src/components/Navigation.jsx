import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navigation = ({ className = "", style = {}, showBorder = true }) => {
  const { totalItems, toggleCart } = useCart();
  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-10 ${className}`}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-[#D87D4A] transition-colors"
            >
              audiophile
            </Link>
          </div>
          <ul className="hidden md:flex space-x-8 text-sm font-bold tracking-wider">
            <li>
              <Link to="/" className="hover:text-[#D87D4A] transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/headphones"
                className="hover:text-[#D87D4A] transition-colors"
              >
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link
                to="/speakers"
                className="hover:text-[#D87D4A] transition-colors"
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                to="/earphones"
                className="hover:text-[#D87D4A] transition-colors"
              >
                EARPHONES
              </Link>
            </li>
          </ul>
          <div className="flex items-center relative">
            <button
              onClick={toggleCart}
              className="relative hover:text-[#D87D4A] transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0a2 2 0 104 0m-4 0a2 2 0 014 0"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
        {/* Border line - only show when showBorder is true */}
        {showBorder && (
          <div
            className="h-px bg-white"
            style={{
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid rgba(151, 151, 151, 0.3)",
            }}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
