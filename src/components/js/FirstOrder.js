import React from 'react';
import Client from '../../Img/landscape.jpg'

function FirstOrder() {
  return (
    <div>
        <div>
            <div class="h-full">
                <img src={Client} class="h-[25rem] w-full"/>

                <div class="flex justify-center"> 
                    <div class="bg-white md:h-[20rem] sm:h-[16rem] h-[13rem] lg:w-[55rem] md:w-[40rem] sm:w-[30rem] w-[18rem] absolute md:-mt-[12rem] -mt-[7rem] rounded-lg shadow-xl flex justify-center">
                        <div class="mt-[2.5rem]">
                            <h1 class="md:text-[2.5rem] sm:text-[1.5rem] md:w-[25rem] sm:w-[20rem] w-[10rem] font-medium text-center text-[15px]">Get 10% Off On Your First Order</h1>
                            <p class="text-center font-medium text-slate-400 mt-3 sm:text-lg text-[13px]">By subscribing to newsletter</p>
                            <div class="flex justify-center mt-4">
                                <input type="email" placeholder='Your Email' class="bg-slate-100 outline-slate-200 sm:p-2 p-1 md:w-[19rem] sm:w-[10rem] w-[5rem] rounded-l-lg placeholder:text-[12px] sm:placeholder:text-base"/>
                                <button class="bg-red-500 md:w-[6rem] sm:w-[4rem] w-[3rem] text-white rounded-r-lg sm:text-[12px] text-[10px] font-medium">SUBMIT</button>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstOrder