import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { id, title, abstract, imagePath, director } = data;

    return (
        <article className="card">
            <img src={imagePath} alt={title} className="w-50 mx-auto" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Get more info</Link>
            </div>
        </article>
    )
}

export default MovieCard;