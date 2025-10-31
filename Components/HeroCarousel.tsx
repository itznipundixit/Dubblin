"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "Sip Bold. Live Mindfully",
      subtitle: "Designed for today. Built for tomorrow",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1600&h=900&fit=crop",
      cta: "Shop",
    },
    {
      id: 2,
      title: "Smart Meals Start Here",
      subtitle: "Portion-perfect, prep-ready, and built to last",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1600&h=900&fit=crop",
      cta: "Shop",
    },
    {
      id: 3,
      title: "Timeless Design, Everyday Joy",
      subtitle: "Dubblin glassware — where form meets function",
      image:
        "https://cdn.quicksell.co/-MaxtTmQ3oWBfAlevdsY/products/-OFRkqUyWh51yu2O8eV9.jpg",
      cta: "Shop",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
