import Image from "next/image";
import Link from "next/link";

export default function OurStorySection() {
  return (
    <section className="font-sans w-full bg-[#2E2D32] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-stretch gap-12 lg:gap-24">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-full min-h-[300px] md:min-h-0 shadow-lg">
            <Image
              src="/ourstory.jpg"
              alt="Traditional Japanese artisan workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left py-6">
          {/* Overline */}
          <div className="mb-4 inline-block border-b border-[#8C8C8C] pb-1">
            <span className="text-[11px] font-bold text-[#EAEAEA] tracking-wider uppercase">
              The Philosophy
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            The Way of Takumi
          </h2>

          {/* Paragraph */}
          <p className="text-[#D1D1D1] text-[15px] leading-relaxed mb-8 max-w-md font-medium">
            In Japan, a <em className="italic">Takumi</em> is a master
            artisan—someone who has dedicated their life to perfecting a single
            craft. Our collections are sourced directly from these masters. We
            believe in the beauty of &apos;Ma&apos; (negative space), where
            every object is given the room to breathe and reveal its inherent
            character.
          </p>

          {/* CTA Button */}
          <Link
            href="/our-story"
            className="relative group inline-flex font-sans text-sm font-bold shadow-md cursor-pointer"
          >
            {/* Invisible placeholder to maintain exact button size */}
            <div className="px-8 py-3 opacity-0">Read Our Story</div>

            {/* Top Slice */}
            <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)]">
              Read Our Story
            </div>

            {/* Bottom Slice */}
            <div className="absolute inset-0 bg-[#C62828] group-hover:bg-[#B71C1C] text-white flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-[2px] group-hover:translate-y-[2px] [clip-path:polygon(0_60%,100%_40%,100%_100%,0_100%)]">
              Read Our Story
            </div>

            {/* Katana Flash Light Effect */}
            <div className="absolute inset-0 pointer-events-none z-10 [clip-path:polygon(0_58%,100%_38%,100%_42%,0_62%)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
