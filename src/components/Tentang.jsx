import React from "react";
import tentang from "../assets/tentang.png";

const Tentang = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar / Card Hijau */}
        <div>
          <img
            src={tentang}
            alt="Diskusi Petani Muda"
            className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Konten Teks */}
        <div>
          <p className="text-green-700 font-semibold tracking-wider mb-2">
            TENTANG KAMI
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
            Siapa Manunggal Roso?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Kami adalah Kelompok Petani Muda Manunggal Roso, sebuah kolektif
            generasi baru petani di desa kami yang berdedikasi untuk menerapkan
            praktik pertanian modern dan berkelanjutan.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Dengan semangat{" "}
            <span className="font-medium text-green-900">'Manunggal Roso'</span>
            (Bersatu dalam Rasa), kami bergotong-royong, berinovasi, dan bekerja
            keras untuk menghasilkan produk pertanian berkualitas tinggi,
            sekaligus menjaga kelestarian alam dan meningkatkan kesejahteraan
            bersama.
          </p>

          <a
            href="#kontak"
            className="text-green-700 text-lg font-semibold hover:underline flex items-center gap-1"
          >
            Kenali kami lebih jauh →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
