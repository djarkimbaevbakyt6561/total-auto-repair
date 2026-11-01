import { Header, TopNavigationBar } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { FooterQuote } from "@/components/sections/footer-quote";
import { HeroQuote } from "@/components/sections/hero-quote";
import { ReviewsSection } from "@/components/sections/reviews";
import { ServicesGrid } from "@/components/sections/services-list";
import { StorefrontSpotlight } from "@/components/sections/storefront-spotlight";

export default function Home() {
  return (
    <div>
      <TopNavigationBar />
      <Header />
      <main>
        <HeroQuote />
        <ServicesGrid />
        <StorefrontSpotlight />
        <ReviewsSection />
        <FooterQuote />
      </main>
      <Footer />
    </div>
  );
}
