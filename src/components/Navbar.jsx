import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efek shadow saat scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Program", path: "/program" },
    { name: "Produk", path: "/produk" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white py-5 px-6 md:px-10 flex justify-between items-center z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Brand Name */}
      <h1 className="text-xl md:text-2xl font-bold text-[#547047] tracking-wide">
        Muda Manunggal Roso
      </h1>

      {/* Tombol Hamburger untuk HP */}
      <button
        className="md:hidden flex flex-col justify-center items-center space-y-1 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`h-0.5 w-7 bg-[#547047] transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-7 bg-[#547047] transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-0.5 w-7 bg-[#547047] transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center space-x-10">
        <ul className="flex space-x-8 text-[#547047] font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`transition border-b-2 ${
                  location.pathname === item.path
                    ? "font-bold text-[#3a5230] border-[#3a5230]"
                    : "border-transparent hover:border-[#3a5230] hover:text-[#3a5230]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6282134919483"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#547047] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#3a5230] transition"
        >
          Hubungi Kami
        </a>
      </div>

      {/* Overlay blur saat menu terbuka di HP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl md:hidden flex flex-col items-start px-8 py-16 space-y-6 text-lg font-semibold text-[#547047] transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`${
              location.pathname === item.path ? "text-[#3a5230]" : ""
            } hover:text-[#3a5230] transition`}
          >
            {item.name}
          </Link>
        ))}

        <a
          href="https://wa.me/6282134919483"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="bg-[#547047] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#3a5230] transition"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
