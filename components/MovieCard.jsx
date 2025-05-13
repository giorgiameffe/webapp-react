import { Link } from "react-router-dom";

function MovieCard({ data }) {

    const { id, title, abstract, imagePath, director, reviews_vote } = data;

    const reviewsVote = parseFloat(reviews_vote)
    // console.log(reviewsVote);

    return (
        <article className="card container">
            <img src={imagePath} alt={title} className="w-50 mx-auto rounded" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p>Reviews average: {reviewsVote}</p>
                <p className="card-text fst-italic">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Get more info</Link>
            </div>
        </article>
    )
}

export default MovieCard;