import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div className="not-found fs-5 d-flex align-items-center mt-5 ">
            <div className="fw-bold">404 Not Found</div>
            <div className="pb-2">Sorry but the page you are looking for is not avalaible.</div>
            <Link to={'/movies'} className="btn btn-primary text-white">Click here</Link>
        </div>
    )
}

export default NotFound;