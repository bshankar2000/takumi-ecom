import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoreProvider from "./lib/StoreProvider";

export const metadata: Metadata = {
  title: "Takumi",
  description:
    "Discover Takumi, an exclusive collection of authentic Japanese merchandise crafted by master artisans. Explore our curated selection of ceramics, apparel, and traditional tea sets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-libre-caslon: 'Libre Caslon Text', serif;
            --font-manrope: 'Manrope', sans-serif;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <StoreProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
