import React, { useState, useEffect }  from "react";
import photo from "./photo.png"
import {TypeAnimation} from "react-type-animation";
import "../App.css"


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
        <div className="flex flex-col align-middle  font-urbanist font-bold">

            <div className="border-2 ml-[45%] text-[30px] border-gray-700  h-14 pt-1 mt-9 w-[140px] pl-8 rounded-full">Hello</div>
            <TypeAnimation className="ml-[35%] "
                preRenderFirstString={true}
                sequence={['I\'m Omkar',1000,
                    'Full Stack devloper',1000,]}
                speed={50}
                style={{ fontSize: '70px'} }
                repeat={Infinity}/>

            <div className="flex justify-between w-[90%]">
                <div className="ml-[7%]">
                    <p className="text-[70px] mt-28">**</p>
                    <div className="relative bottom-9 text-xl ">
                    <p>I Have been working on </p><p className="break-before-column">Full Stack devlopement </p><p
                    className="break-before-column">from past one Year</p>
                    </div>
                </div>
                <div className={`image ${loaded ? '' : 'hidden'}`}><img src={photo} className="lg:w-[800px] lg:h-[700px] mobile:w-[300px] mobile:h-[100px] relative bottom-[90px]" /></div>
                <div>
                <div className="text-pink-400 text-[100px] mt-28">*****</div>
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