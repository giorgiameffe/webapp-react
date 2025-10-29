import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ReviewForm({ movieId, refreshMovie }) {

    const initialValues = {

        name: '',
        text: '',
        vote: 1
    }

    const [formData, setFormData] = useState(initialValues)

    function handleFormData(e) {
        const { name, value } = e.target;
        let currentValue = value;

        if (name === "vote") {
            // Se l’utente cancella il campo, resta il valore precedente
            currentValue = value === "" ? formData.vote : parseInt(value);
            if (isNaN(currentValue)) currentValue = 1; // fallback se qualcosa va storto
        }

        setFormData(prev => ({
            ...prev,
            [name]: currentValue,
        }));
    }


    function submitData(e) {
        e.preventDefault();

        const url = 'http://127.0.0.1:3000/movies';

        axios.post(`${url}/${movieId}/reviews`, formData)
            .then(response => {
                refreshMovie()
                setFormData(initialValues)
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <div className="review-form card p-3 mb-4 rounded-4">
                <h5 className="card-header fw-bold">
                    Write a review for this movie
                </h5>
                <div className="card-body rounded-3">
                    <form onSubmit={submitData}>

                        <div className="mb-3">
                            <label htmlFor="review-name" className="form-label fw-bold">Your name</label>
                            <input
                                type="text"
                                className="form-control fst-italic"
                                id="review-name"
                                placeholder="Enter your name"
                                value={formData.name}
                                name="name"
                                onChange={handleFormData}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review-text" className="form-label fw-bold">Review text</label>
                            <textarea
                                className="form-control fst-italic"
                                id="review-text" rows="3"
                                value={formData.text} name="text"
                                onChange={handleFormData}
                                placeholder="Write here">
                            </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review-vote" className="form-label fw-bold">Your vote</label>
                            <input
                                type="number"
                                min={1}
                                max={5}
                                className="form-control"
                                id="review-vote"
                                value={formData.vote || 1}
                                name="vote"
                                onChange={handleFormData}
                            />
                        </div>

                        <div className="d-flex justify-content-center pt-3">
                            <button type="submit" className="btn btn-movies p-2 pe-5 ps-5">Add review</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex">
                <Link to={'/movies'} className="btn btn-movies p-2 pe-4 ps-4 mb-5 ms-auto">Go back to movies</Link>
            </div>
        </>
    )
}

export default ReviewForm;