import { NavLink } from "react-router-dom";

function Header() {

    return (

        <header className="container-nav py-4">
            <nav className="container d-flex justify-content-between">
                <div className="text-white fw-bold">Logo</div>
                <ul className="d-flex list-unstyled gap-5">
                    <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to='/'>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;