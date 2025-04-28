// Navbar.jsx
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "Home",
      dropdown: [
        { name: "Home 1", link: "#" },
        { name: "Home 2", link: "#" },
        { name: "Home 3", link: "#" }
      ]
    },
    {
      name: "Shop",
      dropdown: [
        { name: "Shop Grid", link: "#" },
        { name: "Shop List", link: "#" },
        { name: "Product Details", link: "#" },
        { name: "Cart", link: "#" },
        { name: "Checkout", link: "#" }
      ]
    },
    {
      name: "Product",
      dropdown: [
        { name: "Product Types", link: "#" },
        { name: "Product Details", link: "#" },
        { name: "Product Variations", link: "#" }
      ]
    },
    {
      name: "Blog",
      dropdown: [
        { name: "Blog Grid", link: "#" },
        { name: "Blog List", link: "#" },
        { name: "Blog Details", link: "#" }
      ]
    },
    {
      name: "Pages",
      dropdown: [
        { name: "About Us", link: "#" },
        { name: "Contact", link: "#" },
        { name: "FAQ", link: "#" },
        { name: "404 Page", link: "#" }
      ]
    }
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Navigation Menu - Hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 lg:space-x-6">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'} font-medium flex items-center py-2 transition-colors text-sm lg:text-base`}
                >
                  {item.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {(openDropdown === index || (!isScrolled && openDropdown === index)) && (
                  <div className={`absolute left-0 mt-2 w-108 rounded-md shadow-lg py-1 z-50 ${isScrolled ? 'bg-white' : 'bg-white/90 backdrop-blur-sm'} ring-1 ring-black ring-opacity-5`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block px-4 py-2 text-s   m text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}

                <div className={`h-0.5 ${isScrolled ? 'bg-amber-600' : 'bg-white'} w-0 group-hover:w-full transition-all duration-300 absolute bottom-0`}></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo - Responsive positioning */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src={isScrolled ?
              "https://qx-aarau.myshopify.com/cdn/shop/files/logo_black.svg?v=1728282907&width=200" :
              "https://qx-aarau.myshopify.com/cdn/shop/files/logo_withe.svg?crop=center&height=1&v=1728537599&width=1"}
            width={isScrolled ? 100 : 120}
            alt="Logo"
            className="transition-all duration-300"
          />
        </div>

        {/* Right Side Elements - Responsive adjustments */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Currency and Language dropdowns hidden on small screens */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => toggleDropdown('currency')}
              className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'} flex items-center text-sm`}
            >
              <span>🇦🇺</span>
              <span className="ml-1 hidden lg:inline">AUD $</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {openDropdown === 'currency' && (
              <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 z-50 ${isScrolled ? 'bg-white' : 'bg-white/90 backdrop-blur-sm'} ring-1 ring-black ring-opacity-5`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">🇺🇸 USD $</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">🇪🇺 EUR €</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">🇬🇧 GBP £</a>
              </div>
            )}
          </div>

          <div className="relative hidden sm:block">
            <button
              onClick={() => toggleDropdown('language')}
              className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'} flex items-center text-sm`}
            >
              <span className="hidden sm:inline">English</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {openDropdown === 'language' && (
              <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 z-50 ${isScrolled ? 'bg-white' : 'bg-white/90 backdrop-blur-sm'} ring-1 ring-black ring-opacity-5`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">French</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">German</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">Spanish</a>
              </div>
            )}
          </div>

          {/* Icons - Always visible */}
          <button className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'}`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <button className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'}`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </button>

          <div className="relative">
            <button className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'}`}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">0</span>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            onClick={toggleMenu}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Responsive styling */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-sm'} w-full py-4 px-4`}>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleDropdown(`mobile-${index}`)}
                  className={`${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-gray-200'} font-medium flex items-center justify-between w-full py-2 text-left`}
                >
                  {item.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openDropdown === `mobile-${index}` && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className={`block py-1 text-sm ${isScrolled ? 'text-gray-600 hover:text-amber-600' : 'text-gray-200 hover:text-white'}`}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}