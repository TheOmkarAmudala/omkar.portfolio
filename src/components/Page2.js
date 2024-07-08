import React from "react";



function Page2() {
    return (
        <div className="h-[87vh] pt-[5%] font-urbanist bg-gray-100">
           <div className="text-5xl flex gap-4 align-middle justify-center  "> <p>My</p><p  className="text-amber-500">Work Exprience</p></div>
            <div className="w-[80vw] h-[60vh] font-semibold mt-[4%] grid grid-rows-3  gap-5 ">
                <div className='ml-[10%] flex gap-6 w-[100%]'>
                    <div className="">
                       <div className="text-3xl  ">
                           DIET IEEE SB, Vishakapatnam
                       </div>
                        <div className="text-2xl text-gray-600 ">
                            July 2023 - present
                        </div>
                    </div>
                    <div className="rounded-full border-dotted border-2 border-black h-[48px] ml-[19%] mr-[17%] w-[48px]">
                        <div className=" bg-orange-500 h-[36px] w-[36px] border rounded-full ml-1 mt-1 " ></div>
                    </div>
                    <div className="">
                        <div className="text-3xl  ">
                            Web Mater
                        </div>
                        <div className="text-xl text-gray-600 ">
                            Appointed as an Web Mater <p>for my college's student branch</p>
                        </div>
                    </div>
                </div>


                <div className='ml-[10%] flex gap-6  w-[100%]'>
                    <div className="">
                        <div className="text-3xl  ">
                               IEEE Xtreme
                        </div>
                        <div className="text-2xl text-gray-600 ">
                            June 2023 - present
                        </div>
                    </div>
                    <div className="rounded-full border-dotted border-2 border-black ml-[33%] h-[48px] w-[48px] ">
                        <div className=" bg-black h-[36px] w-[36px] border rounded-full ml-1 mt-1 "></div>
                    </div>
                    <div className="w-[40px] ml-[18%]">
                        <div className="text-3xl  ">
                           Student Ambassdor
                        </div>
                        <div className="text-xl text-gray-600   w-[400px] ">
                            Selected as an Student ambassdor for IEEE Xtreme 24 hours coding competition
                        </div>
                    </div>
                </div>


                <div className='ml-[10%] flex gap-6  w-[100%]'>
                    <div className="">
                        <div className="text-3xl  ">
                            Bharath Intern
                        </div>
                        <div className="text-2xl text-gray-600 ">
                            October 2023 - november 2023
                        </div>
                    </div>
                    <div className="rounded-full border-dotted border-2 border-black h-[48px] w-[48px] ml-[24%]">
                        <div className=" bg-orange-500 h-[36px] w-[36px] border rounded-full ml-1 mt-1 "></div>
                    </div>
                    <div className="ml-[20%] relative right-8 ">
                        <div className="text-3xl  ">
                           Intern
                        </div>
                        <div className="text-xl text-gray-600 ">
                            Worked as an intern <p>Completed Given tasks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2;
