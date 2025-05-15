import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function MovieCard({ data }) {

    const { id, title, abstract, imagePath, director, reviews_vote, slug } = data;

    return (
        <article className="card container">
            <img src={imagePath} alt={title} className="w-50 mx-auto rounded" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p>Average rating: <StarRating vote={reviews_vote} /></p>
                <p className="card-text fst-italic">{abstract}</p>
                <Link to={`/movies/${slug}`} className="btn btn-primary">Get more info</Link>
            </div>
        </article>
    )
}

export default MovieCard;