import React, { useState } from "react";
import "./ClientReview.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

function ClientReview() {
  const slides = [
    {
      title: "Mayor",
      content:
        "Loved my recent purchase, it's exact what in the picture online.Thank you.",
    },
    {
      title: "Olamide",
      content: "My dress arrived quickly and I really love it.",
    },
    {
      title: "Precious",
      content: "The fit was perfect, and quality seems great.",
    },
    { title: "Fred", content: "Definately recommended Mira_Lux for stylish." },
    { title: "Timmy", content: "I loveeeeeeeeee the dress" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div>
      <div class=" bg-black flex justify-center h-full lg:mt-0 md:-mt-[5rem]">
        <div className="client-review-container flex justify-center py-10 ">
          <div className="client-review-content text-center sm:w-[20rem] w-[16rem] mt-[3rem]">
            <p className="text-red-500 font-medium text-[25px]  font-serif">Says</p>
            <h1 className="text-white md:text-[2.3rem] sm:text-[1.5rem] text-[1.1rem] font-medium">
              Check what clients say about us.
            </h1>
            <div className="slide sm:mt-8 mt-[4rem]">
              <div className="text-white rounded-md flex flex-col justify-center items-center text-center">
                <h2 className="sm:w-[20rem] w-[15rem]">{slides[currentSlide].content}</h2>
                <p className="mt-2 text-xl font-semibold">-
                  {slides[currentSlide].title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute sm:mt-[10rem] mt-[10rem]">
        <div className="flex justify-center lg:gap-[45rem] md:gap-[33rem] sm:gap-[25rem] gap-[10rem]">
          <button onClick={goToPreviousSlide} className=" p-2 sm:p-4 shadow-xl shadow-slate-800 rounded-md">
            <FaAngleDoubleLeft className="text-slate-300 md:text-[40px] sm:text-[30px] text-[20px]"/>
          </button>
          <button onClick={goToNextSlide} className="p-2 sm:p-4 shadow-xl shadow-slate-800 rounded-md">
            <FaAngleDoubleRight className="text-slate-300 md:text-[40px] sm:text-[30px] text-[20px]" />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ClientReview;
