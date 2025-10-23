import React, { useState } from "react";
import logo from "../../assets/images/BimboxLogo.png";
import contact from "../../assets/images/ContactLogo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router";
import HomePage from "../pages/HomePage";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="m-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-4 sm:pt-5 md:pt-6 lg:pt-8 xl:pt-10 relative font-inter z-50 ">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="Bimbox Logo"
          className="h-6 sm:h-7 md:h-8 lg:h-9 hover:cursor-pointer"
        />

        {/* Desktop/Tablet Navigation Links */}
        {/* Changed from hidden md:flex to hidden lg:flex to show on tablet */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 uppercase text-base lg:text-lg text-[#111B2D] font-normal">
          <NavLink
            to="/homeSection"
            className={({ isActive }) =>
              isActive
                ? `text-blue-500 font-semibold`
                : `hover:underline cursor-pointer`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `text-blue-500 font-semibold`
                : `hover:underline cursor-pointer`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? `text-blue-500 font-semibold`
                : `hover:underline cursor-pointer`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? `text-blue-500 font-semibold`
                : `hover:underline cursor-pointer`
            }
          >
            Pricing
          </NavLink>
        </ul>

        {/* Desktop/Tablet Buttons */}
        {/* Changed from hidden md:flex to hidden lg:flex to show on tablet */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full px-4 py-2 border border-[#0059FF] text-sm md:text-base">
            <img src={contact} alt="Contact" className="w-4 h-4" />
            Login
          </button>
          <button className="px-4 py-2 rounded-full bg-[#0059FF] text-white text-sm md:text-base">
            Talk to team
          </button>
        </div>

        {/* Hamburger Menu Icon (Mobile/Tablet) */}
        {/* Now visible on md (tablet) screens as well */}
        <div
          className="lg:hidden text-2xl sm:text-3xl cursor-pointer text-[#111B2D]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile/Tablet Menu Content */}
      {/* Visible on md (tablet) screens when open */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out z-40 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 uppercase text-base text-[#111B2D] font-normal">
          <NavLink to="/homeSection" className="hover:underline cursor-pointer py-2">Home</NavLink>
          <NavLink to="/about" className="hover:underline cursor-pointer py-2">About</NavLink>
          <NavLink to="/product" className="hover:underline cursor-pointer py-2">Product</NavLink>
          <NavLink to="/pricing" className="hover:underline cursor-pointer py-2">Pricing</NavLink>

          {/* Mobile/Tablet Buttons */}
          <div className="flex flex-col gap-3 mt-4 w-11/12 max-w-xs px-4">
            <button className="flex justify-center items-center gap-2 rounded-full px-5 py-2 border border-[#0059FF] text-sm">
              <img src={contact} alt="Contact" className="w-4 h-4" />
              Login
            </button>
            <button className="px-5 py-2 rounded-full bg-[#0059FF] text-white text-sm">
              Talk to team
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
