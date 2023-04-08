import React, { useState } from "react";
import {
  HomeIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex justify-between items-center md:mx-12 mx-3 my-2 p-2">
      <Link to="/">
        <div className="flex justify-center items-center gap-3">
          <HomeIcon className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-semibold">GadgetBD</h1>
        </div>
      </Link>

      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <span>
            {" "}
            <Bars3Icon className="h-8 w-8 text-blue-500" />
          </span>
        ) : (
          <XCircleIcon className="h-8 w-8 text-blue-500" />
        )}
      </div>

      <div
        className={`flex flex-col duration-500 gap-8 text-lg md:hidden absolute ${
          isOpen
            ? "-top-80 bg-gray-100 p-12 right-2"
            : "top-14 bg-gray-100 p-12 right-2"
        }`}
      >
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/"
          className={(isActive) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Shop
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <ShoppingCartIcon className="h-8 w-8 text-blue-500" />
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About Us
        </NavLink>
      </div>

      <div className=" md:flex hidden k=justify-center gap-6">
        <NavLink to="/" className={(isActive) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <ShoppingCartIcon className="h-8 w-8 text-blue-500" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
