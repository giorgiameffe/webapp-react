import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div className="not-found d-flex justify-content-center align-items-center">
            <div className="not-found-container fs-5 d-flex align-items-center justify-content-center flex-column text-white p-4 rounded-4">
                <h3 className="fw-bold">404 Not Found</h3>
                <p className="pb-2 fst-italic">Sorry but the page you are looking for is not avalaible.</p>
                <Link to={'/movies'} className="btn btn-movies p-2 pe-4 ps-4 text-dark">Click here</Link>
            </div>
        </div>
    )
}

export default NotFound;