import React from "react";
import "../css/NavBar.css";
import { useState, useEffect } from "react";
import applelogo from "../assets/images/applelogo.png";
import searchimg from "../assets/images/search.png";
import bagimag from "../assets/images/bag.png";
import hamburgerIcon from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 830);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isStoreHovered, setStoreHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 44;
            setScrolled(isScrolled);
        };
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 830);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`NavBar ${scrolled ? "scrolled" : ""}`}>
            <div className="NavList">
                <img className="applelogo" src={applelogo} alt="logo" />
                <div
                    className="NavListStore"
                    onMouseEnter={() => setStoreHovered(true)}
                    onMouseLeave={() => setStoreHovered(false)}
                >
                    Store
                </div>
                {isStoreHovered && (
                    <div className="HiddenContent">
                        Store
                    </div>
                )}
                <div className="NavListMac">Mac</div>
                <div className="NavListiPad">iPad</div>
                <div className="NavListiPhone">iPhone</div>
                <div className="NavListWatch">Watch</div>
                <div className="NavListAirPods">AirPods</div>
                <div className="NavListTVandHome">TV & Home</div>
                <div className="NavListEntertainment">Entertainment</div>
                <div className="NavListAccessories">Accessories</div>
                <div className="NavListSupport">Support</div>
                {isSmallScreen ? (
                    <>
                        <div className="NavListIcons">
                            <img
                                className="NLIsearch"
                                src={searchimg}
                                alt="search"
                            />
                            <img className="NLIbag" src={bagimag} alt="bag" />
                            <img
                                src={hamburgerIcon}
                                alt="hamburger-menu"
                                className={`HamburgerIcon`}
                                onClick={toggleMenu}
                            />
                            {isMenuOpen && (
                                <div
                                    className={`MobileMenu ${
                                        isMenuOpen ? "open" : ""
                                    }`}
                                >
                                    <div
                                        className="MenuItem closeButton"
                                        onClick={closeMenu}
                                    >
                                        <img src={close} alt="Close" />
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        Store
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        Mac
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        iPad
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        iPhone
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        Watch
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        AirPods
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        TV & Home
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        Entertainment
                                    </div>
                                    <div
                                        className="MenuItem"
                                        onClick={closeMenu}
                                    >
                                        Accessories
                                    </div>
                                    <div
                                        className="MenuItem MISupport"
                                        onClick={closeMenu}
                                    >
                                        Support
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="NavListStore">Store</div>
                        <div className="NavListIcons">
                            <img
                                className="NLIsearch"
                                src={searchimg}
                                alt="search"
                            />
                            <img className="NLIbag" src={bagimag} alt="bag" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
