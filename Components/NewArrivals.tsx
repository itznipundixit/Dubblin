"use client";

import { useState } from "react";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Stream 400 With Bag",
      price: "₹269.00",
      originalPrice: "₹359",
      discount: "25% off",
      image1:
        "https://api.dubblin.co.in/public/images/main_image-1756968728169-575838936.JPG",
      image2:
        "https://api.dubblin.co.in/public/images/second_main_image-1756968728188-655139846.jpg",
    },
    {
      id: 2,
      name: "Posh Container Grey Set Of 5, Round 380ML, 900ML, 1750ML, Rectangle 600ML, 1400ML",
      price: "₹3363.00",
      originalPrice: "₹4484",
      discount: "25% off",
      image1:
        "https://api.dubblin.co.in/public/images/main_image-1756878063165-196007378.JPG",
      image2:
        "https://api.dubblin.co.in/public/images/second_main_image-1756878063170-525250952.jpg",
    },
    {
      id: 3,
      name: "Posh Container Blue Set Round 380ML, 900ML, 1750ML, Rectangle 600ML, 1400ML",
      price: "₹3363.00",
      originalPrice: "₹4484",
      discount: "25% off",
      image1:
        "https://api.dubblin.co.in/public/images/main_image-1756877669884-222341484.JPG",
      image2:
        "https://api.dubblin.co.in/public/images/second_main_image-1756877669889-773724040.jpg",
    },
    {
      id: 4,
      name: "Smart lock jar Set Of 3 Round 350ML, 1000ML, 1500ML",
      price: "₹1222.00",
      originalPrice: "₹1437",
      discount: "15% off",
      image1:
        "https://api.dubblin.co.in/public/images/main_image-1756877202959-300656343.JPG",
      image2:
        "https://api.dubblin.co.in/public/images/second_main_image-1756877202964-810762925.jpg",
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 tracking-wide">
            New Arrivals
          </h2>
          <p className="text-gray-600">Discover our exciting New Arrivals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div
                className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square mb-4"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={
                    hoveredProduct === product.id
                      ? product.image2
                      : product.image1
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <button className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <span className="text-xl">+</span>
                </button>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="text-sm text-red-600 font-medium">
                  {product.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
