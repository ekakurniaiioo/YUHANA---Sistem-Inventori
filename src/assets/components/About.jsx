import { ShieldCheck, ClipboardList, UserCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="min-h-screen bg-background pb-32 pt-8 px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl text-text font-poppins font-semibold mb-4">
              ABOUT YUHA<span className="text-gold">NA</span>
            </h1>

            <div className="w-96 h-1 bg-gold rounded-full mb-6" />

            <h2 className="text-5xl font-poppins font-bold text-text leading-tight mb-6">
              Managing production <br />
              <span className="text-gold">equipment, made simpler.</span>
            </h2>

            <div className="w-20 h-1 bg-gold rounded-full mb-6" />

            <div className="flex flex-col gap-4 text-text/80 font-inter text-base leading-relaxed">
              <p>
                <strong className="text-white">YUHANA</strong> adalah sistem
                inventori internal yang dirancang untuk membantu tim produksi
                dalam mengelola berbagai equipment yang digunakan untuk
                kebutuhan media dan entertainment.
              </p>
              <p>
                Mulai dari kamera, lensa, lighting, audio equipment, hingga
                berbagai perlengkapan pendukung produksi, YUHANA membantu
                memastikan setiap equipment dapat tercatat, dipantau, dan
                dikelola dalam satu sistem yang terorganisir.
              </p>
              <p>
                Dalam proses produksi, equipment dapat digunakan oleh berbagai
                anggota tim untuk kebutuhan seperti shooting, photoshoot, music
                video, campaign, maupun project kreatif lainnya. Karena itu,
                YUHANA menyediakan alur pengelolaan peminjaman dan pengembalian
                agar penggunaan equipment dapat dipantau dengan lebih jelas.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-white/10 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />
            <div className="relative w-full h-[450px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="./Hero.png"
                alt="YUHANA Equipment Showcase"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-inter font-semibold tracking-[0.3em] text-gold uppercase mb-2">
            ROLES & PERMISSIONS
          </span>
          <h3 className="text-4xl font-poppins font-bold text-text mb-12">
            Built for the{" "}
            <span className="text-gold">production workflow.</span>
          </h3>

          <div className="grid grid-cols-3 gap-8 w-full text-left">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                <ShieldCheck size={26} />
              </div>
              <h4 className="text-xl font-poppins font-bold text-white mb-3 tracking-wide">
                ADMIN
              </h4>
              <p className="text-sm font-inter text-text/70 leading-relaxed">
                Bertanggung jawab dalam pengelolaan sistem, mulai dari data
                equipment, pengguna, hingga keseluruhan aktivitas peminjaman.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                <ClipboardList size={26} />
              </div>
              <h4 className="text-xl font-poppins font-bold text-white mb-3 tracking-wide">
                PETUGAS
              </h4>
              <p className="text-sm font-inter text-text/70 leading-relaxed">
                Menangani aktivitas operasional seperti memproses permintaan
                peminjaman, pengembalian, serta memantau status equipment.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                <UserCheck size={26} />
              </div>
              <h4 className="text-xl font-poppins font-bold text-white mb-3 tracking-wide">
                PEMINJAM
              </h4>
              <p className="text-sm font-inter text-text/70 leading-relaxed">
                Dapat melihat equipment yang tersedia, mencari kebutuhan
                produksi, mengajukan peminjaman, dan memantau status
                pengajuannya.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 p-12 rounded-3xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-poppins font-bold text-text mb-4">
            One system for every{" "}
            <span className="text-gold">production asset.</span>
          </h3>
          <p className="text-base font-inter text-text/80 max-w-2xl leading-relaxed">
            YUHANA dibuat untuk memberikan satu tempat terpusat bagi tim dalam
            mengelola equipment produksi, sehingga informasi mengenai barang,
            ketersediaan, peminjaman, dan pengembalian dapat lebih mudah
            dipantau selama proses produksi berlangsung.
          </p>
        </div>
      </div>
    </section>
  );
}
