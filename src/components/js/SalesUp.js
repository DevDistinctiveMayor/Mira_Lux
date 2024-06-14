import React from "react";
import sales from "../../Img/woman2.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";

function SalesUp() {
  return (
    <div class="bg-slate-100 h-[34rem] p-4 flex justify-center">
      <div class="bg-slate-300 rounded-lg lg:w-full h-min">
        <div class="">
                
                <div class="flex justify-center md:flex-row flex-col md:gap-[1rem] lg:gap-[3rem] lg:h-[26rem] mt-4 ">
                    <img
                    src={sales}
                    class="lg:w-[50rem] md:w-[25rem] sm:w-[25rem] w-[20rem] rounded-md"
                    />
                    <div class="lg:w-[50rem] sm:w-[30rem] w-[10rem]  lg:mt-[6.5rem] md:mt-[2rem] mt-[1rem] md:ml-[2rem] sm:ml-[5rem]  p-2 md:p-1">
                        <p class="text-red-500 font-medium text-sm">
                            SALES UP TO 20% OFF
                        </p>
                        <h1 class="lg:text-[2.3rem] md:text-[1.5rem] font-medium md:w-[20rem] w-[15rem] text-[1.2rem]">
                            Hundreds of New Lower process
                        </h1>
                        <p class="text-slate-500 font-medium">
                            It's more affordable than ever
                        </p>
                        <div class="flex bg-red-500 md:p-3 p-2 w-max mt-4 gap-2 rounded-lg cursor-pointer">
                            <p class="text-white ">Shop Now</p>
                            <FaArrowTrendUp class="mt-1 text-white" />
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default SalesUp;
