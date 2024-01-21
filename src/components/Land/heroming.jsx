import React,{useState,useEffect} from "react";
import img1 from "../../assets/images/hero-section-slide-food-1.png";
import img2 from "../../assets/images/hero-section-slide-food-2.png";
import img3 from "../../assets/images/hero-section-slide-food-3.png";
import img4 from "../../assets/images/hero-section-slide-food-4.png";

const images = [img1, img2, img3, img4];
 
function Heroimg()
{
    const [currentImg, setCurrentImg] = useState(null); 

        useEffect(()=>{
            const intervalId = setInterval(() => {
                setCurrentImg(images[Math.floor(Math.random()* images.length)]);
            }, 2000)
            return () => clearInterval(intervalId);
        })
        return (
            <div>
                <img className="md:w-[500] w-[250] md:h-[500] h-[250]" src={currentImg}   alt="hero" />
            </div>
        )
}

export default Heroimg;