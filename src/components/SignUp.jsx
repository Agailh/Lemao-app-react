import React from "react";
import { Icon } from "@iconify/react";
import Hero from "../assets/kaela-catet.jpg";

const SignUp = () => {
  return (
    <div className=" w-screen h-[720px] grid grid-cols-2 gap-10  items-center justify-center px-10 z-10 ">
      <div className="mb-4">
        <img className="max-w-full h-auto shadow-lg rounded-3xl  flex flex-col" src={Hero} alt="hero" />
      </div>

      <div className="bg-white  px-8 pt-6 pb-8 mb-4 flex flex-col space-y-7 ">
        <h1>
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-black">Sign </span>
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-red">Up</span>
        </h1>
        <div className="items-center border-b-2 border-black bg-white py-2">
          <Icon className="position: absolute h-9 w-9" icon="mdi:user" />
          <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-2 px-2 leading-tight focus:outline-none pl-10 " type="text" name="Username" id="userName" placeholder="Username" />
        </div>
        <div className="items-center border-b-2 border-black bg-white py-2">
          <Icon className="position: absolute h-9 w-9" icon="mdi:email" />
          <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-2 px-2 leading-tight focus:outline-none pl-10 " type="email" name="email" id="Email" placeholder="Email" />
        </div>
        <div className="items-center border-b-2 border-black bg-white py-2">
          <Icon className="position: absolute h-9 w-9" icon="material-symbols:lock" />
          <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-2 px-2 leading-tight focus:outline-none pl-10" type="password" name="Pass" id="Pass" placeholder="Password" />
        </div>
        <div className="items-center border-b-2 border-black bg-white py-2">
          <Icon className="position: absolute h-9 w-9" icon="material-symbols:lock" />
          <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-2 px-2 leading-tight focus:outline-none pl-10" type="password" name="Pass" id="Pass" placeholder="Confirm Password" />
        </div>

        <div className="w-auto flex items-center justify-center text-xs">
          <a className="text-red underline font-medium" href="/">
            Login
          </a>
        </div>

        <button type="button" className="text-white bg-red hover:bg-lightRed focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
          Sign Up
        </button>
        <h2 className="w-auto flex items-center justify-center text-gray font-medium text-xs ">Or Sign Up with</h2>
        <div className="w-auto flex items-center justify-center gap-5">
          <Icon className=" h-9 w-9" icon="logos:facebook" />
          <Icon className=" h-9 w-9" icon="logos:twitter" />
          <Icon className=" h-9 w-9" icon="logos:google-icon" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
