import React from 'react'
import { categories} from "../backend";
import { Link } from "react-router-dom"

const NavBar = () => {

  const navLinks = categories.map((category, index) => {
    return (
      <Link key={index} to={category.name}>
        <h1>{category.name}</h1>
      </Link>
    );
  });

  return (
    <div>{navLinks}</div>
  )
}

export default NavBar