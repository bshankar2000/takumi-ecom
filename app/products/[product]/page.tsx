"use client";

import { useAppSelector } from "../../lib/hooks";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, PackageX } from "lucide-react";
import { motion } from "framer-motion";
import ProductInfo from "../../components/ProductInfo";
import DesignDetails from "../../components/DesignDetails";
import ArtisanStory from "../../components/ArtisanStory";
import CompleteTheSet from "../../components/CompleteTheSet";

export default function ProductDetailsPage() {
  const product = useAppSelector((state) => state.product.selectedProduct);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF8F5] px-6 text-center">
        <PackageX className="w-16 h-16 text-gray-400 mb-6 stroke-[1.5]" />
        <h1 className="font-serif text-3xl md:text-4xl text-[#0A192F] mb-4">
          Product Not Found
        </h1>
        <p className="font-sans text-[#546275] mb-8 font-medium">
          Please explore our collection to find your desired item.
        </p>
        <Link
          href="/"
          className="relative group inline-flex font-sans text-sm font-bold shadow-md cursor-pointer"
        >
          {/* Invisible placeholder to maintain exact button size */}
          <div className="px-8 py-3 opacity-0">Return to Gallery</div>

          {/* Top Slice */}
          <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)]">
            Return to Gallery
          </div>

          {/* Bottom Slice */}
          <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-[2px] group-hover:translate-y-[2px] [clip-path:polygon(0_60%,100%_40%,100%_100%,0_100%)]">
            Return to Gallery
          </div>

          {/* Katana Flash Light Effect */}
          <div className="absolute inset-0 pointer-events-none z-10 [clip-path:polygon(0_58%,100%_38%,100%_42%,0_62%)] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] font-sans">
      {/* Top Navigation Bar */}
      <div className="w-full border-b border-gray-200 bg-white px-6 md:px-12 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-[#0A192F] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1 stroke-[2]" />
            Back to Collections
          </Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 mt-12 md:mt-20">
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          {/* Left: Product Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            {/* Main Featured Image */}
            <div className="relative w-full aspect-[4/5] bg-[#F5F5F0] shadow-sm overflow-hidden">
              <Image
                src={selectedImage || product.imageUrl}
                alt={product.title}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Badge */}
              <div
                className={`absolute top-0 left-6 px-3 py-5 text-[11px] font-medium tracking-[0.25em] [writing-mode:vertical-rl] shadow-sm z-10 ${
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

            {/* Thumbnail Gallery Grid */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-5 gap-2 md:gap-3 mt-4">
                {[product.imageUrl, ...product.gallery].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-full aspect-square bg-[#F5F5F0] shadow-sm overflow-hidden border-2 transition-all ${
                      (selectedImage || product.imageUrl) === img
                        ? "border-[#C62828] opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100 hover:border-gray-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 20vw, 10vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Product Details */}
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Design Details Section */}
      <DesignDetails product={product} />

      {/* Artisan Story Section */}
      <ArtisanStory />

      {/* Complete the Set Section */}
      <CompleteTheSet />
    </div>
  );
}
