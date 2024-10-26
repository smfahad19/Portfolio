import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="hidden md:block">
        <span className="text-xl font-bold">Syed Muhammad Fahad</span>
      </div>

      <div className="hidden md:flex">
        <ul className="flex space-x-6">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={`${
          !nav ? "hidden" : "flex"
        } absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center`}
      >
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>

        {/* Social Icons */}
        <div className="flex space-x-6 py-6">
          <a href="https://github.com/smfahad19" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <FaGithub size={40} />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <HiOutlineMail size={40} />
          </a>
          <a href="https://www.linkedin.com/in/syed-muhammad-fahad-472490285/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <FaLinkedin size={40} />
          </a>
          <a href="https://app.luminpdf.com/viewer/671c9d73c7de2527aaed8154" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <BsFillPersonLinesFill size={40} />
          </a>
        </div>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/syed-muhammad-fahad-472490285/" target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/smfahad19" target="_blank" rel="noopener noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://app.luminpdf.com/viewer/671c9d73c7de2527aaed8154" target="_blank" rel="noopener noreferrer">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
