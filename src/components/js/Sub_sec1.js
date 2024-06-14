import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

import { BiSupport } from "react-icons/bi";
import { FcCustomerSupport } from "react-icons/fc";

function Sub_sec1() {
  return (
    <div class="">
    <div class="flex justify-center mt-[1rem]">
        <div class="bg-white flex lg:gap-[5rem] md:gap-[2rem] sm:gap-[1rem] gap-[10px] sm:p-6 p-5 lg:w-[57rem] rounded-md shadow-lg absolute justify-center">
            <div class="sm:flex md:gap-[1rem] sm:gap-[0.5rem] gap-[0.2rem]">
                <div class="flex justify-center">
                    <TbTruckDelivery class="text-red-400 lg:text-[45px] md:text-[35px] sm:text-[30px] text-[23px]" />
                </div>
                <div class="">
                    <h2 class="font-medium text-[12px] md:text-base sm:text-left text-center">Free Delivery</h2>
                    <p class="md:text-sm text-[10px] text-slate-400 sm:text-left text-center">Free Delivery over $200</p>
                </div>
            </div>

            <div class="sm:flex md:gap-[1rem] sm:gap-[0.5rem] gap-[0.2rem]">
                <div class="flex justify-center">
                    <RiSecurePaymentFill class="text-red-400 lg:text-[45px] md:text-[35px] sm:text-[30px] text-[23px]"/>
                </div>
                <div class="">
                    <h2 class="font-medium text-[12px] md:text-base sm:text-left text-center">Secure Payment</h2>
                    <p class="md:text-sm text-[10px] text-slate-400 sm:text-left text-center ">100% secured payment</p>
                </div>
            </div>

            <div class="sm:flex md:gap-[1rem] sm:gap-[0.5rem] gap-[0.2rem]">
                <div class="flex justify-center">
                    <BiSupport class="text-red-400 lg:text-[45px] md:text-[35px] sm:text-[30px] text-[23px]"/>
                </div>
                <div class="">
                    <h2 class="font-medium text-[12px] md:text-base sm:text-left text-center">24/7 Support</h2>
                    <p class="md:text-sm text-[10px] text-slate-400 sm:text-left text-center">Support 24 Hours a day</p>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Sub_sec1