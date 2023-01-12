import React from "react";
import Elapproved from "../assets/Untitled-1.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-full">
      <div className="w-screen h-full grid grid-cols-2 gap-10  content-center justify-center px-12 z-10">
        <div className="container h-[120px]   mb-4">
          <h1 className="text-5xl font-bold py-5">Best Way to Order Kaela's Merch</h1>

          <h2 className="py-5 font-semibold text-gray">Hii Felow Pemaloe! ,welcome to kaelemao the best place you can order your oshi's merch.</h2>
          <button type="button" className="text-white bg-red hover:bg-lightRed focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
            Explore lemao merch
          </button>
        </div>

        <div className="px-8 pt-6 pb-8 mb-4">
          <img className="max-w-full h-auto flex flex-col" src={Elapproved} alt="elapprove" />
        </div>
      </div>
    </div>
  );
};

export default Home;
