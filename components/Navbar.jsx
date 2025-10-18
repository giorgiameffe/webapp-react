import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faFilm } from "@fortawesome/free-solid-svg-icons";

function Navbar({ onToggle, className }) {
    return (
        <nav className={className}>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" onClick={onToggle} className="text-decoration-none links playfair fw-bold">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" onClick={onToggle} className="text-decoration-none links playfair fw-bold">
                        <FontAwesomeIcon icon={faFilm} /> Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies/new" onClick={onToggle} className="text-decoration-none links playfair fw-bold">
                        <FontAwesomeIcon icon={faPlus} /> Add new movie
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;