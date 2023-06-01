'use client'
import { useEffect } from "react";

const HeaderSticky = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const headerSticky = document.querySelector(".header-sticky");
            if (scroll < 245) {
                headerSticky.classList.remove("sticky-bar");
            } else {
                headerSticky.classList.add("sticky-bar");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
};

export default function Header() {
    return (
        <header className="header-sticky">
            <div className="section header">
                <div className="c">
                    <div className="header">
                        <div className="header_left">
                            <a href="/" aria-current="page" className="logo w-inline-block w--current" />
                            <div className="nav-links">
                                <a href="#features">Caracteristicas</a>
                                <a href="#plans">Planes</a>
                                <a href="#reviews">Reviews</a>
                                <a href="#reviews">
                                    Soporte
                                    <svg
                                        height="7"
                                        viewBox="0 0 6 6"
                                        width="7"
                                        className="external-arrow"
                                    >
                                        <path
                                            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                                            fill="var(--accents-3)"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="header_right">
                            <div className="vertical-divider" />
                            <a href="" className="nav-link">Documentos</a>
                            <button className="btn-custom bg-dark rounded text-white">
                                Panel de control
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section header mobile">
                <div className="c">
                    <div className="header mobile">
                        <div className="header_left">
                            <a href="" aria-current="page" className="logo w-inline-block w--current"></a>
                        </div>
                        <div className="header_right">
                            <div className="hamburger-icon">
                                <div className="line rotate-45"></div>
                                <div className="line rotate-min45"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderSticky />
        </header>
    );
};

