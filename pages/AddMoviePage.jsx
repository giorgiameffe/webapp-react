import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMoviePage() {


    //Variabile che contiene i dati da inserire
    const initialValues = {

        title: "",
        director: "",
        genre: "",
        release_year: "",
        abstract: "",
        image: null,
    };

    const [formData, setFormData] = useState(initialValues);
    const navigate = useNavigate();

    function handleFormData(e) {

        const { name, value, files } = e.target;
        let currentValue = value;

        if (name === "image") {
            currentValue = files[0];
        } else {
            currentValue = value;
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }));
    }

    function handleSubmit(e) {

        e.preventDefault();
        console.log("Film creato");
        console.log(formData);

        const url = `http://localhost:3000/movies`;

        axios
            .post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(() => {
                navigate("/");
                setFormData(initialValues);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (

        <div className="seats-background d-flex">
            <article className="container">
                <h1 className="form-title mt-5 text-center">Share a new movie</h1>
                <section id="add-movie" className="d-flex justify-content-center mt-5">

                    <form onSubmit={handleSubmit} className="form-data p-4 mb-5">

                        {/* Titolo */}
                        <label htmlFor="movie-title" className="form-label fw-bold">Title</label>
                        <input
                            type="text"
                            id="movie-title"
                            name="title"
                            value={formData.title}
                            onChange={handleFormData}
                            placeholder="Enter movie title"
                            className="form-control fst-italic"
                        />

                        {/* Regista */}
                        <div className="mb-3">
                            <label htmlFor="movie-director" className="form-label fw-bold">Director</label>
                            <input
                                type="text"
                                id="movie-director"
                                name="director"
                                placeholder="Enter movie director"
                                className="form-control fst-italic"
                            />
                        </div>

                        {/* Genere */}
                        <div className="mb-4">
                            <label htmlFor="movie-genre" className="form-label fw-bold">Genre</label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                value={formData.genre}
                                onChange={handleFormData}
                                placeholder="Enter movie genre"
                                className="form-control fst-italic"
                            />
                        </div>

                        {/* Anno di produzione */}
                        <div className="mb-4">
                            <label htmlFor="movie-release-year" className="form-label fw-bold">Year of production</label>
                            <input
                                type="number"
                                id="movie-release-year"
                                name="release_year"
                                placeholder="Enter movie year"
                                value={formData.release_year}
                                onChange={handleFormData}
                                min={1900}
                                max={2099}
                                className="form-control fst-italic"
                            />
                        </div>

                        {/* Descrizione */}
                        <div className="mb-4">
                            <label htmlFor="abstract" className="form-label fw-bold">Movie description</label>
                            <textarea
                                id="abstract"
                                name="abstract"
                                value={formData.abstract}
                                onChange={handleFormData}
                                placeholder="Enter a movie description"
                                className="form-control fst-italic"
                            >
                            </textarea>
                        </div>

                        {/* Immagine  */}
                        <div className="mb-4">
                            <label htmlFor="image" className="form-label fw-bold">Upload a movie image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleFormData}
                                accept="image/*"
                                placeholder="Select an image file"
                                className="form-control fst-italic"
                            />
                        </div>

                        {/* Bottone per aggiunta del film */}
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-movies p2 pe-5 ps-5">Add movie</button>
                        </div>

                    </form>
                </section>
            </article>
        </div>

    )
}

export default AddMoviePage;