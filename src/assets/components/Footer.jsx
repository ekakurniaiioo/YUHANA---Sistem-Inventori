import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="./YUHANA-Logo.png"
                alt="Logo Yuhana"
                width={32}
                height={32}
                className="object-cover"
              />
              <span className="text-2xl font-poppins font-extrabold text-white tracking-wider">
                YUHA<span className="text-gold">NA</span>
              </span>
            </a>
            <p className="text-xs font-inter text-gray-400 max-w-sm">
              Production Equipment Management Platform.
            </p>
          </div>

          <ul className="flex items-center gap-8 text-sm font-poppins font-medium text-gray-300">
            <li>
              <a
                href="#home"
                className="hover:text-gold transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="hover:text-gold transition-colors duration-200"
              >
                Equipment
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gold transition-colors duration-200"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full h-1 bg-white/10" />

        <div className="flex justify-between items-center text-xs font-inter text-gray-500">
          <p>&copy; {new Date().getFullYear()} YUHANA. All rights reserved.</p>

          <div className="flex items-center gap-5 text-gray-400">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gold transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gold transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Website"
              className="hover:text-gold transition-colors duration-200"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
