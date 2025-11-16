import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Produk from "./components/Produk";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Tentang />
      <Produk />
      <Kontak />
      <Footer />
    </div>
  );
}

export default App;
