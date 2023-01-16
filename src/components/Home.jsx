import React from "react";
import Elapproved from "../assets/Untitled-1.png";
import product1 from "../assets/gelas.png";
import product2 from "../assets/tatakan gls.png";
import product3 from "../assets/ilust.png";

const Home = () => {
  return (
    <div name="home" className="flex flex-col h-screen my-auto content-center pt-10 pb-10">
      <div className="w-screen h-full grid grid-cols-2 gap-10  justify-center px-12 z-10">
        <div className="md:container md:mx-auto flex flex-col lg:w-[600px] place-content-center px-4  mb-4">
          <h1 className="text-5xl font-bold py-5">Best Way to Order Kaela's Merch</h1>

          <h2 className="py-5 font-semibold text-gray">Hii Felow Pemaloe! ,welcome to kaelemao the best place you can order your oshi's merch.</h2>
          <div>
            <button type="button" className="text-white bg-red hover:bg-lightRed focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
              Explore lemao merch
            </button>
          </div>
        </div>

        <div className=" pt-8 pb-8 flex items-center justify-center mb-4">
          <img className="w-16 md:w-[240px] lg:w-[470px] h-auto flex flex-col" src={Elapproved} alt="elapprove" />
        </div>
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
    </div>
  );
};

export default Home;
