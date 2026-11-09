import { House, LayoutGrid, Info } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const navItems = [
    {
      label: "Home",
      href: "#",
      icon: House,
    },
    {
      label: "Equipment",
      href: "#product",
      icon: LayoutGrid,
    },
    {
      label: "About",
      href: "#about",
      icon: Info,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-background/20 backdrop-blur-md border-b border-white/10 px-8 lg:px-16 py-4">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-bold text-white hover:text-gold-hover transition-colors duration-300"
          >
            <img
              src="./YUHANA-Logo.png"
              alt="Logo Yuhana"
              width={38}
              height={38}
              className="object-cover"
            />
          </a>
        </div>

        <ul className="flex items-center gap-12 text-sm font-poppins font-semibold text-white">
          {navItems.map(({ label, href, icon: Icon }) => (
            <li
              key={label}
              className="group relative flex min-w-16 items-center gap-1.5 py-2 text-sm font-poppins font-semibold transition-colors duration-200"
            >
              <Icon
                size={20}
                className="group-hover:text-gold-hover transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              <a
                href={href}
                className="group-hover:text-gold-hover transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <Button to="/login" variant="outline">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
