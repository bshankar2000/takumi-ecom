import Link from "next/link";
import { Camera, Pin, X } from "lucide-react";

const shopLinks = [
  { name: "Apparel", href: "/shop/apparel" },
  { name: "Ceramics", href: "/shop/ceramics" },
  { name: "Accessories", href: "/shop/accessories" },
];

const companyLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Artisans", href: "/artisans" },
  { name: "Careers", href: "/careers" },
];

const supportLinks = [
  { name: "Shipping & Returns", href: "/support/shipping" },
  { name: "Privacy Policy", href: "/support/privacy" },
  { name: "Contact", href: "/support/contact" },
];

export default function Footer() {
  return (
    <footer className="font-sans w-full bg-[#FAFAFC] pt-12 md:pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section: Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 md:mb-12">
          {/* Brand Info (Takes up more space on large screens) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="font-serif text-2xl text-[#0A192F] tracking-wide uppercase mb-6"
            >
              TAKUMI
            </Link>
            <p className="text-[#546275] text-[13px] leading-relaxed max-w-sm mb-8 font-medium">
              Dedicated to preserving the essence of Japanese craftsmanship by
              connecting master artisans with those who appreciate the beauty of
              functional art.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 text-[#0A192F]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <Camera className="w-[18px] h-[18px] stroke-[2]" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="hover:opacity-70 transition-opacity"
              >
                <Pin className="w-[18px] h-[18px] stroke-[2] fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="hover:opacity-70 transition-opacity"
              >
                <X className="w-[18px] h-[18px] stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Shop Column */}
            <div className="flex flex-col">
              <h3 className="text-[#0A192F] font-semibold text-[15px] mb-6">
                Shop
              </h3>
              <ul className="space-y-4">
                {shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#546275] hover:text-[#0A192F] text-[13px] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col">
              <h3 className="text-[#0A192F] font-semibold text-[15px] mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#546275] hover:text-[#0A192F] text-[13px] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex flex-col">
              <h3 className="text-[#0A192F] font-semibold text-[15px] mb-6">
                Support
              </h3>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#546275] hover:text-[#0A192F] text-[13px] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Legal */}
        <div className="pt-8 border-t border-[#EAEAEA] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-[#8A95A5] uppercase tracking-wider">
            © 2024 TAKUMI CRAFTSMANSHIP. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center space-x-6 text-[10px] font-bold text-[#8A95A5] uppercase tracking-wider">
            <Link
              href="/terms"
              className="hover:text-[#0A192F] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-[#0A192F] transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
