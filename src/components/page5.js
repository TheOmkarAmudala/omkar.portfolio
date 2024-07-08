import React from "react";
import logo from "./logo.png"
import whatsapp from "./whatsapp.png"
import union from "./Union.png"
import img from "./img.png"
import img1 from "./img_1.png"


function Page5() {


    return (<div className="bg-orange-500">
        <div className=" bg-neutral-900 h-[40vh] border-none rounded-es-full font-urbanist text-white ">
            <div className=" ml-[20%] flex justify-between">
                <div className=" pt-[30px]  text-4xl"> Came Long way right ! Let's Connect</div>
                <button className="mr-[10%] text-2xl w-[150px] h-[40px] rounded-full bg-orange-500 mt-[2%]"><p
                    className="">Hire me</p></button>

            </div>
            <hr className="border-t border-gray-300 my-4 flex justify-center align-middle w-[85%] ml-[10%]"/>

            <div className="flex mt-[3%] ml-[10%] gap-6">

                <img src={logo} className="w-[2%]  "/>
                <div className="text-2xl">Omkar Amudala</div>

            </div>
            <div className="flex gap-[50%] font-urbanist ">
                <div className="flex gap-6 ml-[10%] mt-[2%]">
                    <img src={img} className="w-[30px] h-8"/>
                    <img src={img1} className="w-[30px] h-8"/>
                    <img src={union} className="w-[30px] h-8"/>
                    <img src={whatsapp} className="w-[45px] h-8"/>
                </div>
                <div className="">
                    <div className="text-2xl"> Contact me</div>
                    <div className="flex flex-col text-orange-500">
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