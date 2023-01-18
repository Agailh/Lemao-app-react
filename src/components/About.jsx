import React from "react";
import BGh from "../assets/Kaela_Opening.mp4";
import PP from "../assets/channels4_profile.jpg";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className=" max-w-full my-auto content-center pt-[250px] pb-10 ">
      {/* <video src={BGh} autoPlay loop muted /> */}
      <div className="max-w-full h-auto bg-black ">
        <div className="mb-4 flex flex-wrap justify-center pt-10">
          <img src={PP} className="max-w-[240px] h-auto rounded-full" alt="/" />
        </div>

        <div className="flex flex-wrap justify-center pt-5">
          <h1 className="text-white font-bold font-sans text-5xl">Kaela Kovalskia</h1>
        </div>
        <div className="flex flex-wrap justify-center space-x-1 pt-2">
          <h2 className="text-white  font-semibold font-sans  text-lg ">The </h2>
          <h2 className="text-white font-semibold font-sans  text-lg line-through">Cutest </h2>
          <h2 className="text-white font-semibold font-sans text-lg ">Coolest Blacksmith from hololive indonesia gen 3. </h2>
        </div>
        <div className="md:px-10 lg:px-[50px] pt-4">
          <h3 className="text-white text-center font-semibold font-sans ">
            "After taking over her great blacksmithing teacher's forge, she felt a lack of excitement in her life. So, she decided to be free and depart on a journey to find rare smithing materials, one of which was rumored to be under the
            building of a certain "idol group" in town."
          </h3>
        </div>
        <div className="flex flex-wrap justify-center  pt-5">
          <h3 className="text-white font-semibold"> Fan Name : PEMALOE</h3>
        </div>
        <div className="flex flex-wrap justify-center pt-10 space-x-3 ">
          <Icon className=" h-9 w-9" icon="logos:youtube-icon" />
          <h2 className="text-white font-bold font-sans text-lg">Kaela Kovalskia Ch. hololive-ID</h2>
        </div>
        <div className="grid grid-cols-4 justify-center px-5 pt-[100px] pb-10">
          <div className="flex flex-wrap justify-center space-x-1">
            <Icon className=" h-7 w-7" icon="logos:twitter" />
            <h2 className="text-white">@KaelaKovalskia</h2>
          </div>
          <div className="flex flex-wrap justify-center space-x-1">
            <Icon className=" h-7 w-7" icon="ic:baseline-tiktok" color="white" />
            <h2 className="text-white">@KaelaKovalskia</h2>
          </div>
          <div className="flex flex-wrap justify-center space-x-1">
            <Icon className=" h-7 w-7" icon="simple-icons:instagram" color="white" />
            <h2 className="text-white">@KaelaKovalskia</h2>
          </div>
          <div className="flex flex-wrap justify-center space-x-1">
            <Icon className=" h-7 w-7" icon="logos:facebook" />
            <h2 className="text-white">Kaela Kovalskia hololive ID</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
