import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faXTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from "../src/assets/logo.png"

function Footer() {

    return (
        <footer className="footer text-white p-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <figure className="d-flex justify-content-center">
                            <img src={logo} alt="logo" className="logo" />
                        </figure>
                    </div>
                </div>
                <div className="row">

                    {/* Link Utili - Sinistra su desktop, sotto a sinistra su mobile/tablet */}
                    <div className="col-6 col-lg-4 order-2 order-lg-0 text-center text-lg-start d-flex flex-column align-items-center">
                        <h5 className="fw-bold font-medieval">Link Utili</h5>
                        <ul className="list-unstyled d-flex flex-column align-items-center">
                            <li><NavLink className="text-decoration-none links" to="/">Home</NavLink></li>
                            <li><NavLink className="text-decoration-none links" to="/movies">Movies</NavLink></li>
                            <li><NavLink className="text-decoration-none links" to="/movies/new">Add movie</NavLink></li>
                            <li><NavLink className="text-decoration-none links">Contatti</NavLink></li>
                        </ul>
                    </div>

                    {/* Unisciti - Centrale su desktop, in alto su mobile/tablet */}
                    <div className="col-12 col-lg-4 order-0 order-lg-1 text-center mb-4 mb-lg-0">
                        <h4 className="mb-3 fw-bold yellow-color">Join our community of Movie Lovers!</h4>
                        <p className="fst-italic">Keep you informed about news and share your thoughts.</p>
                        <ul className="list-unstyled">
                            <li>Via della Querce, 24 – 00123 Rome, Italy</li>
                            <li>Tel: +39 06 1234 5678</li>
                        </ul>
                    </div>

                    {/* Social - Destra su desktop, sotto a destra su mobile/tablet */}
                    <div className="col-6 col-lg-4 order-3 order-lg-2 text-center text-lg-end d-flex flex-column align-items-center ">
                        <h5 className="fw-bold">Follow us</h5>
                        <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
                            <li>
                                <FontAwesomeIcon className="footer-socials x-icon" icon={faXTwitter} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="footer-socials ig-icon" icon={faInstagram} />
                            </li>
                            <li>
                                <FontAwesomeIcon className="footer-socials fb-icon" icon={faFacebookF} />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center mt-3 fst-italic">
                        <p>© 2025 CineCircle – All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;