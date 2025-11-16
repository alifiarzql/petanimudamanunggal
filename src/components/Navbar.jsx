// src/components/Navbar.jsx
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const scrollToSection = (id) => {
    // Jika sedang tidak di halaman beranda, redirect dulu ke /
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm py-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("beranda")} 
          className="text-xl font-semibold text-green-900"
        >
          Manunggal Roso
        </button>

        {/* Menu */}
        <div className="flex items-center gap-8">

          <button
            onClick={() => scrollToSection("beranda")}
            className="text-gray-700 hover:text-green-800 transition"
          >
            Beranda
          </button>

          <button
            onClick={() => scrollToSection("tentang")}
            className="text-gray-700 hover:text-green-800 transition"
          >
            Tentang
          </button>

          <button
            onClick={() => scrollToSection("produk")}
            className="text-gray-700 hover:text-green-800 transition"
          >
            Produk
          </button>

          <button
            onClick={() => scrollToSection("kontak")}
            className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition"
          >
            Hubungi Kami
          </button>

        </div>
      </div>
    </nav>
  );
}
