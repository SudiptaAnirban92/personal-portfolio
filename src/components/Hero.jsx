import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#003333]">
      {/* Container */}
      <div className="max-w-[1360px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-[#ffb3b3] text-2xl">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#b2c9c9]">
          Sudipta Anirban
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#5e8483]">
          I'm a front end developer.
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px]">
          I am an amateur developer specializing in front end web development.
          Currently, I'm focused on developing exceptional web applications and
          building a great portfolio.
        </p>
        <div>
          <Button
            to="work"
            smooth={true}
            duration={500}
            className="group text-[#fff5ee] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8C1919] hover:border-[#8C1919]"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={20} className="ml-4" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
