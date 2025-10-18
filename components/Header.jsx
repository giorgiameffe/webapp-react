import { NavLink } from "react-router-dom";
import logo from "../src/assets/logo.png";
import { faHome } from "@fortawesome/free-regular-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {

    return (

        <header className="header-main d-flex align-items-center justify-content-between pe-4">
            <img src={logo} alt="logo" className="logo img-fluid" />
            <nav className="navbar navbar-expand-lg">
                <ul className="d-flex align-items-center list-unstyled gap-4 mb-0">
                    <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to='/'>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to='/movies'>
                            <FontAwesomeIcon icon={faFilm} /> Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to='/movies/new'>
                            <FontAwesomeIcon icon={faPlus} /> Add new movie
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;