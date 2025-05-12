import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";


function MoviesPage() {

    const [movies, setMovies] = useState([]);

    function getMovies() {

        const url = 'http://127.0.0.1:3000/movies';

        axios.get(url)
            .then(response => {
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(getMovies, [])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-4">Movies</h1>
            </div>

            <section className="row gy-3">
                {movies.length ? movies.map(movie =>
                    <div className="col-4" key={movie.id}>
                        <MovieCard data={movie} />
                    </div>) : <div>No items found</div>}
            </section>
        </>
    )
}

export default MoviesPage;