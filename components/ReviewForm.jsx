import { useState } from "react";
import axios from "axios";

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
            currentValue = parseInt(value);
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }))
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

        <div className="card">
            <div className="card-header">
                Write a review for this movie
            </div>
            <div className="card-body">
                <form onSubmit={submitData}>
                    <div className="mb-3">
                        <label htmlFor="review-name" className="form-label">Your name</label>
                        <input type="text" className="form-control" id="review-name" placeholder="Enter your name" value={formData.name} name="name" onChange={handleFormData} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label">Review text</label>
                        <textarea className="form-control" id="review-text" rows="3" value={formData.text} name="text" onChange={handleFormData}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-vote" className="form-label">Your vote</label>
                        <input type="number" min={1} max={5} className="form-control" id="review-vote" value={formData.vote} name="vote" onChange={handleFormData} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add review</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm;