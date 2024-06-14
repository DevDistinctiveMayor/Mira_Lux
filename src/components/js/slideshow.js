import React, { useState } from 'react';
import img1 from "./img/pink.jpg";
import img2 from "./img/pink2.jpg";
import img3 from "./img/pink4.jpg";
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";


const Slideshow = () => {
  const slides = [
    { image: img1, title: "Slide 1", content: "This is the first slide" },
    { image: img2, title: "Slide 2", content: "This is the second slide" },
    { image: img3, title: "Slide 3", content: "This is the third slide" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slideshow">
      <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} class="w-[15rem]"/>
      </div>
      <div className="controls flex">
        <div>
          <button onClick={goToPreviousSlide}><FaLongArrowAltLeft/></button>
        </div>
        <div>
         <button onClick={goToNextSlide}><FaLongArrowAltRight/></button>
        </div>
        
      </div>
    </div>
  );
};

export default Slideshow;
