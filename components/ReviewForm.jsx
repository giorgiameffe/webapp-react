function ReviewForm() {

    return (

        <div className="card">
            <div className="card-header">
                Write a review for this movie
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="review-name" className="form-label">Your name</label>
                    <input type="text" className="form-control" id="review-name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="review-text" className="form-label">Review text</label>
                    <textarea className="form-control" id="review-text" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="review-vote" className="form-label">Your vote</label>
                    <input type="number" min={1} max={5} className="form-control" id="review-vote" />
                </div>
                <button type="button" className="btn btn-primary">Add review</button>
            </div>
        </div>
    )
}

export default ReviewForm;