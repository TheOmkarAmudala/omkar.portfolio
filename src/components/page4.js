import React from "react";
import Back from "./back.png"
import {ContactUs} from "./mail";

function Page4() {
    return (<div class="pag4 bg-cover bg-center h-screen  mobile:w-[290vw] lg:w-[100vw]">
        <div className="flex flex-col font-urbanist">
       <div className="text-white font-urbanist text-5xl lg:ml-[30%] lg:pt-[5%] lg:mb-[3%] mobile:w-[700px] ">Have an awesome project idea? <p className="text-orange-500 mt-5 ml-[18%]">Let's Discuss</p></div>
            <div className="text-white ml-[25%] w-[880px] text-xl   ">Have an awesome idea about a certain project ! have any doubt ? Collabrating with me !, any thing <p className="ml-[30%]">-- Contact me here, i will Do my Best</p>  </div>

        </div>
        <div className="w-[700px] border-none rounded-3xl mt-[5%]  h-[300px] flex justify-center align-middle ml-[30%] opacity-10 bg-white">
            <p className="text-black text-2xl"></p>
            <ContactUs/>
        </div>
    </div>)
}

export default Page4;