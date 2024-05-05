import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#003333] text-[#b2c9c9]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1360px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-2 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#8C1919]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Sudipta, nice to see you here. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a junior developer who is passionate about building great
              software that changes people's lives. Right now, I am focusing on
              front end development, that is anything from designing to styling
              web applications to make sure they are fully responsive and truly
              impressive to anyone that sees them. I aspire to deliver my work
              for any individual and small businesses all the way to large
              corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
