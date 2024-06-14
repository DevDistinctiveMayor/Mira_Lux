import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import man from "../../Img/1.jpg";
import man1 from "../../Img/man.jpg";
import man2 from "../../Img/man1.jpg";
import man3 from "../../Img/man2.jpg";
import man4 from "../../Img/man3.jpg";
import man5 from "../../Img/6.jpg";

import woman from "../../Img/2.jpg";
import woman1 from "../../Img/woman3.jpg";
import woman2 from "../../Img/pink4.jpg";
import woman3 from "../../Img/woman.jpg";
import woman4 from "../../Img/4.jpg";
import woman5 from "../../Img/woman2.jpg";

import scent from "../../Img/5.jpg";
import scent1 from "../../Img/scent.jpg";
import scent2 from "../../Img/scent3.jpg";
import scent3 from "../../Img/scent4.jpg";


import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function ShopCollections() {
  const menSlides = [
    { image: man, title: "Slide 1", content: "This is the first slide" },
    { image: man1, title: "Slide 2", content: "This is the second slide" },
    { image: man2, title: "Slide 3", content: "This is the third slide" },
    { image: man3, title: "Slide 4", content: "This is the fourth slide" },
    { image: man4, title: "Slide 5", content: "This is the fifth slide" },
    { image: man5, title: "Slide 5", content: "This is the fifth slide" },
  ];

  const womenSlides = [
    { image: woman, title: "Slide 1", content: "This is the first slide" },
    { image: woman1, title: "Slide 2", content: "This is the second slide" },
    { image: woman2, title: "Slide 3", content: "This is the third slide" },
    { image: woman3, title: "Slide 4", content: "This is the fourth slide" },
    { image: woman4, title: "Slide 5", content: "This is the fifth slide" },
    { image: woman5, title: "Slide 5", content: "This is the fifth slide" },
  ];

  
  const scentSlides = [
    { image: scent, title: "Slide 1", content: "This is the first slide" },
    { image: scent1, title: "Slide 2", content: "This is the second slide" },
    { image: scent2, title: "Slide 3", content: "This is the third slide" },
    { image: scent3, title: "Slide 4", content: "This is the fourth slide" },
  ];

  const [currentMenSlide, setCurrentMenSlide] = useState(0);
  const [currentWomenSlide, setCurrentWomenSlide] = useState(0);
  const [currentScentSlide, setCurrentScentSlide] = useState(0);

  const goToPreviousMenSlide = () => {
    setCurrentMenSlide(currentMenSlide === 0 ? menSlides.length - 1 : currentMenSlide - 1);
  };

  const goToNextMenSlide = () => {
    setCurrentMenSlide(currentMenSlide === menSlides.length - 1 ? 0 : currentMenSlide + 1);
  };

  const goToPreviousWomenSlide = () => {
    setCurrentWomenSlide(currentWomenSlide === 0 ? womenSlides.length - 1 : currentWomenSlide - 1);
  };

  const goToNextWomenSlide = () => {
    setCurrentWomenSlide(currentWomenSlide === womenSlides.length - 1 ? 0 : currentWomenSlide + 1);
  };

  const goToPreviousScentSlide = () => {
    setCurrentScentSlide(currentScentSlide === 0 ? scentSlides.length - 1 : currentScentSlide - 1);
  };

  const goToNextScentSlide = () => {
    setCurrentScentSlide(currentScentSlide === scentSlides.length - 1 ? 0 : currentScentSlide + 1);
  };


  return (
    <div className="bg-slate-50">
      <div className="flex justify-center">
        <div className="sm:mt-[5rem] mt-[4rem] text-center">
          <div className="md:text-[35px] sm:text-[25px] text-[18px] font-medium">Shop Collection</div>
          <p className="text-slate-500 font-medium sm:text-base text-[12px]">
            Your choices have always been Great, Make it more Glitter.
          </p>
        </div>
      </div>

      <div className="lg:mt-[2rem] flex justify-center">
        <div className="flex justify-center gap-5 m-4  lg:flex-row flex-col">
          <div className="flex sm:flex-row flex-col-reverse bg-slate-200 sm:w-[33rem] w-[17rem] md:w-full gap-3 p-4 h-full shadow-lg shadow-slate-400 rounded-md">
            <div className="sm:mt-[7rem] p-3">
              <p className="font-medium font-serif">Exclusive collections for Men</p>
              <p className="mt-2">Up To <span className="text-red-500">20%</span> Off</p>
              <div className="flex gap-3 border-2 p-2 border-black mt-2 w-max cursor-pointer rounded-lg">
                <p>Shop Now</p>
                <FaArrowTrendUp className="mt-1" />
              </div>
              <div className="controls flex gap-4 mt-3">
                <div>
                  <button onClick={goToPreviousMenSlide} className="bg-white p-4 shadow-xl shadow-slate-400 rounded-md">
                    <FaLongArrowAltLeft className="text-red-300" fontSize={25} />
                  </button>
                </div>
                <div>
                  <button onClick={goToNextMenSlide} className="bg-white p-4 shadow-xl shadow-slate-400 rounded-md">
                    <FaLongArrowAltRight className="text-red-300" fontSize={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide ">
              <img src={menSlides[currentMenSlide].image} alt={menSlides[currentMenSlide].title} className="w-[15rem] h-full rounded-md" />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col-reverse bg-slate-200 sm:w-[33rem] w-[17rem] md:w-full gap-3 p-4 h-full shadow-lg shadow-slate-400 rounded-md">
            <div className="sm:mt-[7rem] p-3">
              <p className="font-medium font-serif">Exclusive collections for Women</p>
              <p className="mt-2">Up To <span className="text-red-500">20%</span> Off</p>
              <div className="flex gap-3 border-2 p-2 border-black mt-2 w-max cursor-pointer rounded-lg">
                <p>Shop Now</p>
                <FaArrowTrendUp className="mt-1" />
              </div>
              <div className="controls flex gap-4 mt-3">
                <div>
                  <button onClick={goToPreviousWomenSlide} className="bg-white p-4 shadow-xl shadow-slate-400 rounded-md">
                    <FaLongArrowAltLeft className="text-red-300" fontSize={25} />
                  </button>
                </div>
                <div>
                  <button onClick={goToNextWomenSlide} className="bg-white p-4 shadow-xl shadow-slate-400 rounded-md">
                    <FaLongArrowAltRight className="text-red-300" fontSize={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={womenSlides[currentWomenSlide].image} alt={womenSlides[currentWomenSlide].title} className="w-[15rem] h-full rounded-lg" />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col-reverse bg-slate-200 sm:w-[33rem] w-[17rem] md:w-full gap-3 p-4 h-full shadow-lg shadow-slate-400 rounded-md">
            <div className="sm:mt-[7rem] p-3">
              <p className="font-medium font-serif">Exclusive collections of Cologne</p>
              <p className="mt-2">Up To <span className="text-red-500">20%</span> Off</p>
              <div className="flex gap-3 border-2 p-2 border-black mt-2 w-max cursor-pointer rounded-lg">
                <p>Shop Now</p>
                <FaArrowTrendUp className="mt-1" />
              </div>

             <div className="controls flex gap-4 mt-3">
                <div>
                  <button onClick={goToPreviousScentSlide} className="bg-white p-4 shadow-xl shadow-slate-400 rounded-md">
                    <FaLongArrowAltLeft className="text-red-300" fontSize={25} />
                  </button>
                </div>
                <div>
                  <button onClick={goToNextScentSlide} className="bg-white p-4 shadow-xl shadow-slate-400 rounded-md">
                    <FaLongArrowAltRight className="text-red-300" fontSize={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="slide">
              <img src={scentSlides[currentScentSlide].image} alt={scentSlides[currentScentSlide].title} className="w-[15rem] h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCollections;
