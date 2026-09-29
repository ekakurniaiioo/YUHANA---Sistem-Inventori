import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Equipment } from "../components/Equipment";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </header>

      <main>
        <Equipment />
        <About />
      </main>

      <Footer />
    </div>
  );
}
