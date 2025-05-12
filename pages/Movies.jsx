import MovieCard from "../components/MovieCard";

function MoviesPage() {

    return (
        <>
            <h1>Movies</h1>
            <section className="raw">
                <div className="col-4">
                    <MovieCard />
                </div>
            </section>
        </>
    )
}

export default MoviesPage;