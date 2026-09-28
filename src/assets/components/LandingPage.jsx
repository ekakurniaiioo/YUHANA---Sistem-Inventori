import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <header className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </header>
    </main>
  );
}
