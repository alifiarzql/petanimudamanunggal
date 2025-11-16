// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2633] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

        {/* Kiri - Title & Hak Cipta */}
        <div>
          <h2 className="text-lg font-semibold">
            Kelompok Petani Muda Manunggal Roso
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            © 2025. Seluruh Hak Cipta Dilindungi.
          </p>
        </div>

        {/* Menu Tengah */}
        <div className="flex gap-6 text-sm">
          <a href="/tentang" className="hover:text-gray-300 transition">
            Tentang
          </a>
          <a href="/produk" className="hover:text-gray-300 transition">
            Produk
          </a>
          <a href="/hubungi" className="hover:text-gray-300 transition">
            Hubungi
          </a>
        </div>

        {/* Sosial Media */}
        <div className="flex gap-4 text-xl">
          <a
            href="#"
            className="hover:text-gray-300 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition"
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
