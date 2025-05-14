import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";

function MovieDetailsPage() {

    const { id } = useParams();

    const url = 'http://127.0.0.1:3000/movies';

    const [movie, setMovie] = useState({});

    function getMovie() {
        axios.get(`${url}/${id}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err))
    }

    useEffect(getMovie, []);

    function renderReviews() {

        return movie.reviews?.map(review => <ReviewCard key={review.id} data={review} />)
    }

    return (

        <article id="movie">
            <header>
                {movie ?
                    <div>
                        <h1>{movie.title}</h1>
                        <h2>Directed by {movie.director}</h2>
                        <p>{movie.abstract}</p>
                    </div> : <div>No movie found</div>}
            </header>

            <hr />

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-4">Reviews</h4>
                    <div>
                        Average rating: <StarRating vote={movie.reviews_average} />
                    </div>
                </header>
                {movie.reviews?.length ? renderReviews() : <div>This movie hasn't reviews</div>}
            </section>

            <section id="add-reviews">
                <ReviewForm movieId={id} refreshMovie={getMovie} />
            </section>
        </article>
    )
}

export default MovieDetailsPage;