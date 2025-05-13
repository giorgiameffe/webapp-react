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
        <>
            <div>Movie Details</div>

        </>
    )
}

export default MovieDetailsPage;