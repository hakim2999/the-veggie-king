import React from "react";
import gimg1 from "../../assets/images/gallery-photo-1.png";
import gimg2 from "../../assets/images/gallery-photo-2.png";
import gimg3 from "../../assets/images/gallery-photo-3.png";
import gimg4 from "../../assets/images/gallery-photo-4.png";
import gimg5 from "../../assets/images/gallery-photo-5.png";
import gimg6 from "../../assets/images/gallery-photo-6.png";


function Gallery()
{

    return(
        <section id="gallery">
            <div className="h-[100xh]">
                <div className="flex items-center justify-center text-[35px] mt-[9%] mb-[50px] font-[500]">
                    <h3>Good food = happy clients</h3>
                </div>
                <div className=" grid justify-evenly  md:grid-cols-3 grid-cols-2 grid-rows-3 md:grid-rows-2 overflow-hidden ">
                    <img className="w-[500px] h-[310px] opacity-[0.8] hover:opacity-100" src={gimg1}  alt="gallery1" />
                    <img className="w-[500px] h-[310px] opacity-[0.8] hover:opacity-100" src={gimg2} alt="gallery2" />
                    <img className="w-[500px] h-[310px] opacity-[0.8] hover:opacity-100" src={gimg3} alt="gallery3" />
                    <img className="w-[500px] h-[310px] opacity-[0.8] hover:opacity-100" src={gimg4} alt="gallery4" />
                    <img className="w-[500px] h-[310px] opacity-[0.8] hover:opacity-100" src={gimg5} alt="gallery5" />
                    <img className="w-[500px] h-[310px] opacity-[0.8] hover:opacity-100" src={gimg6} alt="gallery6" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;