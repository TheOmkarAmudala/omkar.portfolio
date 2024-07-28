import React from "react";
import project from "./project.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo from "./photo.png"
import ph from "./img4.png"
import p from "./img5.png"

function Page3() {
    const data = [
        { img: project ,link: "https://www.linkedin.com/posts/omkar-amudala-781b36286_this-project-is-a-clone-of-the-popular-x-activity-7205117371294904321-HFMa?utm_source=share&utm_medium=member_desktop"},
        { img: ph ,link:"https://github.com/TheOmkarAmudala/cloneport.git"},
        { img: p,link:"https://github.com/TheOmkarAmudala/Omkar-s---Netflix-Clone.git" },

    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        className: "space-x-16 p-4 scrollbar-hide  "
    };

    return (
        <div  className="pag3 h-[90vh] mtstary-[3%] overflow-hidden  cursor-pointer">
            <div className="text-orange-500 lg:mt-[4%] mobile:mt-0 font-urbanist mobile:w-[1000px] lg:w-[100vw] lg:text-6xl mobile:text-4xl ml-[10%] lg:flex ">
                <div>
                    Let's Have a look at <p className="text-gray-600">Projects</p>
                </div>
                <div className="text-2xl w-[100px] h-[40px] lg:block mobile:relative mobile:top-[70vh] lg:top-0  bg-orange-500 text-white border rounded-full mobile:ml-[20%] lg:ml-[40%]">
                    <p className="ml-3 mt-1">See all</p>
                </div>
            </div>
            <Slider {...settings}  >
                {data.map((item, index) => (
                    <div key={index} className="w-[300px] border rounded-3xl  lg:mt-[10%] mobile:mt-[20vh] ">
                        <a href={item.link || "#"} target="_blank" rel="noopener noreferrer"> <img src={item.img}
                                                                                                   alt={`Project ${index + 1}`}/></a>

                    </div>
                    ))}
            </Slider>
        </div>
);
}

export default Page3;
