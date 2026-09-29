import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Equipment } from "./Equipment";
import { About } from "./About";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </header>
      
      <main>
        <Equipment />
        <About/>
      </main>
    </div>
  );
}