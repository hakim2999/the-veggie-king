import React from "react";
import abtimg from "../../assets/images/about-us-section-food.png";
 
function About()
{
    return(
        <section id="about">
            <div className="h-[90vh] relative flex">
            <div className=" absolute top-[10%] left-[-18px] bg-[green] md:h-[650px] h-[325px] md:w-[650px] w-[325px] rounded-[50%]"></div>
                <div className=" absolute top-[28%] left-[6%] z-[1]">
                    <img className="md:w-[100%] w-[50%] md:h-[100%] h-[50%]" src={abtimg} alt="aboutimg" />
                </div>
                <div className="absolute top-[45%] right-[14%] flex flex-col w-[400px] justify-start gap-4 scale-[1.3]">
                    <h5 className="text-[#fb8c00] text-[17px] font-[300]">About Us</h5>
                    <h2 className=" font-[500] text-[30px]">Few words about us </h2>
                    <p className=" font-[300x] leading-[25px] ">We are not ordinary food truck. We create a place overflowing with positive energy that it expresses important to us values. Get to know them specifically.</p>
                </div>
            </div>
        </section>
    );
}

export default About;