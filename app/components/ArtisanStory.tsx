"use client";
import { motion } from "framer-motion";

export default function ArtisanStory() {
  return (
    <section className="relative font-sans w-full bg-[#FAFAFC] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col text-left mt-8 md:mt-0"
        >
          {/* Overline */}
          <span className="text-[10px] font-bold text-[#8A95A5] uppercase tracking-widest mb-4">
            The Hands Behind the Clay
          </span>

          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#0A192F] leading-tight mb-8 max-w-lg text-center">
            Legacy of the Takumi
            <span className="block text-center text-4xl md:text-5xl lg:text-6xl leading-none my-2 italic text-[#C62828]">
              &amp;
            </span>
            The Story of the Kiln
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-[#546275] text-[15px] leading-relaxed font-medium">
            <p>
              Master Kaito Hashimoto represents the 14th generation of potters
              specializing in Raku-yaki. In his secluded Kyoto studio, he
              continues the tradition of hand-forming each bowl without a wheel,
              a technique known as &apos;te-zukune&apos;.
            </p>

            <p>
              The &quot;Kuro&quot; (Black) Raku firing is a dramatic process.
              Bowls are pulled glowing red-hot from a 1,200°C kiln and placed
              directly into the open air. This thermal shock creates the
              characteristic micro-fissures and organic texture that defines
              Raku.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-2 border-[#B8860B] pl-5 my-8 italic text-[#6B7280]">
              &quot;The clay speaks to the hands. Each Kuro Raku bowl is a
              conversation between the artisan, the earth, and the fire. No two
              are ever the same, just as no two tea ceremonies are
              identical.&quot;
            </blockquote>

            <p>
              Every piece is fired individually in a small, traditional
              charcoal-fueled kiln, a process that requires constant attention
              and mastery of the elements.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
              alt="Master artisan shaping clay in his studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
