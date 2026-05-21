import HeroSection from "./components/HeroSection";
import FeaturedGoods from "./components/FeaturedGoods";
import CuratedSelection from "./components/CuratedSelection";
import OurStorySection from "./components/OurStorySection";
import JoinGallery from "./components/JoinGallery";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedGoods />
      <CuratedSelection />
      <OurStorySection />
      <JoinGallery />
    </div>
  );
}
