"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "../lib/productSlice";

export default function ProductInfo({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-full md:w-1/2 flex flex-col pt-4 md:pt-10"
    >
      <h1 className="font-serif text-3xl md:text-5xl text-[#0A192F] mb-4 leading-tight">
        {product.title}
      </h1>

      <div className="flex items-center space-x-2 mb-6">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
          ))}
        </div>
        <span className="text-sm text-gray-500 font-medium ml-2">
          ({product.rating.toFixed(1)} / 5.0)
        </span>
      </div>

      <p className="text-2xl font-medium tracking-widest text-[#546275] mb-8">
        {product.price}
      </p>

      <span className="block w-12 h-[1px] bg-[#C62828] mb-8 opacity-60" />

      <p className="text-[#546275] leading-relaxed mb-12 font-medium max-w-lg text-[15px]">
        Crafted with meticulous attention to detail, this piece embodies the
        philosophy of traditional Japanese minimalism. Perfectly suited for both
        ceremonial and everyday use.
      </p>

      {/* Specifications */}
      <div className="mb-8 w-full max-w-lg">
        <h3 className="text-[#0A192F] font-serif text-xl mb-4">
          Specifications
        </h3>
        <ul className="text-sm text-[#546275] space-y-2 font-medium">
          <li>
            <strong className="text-[#0A192F] font-bold">Material:</strong>{" "}
            {product.specifications?.material}
          </li>
          {product.specifications?.glaze && (
            <li>
              <strong className="text-[#0A192F] font-bold">Glaze:</strong>{" "}
              {product.specifications.glaze}
            </li>
          )}
          <li>
            <strong className="text-[#0A192F] font-bold">Size:</strong>{" "}
            {product.specifications?.size}
          </li>
          <li>
            <strong className="text-[#0A192F] font-bold">Weight:</strong>{" "}
            {product.specifications?.weight}
          </li>
        </ul>
      </div>

      {/* Care Instructions */}
      <div className="mb-12 w-full max-w-lg">
        <h3 className="text-[#0A192F] font-serif text-xl mb-4">
          Care Instructions
        </h3>
        <p className="text-sm text-[#546275] font-medium leading-relaxed">
          {product.careInstructions}
        </p>
      </div>

      {/* Add to Cart CTA Area */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between border border-[#D1D5DB] w-full sm:w-32 bg-white h-[52px]">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-full flex items-center justify-center text-[#546275] hover:text-[#0A192F] transition-colors text-lg"
          >
            -
          </button>
          <span className="font-sans text-sm font-bold text-[#0A192F]">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-full flex items-center justify-center text-[#546275] hover:text-[#0A192F] transition-colors text-lg"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button className="relative group inline-flex flex-1 sm:flex-none sm:w-64 h-[52px] font-sans text-sm font-bold shadow-md cursor-pointer">
          <div className="w-full h-full flex items-center justify-center opacity-0">
            Add to Cart
          </div>

          <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)]">
            Add to Cart
          </div>

          <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-[2px] group-hover:translate-y-[2px] [clip-path:polygon(0_60%,100%_40%,100%_100%,0_100%)]">
            Add to Cart
          </div>

          <div className="absolute inset-0 pointer-events-none z-10 [clip-path:polygon(0_58%,100%_38%,100%_42%,0_62%)] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
          </div>
        </button>
      </div>
    </motion.div>
  );
}
