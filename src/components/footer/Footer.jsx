import { Globe, Image, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-white border-t border-white/10 px-6 sm:px-8 lg:px-20 py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex gap-10 justify-between items-center">
          <a href="#home" className="inline-flex items-center gap-3 w-fit">
            <img
              src="./YUHANA-Logo.png"
              alt="Logo YUHANA"
              width={32}
              height={32}
              className="object-cover"
            />
          </a>

          <p className="text-sm font-inter text-white/80 max-w-sm leading-relaxed">
            Di balik produksi, equipment terorganisir.
          </p>

          <ul className="flex flex-col gap-3 text-sm font-inter">
            <li>
              <a
                href="#product"
                className="text-white/70 hover:text-white transition-colors"
              >
                Equipment
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition-colors"
              >
                Tentang YUHANA
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="text-white/70 hover:text-white transition-colors"
              >
                Masuk ke sistem
              </a>
            </li>
          </ul>
        </div>

        <div className="pt-8 flex flex-col items-start">
          <h1 className="text-[14vw] md:text-[13vw] font-poppins font-bold tracking-[-0.1em] text-white leading-none select-none">
            YUHA<span className="text-gold">NA</span>
            <span className="text-gold">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 border-t border-white/10">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-poppins font-semibold uppercase tracking-widest text-white">
              Image Disclaimer
            </h3>
            <div className="flex items-start gap-2.5">
              <Image size={16} className="text-gold shrink-0 mt-0.5" />
              <p className="text-xs font-inter text-white/50 leading-relaxed">
                All images displayed on this website are for illustrative
                purposes only. They may not represent the actual inventory
                equipment.
              </p>
            </div>
          </div>

          <div id="credits" className="flex flex-col gap-2">
            <h3 className="text-xs font-poppins font-semibold uppercase tracking-widest text-white">
              Photo Credits
            </h3>
            <p className="text-xs font-inter text-white/50 leading-relaxed">
              Some images used on this website are sourced from{" "}
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Unsplash
              </a>{" "}
              and are used for illustrative purposes only.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-white/40">
          <p>&copy; {new Date().getFullYear()} YUHANA. All rights reserved.</p>

          <p className="text-center">Sistem inventori internal</p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Website"
              className="hover:text-white transition-colors"
            >
              <Globe size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              Kembali ke atas <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
