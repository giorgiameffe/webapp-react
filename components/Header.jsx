import { NavLink } from "react-router-dom";

function Header() {

    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li>
                    <NavLink to='/'>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to='/movies'>Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;