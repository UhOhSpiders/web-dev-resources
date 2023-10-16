import React, { useState } from "react";
import { categories } from "../backend";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
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
            ? `bg-indigo-300 ${navLinkStyle}`
            : `bg-indigo-200 ${navLinkStyle}`
        }
      >
        {category.name}
      </NavLink>
    );
  });

  return (
    <>
      <div className="p-4 px-20 bg-slate-900 sticky top-0 flex items-center justify-between z-10">
        <Link to="/">
          <h1 className="text-4xl underline text-indigo-50">
            Web Dev Resources
          </h1>
        </Link>

        {/* desktop buttons */}
        <ul className="hidden md:flex md:flex-wrap md:items-center">
          {navLinks}
          <Link to="/about"><AiOutlineInfoCircle className="text-indigo-50 ml-3" size={35}/></Link>
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
