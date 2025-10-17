import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function MovieCard({ data }) {

    const { id, title, abstract, imagePath, director, reviews_vote, slug } = data;

    return (

        <article className="card container movie-card h-100 d-flex flex-column">
            <img src={imagePath} alt={title} className="w-50 mx-auto mt-3 rounded" />
            <div className="card-body text-center d-flex flex-column flex-grow-1">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p>Average rating: <StarRating vote={reviews_vote} /></p>
                <p className="card-text fst-italic flex-grow-1">{abstract}</p>
                <div className="mt-auto">
                    <Link to={`/movies/${slug}`} className="btn btn-movies p-2 text-dark">Get more info</Link>
                </div>
            </div>
        </article>
    )
}

export default MovieCard;