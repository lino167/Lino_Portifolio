import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { TrustBar } from "@/components/blocks/TrustBar";
import { Sections } from "@/components/blocks/Sections";
import { ServicesHighlight } from "@/components/blocks/ServicesHighlight";
import { PortfolioHighlight } from "@/components/blocks/PortfolioHighlight";
import { BlogTeaser } from "@/components/blocks/BlogTeaser";
import { FinalCTA } from "@/components/blocks/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesHighlight />
      <PortfolioHighlight />
      <BlogTeaser />
      <FinalCTA />
      <Footer />
    </>
  );
}