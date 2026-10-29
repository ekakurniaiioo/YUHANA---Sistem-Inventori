import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingCart,
  ClipboardList,
  History,
  UserRound,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    label: "Equipment",
    to: "/peminjam",
    icon: LayoutGrid,
  },
  {
    label: "Keranjang",
    to: "/peminjam/cart",
    icon: ShoppingCart,
  },
  {
    label: "Peminjaman Saya",
    to: "/peminjam/borrowings",
    icon: ClipboardList,
  },
  {
    label: "Riwayat",
    to: "/peminjam/history",
    icon: History,
  },
];

export function NavbarPeminjam() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <nav
        aria-label="Navigasi Peminjam"
        className="mx-auto flex min-h-20 items-center justify-between gap-6 px-8 lg:px-16"
      >
        <NavLink
          to="/peminjam"
          aria-label="YUHANA - Equipment"
          className="shrink-0"
        >
          <img
            src="./YUHANA-Logo.png"
            alt="YUHANA"
            width={38}
            height={38}
            className="object-cover transition-opacity duration-200 hover:opacity-80"
          />
        </NavLink>

        <ul className="flex items-center justify-center gap-8 lg:gap-16">
          {navItems.map(({ label, to, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `group relative flex min-w-16 items-center gap-1.5 py-2 text-sm font-poppins font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-gold"
                      : "text-white/65 hover:text-gold-hover"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={20}
                      strokeWidth={isActive ? 2.2 : 1.8}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5"
                    />

                    <span className="whitespace-nowrap">{label}</span>

                    {isActive && (
                      <span className="absolute -bottom-1 h-0.5 w-23 rounded-full bg-gold" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 border-l border-white/10 pl-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-white/5">
            <UserRound size={18} className="text-gold" />
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-semibold text-white">Wonyoung</span>
            <span className="text-[10px] text-white/50">Peminjam</span>
          </div>

          <ChevronDown size={15} className="hidden text-white/50 sm:block" />
        </div>
      </nav>
    </header>
  );
}
