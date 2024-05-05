import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#003333] text-[#fff5ee]">
      <div className="cursor-pointer">
        <Link to="hero" smooth={true} duration={500}>
          <img src={Logo} alt="logo" className="  w-[50px]" />
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#003333] flex flex-col justify-center items-center md:hidden"
        }
      >
        <img src={Logo} alt="/" className="w-[120px] mb-[80px]" />
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="fixed flex-col top-[35%] left-0 hidden lg:flex">
        <ul>
          <li className="rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="https://www.linkedin.com/in/sudipta-anirban-022563110/"
              target="target_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2b3137]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="https://github.com/SudiptaAnirban92"
              target="target=”_blank”"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EF6262]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="rounded-r-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F3AA60]">
            <a
              className="flex justify-between items-center w-full text-gray"
              href="/"
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
