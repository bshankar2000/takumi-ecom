"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppDispatch } from "../lib/hooks";
import { setSelectedProduct } from "../lib/productSlice";

// Define the type for the related products
type Product = {
  id: string;
  title: string;
  price: string;
  rating: number;
  badge: {
    text: string;
    variant: "light" | "dark" | "white";
  } | null;
  imageUrl: string;
  specifications: {
    material: string;
    glaze?: string;
    size: string;
    weight: string;
  };
  careInstructions: string;
  gallery: string[];
  designDetails: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

// Dummy Product Data with Working Unsplash Images
const relatedProducts: Product[] = [
  {
    id: "5",
    title: "Traditional 100-Prong Chasen",
    price: "¥3,500",
    rating: 4.8,
    badge: { text: "FEATURED", variant: "dark" },
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    specifications: {
      material: "Bamboo",
      size: "Standard size",
      weight: "50g",
    },
    careInstructions:
      "Rinse gently with warm water after each use. Do not use soap.",
    gallery: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    ],
    designDetails: [],
  },
  {
    id: "6",
    title: "Kyusu Celadon Teapot",
    price: "¥12,800",
    rating: 4.9,
    badge: null,
    imageUrl:
      "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=800&auto=format&fit=crop",
    specifications: { material: "Ceramic", size: "300ml", weight: "350g" },
    careInstructions: "Hand wash only. Rinse with warm water.",
    gallery: [
      "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=800&auto=format&fit=crop",
    ],
    designDetails: [],
  },
  {
    id: "7",
    title: "Ceremonial Matcha Set",
    price: "¥8,200",
    rating: 5.0,
    badge: { text: "NEW", variant: "white" },
    imageUrl:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop",
    specifications: { material: "Mixed", size: "Various", weight: "500g" },
    careInstructions: "Follow individual item care instructions.",
    gallery: [
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop",
    ],
    designDetails: [],
  },
  {
    id: "8",
    title: "Cast Iron Hobnail Kettle",
    price: "¥22,000",
    rating: 4.9,
    badge: null,
    imageUrl:
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop",
    specifications: { material: "Cast Iron", size: "800ml", weight: "1.2kg" },
    careInstructions:
      "Empty and dry completely after each use to prevent rust.",
    gallery: [
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop",
    ],
    designDetails: [],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CompleteTheSet() {
  const dispatch = useAppDispatch();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="font-sans w-full py-20 px-6 md:px-12 lg:px-24"
      style={{
        // Subtle dotted background pattern to match the design
        backgroundColor: "#FCFCFD",
        backgroundImage: "radial-gradient(#E5E7EB 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-4 mb-8 gap-6"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0A192F] mb-2">
              Complete the Set
            </h2>
            <p className="text-[#546275] text-[15px] font-medium">
              Curated additions for your tea ceremony.
            </p>
          </div>

          {/* Carousel Navigation */}
          <div className="flex space-x-3">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors bg-white"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors bg-white"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc(50%-8px)] md:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(25%-18px)] gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {relatedProducts.map((product) => (
            <motion.div
              variants={itemVariants}
              key={product.id}
              className="h-full snap-start"
            >
              <div className="h-full flex flex-col group cursor-pointer bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500">
                {/* Image & Badge Container */}
                <div className="relative w-full aspect-[4/5] bg-[#F5F5F0] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />

                  {/* Vertical Japanese-Style Badge */}
                  {product.badge && (
                    <div
                      className={`absolute top-0 left-6 px-2.5 py-4 text-[10px] font-medium tracking-[0.25em] [writing-mode:vertical-rl] shadow-sm z-10 transition-colors duration-500 ${
                        product.badge.variant === "light"
                          ? "bg-white text-gray-500 border-x border-b border-gray-100"
                          : product.badge.variant === "dark"
                            ? "bg-[#0A192F] text-[#D4AF37]"
                            : "bg-[#C62828] text-white"
                      }`}
                    >
                      {product.badge.text}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col items-center flex-1 pt-6 pb-2 text-center px-2">
                  <h3 className="font-serif text-lg md:text-xl text-[#0A192F] tracking-wide mb-1">
                    {product.title}
                  </h3>

                  <span className="block w-6 h-[1px] bg-[#C62828] my-3 opacity-60 group-hover:w-10 transition-all duration-500" />

                  <div className="mt-auto flex flex-col items-center w-full">
                    <p className="text-[13px] font-medium tracking-widest text-gray-500 mb-2">
                      {product.price}
                    </p>

                    <div className="flex items-center space-x-1 opacity-80">
                      <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                      <span className="text-[11px] text-gray-400 font-medium pt-0.5">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>

                    <div className="w-full pt-4 mt-4 border-t border-gray-100">
                      <Link
                        href={`/products/${product.id}`}
                        onClick={() =>
                          dispatch(setSelectedProduct(product as any))
                        }
                        className="relative group/btn inline-flex w-full font-sans text-[13px] font-bold shadow-sm cursor-pointer"
                      >
                        <div className="w-full py-2.5 opacity-0">
                          View Product
                        </div>

                        <div className="absolute inset-0 bg-[#C62828] group-hover/btn:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover/btn:-translate-x-[2px] group-hover/btn:-translate-y-[2px] [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)]">
                          View Product
                        </div>

                        <div className="absolute inset-0 bg-[#C62828] group-hover/btn:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover/btn:translate-x-[2px] group-hover/btn:translate-y-[2px] [clip-path:polygon(0_60%,100%_40%,100%_100%,0_100%)]">
                          View Product
                        </div>

                        <div className="absolute inset-0 pointer-events-none z-10 [clip-path:polygon(0_58%,100%_38%,100%_42%,0_62%)] overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-out" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
