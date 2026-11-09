import { MoveDown } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-full">
      <img
        src="./Hero.png"
        alt="Latar belakang peralatan produksi YUHANA"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      />

      <div className="absolute inset-0 bg-black/40 -z-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-stone-900/20 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto text-left">
        <h1 className="text-8xl font-poppins font-extrabold text-white tracking-wider">
          YUHA<span className="text-gold">NA</span>
        </h1>

        <div
          className="w-36 h-1.5 bg-gold mt-3 mb-8 rounded-full"
          aria-hidden="true"
        />

        <p className="text-sm font-inter font-semibold tracking-[0.38em] text-gray-400 uppercase mb-8">
          PRODUCTION EQUIPMENT MANAGEMENT
        </p>

        <p className="text-xl font-inter text-gray-200 max-w-xl leading-relaxed mb-10">
          Kelola equipment produksi dengan lebih mudah, terorganisir, dan
          terpantau.
        </p>

        <Button href="#fitur" variant="gold">
          Lihat Fitur
          <MoveDown size={18} />
        </Button>
      </div>
    </section>
  );
}
