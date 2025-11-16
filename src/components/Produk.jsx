import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    title: "Chili Oil",
    name: "Chili Oil Premium",
    price: "Rp 25.000",
    desc: "Minyak cabai aromatik yang dibuat dari cabai segar pilihan dan rempah-rempah berkualitas. Pedas dan gurih!",
    wa: "https://wa.me/628123456789",
  },
  {
    title: "Cabai Bubuk",
    name: "Cabai Bubuk Asli",
    price: "Rp 20.000",
    desc: "Cabai kering giling murni tanpa campuran. Memberikan rasa pedas yang konsisten untuk semua masakan Anda.",
    wa: "https://wa.me/628123456789",
  },
  {
    title: "Cabai Kering",
    name: "Cabai Kering Utuh",
    price: "Rp 15.000",
    desc: "Cabai utuh yang dikeringkan di bawah matahari. Sempurna untuk bumbu dasar atau disimpan dalam waktu lama.",
    wa: "https://wa.me/628123456789",
  },
];

const Produk = () => {
  return (
    <section className="bg-[#E9F7EF] py-16" id="produk">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-green-700 tracking-wide">
          HASIL BUMI
        </p>
        <h2 className="text-3xl font-bold text-green-900">
          Produk Unggulan Kami
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Segar dari lahan, ditanam dengan cinta dan kearifan lokal yang dipadukan
          dengan inovasi.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden border"
          >
            <div className="bg-red-800 text-white text-center py-14 text-3xl font-semibold">
              {p.title}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-900">{p.name}</h3>
              <p className="text-green-700 font-bold mt-1">{p.price}</p>

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
