import React from "react";
import { RiTShirtAirLine } from "react-icons/ri";
import { BsFillHandbagFill } from "react-icons/bs";
import { GiWatch } from "react-icons/gi";
import { PiHighHeelDuotone } from "react-icons/pi";
import { GiNecklaceDisplay } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";





const HotCategories = () => {

  const navigate = useNavigate();


  const handleNavigation = (path) => {
    navigate(path); 
    
  };



  return (
    <div>
      <div className="flex justify-center">
        <div className="lg:mt-[2rem] text-center">
          <div className="md:text-[35px] sm:text-[25px] text-[18px] font-medium">Hot Categories</div>
          <p className="text-slate-500 font-medium sm:text-base text-[11px]">
            Home of luxs, choose your catagories, let's get start.
          </p>
        </div>
      </div>
      <div class="flex justify-center lg:mt-3 mt-4">
        <div class="flex gap-[2rem] font-medium text-slate-500">
          <p class="underline hover:text-red-400 cursor-pointer sm:text-base text-[11px]"  onClick={() => handleNavigation("/men")}>Man</p>
          <p class="underline hover:text-red-400 cursor-pointer sm:text-base text-[11px]"  onClick={() => handleNavigation("/women")}>Woman</p>
        </div>
      </div>

      <div>
        <div class="flex lg:gap-[3rem] md:gap-[1rem] sm:gap-[2rem] gap-[0.5rem] justify-center mt-5">
          <div>
            <div class=" bg-slate-100 md:p-5 sm:p-4 p-3 rounded-full cursor-pointer">
              <RiTShirtAirLine className="text-red-400 sm:text-[40px] md:text-[45px] text-[20px]"  />
            </div>
            <p class="mt-3 sm:text-base text-[8.5px] font-medium text-slate-500">Clothing</p>
          </div>

          <div>
            <div class=" bg-slate-100 md:p-5 sm:p-4 p-3 rounded-full cursor-pointer">
              <BsFillHandbagFill className="text-red-400 sm:text-[40px] md:text-[45px] text-[20px]" />
            </div>
            <p class="mt-3 sm:text-base text-[8.5px] font-medium text-slate-500 md:ml-6">Bags</p>
          </div>

          <div>
            <div class=" bg-slate-100 md:p-5 sm:p-4 p-3 rounded-full cursor-pointer">
              <GiWatch className="text-red-400 sm:text-[40px] md:text-[45px] text-[20px]" />
            </div>
            <p class="mt-3 sm:text-base text-[8.5px] font-medium text-slate-500 ">Watches</p>
          </div>

          <div>
            <div class=" bg-slate-100 md:p-5 sm:p-4 p-3 rounded-full cursor-pointer">
              <PiHighHeelDuotone className="text-red-400 sm:text-[40px] md:text-[45px] text-[20px]" />
            </div>
            <p class="mt-3 sm:text-base text-[8.5px] font-medium text-slate-500 md:ml-4">Shoes</p>
          </div>
          <div>
            <div class=" bg-slate-100 md:p-5 sm:p-4 p-3 rounded-full cursor-pointer flex justify-center">
              <GiNecklaceDisplay className="text-red-400 sm:text-[40px] md:text-[45px] text-[20px]" />
            </div>
            <p class="mt-3 sm:text-base text-[8.5px] font-medium text-slate-500 md:-ml-3 lg:ml-0">Accessories</p>
          </div>
          <div>
            <div class=" bg-slate-100 md:p-5 sm:p-4 p-3 rounded-full cursor-pointer ">
              <FaBath className="text-red-400 sm:text-[40px] md:text-[45px] text-[20px]" />
            </div>
            <p class="mt-3  sm:text-base text-[8.5px] font-medium text-slate-500 md:ml-2 ">Skin Care</p>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="flex justify-center text-center">
          <p class="text-slate-500 font-medium sm:text-base text-[11px]">Check New Arrival From Our Instagram and Make Your Choice</p>
        </div>
        <div class="flex justify-center text-center mt-4">
        <div className="sm:text-[40px] md:text-[45px] text-[20px]">
        <a href="https://www.instagram.com/mira_luxstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaSquareInstagram class="text-red-600"/></a>
      </div>
        </div>
      </div>
    </div>
  );
}

export default HotCategories;
