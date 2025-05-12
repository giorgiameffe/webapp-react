import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";


function MoviesPage() {

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('');


    function getMovies() {

        const url = 'http://127.0.0.1:3000/movies';

        axios.get(url, {
            params: {
                search
            }
        })
            .then(response => {
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    }

    function searchMovies(e) {

        e.preventDefault();
        getMovies();
    }

    useEffect(getMovies, [])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-4">Movies</h1>
                <form onSubmit={searchMovies} className="row g-3">
                    <div className="col-auto">
                        <label className="visually-hidden">Search</label>
                        <input type="text" className="form-control font-bold" placeholder="Search movie"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Search movie</button>
                    </div>
                </form>

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