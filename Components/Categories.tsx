// components/Categories.tsx - FIXED FOR MOBILE
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "All Products",
      icon: "https://dubblin.co.in/core1.png",
    },
    {
      id: 2,
      name: "VACCUM BOTTLES",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1744865572485-823937992.webp",
    },
    {
      id: 3,
      name: "LUNCH BOXES",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1744808391176-293883593.webp",
    },
    {
      id: 4,
      name: "MUGS",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1744865476996-161866105.webp",
    },
    {
      id: 5,
      name: "GLASSWARE",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1744865654690-162481860.webp",
    },
    {
      id: 6,
      name: "STORAGE CONTAINERS",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1745929443707-558759542.webp",
    },
    {
      id: 7,
      name: "KETTLES AND JUGS",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1744808693747-685263895.webp",
    },
    {
      id: 8,
      name: "GIFTS SET",
      icon: "https://api.dubblin.co.in/public/images/light_logo_image-1744865690514-859858701.webp",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-wide">
            Discover Our Categories
          </h2>
          <p className="text-gray-600">
            Explore a wide range of offerings tailored to your needs
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons - VISIBLE ON ALL SCREENS */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Categories Container */}
          <div
            ref={scrollContainerRef}
            id="categories-scroll"
            className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-4 px-8 md:px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollPadding: "0 20px",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center min-w-[100px] md:min-w-[120px] cursor-pointer group flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-2 md:mb-3 group-hover:shadow-xl transition-shadow p-1 md:p-2">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-10 h-10 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-800 text-center uppercase tracking-wide leading-tight px-1">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
