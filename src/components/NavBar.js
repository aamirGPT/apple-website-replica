import React from "react";
import "../css/NavBar.css";
import { useState, useEffect } from "react";
import applelogo from "../assets/images/applelogo.png";
import searchimg from "../assets/images/search.png";
import bagimag from "../assets/images/bag.png";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 44;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`NavBar ${scrolled ? "scrolled" : ""}`}>
            <div className="NavList">
                <img src={applelogo} alt="logo" />
                <div className="NavListStore">Store</div>
                <div className="NavListMac">Mac</div>
                <div className="NavListiPad">iPad</div>
                <div className="NavListiPhone">iPhone</div>
                <div className="NavListWatch">Watch</div>
                <div className="NavListAirPods">AirPods</div>
                <div className="NavListTV&Home">TV & Home</div>
                <div className="NavListEntertainment">Entertainment</div>
                <div className="NavListAccessories">Accessories</div>
                <div className="NavListSupport">Support</div>
                <img src={searchimg} alt="search" />
                <img src={bagimag} alt="bag" />
            </div>
        </div>
    );
};

export default NavBar;
