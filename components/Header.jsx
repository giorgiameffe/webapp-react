import { NavLink } from "react-router-dom";

function Header() {

    return (

        <header className="bg-info py-3 mb-5">
            <nav className="container d-flex justify-content-between align-items-center">
                <div className="logo">Logo</div>
                <ul className="d-flex align-items-center list-unstyled gap-5 text-decoration-none">
                    <li>
                        <NavLink className="text-decoration-none text-dark" to='/'>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-dark" to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;