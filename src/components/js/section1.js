import React, { useState } from "react";
import img from "./img/mira1.jpg";
import { FaRadiation } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Sub_sec1 from "./Sub_sec1";
import shirt1 from "../../Img/shirt1.png";
import shirt2 from "../../Img/shirt2.jpg";
import shirt3 from "../../Img/shirt3.png";
import shirt4 from '../../Img/shirt4.jpg';
import shirt5 from '../../Img/shirt5.png'

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function Section1() {
  const Slides = [
    { image: img, title: "Slide 1", content: "This is the first slide" },
    { image: shirt1, title: "Slide 2", content: "This is the second slide" },
    { image: shirt2, title: "Slide 3", content: "This is the third slide" },
    { image: shirt3, title: "Slide 3", content: "This is the third slide" },
    { image: shirt4, title: "Slide 3", content: "This is the third slide" },
    { image: shirt5, title: "Slide 3", content: "This is the third slide" },
    // { image: man3, title: "Slide 4", content: "This is the fourth slide" },
    // { image: man4, title: "Slide 5", content: "This is the fifth slide" },
    // { image: man5, title: "Slide 5", content: "This is the fifth slide" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === Slides.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div class="bg-gradient-to-r from-red-300 to-slate-700 p-4 h-full pb-[2.5rem] flex justify-center">
      <div class="">
      
        {/* <img src={img1}/> */}
        <div class="flex justify-center lg:flex-row flex-col gap-20">
          <div class="mt-[6rem] lg:w-[30rem] md:w-[36rem] sm:w-[25rem] w-[19rem]">
            <h1 class="text-slate-100 font-medium">Shop the latest trends</h1>
            <p class="md:text-[52px] sm:text-[30px] text-[25px] font-bold text-slate-800">
              Find Your Perfect Look Today
            </p>
            <p class="text-slate-100 font-bold mt-10 sm:text-base text-[13px]">
              Home of Wears, Bags, Shoes and Fragrance to enhance your beauty at
              affordable price. Our customers are our priority at Mira_luxstore
            </p>
            <div class="mt-10 flex sm:gap-6 gap-3">
              <div class="bg-slate-700 sm:h-[3rem] h-[2.4rem] sm:w-[9rem] w-[7rem] flex justify-center cursor-pointer rounded-sm shadow-md shadow-black">
                <div class="flex mt-[0.6rem] absolute text-slate-100 gap-2 sm:text-base text-[13px]">
                  <a href="#">Shop Now</a>
                  <FaRadiation class="mt-1" />
                </div>
              </div>

              <div class="flex sm:gap-4 gap-2">
                <div class="bg-white sm:h-[3rem] h-[2.4rem] sm:w-[3rem] w-[2.3rem] rounded-full flex justify-center shadow-md shadow-slate-600">
                  <a href="#"><FaPlay class="text-slate-600 sm:mt-4 mt-3.5 sm:text-base text-[12px]" /></a>
                </div>
                <p class="mt-3 sm:text-base text-[12px] font-semibold text-slate-100">
                  What's Trending?
                </p>
              </div>
            </div>
          </div>

          <div className="slide ">
            <img
              src={Slides[currentSlide].image}
              alt={Slides[currentSlide].title}
              className=" sm:h-[32rem] h-[25rem] lg:mt-[5rem] mt-[0rem] w-[18rem] sm:w-[23rem] md:w-[24rem] rounded-[1rem] shadow-xl shadow-slate-800"
            />
          </div>
          <div className="controls flex gap-4 lg:mt-[30rem] lg:ml-0 md:ml-[26rem] sm:ml-[7rem] ml-[5rem] -mt-[3rem] md:-mt-[8.5rem]">
            <div onClick={goToPreviousSlide} >
              <button  className="bg-slate-200 p-4 rounded-lg">
                <FaLongArrowAltLeft className="text-red-300" fontSize={25} />
              </button>
            </div>
            <div onClick={goToNextSlide} >
              <button className="bg-slate-200 p-4 rounded-lg">
                <FaLongArrowAltRight className="text-red-300" fontSize={25} />
              </button>
            </div>
          </div>
        </div>
        {/* <Slideshow/> */}
        <div>
          <Sub_sec1 class=""/>
        </div>
      </div>
    </div>
  );
}

export default Section1;
