import React, { useState } from "react";
import Logo from "./logo.png";
import { MdHomeFilled } from "react-icons/md";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { IoLinkSharp } from "react-icons/io5";
import { RxResume } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { FaMale } from "react-icons/fa";
import page2 from "./Page2";


function Navbar() {
    const [isHomeHovered, setIsHomeHovered] = useState(false);

    const handleHover = () => {
        setIsHomeHovered(true);
    };

    const handleLeave = () => {
        setIsHomeHovered(false);
    };

    return (
        <div>
            <div className="w-[70%]  bg-black h-[60px] border flex rounded-full ml-[15%] text-white text-l mt-8">
                <div className="flex lg:w-[40%] mobile:w-[15%] justify-between mt-2">
                    <div
                        className={`transition-all duration-500 flex cursor-pointer ${
                            isHomeHovered ? "bg-black" : "bg-rose-400"
                        } hover:bg-black ml-5  lg:h-10 lg:w-24 mobile:h-7 mobile:mt-2 lg:mt-0 mobile:pt-0 lg:pt-1.5  rounded-2xl pl-3 mobile:pl-2 lg:pr-0 mobile:pr-2 `}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    > <MdHomeFilled className="mt-1 ml-2"/>
                        <p className="lg:flex mobile:hidden"> Home</p>
                    </div>
                    <div
                        className="bg-black cursor-pointer hover:bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-3 lg:flex mobile:hidden"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <FaMale className="mt-1 mr-1"/>
                        <p className=""> About</p>
                    </div>
                    <div
                        className="bg-black hover:bg-rose-400 ml-3 cursor-pointer lg:h-10 mobile:h-8 mobile:mt-1 lg:mt-0 mobile:pt-1 w-24  lg:pt-1.5 rounded-2xl pl-3 pr-2 flex"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <IoLinkSharp className="mt-1 mr-1 "/>
                        <p className="lg:flex mobile:hidden"> Links</p>
                    </div>
                </div>
                <div className="w-[10%] lg:ml-[100px] mobile:ml-[30%]">
                    <div className="flex">
                        <div className="w-10 h-10 mt-2 bg-rose-800 border-none rounded-full">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="mt-3"></div>
                    </div>
                </div>
                <div className="flex w-[40%] justify-around mt-2">
                    <div
                        className="bg-black hover:bg-rose-400 ml-3 cursor-pointer lg:h-10 mobile:h-8 mobile:mt-1 lg:mt-0 mobile:pt-1 w-24  lg:pt-1.5 rounded-2xl pl-3 mobile:pr-2 lg:pr-0 flex"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    ><RxResume className="mt-1 mr-1"/>
                        <a href="https://drive.google.com/file/d/1R1fKGKSjSZnwEWAPCZCV30cTGtXLEhZY/view?usp=drivesdk">  <p className="lg:flex mobile:hidden"> Resume</p></a>
                    </div>
                    <div
                        className="bg-black hover:bg-rose-400 ml-3 cursor-pointer lg:h-10 mobile:h-8 mobile:mt-1 lg:mt-0 mobile:pt-1 w-24  lg:pt-1.5 rounded-2xl pl-3 mobile:pr-2 lg:pr-0 flex"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    ><GoProjectRoadmap className="mt-1 mr-1"/>
                        <p className="lg:flex mobile:hidden"> Project</p>
                    </div>
                    <div
                        className="bg-black hover:bg-rose-400 ml-3 cursor-pointer h-10 w-24 pt-1.5 rounded-2xl pl-5 lg:flex mobile:hidden"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    ><IoIosContact className="mt-1 mr-1"/>
                        <p className=""> Contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
