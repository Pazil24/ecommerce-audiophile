import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navigation = ({ className = "", style = {}, showBorder = true }) => {
  const { totalItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`absolute top-0 left-0 right-0 z-20 ${className}`}
        style={style}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-[#D87D4A] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold hover:text-[#D87D4A] transition-colors"
              >
                audiophile
              </Link>
            </div>

            {/* Desktop Navigation */}
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

            {/* Cart Icon */}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>

          {/* Mobile Menu */}
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg">
            <div className="px-6 py-8">
              <ul className="space-y-6 text-lg font-bold tracking-wider text-black">
                <li>
                  <Link
                    to="/"
                    className="block hover:text-[#D87D4A] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/headphones"
                    className="block hover:text-[#D87D4A] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    HEADPHONES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speakers"
                    className="block hover:text-[#D87D4A] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    SPEAKERS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/earphones"
                    className="block hover:text-[#D87D4A] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    EARPHONES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
