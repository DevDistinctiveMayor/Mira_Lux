import React, { Component } from "react";
import Image from '../../../Img/2.jpg'
import ClientReview from "../ClientReview";
import FirstOrder from "../FirstOrder";

export default class AboutUs extends Component {
  render() {
    return (
        <div>
      <div class="bg-gradient-to-r to-red-300 from-slate-700 p-4 h-full pb-[2.5rem] flex justify-center ">

        <div class="lg:mt-[8rem] -mt-[2rem] flex justify-center">
          <div class="lg:w-[60rem] gap-7 flex lg:flex-row flex-col">
            <p class="text-center lg:w-[45rem] md:w-[37rem] w-[25rem] text-[18px] mt-[9rem] text-white">
              At{" "}
              <span className="font-bold font-serif sm:text-xl text-red-400">
                Mira_Lux
              </span>{" "}<br></br>
              Our aim is to offer you Top Quality wears that perfect your look
              and show you that we really care! Not only have we got the
              trendiest, but we can also guarantee that they are of the finest
              quality. Our aim is to continue providing our customers with
              products that keep them happy, at prices that keep them happy. Our
              customers are our top priority and through our products we work
              hard towards building long-lasting and meaningful relations with
              them.
            </p>
            <div class="flex justify-center">
            <img src={Image} class="lg:h-[30rem] md:w-[30rem] w-[20rem] rounded-lg"/>
            </div>
          </div>
   
        </div>
        </div>
        {/* <ClientReview/> */}
        <FirstOrder class=""/>        
      </div>
    );
  }
}
