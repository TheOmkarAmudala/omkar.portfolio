import React from "react";
import pho2 from "./pho2.png"
import project from "./projecttwitter.png";


function Pageskill(){
    const data = [
        { skill: "React.js", bgColor: "bg-orange-500" },
        { skill: "Node.js", bgColor: "bg-orange-700" },
        { skill: "MongoDB", bgColor: "bg-orange-500" },
        { skill: "Express.js", bgColor: "bg-orange-700" },
        { skill: "JavaScript", bgColor: "bg-orange-500" },
        { skill: "HTML", bgColor: "bg-orange-700" },
        { skill: "CSS", bgColor: "bg-orange-500" },
        { skill: "Git", bgColor: "bg-orange-700" },
        { skill: "DSA", bgColor: "bg-orange-500" },
        { skill: "Redux", bgColor: "bg-orange-700" },
        { skill: "Axios", bgColor: "bg-orange-500" },
        { skill: "Figma", bgColor: "bg-orange-700" },
        { skill: "Canva", bgColor: "bg-orange-500" },
        { skill: "Java", bgColor: "bg-orange-700" },
        { skill: "OOPs", bgColor: "bg-orange-500" }
    ];

    const chunkedData = [];
    for (let i = 0; i < data.length; i += 4) {
        chunkedData.push(data.slice(i, i + 4));
    }


    return (
        <div className=" w-[100vw] h-[50vh] border-orange-300 border-opacity-30 border-[10px] font-urbanist">
            <div className="mobile:text-4xl lg:text-6xl text-black flex gap-2 justify-center  mt-[3%] ">Skill set <p className="text-orange-500">I possessed</p></div>
            <div className="container flex w-[90vw] h-[90vh] mt-[7%] justify-around align-middle  lg:ml-[6%] mobile:ml-0 ">

                <div className="skills-container lg:flex gap-2 w-[70vw] mobile:hidden  ">
                    {data.map((item, index) => (
                        <div key={index} className="skill-card grid grid-cols-4">
                            <div
                                className={`lg:w-[100px]  flex justify-center pt-2 align-middle transition-transform duration-100 ease-in-out hover:scale-110 cursor-pointer bg-orange-500 rounded-3xl lg:h-[40px] ${item.bgColor}`}>
                                {item.skill}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:hidden mobile:inline mt-9 ">
                    {chunkedData.map((chunk, index) => (
                        <div key={index} className="flex">
                            {chunk.map((item, idx) => (
                                <div key={idx} className={`p-2 mb-2 ml-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointe ${item.bgColor}`}>
                                    {item.skill}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pageskill;
