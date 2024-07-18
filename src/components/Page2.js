import React from "react";



function Page2() {
    return (
        <div className="lg:h-[87vh] mobile:h-[100vh] mobile:mt-[10%] lg:mt-0 pt-[5%] font-urbanist bg-gray-100">
           <div className="lg:text-5xl mobile:text-4xl lg:mt-0 mobile:mt-9 lg:mb-0 mobile:mb-9  flex gap-4 align-middle justify-center  "> <p>My</p><p  className="text-amber-500">Work Exprience</p></div>
            <div className="w-[80vw] h-[60vh] font-semibold lg:mt-[4%] mobile:mt-[18%] grid grid-rows-3  gap-5 ">
                <div className='ml-[10%] lg:flex mobile:inline gap-6 w-[100%]'>
                    <div className="">
                       <div className="lg:text-3xl mobile:text-xl ">
                           DIET IEEE SB, Vishakapatnam
                       </div>
                        <div className="lg:text-2xl  mobile:text-xl text-gray-600 ">
                            July 2023 - present
                        </div>
                    </div>
                    <div className="rounded-full border-dotted border-2 mobile:hidden lg:flex border-black h-[48px] ml-[19%] mr-[17%] w-[48px]">
                        <div className=" bg-orange-500 h-[36px] w-[36px] border rounded-full ml-1 mt-1 " ></div>
                    </div>
                    <div className="">
                        <div className="lg:text-3xl mobile:text-xl  ">
                            Web Mater
                        </div>
                        <div className="text-xl text-gray-600 ">
                            Appointed as an Web Mater <p>for my college's student branch</p>
                        </div>
                    </div>
                </div>


                <div className='ml-[10%] lg:flex mobile:inlinegap-6   w-[100%]'>
                    <div className="">
                        <div className="lg:text-3xl  mobile:text-xl  ">
                               IEEE Xtreme
                        </div>
                        <div className="text-2xl text-gray-600 ">
                            June 2023 - present
                        </div>
                    </div>
                    <div className="rounded-full mobile:hidden lg:flex border-dotted border-2 border-black ml-[33%] h-[48px] w-[48px] ">
                        <div className=" bg-black h-[36px] w-[36px] border rounded-full ml-1 mt-1 "></div>
                    </div>
                    <div className="w-[40px] lg:ml-[18%] mobile:ml-0 ">
                        <div className="lg:text-3xl mobile:text-xl  ">
                           Student Ambassdor
                        </div>
                        <div className="text-xl text-gray-600  mobile:w-[330px] lg:w-[400px] ">
                            Selected as an Student ambassdor for IEEE Xtreme 24 hours coding competition
                        </div>
                    </div>
                </div>


                <div className='ml-[10%] lg:flex gap-6 mobile:inline  w-[100%]'>
                    <div className=" lg:mt-0 mobile:mt-14">
                        <div className="lg:text-3xl mobile:text-xl   ">
                            Bharath Intern
                        </div>
                        <div className="text-2xl text-gray-600 ">
                            October 2023 - november 2023
                        </div>
                    </div>
                    <div className="rounded-full mobile:hidden lg:flex border-dotted border-2 border-black h-[48px] w-[48px] ml-[24%]">
                        <div className=" bg-orange-500 h-[36px] w-[36px] border rounded-full ml-1 mt-1 "></div>
                    </div>
                    <div className="lg:ml-[20%] mobile:ml-[33px] relative right-8 ">
                        <div className="lg:text-3xl mobile:text-2xl  ">
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
