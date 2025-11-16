import React from "react";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="h-screen bg-[#022b22] flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        Petani Muda Manunggal Roso
      </h1>

      <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl">
        Komunitas petani muda yang bergerak dalam pertanian berkelanjutan untuk
        menghadirkan produk pertanian berkualitas, sehat, dan ramah lingkungan.
      </p>

      <a
        href="#produk"
        className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
      >
        Lihat Produk Kami
      </a>
    </section>
  );
};

export default Hero;
