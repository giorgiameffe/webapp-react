function ReviewCard({ data }) {

    const { text, vote, name } = data

    return (

        <div className="card mb-3">
            <div className="card-body">
                <p>{text}</p>
                <p>Vote: {vote}</p>
                <p>By {name}</p>
            </div>
        </div>
    )
}

export default ReviewCard;