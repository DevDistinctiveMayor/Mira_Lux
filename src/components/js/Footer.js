import React from "react";
import img3 from "./img/mira.jpg";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div class="mt-[3rem]">
        <div class="Footer">
          <div class="">
            <div class="flex gap-2 justify-center">
              <div class="mt-[5rem] flex gap-2 justify-center">
                <img src={img3} class="rounded-lg w-[3rem] shadow-xl shadow-slate-800" />
                <h5 class="mt-2 text-red-500 font-medium font-serif text-[1.3rem]">
                  MIRA_LUX
                </h5>
              </div>
           
            </div>
            <div class="flex justify-center gap-7 mt-3 text-slate-400 font-bold">
                <a>Home.</a>
                <a>Shop.</a>
                <a>Contact.</a>
              </div>

              <div class="flex justify-center gap-5 mt-5">
                <FaFacebook fontSize={25} class="text-slate-400"/>
                <FaWhatsapp  fontSize={25} class="text-slate-400"/>
                <FaInstagram  fontSize={25} class="text-slate-400"/>
              </div>

              <div class="flex justify-center mt-[3rem]">
                <div class="border-[0.5px] border-slate-500 lg:w-[50rem] w-[30rem]"></div>
              </div>

              <div class="flex justify-center mt-[2rem]  text-slate-400 font-bold">
                <p>&copy;Copyright 2024</p>
              </div>

             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
