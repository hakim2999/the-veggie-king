import React from "react";
import ic1 from "../../assets/icons/time-icon.svg";
import ic2 from "../../assets/icons/map-icon.svg";
import ic3 from "../../assets/icons/phone-icon.svg";

function Contact()
{
    return(
        <section id="contact">
            <div className="h-[60vh] flex flex-col">
                <div className="flex flex-col items-center">
                    <h6 className="text-[#fb8c00] text-[20px] font-[300]">Contact</h6>
                    <p className="text-[35px] font-[500] mt-[20px] mb-[55px]">We’re waiting for you!</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-[50px]">
                    <div className="cnt1 h-[200px] w-[350px] rounded-[96px] flex flex-col items-center justify-center gap-[20px] shadow">
                    <img className="scale-[2]" src={ic1} alt="time"></img>
                        <h3 className="font-[500] text-[25px]">Today 12 pm - 9 pm</h3>
                        <p className="text-[19px] text-gray-500">Find Us</p>
                    </div>
                    <div className="cnt2 h-[200px] w-[350px] rounded-[96px] flex flex-col items-center justify-center gap-[20px] shadow">
                    <img className="scale-[2]" src={ic2} alt="location"></img>
                        <h3 className="font-[500] text-[25px]">3883 Rupert St, Vancouver</h3>
                        <p className="text-[19px] text-gray-500">Working Hours</p>
                    </div>
                    <div className="cnt3 h-[200px] w-[350px] rounded-[96px] flex flex-col items-center justify-center gap-[20px] shadow">
                    <img className="scale-[2]" src={ic3} alt="phone"></img>
                        <h3 className="font-[500] text-[25px]">(604) 569-2198</h3>
                        <p className="text-[19px] text-gray-500">Call To Us</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;