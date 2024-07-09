import React, { useState } from "react";
import { FaShopify, FaUser, FaSearch } from "react-icons/fa";
import img3 from "./img/mira.jpg";
import './Header.css';
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu
    setIsSearchOpen(false); // Close the search bar
  };

  return (
    <div className="flex justify-center">
      <div className="reletive w-full bg-white flex justify-center p-3 z-20">
        <div className="flex justify-between lg:gap-[7rem] w-full max-w-screen-lg">
          <div className="text-[15px] flex gap-1 items-center sm:w-[2.5rem] w-[2rem]">
            <img src={img3} className="rounded-lg" alt="Logo" />
            <h5 className="font-medium font-serif sm:text-base text-[11px] text-red-500">MIRA_LUX</h5>
          </div>

          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <ul className="flex gap-[1rem] font-font_D flex-col lg:flex-row">
              <li className="cursor-pointer" onClick={() => handleNavigation("/aboutus")}>About Us</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/women")}>Women</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/men")}>Men</li>
              <li className="cursor-pointer" onClick={() => handleNavigation("/accessories")}>Accessories</li>
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <FaUser className="h-10 text-slate-700 cursor-pointer" onClick={() => handleNavigation("/")} />
            <FaSearch className="h-10 text-slate-700 cursor-pointer" onClick={toggleSearch} />
            <FaShopify className="h-10 text-slate-700" />
          </div>

          <label
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
        <input
          type="text"
          placeholder="Search..."
          className="w-[20rem] p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

export default HamburgerMenu;
