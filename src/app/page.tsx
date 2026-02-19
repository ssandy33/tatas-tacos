import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { AboutStrip } from "@/components/sections/about-strip";
import { FeaturedMenu } from "@/components/sections/featured-menu";
import { YelpReviews } from "@/components/sections/yelp-reviews";
import { CateringBanner } from "@/components/sections/catering-banner";
import { HoursLocation } from "@/components/sections/hours-location";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStrip />
      <FeaturedMenu />
      <YelpReviews />
      <CateringBanner />
      <HoursLocation />
      <Footer />
    </main>
  );
}
