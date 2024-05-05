import React from "react";
import python from "../assets/python.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import django from "../assets/django.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#003333] text-[#b2c9c9] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1360px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#8C1919]">
            Skills
          </p>
          <p className="py-6">
            // These are the technologies I've worked with
            </p>
        </div>

        {/* Icon container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={html} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={css} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={javascript} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={react} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={python} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={django} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">Django</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={tailwind} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#001a1a] hover:scale-110 duration-500">
            <img src={github} alt="html icon" className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
