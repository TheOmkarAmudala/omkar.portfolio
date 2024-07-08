import React from "react";
import Logo from "./logo.png"

function Navbar() {
    return(
        <div>
            <div className="w-[70%] bg-black h-[60px] border flex rounded-full ml-[15%] text-white text-l mt-8">
               <div className="flex w-[40%] justify-between mt-2">
                   <div className="  transition-transform duration-1000 bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-7 ">Home</div>
                   <div className="bg-black hover:bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-7 ">About</div>
                   <div className="bg-black hover:bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-7 ">Links</div>
               </div>
                <div className="w-[10%] ml-[100px]">
                      <div className="flex">
                          <div className="w-10 h-10 mt-2 bg-rose-800 border-none rounded-full"><img src={Logo} /> </div>
                          <div className="mt-3"></div>
                      </div>
                </div>
                <div className="flex w-[40%] justify-around mt-2">
                    <div className="bg-black hover:bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-5 ">Resume</div>
                    <div className="bg-black hover:bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-5 ">Project</div>
                    <div className="bg-black hover:bg-rose-400 ml-3 h-10 w-24 pt-1.5 rounded-2xl pl-5 ">Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;