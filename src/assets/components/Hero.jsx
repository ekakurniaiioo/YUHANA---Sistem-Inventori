import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-full">
      <img
        src="./Hero.png"
        alt="Latar belakang peralatan produksi YUHANA"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black/40 -z-10" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-16 text-left">
        <h1 className="text-8xl font-poppins font-extrabold text-white tracking-wider">
          YUHA<span className="text-gold">NA</span>
        </h1>

        <div className="w-36 h-1.5 bg-gold mt-3 mb-8 rounded-full" aria-hidden="true" />

        <p className="text-sm font-inter font-semibold tracking-[0.38em] text-gray-400 uppercase mb-8">
          PRODUCTION EQUIPMENT MANAGEMENT
        </p>

        <p className="text-xl font-inter text-gray-200 max-w-xl leading-relaxed mb-10">
          Kelola equipment produksi dengan lebih mudah, terorganisir, dan
          terpantau.
        </p>

        <Link to="/login" className="inline-flex items-center gap-3.5 bg-gold hover:bg-gold-hover text-black font-poppins font-semibold text-base px-9 py-4 rounded-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95">
          <span>Login ke YUHANA</span>
          <MoveRight size={22} />
        </Link>
      </div>
    </section>
  );
}