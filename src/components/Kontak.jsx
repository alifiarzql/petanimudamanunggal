import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Kontak = () => {
  return (
    <section id="kontak" className="bg-[#0A5745] py-20 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold">
        Tertarik Bermitra atau Membeli Produk Kami?
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed">
        Jangan ragu untuk menghubungi kami. Kami siap melayani kebutuhan Anda,
        baik untuk konsumsi pribadi, restoran, maupun kemitraan bisnis.
      </p>

      <a
        href="https://wa.me/628123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-6 py-3 rounded-full mt-8 shadow hover:bg-gray-100 transition"
      >
        <FaWhatsapp size={22} />
        Hubungi via WhatsApp
      </a>
    </section>
  );
};

export default Kontak;
