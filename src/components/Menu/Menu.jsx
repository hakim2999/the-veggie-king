import React from "react";
import mimg1 from "../../assets/images/menu-section-chickpae-salad.png";
import mimg2 from "../../assets/images/menu-section-chickpae-wrap.png";
import mimg3 from "../../assets/images/menu-section-mighty-burger.png";
function Menu()
{
    const items = [{
        menuImg: mimg3,
        name: "Mighty Burger",
        detail: "Served with fries and drink"
    },
    {
        menuImg: mimg1,
        name: "Chickpae's salad",
        detail: "Served with fries and drink"
    },
    {
        menuImg: mimg2,
        name: "Chickpae's wrap",
        detail: "Served with fries and drink"
    }]
    return(
        <section id="menu">
            <div className="H-[90vh] flex flex-col items-center justify-center">
            <div className="pb-[50px] flex flex-col items-center justify-between">
                <h5 className=" text-[#fb8c00] font-[300] text-2xl mb-4">Menu</h5>
                <h3 className=" text-4xl font-[500]">Explore our best food</h3>
                <p className=" mt-7 font-[300]">Below you can see our best selling meals!</p>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
                <div className="h-[370px] w-[390px] flex flex-col rounded-bl-[10px] rounded-br-[10px] shadow hover:scale-[1.08] transition duration-[0.3s]">
                        <img src={items[0].menuImg} alt="menu1" />
                        <h3 className=" pt-5 pl-5 text-[28px] font-[400]">{items[0].name}</h3>
                          <p className=" pt-2 pl-5 text-xl font-[300]">{items[0].detail}</p>
                     </div>
                   <div className="h-[370px] w-[390px] flex flex-col rounded-bl-[10px] rounded-br-[10px] shadow hover:scale-[1.08] transition duration-[0.3s]">
                        <img src={items[1].menuImg} alt="menu2" />
                        <h3 className=" pt-5 pl-5 text-[28px] font-[400]">{items[1].name}</h3>
                        <p className=" pt-2 pl-5 text-xl font-[300]">{items[1].detail}</p>
                    </div>
                    <div className=" overflow-hidden h-[370px] w-[390px] flex flex-col rounded-bl-[10px] rounded-br-[10px] shadow hover:scale-[1.08] transition duration-[0.3s]">
                        <img src={items[2].menuImg} alt="menu3" />
                        <h3 className=" pt-5 pl-5 text-[28px] font-[400]">{items[2].name}</h3>
                        <p className=" pt-2 pl-5 text-xl font-[300]">{items[2].detail}</p>
                    </div>
                
            </div>
            </div>
        </section>
    );
}

export default Menu;