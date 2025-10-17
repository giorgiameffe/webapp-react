import { Link } from "react-router-dom";

function Homepage() {

    return (

        <div className="home-container d-flex flex-column align-items-center justify-content-center overlay">
            <div className="overlay-content">
                <h1>Every movie has a story.</h1>
                <h2>Tell yours too.</h2>
                <p className="community-text pt-2"><em>Join a community of movie lovers. Share your thoughts, reviews, and discover new films together.</em></p>
                <div className="pt-3">
                    <Link to={'/movies'} className="btn btn-movies p-2 pe-4 ps-4 text-dark">Explore our movies</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
