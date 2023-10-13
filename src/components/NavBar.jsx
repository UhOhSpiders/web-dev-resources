import React, { useState } from "react";
import { categories } from "../backend";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = categories.map((category, index) => {
    return (
      <NavLink
        key={index}
        to={category.name}
        className={({ isActive }) =>
          isActive
            ? "rounded-md bg-blue-100 text-text-base block px-6 py-1  hover:bg-blue-200 md:inline-block "
            : "rounded-md bg-blue-300 text-text-base block  px-6 py-1  hover:bg-blue-200 md:inline-block "
        }
      >
        {category.name}
      </NavLink>
    );
  });

  return (
    <>
      <div className="p-4  bg-slate-100 sticky top-0 flex justify-between z-10">
        <h1 className="text-2xl underline text-slate-400">Web Dev Resources</h1>
        <ul className="hidden md:flex">{navLinks}</ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineMenu size={40}/> : <AiOutlineClose size={40}/>}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "left-0 top-0  h-full border-r self-stretch sticky md:hidden"
            : "hidden"
        }
      >
        {navLinks}
      </ul>
    </>
  );
};

export default NavBar;
