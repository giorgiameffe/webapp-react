import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

function MoviesPage() {

    const [movies, setMovies] = useState([]);

    function getMovies() {

        const url = 'http://127.0.0.1:3000';

        axios.get(`${url}/movies`)
            .then(response => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(getMovies, []);

    return (
        <>
            <h1>Movies</h1>
            <section className="raw">
                {movies.length ? movies.map(movie =>
                    <div className="col-4" key={movie.id}>
                        <MovieCard data={movie} />
                    </div>) : <div>No items found</div>}
            </section>
        </>
    )
}

export default MoviesPage;