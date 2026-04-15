import React from "react";
import Logo from "../../../Component/Logo/Logo";
import { Link, NavLink } from "react-router";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* ✅ FIX: NO <a> wrapper */}
        <div className="btn btn-ghost text-xl">
          <Logo />
        </div>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-5">
        <Link to="/login" className="btn">Sign In</Link>
        <Link to="/register" className="btn bg-lime-300 font-bold">
          Sign Up
        </Link>

        <button className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <ArrowUpRight className="text-lime-300 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
