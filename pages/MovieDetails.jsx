import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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

    return (

        <article id="movie">
            <header>
                {movie ? <div>
                    <h1>{movie.title}</h1>
                    <h2>Directed by {movie.director}</h2>
                    <p>{movie.abstract}</p>
                </div> : <div>No movie found</div>}
            </header>

            <hr />

            <section id="reviews">
                <header>
                    <h4>Reviews</h4>
                </header>
            </section>
        </article>
    )
}

export default MovieDetailsPage;