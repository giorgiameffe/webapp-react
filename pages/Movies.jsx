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
        <div className="movies-page">
            <div className="container position-relative py-5 content-wrapper">
                <form onSubmit={searchMovies} className="d-flex justify-content-center mb-5 search-container">
                    <div className="d-flex search-bar-wrapper">
                        <input
                            type="text"
                            className="form-control movie-search-input p-2 pe-3 ps-3 me-3" // Nuova classe
                            placeholder="Write your movie"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button type="submit" className="btn btn-movies p-2 pe-3 ps-3">Search</button>
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