"use client";

import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  // UseRef typed as HTMLDivElement | null
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full">
          {/* Centered Navigation Items */}
          <div className="flex items-center justify-center space-x-12 mx-auto">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium"
            >
              About us
            </a>

            {/* Shop with dropdown */}
            <div
              className="relative mr-0"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button
                className="flex items-center text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium"
                onClick={() => setIsShopOpen((prev) => !prev)}
                aria-expanded={isShopOpen}
                aria-haspopup="true"
              >
                Shop
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isShopOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100"
                  role="menu"
                >
                  {["All Products", "Best Sellers", "New Arrivals"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 text-sm font-medium border-b last:border-0 border-gray-100"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 mx-8">
              <img
                src="https://api.dubblin.co.in/public/others/logo-1739035654375-534533857.png"
                alt="Dubblin Logo"
                className="h-6 w-auto"
              />
            </div>

            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium"
            >
              Sale
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className="flex md:hidden items-center justify-between w-full"
          ref={mobileMenuRef}
        >
          <button
            className="text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>

          {/* Mobile Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.dubblin.co.in/public/others/logo-1739035654375-534533857.png"
              alt="Dubblin Logo"
              className="h-6 w-auto"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            {["About us", "New Arrivals", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Mobile Shop Dropdown */}
            <div className="relative">
              <button
                className="flex items-center justify-between text-gray-800 hover:text-gray-600 transition-colors w-full text-left text-sm font-medium py-2"
                onClick={() => setIsShopOpen(!isShopOpen)}
                aria-expanded={isShopOpen}
              >
                Shop
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    isShopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isShopOpen && (
                <div className="pl-4 mt-2 space-y-3 border-l border-gray-200">
                  {["All Products", "Best Sellers", "New Arrivals"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-gray-700 hover:text-gray-900 text-sm py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
