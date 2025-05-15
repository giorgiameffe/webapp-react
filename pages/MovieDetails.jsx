import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";

import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function MovieDetailsPage() {

    const { id } = useParams();

    const url = 'http://127.0.0.1:3000/movies';

    const [movie, setMovie] = useState({});

    const { setIsLoading } = useContext(GlobalContext);

    function getMovie() {

        setIsLoading(true);

        axios.get(`${url}/${id}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(getMovie, []);

    function renderReviews() {

        return movie.reviews?.map(review => <ReviewCard key={review.id} data={review} />)
    }

    return (

        <article id="movie">
            <header>
                {movie ?
                    <div className="container-movie-detail d-flex align-items-center p-3" >
                        <div className="img-container me-3">
                            <img src={movie.imagePath} alt={movie.title} className="w-100 rounded" />
                        </div>
                        <div className="">
                            <h1>{movie.title}</h1>
                            <h2 className="subtitle-movie-detail fst-italic">Directed by {movie.director}</h2>
                            <p>{movie.abstract}</p>
                        </div>
                    </div> : <div>No movie found</div>}
            </header>

            <hr />

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-4 fs-2">Reviews</h4>
                    <div className="fw-bold">
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