import { useState } from "react";

function ReviewForm() {

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: 1
    });


    function handleFormData(e) {

        const { name, value } = e.target;

        let currentValue = value;

        if (name === "vote") {
            currentValue = parseInt(value);
        }

        setFormData((formData) => ({
            ...formData,
            [name]: value
        }))
    }

    return (

        <div className="card">
            <div className="card-header">
                Write a review for this movie
            </div>
            <div className="card-body">

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
                <button type="button" className="btn btn-primary">Add review</button>

            </div>
        </div>
    )
}

export default ReviewForm;