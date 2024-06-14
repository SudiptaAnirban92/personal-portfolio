import React from "react";
import basic from "../assets/basic-landing.jpg";
import data from "../assets/data-finance.jpg";
import eats from "../assets/best-eats.jpg";
import solar from "../assets/solar.jpg";
import portfolio from "../assets/portfolio.jpg";
import docs from "../assets/docs.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#b2c9c9] bg-[#003333]">
      {/* Container */}
      <div className="max-w-[1360px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-[#8C1919]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <div
            style={{
              backgroundImage: `url(${eats})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            className="shadow-lg shadow-[#001a1a] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://sudiptaanirban92.github.io/food-app-react/"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92/food-app-react.git "
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${portfolio})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            className="shadow-lg shadow-[#001a1a] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://portfolio-nextjs-pink-beta.vercel.app/"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92/portfolio-nextjs.git"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${data})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            className="shadow-lg shadow-[#001a1a] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://sudiptaanirban92.github.io/data-finance/"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92/data-finance.git"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${solar})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            className="shadow-lg shadow-[#001a1a] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML/CSS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://solar-app-react.vercel.app/"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92/solar-app-react.git"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${docs})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            className="shadow-lg shadow-[#001a1a] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://docs-react-self.vercel.app/"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92/docs-react.git"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${basic})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
            className="shadow-lg shadow-[#001a1a] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML/CSS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://sudiptaanirban92.github.io/basic-landing-page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SudiptaAnirban92/basic-landing-page.git"
                  target="target_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
