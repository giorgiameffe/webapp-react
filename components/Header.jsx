import { NavLink } from "react-router-dom";

function Header() {

    return (

        <header className="bg-info py-3 mb-5">
            <nav className="container d-flex justify-content-between align-items-center">
                <div className="text-white">Logo</div>
                <ul className="d-flex align-items-center list-unstyled gap-5">
                    <li>
                        <NavLink className="text-decoration-none text-white" to='/'>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-white" to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;