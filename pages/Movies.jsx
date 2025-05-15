import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";


function MoviesPage() {

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('');

    const { setIsLoading } = useContext(GlobalContext);


    function getMovies() {

        setIsLoading(true);
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
            .finally(() => setIsLoading(false))
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
                    <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
                        <MovieCard data={movie} />
                    </div>) : <div>No items found</div>}
            </section>
        </>
    )
}

export default MoviesPage;