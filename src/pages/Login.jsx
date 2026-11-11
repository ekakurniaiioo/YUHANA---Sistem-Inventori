import { useState } from "react";
import { Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import users from "../data/users";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      alert("Email atau Password salah");
      return;
    }

    loginUser(user);

    if (user.role === "Admin") {
      navigate("/admin");
    } else if (user.role === "Petugas") {
      navigate("/petugas");
    } else if (user.role === "Peminjam") {
      navigate("/peminjam");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#eeeae1] text-[#27251f] lg:grid lg:min-h-screen lg:grid-cols-[minmax(420px,0.85fr)_1.15fr]">
      <section className="order-2 relative flex min-h-[calc(100svh-13rem)] flex-col bg-[#f7f5ef] px-6 py-7 sm:px-12 lg:order-1 lg:min-h-screen lg:px-[clamp(3rem,8vw,8rem)] lg:py-10">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 text-sm font-inter font-medium text-[#5f5a4f] transition-colors hover:text-[#9a7536] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a7536]"
        >
          <ArrowLeft size={17} />
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12 lg:py-16">
          <div className="mb-10">
            <div className="mb-10 flex items-center gap-3">
              <img
                src="./YUHANA-Logo.png"
                alt="Logo Yuhana"
                width={40}
                height={40}
                className="object-cover"
              />
              <span className="font-poppins text-xl font-semibold tracking-[0.12em] text-[#24231f]">
                YUHA<span className="text-[#a48750]">NA</span>
              </span>
            </div>
            <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a7536]">
              Equipment management
            </p>
            <h1 className="font-poppins text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#24231f] sm:text-[2.75rem]">
              Selamat datang kembali
            </h1>
            <p className="mt-3 max-w-sm font-inter text-sm leading-6 text-[#6f6a60]">
              Masuk untuk mengelola inventori dan equipment produksi.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="login-email" className="font-inter text-xs font-semibold text-[#403d36]">
                Email
              </label>
              <div className="relative flex w-full items-center">
                <Mail className="pointer-events-none absolute left-4 text-[#8b8579]" size={17} aria-hidden="true" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@company.com"
                  required
                  className="w-full rounded-lg border border-[#d8d2c6] bg-white px-4 py-3.5 pl-11 font-inter text-sm text-[#27251f] placeholder:text-[#aaa499] transition-colors focus:border-[#a48750] focus:outline-none focus:ring-2 focus:ring-[#a48750]/20"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="login-password" className="font-inter text-xs font-semibold text-[#403d36]">
                Password
              </label>
              <div className="relative flex w-full items-center">
                <Lock className="pointer-events-none absolute left-4 text-[#8b8579]" size={17} aria-hidden="true" />
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-[#d8d2c6] bg-white px-4 py-3.5 pl-11 font-inter text-sm text-[#27251f] placeholder:text-[#aaa499] transition-colors focus:border-[#a48750] focus:outline-none focus:ring-2 focus:ring-[#a48750]/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#292720] px-5 py-3.5 font-inter text-sm font-semibold text-[#e8d5aa] transition-colors hover:bg-[#403b30] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#9a7536] active:bg-[#1e1d19]"
            >
              <span>Masuk ke Dashboard</span>
              <ArrowRight size={17} />
            </button>
          </form>

          <p className="mt-12 border-t border-[#ddd7ca] pt-5 font-inter text-[11px] tracking-wide text-[#8a8478]">
            YUHANA Equipment Management &copy; {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <aside className="order-1 relative hidden min-h-[40vh] overflow-hidden bg-[#24231f] lg:order-2 lg:block">
        <img
          src="./Login-background.png"
          alt="Kamera dan equipment produksi YUHANA"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <p className="absolute bottom-12 left-12 max-w-md font-poppins text-2xl font-medium leading-snug text-white sm:left-16 sm:bottom-16">
          Setiap produksi dimulai dengan persiapan yang tepat.
        </p>
      </aside>

      <aside className="order-1 relative h-52 overflow-hidden bg-[#24231f] lg:hidden">
        <img
          src="./Login-background.png"
          alt="Kamera dan equipment produksi YUHANA"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      </aside>
    </main>
  );
}
