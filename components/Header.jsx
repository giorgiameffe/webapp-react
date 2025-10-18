import logo from "../src/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {

        setIsOpen(prev => !prev);
    }

    return (

        <header className="header-main d-flex align-items-center justify-content-between pe-4">

            <Link to="/">
                <img src={logo} alt="logo" className="logo img-fluid ms-4" />
            </Link>

            <div>
                {/* Bottone hamburger */}
                <button
                    className="hamburger-menu"
                    aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon icon={faBars} className="close-menu" />
                </button>

                {/* Overlay mobile */}
                <div className="desktop-menu">
                    <Navbar className="desktop-nav me-4" />
                </div>

                {isOpen && (
                    <div className="mobile-menu-overlay">
                        <button className="close-menu" onClick={handleToggle}>
                            <FontAwesomeIcon icon={faTimes} className="x-icon" />
                        </button>
                        <Navbar className="mobile-nav" onToggle={handleToggle} />
                    </div>
                )}

            </div>
        </header>

    )
}

export default Header;