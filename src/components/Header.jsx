import React from "react";
import { Link } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Technologies", link: "technologies" },
    { name: "Contact", link: "contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    
    <div className="bg-[#FEFEFE] sticky top-0 shadow fixed z-10 max-w-7xl mx-auto" >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <a className="text-primary transition-all duration-200 hover:text-secondary"  href="">
            Antman
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-primary absolute"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`rounded-b-3xl shadow-2xl md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-[#FEFEFE] sm:bg-[#FEFEFE] transition-all duration-500 ease-in cursor-pointer ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-primary transition-all duration-200 hover:text-secondary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
