// import React from 'react';
import logo from "../../assets/icons/logo.svg";
import twitter from "../../assets/icons/twitter-icon.svg";
import facebook from "../../assets/icons/facebook-icon.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import { HashLink as Link } from "react-router-hash-link";

function Footer(){
    return(
        <div className=' h-[30vh] bg-[#e0e0e0] flex relative'>
            <footer>
            <div className="items-center gap-[80px] flex mt-[15px] ml-[70px] ">
                <img src={logo} alt="footer" />
                <Link to='#about' smooth className="nav-item" >ABOUT US</Link> 
                <Link to='#menu' smooth className="nav-item" >MENU</Link> 
                <Link to='#contact' smooth className="nav-item" >CONTACT</Link>
                <div className="flex flex-col w-[460px] gap-[20px]">
                    <p className=' text-gray-500 text-lg font-normal'>Stay up to date with our new openings, upcoming events, seasonal specials and promotions
                    . Check our socials</p>
                    <div className="flex gap-[20px]">
                        <a className='no-underline text-black font-medium hover:opacity-40' href="https://twitter.com/home"><img className='hover:opacity-70' src={twitter} alt="twitter" /> </a>
                        <a className='no-underline text-black font-medium hover:opacity-40' href="https://www.facebook.com/"><img className='hover:opacity-70' src={facebook} alt="facebook" /> </a>
                        <a className='no-underline text-black font-medium hover:opacity-40' href="https://www.instagram.com/"><img className='hover:opacity-70' src={instagram} alt="instagram" /> </a>
                    </div>
                </div> 
            </div>
            <hr className='w-[100%] absolute bottom-[30%] bg-gray-500	'></hr>
            <p className="absolute bottom-[0] left-[40%] mb-[2%] text-gray-500">© 2023 The Veggie King</p>
            </footer>
        </div>
    );
}
export default Footer;