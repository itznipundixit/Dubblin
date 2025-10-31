"use client";

import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            JOIN OUR NEWSLETTER
          </h2>
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="px-6 py-3 rounded-md w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-900 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="https://api.dubblin.co.in/public/others/logo-1739035654375-534533857.png"
              alt="Dubblin"
              className="h-8 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Dubblin isn&apos;t just a brand; it&apos;s a promise. We create
              innovative, durable, and affordable products that make life
              healthier, working smarter. Dubblin is the leader that evolves to
              suit your pace of life.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Dubblin is a vocal supporter of &quot;Go Green&quot;
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <span className="font-semibold text-white">
                  DUBBLIN KITCHENWARE LLP
                </span>
              </li>
              <li>Phone: +91 95021069</li>
              <li>Phone: +91 95021068</li>
              <li>Email: info@dubblin.co.in</li>
            </ul>
          </div>

          {/* Online Channel Partners */}
          <div>
            <h3 className="font-bold text-lg mb-4">Online Channel Partners</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <span className="font-semibold text-white">
                  BARIZTA TECHNOLOGIES PRIVATE LIMITED
                </span>
              </li>
              <li>Email: info@barechtech.com</li>
              <li>
                Address: 2nd FI, 301-302, 37 Ashok Rd, MHADA Colony, Dahisar
                East, Mumbai
              </li>
              <li>MAHARASHTRA NEW DELHI-400068, MAHARASHTRA, INDIA</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Dubblin | Developed by Nipun Dixit
          </p>
        </div>
      </footer>
    </>
  );
}
