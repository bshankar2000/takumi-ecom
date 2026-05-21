"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-end overflow-hidden bg-black">
      {/* Hero Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/heroimage.jpg')",
        }}
      />

      {/* Gradient Overlay: Fades the image to black at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
        className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-transparent"
      />

      {/* Hero Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pb-16 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="font-serif text-4xl md:text-6xl text-white mb-4"
        >
          Artistry in Every Detail.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="font-sans text-sm md:text-base text-gray-300 mb-8 font-medium"
        >
          Modern Japanese merchandise crafted by master artisans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
        >
          <Link
            href="/collection"
            className="relative group inline-flex font-sans text-sm font-bold shadow-md cursor-pointer"
          >
            {/* Invisible placeholder to maintain exact button size */}
            <div className="px-8 py-3 opacity-0">Explore Collection</div>

            {/* Top Slice */}
            <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)]">
              Explore Collection
            </div>

            {/* Bottom Slice */}
            <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-[2px] group-hover:translate-y-[2px] [clip-path:polygon(0_60%,100%_40%,100%_100%,0_100%)]">
              Explore Collection
            </div>

            {/* Katana Flash Light Effect */}
            <div className="absolute inset-0 pointer-events-none z-10 [clip-path:polygon(0_58%,100%_38%,100%_42%,0_62%)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
