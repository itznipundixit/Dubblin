import Header from "../Components/Header";
import HeroCarousel from "../Components/HeroCarousel";
import BestSelling from "../Components/BestSelling";
import InstagramReels from "@/Components/InstagramReels";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import FeaturedBanner from "../Components/FeaturedBanner";
import NewArrivals from "../Components/NewArrivals";
import Sustainability from "../Components/Sustainability";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <BestSelling />
        <InstagramReels />
        <Categories />
        <Products />
        <FeaturedBanner />
        <NewArrivals />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}
