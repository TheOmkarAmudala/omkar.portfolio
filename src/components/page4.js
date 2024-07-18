import React from "react";
import Back from "./back.png"
import {ContactUs} from "./mail";

function Page4() {
    return (<div class="pag4 bg-cover bg-center h-screen  mobile:w-[100vw] lg:w-[100vw] lg:h-[110vh] mobile:lg-[100vh]">
        <div className="flex flex-col font-urbanist">
       <div className="text-white font-urbanist text-5xl lg:ml-[30%] lg:pt-[5%] lg-mt-0 mobile:mt-14 lg:mb-[3%] mobile:text-3xl lg:text-[50px] mobile:ml-[18%] mobile:w-[300px] lg:w-[700px] ">Have an awesome project idea? <p className="text-orange-500 mt-5 mobile:ml-[10%] lg:ml-[25%]">Let's Discuss</p></div>
            <div className="text-white mobile:relative lg:relative lg:top-0 mobile:top-[470px] lg:ml-[25%] mobile:ml-[15%] mobile:w-[300px] lg:w-[980px] lg:text-xl mobile:text-lg   ">Have an awesome idea about a certain project ! have any doubt ? Collaborating with me !, any thing <p className="lg:ml-[30%] mobile:ml-[-15px]">-- Contact me here, i will Do my Best</p>  </div>

        </div>
        <div className="lg:w-[700px] border-none rounded-3xl lg:mt-[5%] mobile:mt-[-10%]  lg:h-[300px] flex justify-center align-middle lg:mr-0 lg:ml-[30%] mobile:ml-10 opacity-10 bg-white mobile:w-[300px] mobile:h-[300px] mobile:mr-[70px]">
            <p className="text-black text-2xl"></p>
            <ContactUs/>
        </div>
    </div>)
}

export default Page4;