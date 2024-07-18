import React from "react";
import logo from "./logo.png"
import whatsapp from "./whatsapp.png"
import union from "./Union.png"
import img from "./img.png"
import img1 from "./img_1.png"


function Page5() {


    return (<div className="bg-orange-500  ">
        <div className=" bg-neutral-900  lg:h-[40vh] mobile:h-[40vh]  border-none lg:rounded-es-full mobile:rounded-se-full lg:rounded-se-none font-urbanist text-white ">
            <div className=" ml-[20%] flex justify-between">
                <div className=" pt-[30px] mobile:text-xl lg:text-4xl"> Came Long way right ! Let's Connect</div>
                <button className="mr-[10%] lg:text-2xl mobile:text-sm lg:w-[150px] mobile:w-[90px] mobile:h-[30px] lg:h-[40px] rounded-full lg:bg-orange-500 mobile:bg-black mobile:mt-[20%] lg:mt-[2%]"><p
                    className="">Hire me</p></button>

            </div>
            <hr className="border-t border-gray-300 my-4 flex justify-center align-middle w-[85%] ml-[10%]"/>

            <div className="flex mt-[3%] ml-[10%] gap-6">

                <img src={logo} className="lg:w-[2%] mobile:w-[30px]  "/>
                <div className="mobile:text-lg lg:text-2xl">Omkar Amudala</div>

            </div>
            <div className="lg:flex mobile:inline  mobile:gap-6 lg:gap-[50%] font-urbanist ">
                <div className="flex gap-6 mobile:ml-[10%] lg:ml-[10%] mt-[2%]">
                    <img src={img} className="mobile:w-[15px] lg:w-[30px] mobile:h-5 lg:h-8"/>
                    <img src={img1} className="mobile:w-[15px] lg:w-[30px] mobile:h-5 lg:h-8"/>
                    <img src={union} className="mobile:w-[15px] lg:w-[30px] mobile:h-5 lg:h-8"/>
                    <img src={whatsapp} className="mobile:w-[15px] lg:w-[30px] mobile:h-5 lg:h-8"/>
                </div>
                <div className="lg:ml-0 mobile:ml-[10%] lg:mt-0 mobile:mt-9">
                    <div className="mobile:text-sm lg:text-2xl"> Contact me</div>
                    <div className="flex flex-col text-orange-500 ">
                        <p> akaamok0310@gmail.com</p>
                       <p> 7989453557</p>
                        <p>The-omkar-port.com</p>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default Page5;