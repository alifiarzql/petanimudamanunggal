// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2633] text-white pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Kolom 1 - Judul Kelompok */}
        <div className="text-left">
          <h2 className="text-xl font-semibold leading-tight">
            Kelompok Tani Manunggal Roso
          </h2>
        </div>

        {/* Kolom 2 - Navigasi */}
        <div className="text-left sm:text-left">
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/tentang" className="hover:text-gray-300 transition">Tentang Kami</a></li>
            <li><a href="/produk" className="hover:text-gray-300 transition">Produk</a></li>
            <li><a href="/hubungi" className="hover:text-gray-300 transition">Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Kerja Sama */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">Kerja Sama</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Program didukung oleh:
            <br />
            <span className="font-semibold text-white">
              PPK Ormawa Himatikro – Universitas Muhammadiyah Semarang
            </span>
          </p>
        </div>

        {/* Kolom 4 - Sosial Media */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Garis bawah */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Kelompok Tani Manunggal Roso. Seluruh Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
