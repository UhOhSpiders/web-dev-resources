import React, { useState } from "react";
import { categories } from "../backend";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = categories.map((category, index) => {
    let navLinkStyle =
      "rounded-md text-text-base block mx-3 px-6 py-1 my-1  hover:bg-indigo-50 md:inline-block";
    return (
      <NavLink
        key={index}
        to={category.name}
        className={({ isActive }) =>
          isActive
            ? `bg-gradient-to-tr from-orange-400 to-yellow-300 ${navLinkStyle}`
            : `bg-indigo-200 ${navLinkStyle}`
        }
      >
        {category.name}
      </NavLink>
    );
  });

  return (
    <>
      <div className="p-4 px-20 bg-slate-900 sticky top-0 flex items-center justify-center  z-10">
        <RiComputerLine
          size={40}
          className="fill-purple-500 mr-3 md:mr-6 md:flex-shrink-0"
        />
        <Link to="/" className="flex flex-wrap ">
          <h1 className="md:text-4xl text-1xl text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 mr-14">
            Web Development Resources
          </h1>
        </Link>

        {/* desktop buttons */}
        <ul className="hidden md:flex md:flex-wrap md:items-center">
          {navLinks}
          <Link to="/about">
            <AiOutlineInfoCircle className="text-indigo-50 ml-3" size={35} />
          </Link>
        </ul>

        {/* mobile buttons */}
        <div onClick={handleNav} className="block md:hidden">
          <Hamburger toggled={nav} toggle={setNav} color="#ffffff" />
        </div>
      </div>

      <ul
        className={
          nav
            ? "left-0 top-0  h-full border-r self-stretch  md:hidden"
            : "hidden"
        }
      >
        {navLinks}
      </ul>
    </>
  );
};

export default NavBar;
