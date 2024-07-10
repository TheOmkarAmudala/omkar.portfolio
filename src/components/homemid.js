import React, { useState, useEffect }  from "react";
import photo from "./photo.png"
import {TypeAnimation} from "react-type-animation";
import "../App.css"
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

        <div className="flex flex-col align-middle  font-urbanist font-bold mobile:h-[200vh] lg:h-[110vh] mobile:mt-[40vh] lg:mt-[0]">

            <div className="border-2 lg:ml-[45%] lg:w-[165px]  mobile:ml-[75vw] lg:text-[30px] mobile:text-[90px] mobile:mb-[50px] mobile:h-[150px] mobile:w-[300px] mobile:pl-[50px]  border-gray-700  h-14 pt-0.5  mt-10 w-[140px] pl-8 rounded-full ">Hello</div>
            <TypeAnimation className=" mobile:w-[200vw] lg:w-[100vw] mobile:ml-[25%] lg:ml-0"
                preRenderFirstString={true}
                sequence={['I\'m Omkar',1000,
                    'Full Stack devloper',1000,]}
                speed={50}
                           style={{
                               fontSize: '70px',
                               display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center',

                           }}
                repeat={Infinity}/>

            <div className="flex justify-between w-[90%] ">
                <div className="ml-[7%] lg:inline mobile:hidden">
                    <p className="text-[70px] mt-28">**</p>
                    <div className="relative bottom-9 text-xl ">
                    <p>I Have been working on </p><p className="break-before-column">Full Stack devlopement </p><p
                    className="break-before-column">from past one Year</p>
                    </div>
                </div>
                <div className={`image ${loaded ? '' : 'hidden'}`}><img src={photo}  className=" lg:w-[900px] lg:h-700 mobile:ml-[55vw] mobile:w-[500px] lg:ml-0 relative lg:bottom-[120px] sm:bottom-0"  /></div>
                <div className="lg:inline mobile:hidden ">
                <div className="text-pink-400 text-[100px] mt-28 ">*****</div>
                  <div className="relative bottom-16">  <p className="text-4xl">
                        Developing
                    </p>
                    <p className="break-before-column text-lg">
                           ----  New Skills
                    </p>
                  </div>
                </div>

            </div>


        </div>
    )
}

export default Hoemid;