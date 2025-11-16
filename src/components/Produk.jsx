import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// Import gambar produk
import chiliOil from "../assets/chilioil.png";
import cabaiBubuk from "../assets/bubukcabai.png";
import cabaiKering from "../assets/cabaikering.png";

const products = [
  {
    img: chiliOil,
    name: "Chili Oil Premium",
    price: "Rp 25.000",
    desc: "Minyak cabai aromatik yang dibuat dari cabai segar pilihan dan rempah-rempah berkualitas. Pedas dan gurih!",
    wa: "https://wa.me/628123456789",
  },
  {
    img: cabaiBubuk,
    name: "Cabai Bubuk ",
    price: "Rp 20.000",
    desc: "Cabai kering giling murni tanpa campuran. Memberikan rasa pedas yang konsisten untuk semua masakan Anda.",
    wa: "https://wa.me/628123456789",
  },
  {
    img: cabaiKering,
    name: "Cabai Kering Utuh",
    price: "Rp 15.000",
    desc: "Cabai utuh yang dikeringkan di bawah matahari. Cocok untuk bumbu dasar atau disimpan dalam waktu lama.",
    wa: "https://wa.me/628123456789",
  },
];

const Produk = () => {
  return (
    <section className="bg-[#E9F7EF] py-16" id="produk">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#547047]">
          Produk Unggulan Kami
        </h2>
        <p className="text-gray-600 mx-auto mt-2">
          Segar dari lahan, ditanam dengan cinta dan kearifan lokal yang
          dipadukan dengan inovasi.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            {/* Gambar produk */}
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover"
            />

            {/* Konten */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-900">{p.name}</h3>
              <p className="text-[#547047] font-bold mt-1">{p.price}</p>

              <p className="text-gray-600 text-sm mt-3">{p.desc}</p>

              <a
                href={p.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-medium transition"
              >
                <FaWhatsapp size={20} />
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produk;
