import React,{useState} from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/icons/logo.svg";
import'./Header.css';
function Header() {
    const[navMenu, setNavMenu] = useState(false)
return (
    <section>
    <div  >
        <nav  className="flex justify-between items-center shadow-[8px_3px_12px_rgb(128,128,128)] h-[5rem] z-[1]">
            <Link to='/' className=" m-[1rem] no-underline"><img src={logo} alt="logo" /></Link>
            <div className="nav-menu" onClick={() =>{
                        setNavMenu(!navMenu);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            <ul className={`flex mr-[2rem] ${navMenu ? 'open' : ''}`}>
                <li className="list-none "><Link to='#about' smooth className="nav-item" >ABOUT US</Link>{" "}</li>
                <li className="list-none"><Link to='#menu' smooth className="nav-item">MENU</Link>{" "}</li>
                <li className="list-none"><Link to='#contact' smooth className="nav-item">CONTACT</Link>{" "}</li>
            </ul>
        </nav>
    </div>
</section>

);

}


export default Header;