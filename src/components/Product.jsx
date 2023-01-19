import React from "react";
import product1 from "../assets/gelas.png";
import product2 from "../assets/tatakan gls.png";
import product3 from "../assets/ilust.png";
import logo from "../assets/Logo Tokopedia (PNG-1080p) - FileVector69.png";

const Product = () => {
  return (
    <div className="flex flex-col h-screen my-auto content-center pt-[240px] pb-10">
      <div className="py-10 px-10">
        <h1 className="font-bold text-3xl font-sans">Kaela's Birth Day Merch</h1>
      </div>
      <div className="w-auto h-auto  grid-cols-3 gap-10 flex-initial flex items-center justify-center pt-[100px]">
        <div className="lg:w-[320px] lg:h-[300px] bg-gradient-to-b from-red via-darkred to-black px-8 pt-6 pb-8 mb-4 rounded-lg border-4 border-black">
          <div className="-mt-[130px]">
            <img className="drop-shadow-xl rounded-lg" src={product1} alt="product1" />
          </div>
          <h1 className="text-white text-center font-bold text-2xl">Gelas Jus Set-"mau"</h1>
          <h2 className="text-white text-center font-semibold pt-5">
            Ukuran Gelas 305ml , Sedotan H 210mm Sikat Pembersih panjang 237mm , Bahan yang di gunakan gelas/kaca , sedotan alumunium anodisa , sikat pembersih stainless steel & nilon.
          </h2>
        </div>
        <div className="lg:w-[320px] lg:h-[300px] bg-gradient-to-b from-red via-darkred to-black px-8 pt-6 pb-8 mb-4 rounded-lg border-4 border-black">
          <div className="-mt-[130px]">
            <img className="drop-shadow-xl rounded-lg" src={product2} alt="product1" />
          </div>
          <h1 className="text-white text-center font-bold text-2xl">Tatakan Gelas -"You Good?"</h1>
          <h2 className="text-white text-center font-semibold pt-5">Ukuran: D103 x W8 mm Bahan: Batu & Gabus.</h2>
        </div>
        <div className="lg:w-[320px] lg:h-[300px] bg-gradient-to-b from-red via-darkred to-black px-8 pt-6 pb-8 mb-4 rounded-lg border-4 border-black">
          <div className="-mt-[130px] px-7">
            <img className=" drop-shadow-xl rounded-lg w-[170px] h-auto " src={product3} alt="product1" />
          </div>
          <h1 className="text-white text-center font-bold text-2xl">Akrilik Panel - “Lemao”</h1>
          <h2 className="text-white text-center font-semibold pt-5">Ilustrasi : Teita Ukuran : Tinggi 210mm x Lebar 148 mm Bahan: Akrilik</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-6">
        <h1 className="font-bold text-2xl font-sans">Order it on :</h1>

        <img src={logo} className="w-[240px] h-auto pt-10" alt="/" />
      </div>
    </div>
  );
};

export default Product;
