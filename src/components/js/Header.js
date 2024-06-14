import React, { useState } from "react";
import { FaShopify, FaUser, FaSearch } from "react-icons/fa";
import img3 from "./img/mira.jpg";
import './Header.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="fixed w-full bg-white flex justify-center p-3 z-20 -mt-1">
        <div className="flex justify-between lg:gap-[7rem] w-full max-w-screen-lg">
          <div className="text-[15px] flex gap-1 items-center sm:w-[2.5rem] w-[2rem]">
            <img src={img3} className="rounded-lg" alt="Logo"/>
            <h5 className="font-medium font-serif sm:text-basetext-[11px] text-red-500">MIRA_LUX</h5>
          </div>

  

          <div className={`menu ${isOpen ? 'open' : ''} mt-[0.5rem]`}>
            <ul className="flex gap-[1rem] font-font_D flex-col lg:flex-row">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          

          <div className="flex gap-3 items-center">
            <FaUser className="h-10 text-slate-700" />
            <FaSearch className="h-10 text-slate-700"/>
            <FaShopify className="h-10 text-slate-700"/>
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
    </div>
  );
}

export default HamburgerMenu;
