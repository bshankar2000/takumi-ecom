"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "../lib/productSlice";

export default function DesignDetails({ product }: { product: Product }) {
  if (!product.designDetails || product.designDetails.length === 0) return null;

  return (
    <section className="font-sans w-full bg-[#FAFAFC] py-20 px-6 md:px-12 lg:px-24 mt-16 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[11px] font-bold text-[#8A95A5] uppercase tracking-widest">
            Design Details
          </h2>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {product.designDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col group"
            >
              {/* Polaroid-style Image Wrapper */}
              <div className="bg-white p-3 md:p-4 shadow-sm mb-6 aspect-square w-full relative">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={detail.imageUrl}
                    alt={detail.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-[22px] text-[#0A192F] mb-3">
                {detail.title}
              </h3>

              <p className="text-[#546275] text-[13px] leading-relaxed font-medium">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
