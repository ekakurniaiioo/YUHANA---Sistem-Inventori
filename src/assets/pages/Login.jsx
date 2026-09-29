import { Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className="w-screen h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <img
        src="./Login-background.png"
        alt="Login Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-stone-900/20 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-stone-950/85 via-stone-900/40 to-transparent z-0 pointer-events-none" />

      <div className="relative w-full max-w-7xl h-[820px] rounded-[32px] overflow-hidden shadow-2xl shadow-black/80 border border-white/10 flex items-center">
        <Link
          to="/"
          className="absolute top-8 left-12 z-30 inline-flex items-center gap-2 text-sm font-poppins font-bold text-gold-light hover:text-gold-hover transition-colors duration-200"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <img
          src="./Login.png"
          alt="Login Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-lg ml-20 p-6 flex flex-col justify-center">
          <div className="flex flex-col items-start gap-1 mb-8">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <img
                src="./YUHANA-Logo.png"
                alt="Logo Yuhana"
                width={38}
                height={38}
                className="object-cover"
              />
              <span className="text-2xl font-poppins font-extrabold text-neutral-900 tracking-wider">
                YUHA<span className="text-amber-600">NA</span>
              </span>
            </div>

            <h1 className="text-3xl font-poppins font-bold text-neutral-900">
              Welcome Back
            </h1>
            <p className="text-xs font-inter text-neutral-600">
              Masuk ke sistem inventori & managemen equipment produksi
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 w-full"
          >
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[11px] font-poppins font-bold text-neutral-700 tracking-wider">
                EMAIL
              </label>
              <div className="relative flex items-center w-full">
                <Mail
                  className="absolute left-4 z-10 text-neutral-700 pointer-events-none"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="nama@company.com"
                  required
                  className="w-full bg-white/85 backdrop-blur-sm border border-neutral-300/80 rounded-xl py-3 pl-11 pr-4 text-sm font-inter text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex w-full">
                <label className="text-[11px] font-poppins font-bold text-neutral-700 tracking-wider">
                  PASSWORD
                </label>
              </div>
              <div className="relative flex items-center w-full">
                <Lock
                  className="absolute left-4 z-10 text-neutral-700 pointer-events-none"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-white/85 backdrop-blur-sm border border-neutral-300/80 rounded-xl py-3 pl-11 pr-4 text-sm font-inter text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all duration-200 shadow-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 w-full inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 font-poppins font-semibold text-sm py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <span>Masuk ke Dashboard</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 border-t border-gold-light/60 pt-4 text-center w-full">
            <p className="text-[11px] font-inter text-gold-light">
              YUHANA Equipment Management &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
