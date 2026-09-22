import Header from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Header";
import Hero from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Hero";
import MediaStories from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/MediaStories";
import BenefitsBanner from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/BenefitsBanner";
import Categories from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Categories";
import ReasonsToLove from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/ReasonsToLove";
import Favorites from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Favorites";
import HairTypes from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/HairTypes";
import DailyDeals from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/DailyDeals";
import Benefits from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Benefits";
import Launches from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Launches";
import Collector from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Collector";
import BeforeAfter from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/BeforeAfter";
import Affiliate from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Affiliate";
import Blog from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Blog";
import SocialLinks from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/SocialLinks";
import Reviews from "@/components/sites/www-lolacosmetics-com-br-b005530a/root-8a5edab2/Reviews";
import Footer from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/Footer";
import ShopInteractions from "@/components/sites/www-lolacosmetics-com-br-b005530a/shared/ShopInteractions";

// Section order and nesting mirror the captured #main tree; see PAGE_TOPOLOGY.md.
export default function Home() {
  return (
    <section id="main" className="HomeRoute">
      <Header />
      <div id="bg-search" />
      <section id="middle">
        <div id="content">
          <div id="content-wrapper">
            <Hero />
            <MediaStories variant="highlights" />
            <BenefitsBanner />
            <Categories />
            <ReasonsToLove />
            <div className="conteudo-home">
              <Favorites />
              <HairTypes />
              <MediaStories variant="carousel" />
              <DailyDeals />
              <Benefits />
              <Launches />
              <Collector />
              <BeforeAfter />
              <Affiliate />
              <Blog />
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <Footer />
      <ShopInteractions />
    </section>
  );
}
