import React, { useState, useEffect }  from "react";
import photo from "./photo.png"
import {TypeAnimation} from "react-type-animation";
import "../App.css"
import poto from "./tail.png"
import {createWebStorage} from "@emailjs/browser/es/utils/createWebStorage/createWebStorage";



// ...

function Hoemid(){
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setLoaded(true);
        }, 0); // Adjust delay as needed
    }, []);
    return (

        <div
            className="pag1 flex flex-col align-middle mobile:w-[20vw] lg:w-[100vw] font-urbanist font-bold mobile:h-[65vh] lg:h-[100vh] w-[100vw] mobile:mt-[10vh] lg:mt-[2%] mobile:overscroll-x-none mobile:ml-[0%] lg:ml-[0%] ">
            <div className="ml-[55%] relative top-[5%] "><img src={poto}/></div>
            <div
                className="border-2 lg:ml-[45%] lg:w-[165px]  mobile:ml-[25vw] lg:text-[30px] mobile:text-[40px] mobile:mb-[50px] mobile:h-[8vh] mobile:w-[180px] mobile:pl-[45px]  border-gray-700  lg:h-14 pt-0.5  mt-5 w-[140px] pl-8 rounded-full ">Hello
            </div>
            <TypeAnimation
                className="mobile:text-2xl lg:text-6xl ml-[20px] mb-[3%] "  // Adjust font size for different screen sizes
                preRenderFirstString={true}
                sequence={[
                    "I'm Omkar", 1000,
                    'Full Stack developer', 1000,
                ]}
                speed={50}
                style={{
                    fontSize: '35px', // Responsive font size based on viewport width
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '95vw' // Ensure the animation spans full width
                    // Adjust margin for smaller screens
                }}
                repeat={Infinity}
            />


            <div className="flex justify-between mobile:w-[90vw] cursor-pointer lg:[10%] ">
                <div className="ml-[2%] lg:inline mobile:hidden">
                    <p className="text-[70px] mt-28">**</p>
                    <div className="relative bottom-9 text-xl ">
                        <p>I Have been working on </p><p className="break-before-column">Full Stack devlopement </p><p
                        className="break-before-column">from past one Year</p>
                    </div>
                </div>
                <div className={`image ${loaded ? '' : 'hidden'}`}><img src={photo}
                                                                        className=" lg:w-[700px] mobile:mt-[0%] lg:mt-[0] lg:h-700 mobile:ml-[0vw] mobile:w-[100%] lg:ml-0 relative lg:bottom-[120px] sm:bottom-0"/>
                </div>
                <div className="lg:inline mobile:hidden ">
                    <div className="text-pink-400 text-[100px] mt-28 ">*****</div>
                    <div className="relative bottom-16"><p className="text-4xl">
                        Developing
                    </p>
                        <p className="break-before-column text-lg">
                            ---- New Skills
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Hoemid;