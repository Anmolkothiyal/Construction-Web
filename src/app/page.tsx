import About from "@/components/About";
import Contact from "@/components/Contact";
import Directors from "@/components/Directors";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarketOpportunity from "@/components/MarketOpportunity";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import SWOT from "@/components/SWOT";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Directors />
      <Solutions />
      <MarketOpportunity />
      <SWOT />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
