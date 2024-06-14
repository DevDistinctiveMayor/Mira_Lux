import React from "react";
import shirt from "../../Img/shirt.jpg";
import shirt1 from "../../Img/shirt1.png";
import shirt2 from "../../Img/shirt2.jpg";
import shirt3 from "../../Img/shirt3.png";
import shirt4 from "../../Img/shirt4.jpg";
import shirt5 from "../../Img/shirt5.png";
import shirt6 from "../../Img/shirt6.jpg";
import Like from "./Like";
import { IoStarSharp } from "react-icons/io5";

function TopProducts() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="lg:mt-[3rem] mt-[3rem] text-center">
            <div className="md:text-[35px] sm:text-[25px] text-[18px] font-medium">Top Products</div>
            <p className="text-slate-500 font-medium">Classy Picks.</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:mt-10 mt-5">
        <div class="flex sm:gap-[2rem] gap-[0.5rem] text-[0.7rem] sm:text-[1rem] font-medium text-slate-500">
          <p class="hover:underline hover:text-red-400 cursor-pointer">
            New Products
          </p>
          <p class="hover:underline hover:text-red-400 cursor-pointer">
            Feature Products
          </p>
          <p class="hover:underline hover:text-red-400 cursor-pointer">
            On Sale Products
          </p>
          <p class="hover:underline hover:text-red-400 cursor-pointer">
            Trending Products
          </p>
        </div>
      </div>
      
    
      <div class="bg-slate-100 h-full">
        <div class="flex justify-center">
        <div class="sm:flex p-9 gap-5 justify-center">
          <div class="bg-white p-5 sm:h-full rounded-lg shadow-xl shadow-slate-400 sm:w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer">
            <div class="flex justify-center ">
              <div class="mt-5">
                <p class="font-semibold">New</p>
                <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                  -50%
                </p>
              </div>
              <img src={shirt} class="h-[13rem] rounded-lg" />
            </div>
            <div class="flex justify-center gap-[4rem] mt-3">
              <p class="font-medium font-serif">Soft Vintage Top</p>
              <Like />
            </div>
            <div class="flex justify-center gap-[8rem]">
              <div class="flex gap-1">
                <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
                <span class="text-slate-500 font-medium">5.0(18)</span>
              </div>
              <p class="font-semibold font-serif">$150</p>
            </div>
          </div>

          <div class="bg-white p-5 sm:h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer sm:mt-0 mt-5">
            <div class=" flex justify-center gap-2">
              <div class="mt-5">
                <p class="font-semibold">New</p>
                <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                  -5%
                </p>
              </div>
              <img src={shirt4} class="h-[13rem] rounded-lg" />
            </div>
            <div class="flex justify-center gap-[6rem] mt-3">
              <p class="font-medium font-serif">Hoodie Top</p>
              <Like />
            </div>
            <div class="flex justify-center gap-[8rem]">
              <div class="flex gap-1">
                <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
                <span class="text-slate-500 font-medium">5.0(68)</span>
              </div>
              <p class="font-semibold font-serif">$200</p>
            </div>
          </div>

          <div class="bg-white p-5 h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer hidden lg:block">
            <div class="flex justify-center ">
              <div class="mt-5">
                <p class="font-semibold">New</p>
                <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                  -15%
                </p>
              </div>
              <img src={shirt1} class="h-[13rem] rounded-lg" />
            </div>
            <div class="flex justify-center gap-[4rem] mt-3">
              <p class="font-medium font-serif">Soft Tank Top</p>
              <Like />
            </div>
            <div class="flex justify-center gap-[8rem]">
              <div class="flex gap-1">
                <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
                <span class="text-slate-500 font-medium">5.0(38)</span>
              </div>
              <p class="font-semibold font-serif">$130</p>
            </div>
          </div>
        </div>
        </div>

        <div class="flex justify-center">
        <div class="sm:flex  p-9 gap-5 justify-center">
          <div class="bg-white p-5 h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer lg:block hidden">
            <div class=" flex justify-center gap-3">
              <div class="mt-5">
                <p class="font-semibold">New</p>
                <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                  -10%
                </p>
              </div>
              <img src={shirt2} class="h-[13rem] w-[10rem] rounded-lg" />
            </div>
            <div class="flex justify-center gap-[6rem] mt-3">
              <p class="font-medium font-serif">Design Top</p>
              <Like />
            </div>
            <div class="flex justify-center gap-[8rem]">
              <div class="flex gap-1">
                <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
                <span class="text-slate-500 font-medium">5.0(28)</span>
              </div>
              <p class="font-semibold font-serif">$110</p>
            </div>
          </div>

     
          <div class="bg-white p-5 sm:h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3 hover:bg-slate-400 cursor-pointer">
            <div class="flex justify-center gap-2">
              <div class="mt-5">
                <p class="font-semibold">New</p>
                <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                  -20%
                </p>
              </div>
              <img src={shirt3} class="h-[13rem] rounded-lg" />
            </div>
            <div class="flex justify-center gap-[4.5rem] mt-3">
              <p class="font-medium font-serif">Plain Tee Top</p>
              <Like />
            </div>
            <div class="flex justify-center gap-[8rem]">
              <div class="flex gap-1">
                <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
                <span class="text-slate-500 font-medium">5.0(48)</span>
              </div>
              <p class="font-semibold font-serif">$100</p>
            </div>
          </div>

          <div class="bg-white p-5 sm:h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer sm:mt-0 mt-5">
            <div class=" flex justify-center ">
              <div class="mt-5">
                <p class="font-semibold">New</p>
                <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                  -10%
                </p>
              </div>
              <img src={shirt6} class="h-[13rem] rounded-lg" />
            </div>
            <div class="flex justify-center gap-[5rem] mt-3">
              <p class="font-medium font-serif">Gown Dress</p>
              <Like />
            </div>
            <div class="flex justify-center gap-[8rem]">
              <div class="flex gap-1">
                <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
                <span class="text-slate-500 font-medium">5.0(53)</span>
              </div>
              <p class="font-semibold font-serif">$I60</p>
            </div>
          </div>
        </div>
        </div>
    

      <div class="flex justify-center">
      <div class="sm:flex  p-9 gap-5 justify-center lg:hidden">
        <div class="bg-white p-5 sm:h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer">
          <div class=" flex justify-center gap-3">
            <div class="mt-5">
              <p class="font-semibold">New</p>
              <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                -10%
              </p>
            </div>
            <img src={shirt2} class="h-[13rem] w-[10rem] rounded-lg" />
          </div>
          <div class="flex justify-center gap-[6rem] mt-3">
            <p class="font-medium font-serif">Design Top</p>
            <Like />
          </div>
          <div class="flex justify-center gap-[8rem]">
            <div class="flex gap-1">
              <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
              <span class="text-slate-500 font-medium">5.0(28)</span>
            </div>
            <p class="font-semibold font-serif">$110</p>
          </div>
        </div>

        <div class="bg-white p-5 sm:h-full rounded-lg shadow-xl shadow-slate-400 w-[17rem] gap-3  hover:bg-slate-400 cursor-pointer sm:mt-0 mt-5">
          <div class=" flex justify-center ">
            <div class="mt-5">
              <p class="font-semibold">New</p>
              <p class="bg-red-500 w-[4rem] p-1 text-white text-sm rounded-lg flex justify-center">
                -15%
              </p>
            </div>
            <img src={shirt1} class="h-[13rem] rounded-lg" />
          </div>
          <div class="flex justify-center gap-[4rem] mt-3">
            <p class="font-medium font-serif">Soft Tank Top</p>
            <Like />
          </div>
          <div class="flex justify-center gap-[8rem]">
            <div class="flex gap-1">
              <IoStarSharp class="mt-1 text-yellow-400" fontSize={18} />
              <span class="text-slate-500 font-medium">5.0(38)</span>
            </div>
            <p class="font-semibold font-serif">$130</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default TopProducts;
