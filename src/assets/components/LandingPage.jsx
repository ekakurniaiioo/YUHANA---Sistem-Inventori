import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Equipment } from "./Equipment";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </header>
      
      <main>
        <Equipment />
      </main>
    </div>
  );
}