import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const { setIsLoading } = useContext(GlobalContext);

    function getMovies() {
        setIsLoading(true);
        axios.get('http://127.0.0.1:3000/movies', { params: { search } })
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
    }

    useEffect(getMovies, []);

    return (

        <div className="seats-background movies-page">
            <div className="container position-relative py-5 content-wrapper">
                <form onSubmit={searchMovies} className="d-flex mb-5 search-container container">
                    <div className="d-flex justify-content-between w-100 align-items-center">

                        {/* Sinistra: input + bottone */}
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control movie-search-input p-2 pe-3 ps-3 me-2"
                                placeholder="Write your movie"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button type="submit" className="btn btn-movies pe-4 ps-4">
                                Search
                            </button>
                        </div>

                        {/* Destra: link */}
                        <Link
                            to="/movies/new"
                            className="btn btn-movies p-2 pe-4 ps-4"
                            alt="Aggiungi un nuovo film"
                        >
                            Add new movie
                        </Link>
                    </div>
                </form>


                <section className="row g-3">
                    {movies.length ? movies.map(movie => (
                        <div className="col-md-4 d-flex aling-items-stretch" key={movie.id}>
                            <MovieCard data={movie} />
                        </div>
                    )) : <div className="text-white">No items found</div>}
                </section>

            </div>
        </div>
    );
}

export default MoviesPage;