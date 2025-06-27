import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-[#D87D4A] w-24 mx-auto"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        {/* Top section - Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="text-2xl font-bold mb-8 lg:mb-0">audiophile</div>

          <nav>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-sm font-bold tracking-wider">
              <li>
                <a href="#" className="hover:text-[#D87D4A] transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D87D4A] transition-colors">
                  HEADPHONES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D87D4A] transition-colors">
                  SPEAKERS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D87D4A] transition-colors">
                  EARPHONES
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Middle section - Description and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-white opacity-50 leading-relaxed">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end items-end">
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="hover:text-[#D87D4A] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="hover:text-[#D87D4A] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="hover:text-[#D87D4A] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.346-1.24-.898-.75-1.391-1.74-1.391-2.95 0-1.21.493-2.2 1.391-2.95.898-.75 2.049-1.24 3.346-1.24 1.297 0 2.448.49 3.346 1.24.898.75 1.391 1.74 1.391 2.95 0 1.21-.493 2.2-1.391 2.95-.898.75-2.049 1.24-3.346 1.24zm7.718-9.723h-1.791c-.431 0-.866-.185-1.185-.504-.32-.32-.504-.754-.504-1.185V4.785c0-.431.185-.866.504-1.185.32-.32.754-.504 1.185-.504h1.791c.431 0 .866.185 1.185.504.32.32.504.754.504 1.185v.791c0 .431-.185.866-.504 1.185-.32.32-.754.504-1.185.504z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-white opacity-50 text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
