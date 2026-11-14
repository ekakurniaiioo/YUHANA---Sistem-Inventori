import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/hero/Hero";
import { Equipment } from "../components/Equipment";
import { About } from "../components/About";
import { Footer } from "../components/footer/Footer";
import { EquipmentManagement } from "../components/EquipmentManagement";

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
        <EquipmentManagement />
      </main>

      <Footer />
    </div>
  );
}
