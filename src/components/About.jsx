import React from "react";
import BGh from "../assets/Kaela_Opening.mp4";

const About = () => {
  return (
    <div className=" my-auto content-center pt-[250px] pb-10">
      <video src={BGh} autoPlay loop muted />
    </div>
  );
};

export default About;
