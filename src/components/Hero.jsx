import React from "react";
import background from "../assets/background.png";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
      bg-cover px-6 overflow-hidden pt-16"
      style={{ backgroundImage: `url(${background})` }}

    >

      {/* Konten */}
      <div className="relative z-10">
        {/* Judul */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Produksi Pertanian & Budidaya Komoditas Unggulan
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
          Kelompok Tani Manunggal Roso mengembangkan berbagai komoditas pertanian
          seperti padi, jagung, bawang daun, cabai, sedap malam, sawi, dan seledri,
          serta melakukan budidaya kolam ikan dan peternakan. Kami berfokus pada
          praktik pertanian berkelanjutan untuk menghadirkan produk yang sehat,
          berkualitas, dan ramah lingkungan.
        </p>

        {/* Tombol */}
        <a
          href="#produk"
          className="bg-[#547047] hover:bg-[#45603A] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
        
        >
          Lihat Produk Kami
        </a>
      </div>
    </section>
  );
};

export default Hero;
