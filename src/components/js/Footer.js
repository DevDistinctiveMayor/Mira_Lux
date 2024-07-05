import React from "react";
import img3 from "./img/mira.jpg";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div class="mt-[4rem] pt-[0.3rem]">
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
                <a href="https://www.instagram.com/mira_luxstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram fontSize={25} class="text-slate-400"/></a>
                <a href="https://wa.me/message/55V7IO44DQNVL1"><FaWhatsapp  fontSize={25} class="text-slate-400"/></a>
              </div>

                <div class="flex justify-center gap-5 mt-5  text-slate-400 font-bold">Address</div>
              <div class="flex justify-center">
                <div class="underline text-blue-300 text-[15px]">Shop 03 Obayemi Mall Opposite Old Nao Ado Ekiti, Nigeria.</div>
              </div>

              <div class="flex justify-center gap-5 mt-5  text-slate-400 font-bold">PhoneNo</div>
              <a href="tel:07044721537"  class="flex justify-center gap-5  text-slate-50 font-bold">+234 704 472 1537</a>

              <div class="flex justify-center mt-[1rem]  text-slate-400 font-bold">
                <p>&copy;Copyright 2024</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
