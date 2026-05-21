"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppDispatch } from "../lib/hooks";
import { setSelectedProduct } from "../lib/productSlice";

// Product Data Type
type Product = {
  id: string;
  title: string;
  price: string;
  rating: number;
  badge: {
    text: string;
    variant: "light" | "dark" | "white";
  };
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

// Mock Data with Local Images
const products: Product[] = [
  {
    id: "1",
    title: "Indigo Norugi Jacket",
    price: "¥32,000",
    rating: 4.9,
    badge: { text: "NEW", variant: "light" },
    imageUrl: "/curatedselectionone.jpg",
    specifications: {
      material: "100% Organic Cotton",
      size: "Available in S, M, L, XL",
      weight: "500g",
    },
    careInstructions:
      "Hand wash cold with natural detergent. Do not bleach. Line dry in shade. The indigo dye may transfer to lighter fabrics, so wash separately.",
    gallery: [
      "/curatedselectionone.jpg",
      "/curatedselectiontwo.jpg",
      "/curatedselectionthree.jpg",
      "/curatedselectionfour.jpg",
    ],
    designDetails: [
      {
        title: "Artisan Craftsmanship",
        description:
          "Each piece is meticulously crafted by hand, ensuring unique characteristics and unparalleled quality that machines cannot replicate.",
        imageUrl: "/curatedselectionone.jpg",
      },
      {
        title: "Premium Materials",
        description:
          "Sourced from the finest local materials, offering durability and a natural aesthetic that ages beautifully over time.",
        imageUrl: "/curatedselectiontwo.jpg",
      },
      {
        title: "Timeless Design",
        description:
          "Rooted in Japanese minimalism, the design balances form and function, creating a harmonious addition to your daily life.",
        imageUrl: "/curatedselectionthree.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Kintsugi Matcha Set",
    price: "¥18,500",
    rating: 4.8,
    badge: { text: "FEATURED", variant: "dark" },
    imageUrl: "/curatedselectiontwo.jpg",
    specifications: {
      material: "Ceramic with 24k Gold Kintsugi repair, Bamboo whisk",
      glaze: "Earthy green/brown ash glaze",
      size: "Bowl: 11cm x 7cm, Whisk: standard size",
      weight: "450g",
    },
    careInstructions:
      "Hand wash gently with warm water. Do not scrub the Kintsugi seams. Not microwave or dishwasher safe. Rinse whisk in warm water and air dry on a whisk stand.",
    gallery: [
      "/curatedselectionone.jpg",
      "/curatedselectiontwo.jpg",
      "/curatedselectionthree.jpg",
      "/curatedselectionfour.jpg",
    ],
    designDetails: [
      {
        title: "Artisan Craftsmanship",
        description:
          "Each piece is meticulously crafted by hand, ensuring unique characteristics and unparalleled quality that machines cannot replicate.",
        imageUrl: "/curatedselectionone.jpg",
      },
      {
        title: "Premium Materials",
        description:
          "Sourced from the finest local materials, offering durability and a natural aesthetic that ages beautifully over time.",
        imageUrl: "/curatedselectiontwo.jpg",
      },
      {
        title: "Timeless Design",
        description:
          "Rooted in Japanese minimalism, the design balances form and function, creating a harmonious addition to your daily life.",
        imageUrl: "/curatedselectionthree.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Urushi Bento Box",
    price: "¥24,000",
    rating: 5.0,
    badge: { text: "NEW", variant: "white" },
    imageUrl: "/curatedselectionthree.jpg",
    specifications: {
      material: "Japanese Cedar wood, Urushi lacquer",
      size: "20cm x 12cm x 6cm",
      weight: "250g",
    },
    careInstructions:
      "Hand wash with a soft sponge and mild soap. Dry immediately with a soft cloth. Keep away from direct sunlight and extreme dry environments. Not microwave or dishwasher safe.",
    gallery: [
      "/curatedselectionone.jpg",
      "/curatedselectiontwo.jpg",
      "/curatedselectionthree.jpg",
      "/curatedselectionfour.jpg",
    ],
    designDetails: [
      {
        title: "Artisan Craftsmanship",
        description:
          "Each piece is meticulously crafted by hand, ensuring unique characteristics and unparalleled quality that machines cannot replicate.",
        imageUrl: "/curatedselectionone.jpg",
      },
      {
        title: "Premium Materials",
        description:
          "Sourced from the finest local materials, offering durability and a natural aesthetic that ages beautifully over time.",
        imageUrl: "/curatedselectiontwo.jpg",
      },
      {
        title: "Timeless Design",
        description:
          "Rooted in Japanese minimalism, the design balances form and function, creating a harmonious addition to your daily life.",
        imageUrl: "/curatedselectionthree.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Sumi-e Calligraphy Brush",
    price: "¥12,000",
    rating: 4.9,
    badge: { text: "ARTISAN", variant: "light" },
    imageUrl: "/curatedselectionfour.jpg",
    specifications: {
      material: "Bamboo handle, Weasel and Sheep hair bristles",
      size: "Brush tip: 4.5cm, Handle: 22cm",
      weight: "50g",
    },
    careInstructions:
      "Rinse gently in clean water immediately after use. Do not use soap. Squeeze out excess water and shape the tip. Hang tip-down to dry completely before storing.",
    gallery: [
      "/curatedselectionone.jpg",
      "/curatedselectiontwo.jpg",
      "/curatedselectionthree.jpg",
      "/curatedselectionfour.jpg",
    ],
    designDetails: [
      {
        title: "Artisan Craftsmanship",
        description:
          "Each piece is meticulously crafted by hand, ensuring unique characteristics and unparalleled quality that machines cannot replicate.",
        imageUrl: "/curatedselectionone.jpg",
      },
      {
        title: "Premium Materials",
        description:
          "Sourced from the finest local materials, offering durability and a natural aesthetic that ages beautifully over time.",
        imageUrl: "/curatedselectiontwo.jpg",
      },
      {
        title: "Timeless Design",
        description:
          "Rooted in Japanese minimalism, the design balances form and function, creating a harmonious addition to your daily life.",
        imageUrl: "/curatedselectionthree.jpg",
      },
    ],
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

export default function CuratedSelection() {
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
    <section className="font-sans w-full bg-[#FAFAFC] pt-10 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-end justify-between border-b border-gray-200 pb-4 mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#0A192F]">
            Curated Selection
          </h2>

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
          {products.map((product) => (
            <motion.div
              variants={itemVariants}
              key={product.id}
              className="h-full snap-start"
            >
              <div className="h-full flex flex-col group cursor-pointer bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500">
                {/* Image & Badge Container */}
                <div className="relative w-full aspect-[4/5] bg-[#F5F5F0] overflow-hidden">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />

                  {/* Vertical Japanese-Style Badge */}
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
                        onClick={() => dispatch(setSelectedProduct(product))}
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
