import React from "react";
import Media from "../../Img/woman3.jpg";
import Media1 from "../../Img/woman.jpg";
import Media2 from "../../Img/1.jpg";
import Media3 from "../../Img/2.jpg";
import Media4 from "../../Img/6.jpg";
import Media5 from "../../Img/3.jpg";

function FollowUs() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="mt-[10rem] text-center">
            <p>Follow Us</p>
            <div className="md:text-[35px] sm:text-[25px] text-[18px] font-medium">
              Instagram
            </div>
            <p className="text-slate-500 font-medium sm:text-base text-[11px]">
              Follow us on social media for more discount & promotions.
            </p>
            <a href="#" class="font-bold">
              @mira_lux
            </a>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <div class="flex sm:flex-row flex-col mt-6 h-full justify-center lg:gap-3 gap-2 lg:ml-0 ml-[1rem]">
              <div>
                <img
                  src={Media}
                  class="w-[15rem] md:w-[15rem] h-full rounded-lg hover:bg-black"
                />
              </div>
              <div>
                <img
                  src={Media2}
                  class="w-[15rem] md:w-[15rem] h-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src={Media1}
                  class="w-[15rem] h-full rounded-lg lg:block hidden"
                />
              </div>
              <div>
                <img
                  src={Media3}
                  class="w-[15rem] h-full rounded-lg lg:block hidden"
                />
              </div>

              <div>
                <img
                  src={Media4}
                  class="w-[15rem] h-full rounded-lg lg:block hidden"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center -mt-6 ml-5 sm:mt-0">
            <div class="flex sm:flex-row flex-col mt-6 justify-center gap-2 sm:-ml-7">
              <div>
                <img
                  src={Media4}
                  class="w-[15rem] md:w-[15rem] h-full rounded-lg lg:hidden"
                />
              </div>
              <div>
                <img
                  src={Media1}
                  class="w-[15rem] md:w-[15rem] h-full rounded-lg lg:hidden"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center ml-6">
            <div class="flex sm:flex-row flex-col mt-6 justify-center gap-2 sm:-ml-7">
              <div>
                <img
                  src={Media3}
                  class="w-[15rem] h-full rounded-lg lg:hidden"
                />
              </div>
              <div>
                <img
                  src={Media5}
                  class="w-[15rem] h-full rounded-lg lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
