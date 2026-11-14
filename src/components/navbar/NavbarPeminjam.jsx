import { useState } from "react";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingCart,
  ClipboardList,
  User,
  UserRound,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import users from "../../data/users";
import { getCurrentUser, logoutUser } from "../../utils/auth";

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
    label: "Profil Saya",
    to: "/peminjam/profile",
    icon: User,
  },
];

function isNavItemActive(to, pathname) {
  if (to === "/peminjam") {
    return pathname === to || /^\/peminjam\/detail\/[^/]+$/.test(pathname);
  }

  if (to === "/peminjam/borrowings") {
    return (
      pathname === to || /^\/peminjam\/borrowings\/[^/]+$/.test(pathname)
    );
  }

  return pathname === to;
}

export function NavbarPeminjam() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const currentBorrower =
    currentUser?.role === "Peminjam"
      ? users.find(
          (user) =>
            user.id === currentUser.id && user.role === "Peminjam",
        )
      : null;

  function handleLogout() {
    logoutUser();
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/login", { replace: true });
  }

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
            src="/YUHANA-Logo.png"
            alt="YUHANA"
            width={38}
            height={38}
            className="object-cover transition-opacity duration-200 hover:opacity-80"
          />
        </NavLink>

        <ul
          id="peminjam-navigation"
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-2 border-b border-white/10 bg-background px-8 py-4 lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {navItems.map(({ label, to, icon: Icon }) => {
            const active = isNavItemActive(to, pathname);

            return (
              <li key={to}>
                <Link
                  to={to}
                  aria-current={active ? "page" : undefined}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProfileMenuOpen(false);
                  }}
                  className={`group relative flex min-w-16 items-center gap-1.5 py-2 text-sm font-poppins font-semibold transition-colors duration-200 ${
                    active
                      ? "text-gold"
                      : "text-white/65 hover:text-gold-hover"
                  }`}
                >
                  <>
                    <Icon
                      size={20}
                      strokeWidth={active ? 2.2 : 1.8}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5"
                    />

                    <span className="whitespace-nowrap">{label}</span>

                    {active && (
                      <span className="absolute -bottom-1 h-0.5 w-full rounded-full bg-gold" />
                    )}
                  </>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={mobileMenuOpen}
          aria-controls="peminjam-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          className="flex size-10 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-gold lg:hidden"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="relative shrink-0">
          <button
            type="button"
            aria-label={`Menu akun ${currentBorrower?.name ?? "Peminjam"}`}
            aria-expanded={profileMenuOpen}
            aria-controls="peminjam-account-menu"
            onClick={() => {
              setMobileMenuOpen(false);
              setProfileMenuOpen((isOpen) => !isOpen);
            }}
            className="flex items-center gap-2 border-l border-white/10 pl-5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-white/5">
              <UserRound size={18} className="text-gold" />
            </div>

            <div className="hidden flex-col sm:flex">
              <span className="text-xs font-semibold text-white">
                {currentBorrower?.name ?? "Peminjam"}
              </span>
              <span className="text-[10px] text-white/50">Peminjam</span>
            </div>

            <ChevronDown
              size={15}
              className={`hidden text-white/50 transition-transform sm:block ${
                profileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileMenuOpen && (
            <div
              id="peminjam-account-menu"
              className="absolute right-0 top-full z-50 mt-2 flex min-w-44 flex-col overflow-hidden rounded-md border border-white/10 bg-background py-1 shadow-xl"
            >
              <Link
                to="/peminjam/profile"
                onClick={() => setProfileMenuOpen(false)}
                className="px-4 py-2.5 text-left text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-gold"
              >
                Profil Saya
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2.5 text-left text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-gold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
