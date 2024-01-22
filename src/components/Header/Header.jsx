import React,{useState} from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import'./Header.css';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
return (
    <section>
    <div  >
        <nav  className="flex flex-row justify-between items-center shadow-[8px_3px_12px_rgb(128,128,128)] h-[5rem] z-[1]">
            <Link to='/' className=" m-[1rem] no-underline"><img src={logo} alt="logo" /></Link>

            <ul className=" md:flex hidden mr-[2rem] ">
                   <li className="list-none "><Link to='#about' smooth className="nav-item" >ABOUT US</Link>{" "}</li>
                    <li className="list-none"><Link to='#menu' smooth className="nav-item">MENU</Link>{" "}</li>
                    <li className="list-none"><Link to='#contact' smooth className="nav-item">CONTACT</Link>{" "}</li>
            </ul>

            <button className="md:hidden block cursor-pointer bg-[transparent] text-2xl text-white pr-5"     
                onClick={toggleMobileMenu}
                type="button" 
                aria-label="Toggle Mobile Menu"
                role="button">
                    <img src={menuIcon} alt="menu icon" />
            </button>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
                <ul className=" flex flex-col mr-[2rem] ">
                    <li className="list-none "><Link to='#about' smooth className="nav-item" >ABOUT US</Link>{" "}</li>
                    <li className="list-none"><Link to='#menu' smooth className="nav-item">MENU</Link>{" "}</li>
                    <li className="list-none"><Link to='#contact' smooth className="nav-item">CONTACT</Link>{" "}</li>
                </ul>
            </div>
        </nav>
    </div>
</section>

);

}


export default Header;