import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center bg-background/20 backdrop-blur-md border-b border-white/10 px-8 lg:px-16 py-4">
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
        <li>
          <a
            href="#home"
            className="hover:text-gold-hover transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#product"
            className="hover:text-gold-hover transition-colors duration-200"
          >
            Equipment
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-gold-hover transition-colors duration-200"
          >
            About
          </a>
        </li>
      </ul>

      <div>
        <Link
          to="/login"
          className="text-white text-sm font-poppins font-semibold py-1.5 px-6 rounded-sm cursor-pointer border border-gold hover:bg-gold hover:text-background transition-all duration-200 active:scale-95"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
