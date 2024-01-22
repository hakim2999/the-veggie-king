import React from "react";
import Heroimg from "./heroming";
import Endimg from "../../assets/images/hero-section-food.png";
import Icon from "../../assets/icons/check-menu-icon.svg";
import { HashLink as Link } from "react-router-hash-link";
function Land()
{
    return(
        <section id="landing">
            <div className="h-[90vh] flex relative">
                <div className="absolute md:w-[500px] w-[80px] flex flex-col gap-[30px] justify-start top-[28%] left-[9%]">
                    <h1 className=" font-[800] md:text-[4rem] text-[2rem]">Healthy & fresh Food for you</h1>
                    <p className=" w-[300px] md:text-[1.3rem] text-[0.8rem] leading-[2rem]">Created for lovers of healthy, delicious and non-obvious food.</p>
                    <Link to='#menu' smooth className="flex items-center bg-[#fb8c00]  md:w-[10rem] w-[6rem] h-[40px] md:p-[10px]  p-[5px] rounded-[10px] md:text-[18px] text-[9px] font-[300] no-underline hover:bg-[#fb8a00ce]">Check Menu <img className=" pl-[8px] " src={Icon} alt="icon" /> 
                    </Link>
                </div>
                <div className="absolute top-[20%] left-[49%] z-[1]"> <Heroimg /> </div>
                <div className="md:w-[150px] w-[50px] md:h-[150px] h-[50px] absolute bottom-0"><img src={Endimg} alt="end"/> </div> 
                <div className="absolute right-0  w-[70px] md:w-[400px] h-[90vh] bg-[rgb(0,128,0)] z-[-1]"></div>
            </div>
        </section>
    );
}

export default Land;