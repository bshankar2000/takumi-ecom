"use client";

import { Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function JoinGallery() {
  return (
    <section className="relative font-sans w-full bg-[#FAF8F5] py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Japanese Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <span className="font-serif text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold text-[#C62828]/5 select-none leading-none">
          匠
        </span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-screen-xl mx-auto"
      >
        {/* Icon */}
        <motion.div variants={itemVariants} className="mb-6">
          <Mail className="w-8 h-8 text-[#B8860B] stroke-[1.5]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl md:text-4xl text-[#0A192F] mb-4"
        >
          Join the Gallery
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#546275] text-sm md:text-[15px] max-w-md mx-auto mb-10 leading-relaxed font-medium"
        >
          Subscribe to receive gentle updates on new collections and artisan
          stories.
        </motion.p>

        {/* Subscription Form */}
        <motion.form
          variants={itemVariants}
          className="w-full max-w-md text-left"
          onSubmit={(e) => e.preventDefault()} // Prevent page reload for demo purposes
        >
          <label
            htmlFor="email-input"
            className="block text-[10px] font-bold text-[#0A192F] uppercase tracking-wider mb-1"
          >
            Email Address
          </label>

          <div className="flex flex-col sm:flex-row items-end gap-4 sm:gap-6">
            {/* Bottom-border Input */}
            <div className="w-full flex-1">
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-2 px-0 text-sm text-[#0A192F] placeholder:text-[#9CA3AF] outline-none focus:outline-none focus:ring-0 focus:border-[#0A192F] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative group inline-flex w-full sm:w-auto font-sans text-sm font-bold shadow-sm cursor-pointer shrink-0"
            >
              {/* Invisible placeholder to maintain exact button size */}
              <div className="w-full sm:w-auto py-2.5 px-8 opacity-0">
                Subscribe
              </div>

              {/* Top Slice */}
              <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)]">
                Subscribe
              </div>

              {/* Bottom Slice */}
              <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-[2px] group-hover:translate-y-[2px] [clip-path:polygon(0_60%,100%_40%,100%_100%,0_100%)]">
                Subscribe
              </div>

              {/* Katana Flash Light Effect */}
              <div className="absolute inset-0 pointer-events-none z-10 [clip-path:polygon(0_58%,100%_38%,100%_42%,0_62%)] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
              </div>
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
